import shell from 'shelljs'
import path from 'node:path'
import url from 'node:url'

import { getSubPackages } from '../../scripts/utils/helpers.js'

const IMPORT_ASSERT = { assert: { type: 'json' } }
const MODULE_TYPES = ['cjs', 'module']
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const pkgDir = path.join(__dirname, '..', '..', 'packages')

shell.cd(pkgDir)

for (const pkg of getSubPackages()) {
    const pkgJson = await import(path.join(pkgDir, pkg, 'package.json'), IMPORT_ASSERT)
    const pkgName = pkgJson.default.name

    for (const type of MODULE_TYPES) {
        console.log(`Validate ${pkgName} as ${type} package`)
        const code = type === 'cjs'
            ? `node -e 'const test = require("${pkgName}"); console.log(test)'`
            : `node --input-type=module -e 'import * as test from "${pkgName}"; console.log(test)'`
        const result = shell.exec(code)

        if (result.code !== 0) {
            throw new Error(`Validation failed! ${result}`)
        }
    }
}

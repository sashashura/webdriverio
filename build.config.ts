import { defineBuildConfig } from 'unbuild'
import { getSubPackages } from './scripts/utils/helpers'

export default defineBuildConfig({
    rollup: {
        cjsBridge: true
    },
    // If entries is not provided, will be automatically inferred from package.json
    entries: getSubPackages().map((name) => ({
        name,
        format: 'cjs',
        builder: 'mkdist',
        input: `./packages/${name}/src/`,
        outDir: `./packages/${name}/cjs/`
    })),

    replace: {
        "await import('./web.js')": "require('./web.js')",
    },

    // Generates .d.ts declaration file
    declaration: true
})

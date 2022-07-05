#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

import { getSubPackages } from './utils/helpers.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

await Promise.all(getSubPackages().map(
    (pkg) => fs.writeFile(
        path.join(__dirname, '..', 'packages', pkg, 'cjs', 'package.json'),
        JSON.stringify({ type: 'commonjs' }, null, 4)
    ))
)

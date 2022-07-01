import { defineConfig } from 'tsup'
import { getSubPackages } from './scripts/utils/helpers'

export default defineConfig(getSubPackages().map((pkgName) => ({
    name: pkgName,
    target: 'node16',
    entry: [`packages/${pkgName}/src/**/*.ts`],
    outDir: `packages/${pkgName}/build`,
    splitting: false,
    sourcemap: false,
    clean: false,
    bundle: false,
    dts: true,
    format: ['cjs', 'esm'],
    platform: 'node',
    tsconfig: './tsconfig.prod.json'
})))

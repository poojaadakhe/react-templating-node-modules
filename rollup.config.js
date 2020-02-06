
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import react from 'react';
import reactDom from 'react-dom';
import pkg from './package.json';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    postcss({
        extensions: [".css"],
        modules: false,
    }),
    replace({
        "process.env.NODE_ENV": JSON.stringify("production")
    }),
    commonjs({
        include: "node_modules/**",
        namedExports: {
            "node_modules/react-is/index.js": [
                "isValidElementType",
                "isContextConsumer"
            ],
            "node_modules/redux-dynamic-modules/lib/index.js": ["DynamicModuleLoader"],
            react: Object.keys(react),
            'react-dom': Object.keys(reactDom)
        }
    }),
    resolve(),
    typescript({
        tsconfig: "tsconfig.rollup.json",
        useTsconfigDeclarationDir: true,
        objectHashIgnoreUnknownHack: true
    })
];

export default [

    {
        plugins: [...plugins,
        generatePackageJson({
            outputFolder: 'build',
            baseContents: (pkg) => ({
                name: pkg.name,
                version: pkg.version,
                description: pkg.description,
                private: true,
                main: pkg.main.replace('build/', ''),
                module: pkg.module.replace('build/', ''),
                typings: 'types',
                peerDependencies: {
                    "react": "^16",
                    "react-dom": "^16"
                }
            })
        })
        ],
        input: "./src/index.ts",
        external: ["react", "react-dom", "styled-components"],
        output: [
            {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled"
                },
                sourcemap: false,
                file: pkg.main,
                format: "cjs"
            },
            {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled"
                },
                sourcemap: false,
                file: pkg.module,
                format: "es"
            }
        ]
    }
];

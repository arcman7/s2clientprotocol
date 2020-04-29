import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6

export default {
    input: 'src/index.js', // Path relative to package.json
    output: {
        name: 'sc2clientprotocol',
        exports: 'named',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
    ],
};
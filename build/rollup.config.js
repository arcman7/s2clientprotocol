import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
// import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    name: 's2clientprotocol',
    exports: 'named',
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    copy({
      targets: [
        { src: 'src/common_pb.js', dest: 'dist' },
        { src: 'src/data_pb.js', dest: 'dist' },
        { src: 'src/debug_pb.js', dest: 'dist' },
        { src: 'src/error_pb.js', dest: 'dist' },
        { src: 'src/query_pb.js', dest: 'dist' },
        { src: 'src/raw_pb.js', dest: 'dist' },
        { src: 'src/sc2api_pb.js', dest: 'dist' },
        { src: 'src/score_pb.js', dest: 'dist' },
        { src: 'src/spatial_pb.js', dest: 'dist' },
        { src: 'src/ui_pb.js', dest: 'dist' },
      ]
    })
  ],
};
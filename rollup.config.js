export default {
  input: 'index.next.js',
  output: [
    {
      name: 'curri',
      file: 'index.cjs',
      format: 'umd'
    },
    {
      name: 'curri',
      file: 'index.js',
      format: 'esm'
    }
  ]
}

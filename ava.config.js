export default {
  files: [
    'test/**/*.test.ts'
  ],
  extensions: {
    ts: 'module'
  },
  nodeArguments: [
    '--loader=tsx',
    '--no-warnings'
  ]
}

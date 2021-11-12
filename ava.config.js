export default {
  files: [
    'test/**/*'
  ],
  verbose: true,
  nonSemVerExperiments: {
    nextGenConfig: true,
    configurableModuleFormat: true
  },
  extensions: {
    ts: 'module'
  },
  nodeArguments: [
    '--loader=ts-node/esm'
  ]
}
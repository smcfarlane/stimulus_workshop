const path = require('path')

module.exports = async () => {
  return {
    rootDir: path.join(__dirname, 'app', 'javascript'),
    collectCoverageFrom: [
      'controllers/*.js',
      '!controllers/index.js'
    ],
    setupFiles: [
      'jest-plugin-context/setup'
    ],
    verbose: true
  }
}

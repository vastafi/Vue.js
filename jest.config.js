module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["<rootDir>/src/**/*.spec.js"],
  automock: false,
  reporters:['default'],
  // globalSetup: '<rootDir>/tests/unit/setupTests.spec.js'
}
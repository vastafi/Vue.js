module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["<rootDir>/src/**/*.spec.js"],
  automock: false,
  reporters:['default'],
  snapshotSerializers:['jest-serializer-vue'],
  // globalSetup: '<rootDir>/tests/unit/setupTests.spec.js'
}
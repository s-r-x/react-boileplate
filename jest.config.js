module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.less': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>jestSetup.js'],
};

module.exports = {
  bail: true,
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/(tests|test)/**/*.test.(ts|js)'],
  testEnvironment: 'node',
};

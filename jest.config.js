// eslint-disable-next-line no-undef
module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  clearMocks: true,
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/(*.)+(spec|test).[tj]s?(x)'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
}

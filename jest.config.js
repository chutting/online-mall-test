// eslint-disable-next-line no-undef
module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // 哪些文件需要用 ts-jest 执行
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
}

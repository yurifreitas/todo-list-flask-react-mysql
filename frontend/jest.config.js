module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'ts',
        'jsx',
        'tsx',
        'json',
        'node',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    testEnvironment: 'jsdom',
    testMatch: [
      '*.test.js',
      '**/*.test.js'
    ],
    roots: [ '<rootDir>/__tests__/'],
    collectCoverage: true,
    transform : {
    "\\.[jt]sx?$": "babel-jest"
  },
};

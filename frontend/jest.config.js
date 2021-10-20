module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'ts',
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
};

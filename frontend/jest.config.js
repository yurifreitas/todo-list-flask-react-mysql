const { createJestConfig } = require("@craco/craco");

const cracoConfig = require("./craco.config.js");
const jestConfig = createJestConfig(cracoConfig);
const path = require('path');
module,exports = {jestConfig}
module.exports = {
  rootDir: path,
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
      "<rootDir>/__tests__/?(*.)(test).{js}",
      "<rootDir>/__tests__/**/?(*.)(test).{js}"
    ],
    roots: [ "<rootDir>/__tests__/"],
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.js$",
    collectCoverage: true,
};

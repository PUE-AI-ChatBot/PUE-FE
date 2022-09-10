const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules'],
  rootDir: './src',
  moduleNameMapper: {
    '^@application/(.*)$': '<rootDir>/application/$1',
    '^@component/(.*)$': '<rootDir>/component/$1',
    '^@domain/(.*)$': '<rootDir>/domain/$1',
    '^@infra/(.*)$': '<rootDir>/infra/$1',
    '^@page/(.*)$': '<rootDir>/page/$1',
    '^@helper/(.*)$': '<rootDir>helper/$1',
  },

  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

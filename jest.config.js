module.exports = {
  setupFilesAfterEnv: [
    `regenerator-runtime/runtime`,
    `@testing-library/jest-dom/extend-expect`,
  ],
  clearMocks: true,
  testEnvironment: `jest-environment-jsdom`, 
  watchPathIgnorePatterns: [ `node_modules` ],
  testPathIgnorePatterns: [ `node_modules` ],
};

globalThis.ngJest = {
  skipNgcc: true
};

module.exports = {
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.mjs'],
  globalSetup: 'jest-preset-angular/global-setup',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html)$',
        useESM: true,
      },
    ],
  },
};

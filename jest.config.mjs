globalThis.ngJest = {
  skipNgcc: true,
};

const esModules = ['@angular'];

export default {
  // use esm preset (from jest-preset-angular )
  preset: 'jest-preset-angular/presets/defaults-esm',

  // use esm global setup (from jest-preset-angular)
  globalSetup: 'jest-preset-angular/global-setup.mjs',

  extensionsToTreatAsEsm: ['.ts'],

  // another setup file which we will create in the next step
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  globals: {
    'ts-jest': {
      // path might be different based on your workspace setup
      // <rootDir> represents the location of jest.config.mjs
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true,
    },
  },

  moduleNameMapper: {
    'tslib': '<rootDir>/node_modules/tslib/tslib.es6.js',
    '^rxjs(/operators)?$': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
    '^rxjs/testing$': '<rootDir>/node_modules/rxjs/dist/cjs/testing/index.js',
    '^@angular/cdk$': '<rootDir>/node_modules/@angular/cdk/fesm2015/cdk.mjs',
    '^@angular/cdk/testing$': '<rootDir>/node_modules/@angular/cdk/fesm2015/testing.mjs',
  },

  transformIgnorePatterns: [`/node_modules/(?!.*\\.mjs$|${esModules.join('|')})`],

  // perf (you might try various options based on the available cores)
  maxWorkers: '8',
};

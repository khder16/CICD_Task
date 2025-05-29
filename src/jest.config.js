export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const testMatch = ['**/src/**/*.test.ts'];
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export const transform = {
  '^.+\\.(t|j)sx?$': 'ts-jest',
};
export const globals = {
  'ts-jest': {
    tsconfig: 'tsconfig.json',
  },
};

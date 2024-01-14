import { onlyInTests } from './testing/utils';

describe('test suit', () => {
  it('test', () => {
    expect(1).toEqual(1);
    onlyInTests();
  });
});

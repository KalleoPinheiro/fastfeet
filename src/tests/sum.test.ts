import { sum, sub, multiply } from '../app/sum';

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('subtract 2 - 1 to equal 1', () => {
  expect(sub(2, 1)).toBe(1);
});

it('multiply 2 * 1 to equal 2', () => {
  expect(multiply(2, 1)).toBe(2);
});

import {formatCurrnecy} from '../scripts/utils/money.js'

describe('Test suite: formatCurrency', () => {
  it('Convert cents into dollers', () => {
    expect(formatCurrnecy(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrnecy(0)).toEqual('0.00');
  });

  it('Rounds up to the nearest cent', () => {
    expect(formatCurrnecy(2000.5)).toEqual('20.01');
  });
});
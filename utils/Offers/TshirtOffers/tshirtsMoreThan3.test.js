import tshirtsMoreThan3 from './tshirtsMoreThan3';

describe('tshirtsMoreThan3', () => {
  it('tshirtsMoreThan3 with 3 params required and 1 tshirts', () => {
    const tshirts = 1;
    const tshirtPrice = 5;
    const tshirtSpecialPrice = 6;
    expect(tshirtsMoreThan3(tshirts, tshirtPrice, tshirtSpecialPrice)).toBe(5);
  })

  it('tshirtsMoreThan3 with 3 params required and 3 tshirts', () => {
    const tshirts = 3;
    const tshirtPrice = 5;
    const tshirtSpecialPrice = 6;
    expect(tshirtsMoreThan3(tshirts, tshirtPrice, tshirtSpecialPrice)).toBe(18);
  })

  it('tshirtsMoreThan3 with 3 params required and 5 tshirts', () => {
    const tshirts = 5;
    const tshirtPrice = 5;
    const tshirtSpecialPrice = 6;
    expect(tshirtsMoreThan3(tshirts, tshirtPrice, tshirtSpecialPrice)).toBe(30);
  })
})

import mugsBasicOffer from './mugsBasicOffer';

describe('MugOffers', () => {
  it('mugsBasicOffer with 2 params required', () => {
    const countOfMugs = 4;
    const mugPrice = 5;
    expect(mugsBasicOffer(countOfMugs, mugPrice)).toBe(20);
  })
})

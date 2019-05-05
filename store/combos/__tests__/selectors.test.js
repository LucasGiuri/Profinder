import { getAllCombos, getServicesByCombo } from '../selectors';

describe('Combos selectors', () => {
  it('getAllCombos()', () => {
    const stateCombos = {comboById: [1], byCombo: {1: {id: 'FakeCombo'}}};
    expect(getAllCombos(stateCombos)).toEqual([{id: 'FakeCombo'}]);
  })

  it('getServicesByCombo()', () => {
    const stateCombos = {comboById: [1], byCombo: {1: {id: 'FakeCombo', serviceSelected: "VOUCHER"}}};
    expect(getServicesByCombo(stateCombos)).toEqual(["VOUCHER"]);
  })
})
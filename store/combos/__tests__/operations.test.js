import { addCombo, removeCombo, updateCombo } from '../operations';

describe('Combo operations', () => {
  it('addCombo()', () => {
    const services = [{id: 1}, {id: 2}];
    expect(addCombo(services)).toEqual({services: [{id: 1}, {id: 2}], type: 'ADD_COMBO'});
  })

  it('removeCombo()', () => {
    const comboId = 1;
    expect(removeCombo(comboId)).toEqual({comboId: 1, type: 'REMOVE_COMBO'});
  })

  it('updateCombo()', () => {
    const comboId = 1;
    const serviceSelected = 'fakeServiceSelected';
    expect(updateCombo(comboId, serviceSelected)).toEqual({comboId: 1, serviceSelected: "fakeServiceSelected", type: "UPDATE_COMBO"});
  })
})
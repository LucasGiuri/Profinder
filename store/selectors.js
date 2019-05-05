import * as combosSelectors from './combos/selectors';

export const getAllCombos = (state) => combosSelectors.getAllCombos(state.combos);
export const getServicesByCombo = (state) => combosSelectors.getServicesByCombo(state.combos);


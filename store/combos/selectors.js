export const getServicesByCombo = (combos) => {
  const services = combos.comboById.map(comboNum => combos.byCombo[comboNum].serviceSelected);
  return services.filter(service => service);
}

export const getAllCombos = (combos) => combos.comboById.map(comboNum => combos.byCombo[comboNum]);
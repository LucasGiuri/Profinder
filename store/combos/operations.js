import * as actionTypes from './types';

export const addCombo = (services) => ({
  type: actionTypes.ADD_COMBO,
  services
})

export const removeCombo = (comboId) => ({
  type: actionTypes.REMOVE_COMBO,
  comboId
})

export const updateCombo = (comboId, serviceSelected) => ({
  type: actionTypes.UPDATE_COMBO,
  comboId,
  serviceSelected
})
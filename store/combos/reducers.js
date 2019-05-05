import * as actionType from './types';

const initialState = {
  numberOfCombos: 0,
  comboById: [],
  byCombo: {}
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type){
    case actionType.ADD_COMBO: {
      return {
        numberOfCombos: state.numberOfCombos + 1,
        comboById: [ ...state.comboById, state.numberOfCombos + 1],
        byCombo: {
          ...state.byCombo,
          [state.numberOfCombos + 1]: {
            id: state.numberOfCombos + 1,
            serviceSelected: null,
            services: action.services, 
          }
        }
      }
    }
    case actionType.UPDATE_COMBO: {
      state.byCombo[action.comboId] = {
        ...state.byCombo[action.comboId],
        serviceSelected: action.serviceSelected,
      }
      return {
        ...state
      }
    }
    case actionType.REMOVE_COMBO: {
      const prunedIds = state.comboById.filter(item => {
        return item !== action.comboId
      })
      delete state.byCombo[action.comboId]
      
      return {
        numberOfCombos: state.numberOfCombos - 1,
        comboById: prunedIds,
        byCombo: state.byCombo
      }
    }
    default: {
      return state
    }
  }
}

export default reducer;
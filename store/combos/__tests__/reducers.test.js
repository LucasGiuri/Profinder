import * as actionTypes from '../types';
import reducer from '../reducers';

describe('Combos reducer', () => {
  it('reducer should return the initial state', () => {
    const result = {
      byCombo: {},
      comboById: [],
      numberOfCombos: 0,
    }  
    expect(reducer(undefined, {})).toEqual(result);
  })

  it('reducer hould handle ADD_COMBO', () => {
    const initialState = {
      byCombo: {},
      comboById: [],
      numberOfCombos: 0
    };

    const result = {
      comboById: [1],
      byCombo: {1 : {
        id: 1,
        serviceSelected: null,
        services: [{
          id: 1,
          title: 1,
          value: 1,
        }]
      }},
      numberOfCombos: 1
    };

    const combos = {
      type: actionTypes.ADD_COMBO,
      services: [{id: 1, title: 1, value: 1}]
    };
    
    expect(reducer(initialState, combos)).toEqual(result);
  })

  it('reducer hould handle REMOVE_COMBO', () => {
    const initialState = {
      comboById: [1],
      byCombo: {1 : {
        id: 1,
        serviceSelected: null,
        services: [{
          id: 1,
          title: 1,
          value: 1,
        }]
      }},
      numberOfCombos: 1
    };

    const result = {
      byCombo: {},
      comboById: [],
      numberOfCombos: 0
    };
    
    const combos = {
      type: actionTypes.REMOVE_COMBO,
      comboId: 1
    };
    
    expect(reducer(initialState, combos)).toEqual(result);
  })

  it('reducer hould handle UPDATE_COMBO', () => {
    const result = {
      comboById: [1],
      byCombo: {1 : {
        id: 1,
        serviceSelected: 'fakeServiceSelected',
        services: [{
          id: 1,
          title: 1,
          value: 1,
        }]
      }},
      numberOfCombos: 1
    };

    const initialState = {
      comboById: [1],
      byCombo: {1 : {
        id: 1,
        serviceSelected: null,
        services: [{
          id: 1,
          title: 1,
          value: 1,
        }]
      }},
      numberOfCombos: 1
    };

    const combos = {
      type: actionTypes.UPDATE_COMBO,
      comboId: 1,
      serviceSelected: 'fakeServiceSelected'
    };
    
    expect(reducer(initialState, combos)).toEqual(result);
  })
});
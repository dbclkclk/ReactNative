import React from 'react';
import {increment, updating, UpdateCounterAction, InProgressAction, counter}  from '../index';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Test Action', () => { 
    describe('Increment', () => {
       it ('It should return Action of type UpdateCounterAction', () => {
           const updateCounterAction : UpdateCounterAction = increment();
           expect(updateCounterAction.type).toBe('UPDATE');
       });
   });
   describe('Updating', () => {
       it ('It should return Action of type InProgressAction that is true', () => {
           const inProgressAction : InProgressAction = updating(true);
           expect(inProgressAction.type).toBe('UPDATING');
           expect(inProgressAction.isUpdating).toBe(true);
       });
       it ('It should return Action of type InProgressAction that is false', () => {
           const inProgressAction : InProgressAction = updating(false);
           expect(inProgressAction.type).toBe('UPDATING');
           expect(inProgressAction.isUpdating).toBe(false);
       });
   });
  /* describe('Action Creator counter', () => {
       it('It should call updating=true, updating=false then increment', () => {
           const initialState = {
                 isUpdating: false,
                 value: 0
            }
            const store = mockStore(initialState);
            return store.dispatch(counter()).then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(3);
                expect(expectedActions[0]).toContainEqual({type: 'UPDATING', isUpdating: true});
                expect(expectedActions[1]).toContainEqual({type: 'UPDATING', isUpdating: false});
                expect(expectedActions[2]).toContainEqual({type: 'UPDATE'});
            });
       });
   });*/
})
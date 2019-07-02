import React from 'react';
import {counter, Counter}  from '../index';
import {InProgressAction, UpdateCounterAction}  from '../../actions';


describe('Test Counter Reducer', () => { 
    it ('It should change isUpdating state to true', () => {
        const state : Counter = {
            isUpdating : false, 
            value: 0
        };
        const action: InProgressAction ={
            type: 'UPDATING',
            isUpdating: true
        };
        const newState = counter(state, action);
        expect(newState.isUpdating).toBe(true);
        expect(newState.value).toBe(0);
    });
    it ('It should increment value to 1 when Update is triggered', () => {
        const state : Counter = {
            isUpdating : false, 
            value: 0
        };
        const action: UpdateCounterAction ={
            type: 'UPDATE'
        };
        const newState = counter(state, action);
        expect(newState.isUpdating).toBe(false);
        expect(newState.value).toBe(1);
    });
    it ('It should return original state when no action is applied', () => {
        const state : Counter = {
            isUpdating : false, 
            value: 0
        };
        const action: any  ={
        };
        const newState = counter(state, action);
        expect(newState.isUpdating).toBe(false);
        expect(newState.value).toBe(0);
    });
})
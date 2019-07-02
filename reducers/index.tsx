import { combineReducers } from 'redux'
import { Action } from '../actions';

export interface Counter {
  isUpdating: boolean
  value?: number
}
export const counter = (state: Counter = { isUpdating: false, value: 0 }, action: Action): Counter => {
  switch (action.type) {
    case 'UPDATE':
        return { ...state, value: (state.value+1) };
    case 'UPDATING':
        return { ...state, isUpdating: action.isUpdating }
    default: 
        return state;
  }
}

export default combineReducers<Counter>({
  counter
})
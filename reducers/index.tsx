import { combineReducers } from 'redux'
import { Action } from '../actions'
// States' definition
export interface Counter {
  isUpdating: boolean
  value?: number
}
const counter = (state: Counter = { isUpdating: false, value: 0 }, action: Action): Counter => {
  switch (action.type) {
    case 'UPDATE':
        let increment : number = state.value+1;
        return { ...state, value: increment };
    case 'UPDATING':
        return { ...state, isUpdating: action.isUpdating }
    default: 
        return state;
  }
}
export default combineReducers<Counter>({
  counter
})
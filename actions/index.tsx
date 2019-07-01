import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

export interface UpdateCounterAction {
  type: 'UPDATE'
}
export interface InProgressAction {
  type: 'UPDATING'
  isUpdating: boolean
}
export type Action = UpdateCounterAction | InProgressAction

export const increment = (): UpdateCounterAction => {
  return { type: 'UPDATE'}
}
export const updating = (isUpdating: boolean): InProgressAction => {
  return { type: 'UPDATING', isUpdating }
}

export const counter = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
        dispatch(updating(true));
        setTimeout(() => {
          dispatch(updating(false));
          dispatch(increment());
          resolve();
        }, 3000);
    })
  }
}
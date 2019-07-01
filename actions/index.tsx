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
export const isUpdating = (isUpdating: boolean): InProgressAction => {
  return { type: 'UPDATING', isUpdating }
}

export const counter = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
        dispatch(isUpdating(true));
        setTimeout(() => {
          dispatch(isUpdating(false));
          dispatch(increment());
          resolve();
        }, 3000);
    })
  }
}
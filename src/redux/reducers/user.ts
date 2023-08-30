import { AnyAction } from 'redux';
import { UserDataType } from '../../types';
import { SUBMIT_USER_DATA } from '../actions';

const INITIAL_STATE: UserDataType = {
  email: '',
};

const userDataReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SUBMIT_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;

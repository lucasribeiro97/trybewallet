import { AnyAction } from 'redux';
import { SUBMIT_WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletDataReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SUBMIT_WALLET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default walletDataReducer;

import { AnyAction } from 'redux';
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  REQUEST_FAILED,
  REQUEST_START,
  SUBMIT_CURRENCY_DATA,
} from '../actions';
import { ExpenseData } from '../../types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (
  state = INITIAL_STATE,
  action: AnyAction,
) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_CURRENCY_DATA:
      return {
        ...state,
        isLoading: false,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((id: ExpenseData) => id.id !== action.payload),
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;

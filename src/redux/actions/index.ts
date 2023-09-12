import { Dispatch, ExpenseData, UserDataType } from '../../types';

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';
export const SUBMIT_CURRENCY_DATA = 'SUBMIT_CURRENCY_DATA';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const submitUserData = (userData: UserDataType) => ({
  type: SUBMIT_USER_DATA,
  payload: userData,
});

export const requestStart = () => (
  { type: REQUEST_START }
);

export const requestFailed = (error: string) => (
  { type: REQUEST_FAILED, payload: error }
);

export const submitCurrencyData = (currencyData: string[]) => ({
  type: SUBMIT_CURRENCY_DATA,
  payload: currencyData,
});

export const addExpense = (expense: ExpenseData) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const removeExpense = (id: number) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export function thunkCurrencies() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStart());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data);
      const filterCurrencies = currencies
        .filter((currency: string) => currency !== 'USDT');
      dispatch(submitCurrencyData(filterCurrencies));
    } catch (error: any) {
      dispatch(requestFailed(error));
    }
  };
}

export function thunkExchangeRates() {
  return async (dispatch:Dispatch) => {
    try {
      dispatch(requestStart());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      return data;
    } catch (error: any) {
      dispatch(requestFailed(error));
    }
  };
}

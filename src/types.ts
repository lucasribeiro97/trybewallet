import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserDataType = {
  email: string
};

export type CurrencyDataType = {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string | number | any;
  ask: string | number | any;
  timestamp: string;
  create_date: string;
};

export type ExpenseData = {
  id: number,
  value: number | string,
  currency: string,
  method: string,
  tag: string,
  description: string,
  exchangeRates: {
    [currency: string]: CurrencyDataType,
  }
};

export type WalletDataType = {
  currencies: string[],
  expenses: ExpenseData[],
  editor: boolean,
  idToEdit: number,
};

export type ReduxState = {
  isLoading: boolean,
  user: UserDataType,
  wallet: WalletDataType,
  error: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type UserDataType = {
  email: string
};

export type WalletDataType = {
  currencies: Array<string>,
  expenses: [{
    id: string,
    value: number,
    currency: string,
    method: string,
    tag: string,
    description: string,
    exchangeRates: string,
  }],
  editor: boolean,
  idToEdit: number,
};

export type CombineType = {
  user: UserDataType,
  wallet: WalletDataType,
};

export type UserDataType = {
  email: string
};

export type WalletDataType = {
  currencies: Array<string>,
  expenses: Array<object>,
  editor: boolean,
  idToEdit: number,
};

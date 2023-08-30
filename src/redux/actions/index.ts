import { UserDataType, WalletDataType } from '../../types';

export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';
export const SUBMIT_WALLET_DATA = 'SUBMIT_WALLET_DATA';

export const submitUserData = (userData: UserDataType) => ({
  type: SUBMIT_USER_DATA,
  payload: userData,
});

export const submitWalletData = (walletData: WalletDataType) => ({
  type: SUBMIT_WALLET_DATA,
  payload: walletData,
});

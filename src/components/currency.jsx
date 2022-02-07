import React, { useContext, useState } from 'react';

const setCurrencyStorage = (currency) => {
  const storage = window.localStorage;
  storage.setItem('currency', currency);
  storage.setItem('time', Date.now());
};

// const expire = 20000;

const getCurrencyStorage = () => {
  return 'unset'
  // const storage = window.localStorage;
  // const timeStr = storage.getItem('time');
  // if (!timeStr) return 'unset';
  // const time = Number.parseInt(timeStr);
  // const now = Date.now();
  // if (now - time > expire) return 'unset';
  // storage.setItem('time', now);
  // return storage.getItem('currency');
};

const Context = React.createContext(null);

export const CurrencyProvider = ({ children }) => {
  const currency0 = getCurrencyStorage();
  const [currency, setCurrencyState] = useState(currency0);
  const setCurrency = (currency) => {
    setCurrencyState(currency);
    setCurrencyStorage(currency);
  };
  return (
    <Context.Provider value={[currency, setCurrency]}>
      {children}
    </Context.Provider>
  );
};

export const useCurrency = () => {
  const res = useContext(Context);
  if (!res) throw new Error('useLang should be case wihtin a CurrencyProvider');
  return res;
};

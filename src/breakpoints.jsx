import { useTheme } from '@emotion/react';
import React, { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext(0);

export const BreakpointsProvider = ({ breakpoints, children }) => {
  const [value, setValue] = useState(0);
  const matches = [];
  useEffect(() => {
    const handlers = breakpoints.map((_w, i) => (e) => {
      matches[i] = e.matches;
      let m = 0;
      while (matches[m]) {
        ++m;
      }
      setValue(m);
    });
    breakpoints.forEach((w, i) => {
      window
        .matchMedia(`(min-width: ${w})`)
        .addEventListener('change', handlers[i]);
    });
    return () => {
      breakpoints.forEach((w, i) => {
        window
          .matchMedia(`(min-width: ${w})`)
          .removeEventListener('change', handlers[i]);
      });
    };
  }, breakpoints);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useBreakpoints = () => useContext(Context);

export const useBreakpointsArray = (a) => {
  let bp = useBreakpoints();
  let res;
  for (let i = 0; i <= bp; ++i) res = a[i] ?? res;
  return res;
};

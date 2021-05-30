import { useTheme } from '@emotion/react';
import React, { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext(0);

export const BreakpointsProvider = ({ breakpoints, children }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const handlers = breakpoints.map((_w, i) => (e) => {
      const matchesOut = [...matches];
      matchesOut.splice(i, 1, e.matches);
      setMatches(matchesOut);
    });
    breakpoints.forEach((w, i) => {
      window
        .matchMedia(`(min-width: ${w})`)
        .addEventListener('change', handlers[i]);
    });
    setMatches(
      breakpoints.map((w) => window.matchMedia(`(min-width: ${w})`).matches),
    );
    return () => {
      breakpoints.forEach((w, i) => {
        window
          .matchMedia(`(min-width: ${w})`)
          .removeEventListener('change', handlers[i]);
      });
    };
  }, breakpoints);

  let value = 0;
  while (matches[value]) {
    ++value;
  }
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useBreakpoints = () => useContext(Context);

export const useBreakpointsArray = (a) => {
  let bp = useBreakpoints();
  let res;
  for (let i = 0; i <= bp; ++i) res = a[i] ?? res;
  return res;
};

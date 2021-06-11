import React, { useState, useEffect, createContext, useContext } from 'react';
import { useTheme } from '@emotion/react';

const Context = createContext(0);

export const BreakpointsProvider = ({ children }) => {
  const { breakpoints } = useTheme();
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
  const bp = useBreakpoints();
  let res;
  for (let i = 0; i <= bp; ++i) res = a[i] ?? res;
  return res;
};

const Null = () => null;
const Id = ({ children }) => children || null
const Conditional = ({ cond, children}) => cond && children || null;

export const useBreakpointsMap = (a) => {
  const bp = useBreakpoints();
  let last;
  const res = [];
  for (let i = 0; i < a.length; ++i) {
    last = a[i] ?? last;
    res.push(i === bp ? last : Id);
  }
  return res;
};


export const useBreakpointsChoose = (e, length) => {
  const bp = useBreakpoints();
  console.log(bp)
  const res = [];
  for (let i = 0; i < length; ++i) {
    res.push(i === bp ? e : Id);
  }
  return res;
};

export const switchedBreakpoints = (...Elements) => ({ children, ...props }) => {
  const Element = useBreakpointsArray(Elements);
  return <Element {...props} children={children} />
}



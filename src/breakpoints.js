import { useTheme } from '@emotion/react';
import { useState, useEffect, createContext, useContext } from 'react';

const Context = createContext(0);

export const BreakpointsProvider = ({ breakpoints, children }) => {
  const mediaQueries = breakpoints.map((q) =>
    window.matchMedia(`(min-width: ${q})`),
  );

  const getValue = () => mediaQueries.findIndex((mq) => mq.matches) + 1;
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueries.forEach((mq) => mq.addListener(handler));
    return () => mediaQueries.forEach((mq) => mq.removeListener(handler));
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

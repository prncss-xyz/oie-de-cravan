import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  border,
  layout,
  typography,
  space,
  color,
  flexbox,
  grid,
  system,
} from 'styled-system';
import * as Icons from './icons';
import search from '../icons/search.svg';
import avion from '../icons/avion.svg';

const gcs = system({
  gcs: { property: 'gridColumnStart' },
  gridColumnStart: { property: 'gridColumnStart' },
});
const gce = system({
  gce: { property: 'gridColumnEnd' },
  gridColumnEnd: { property: 'gridColumnEnd' },
});
const textTransform = system({ textTransform: true });

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  border,
  space,
  layout,
  color,
  flexbox,
  grid,
  typography,
  gcs,
  gce,
  textTransform,
);
export const Flex = styled(Box)({ display: 'flex' });
export const Grid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
});

export const Nav = ({ to, children }) => {
  const theme = useTheme();
  return (
    <Box {...theme.styles.navigation}>
      <Link to={to}>{children}</Link>
    </Box>
  );
};

export const Tilde = () => {
  const theme = useTheme();
  return <Box {...theme.styles.h1}>{'~'}</Box>;
};

export const H1Tilde = ({ children, ...props }) => {
  const theme = useTheme();
  // maxWidth
  return (
    <Box color='accent' textAlign='center'>
      <Flex justifyContent='center' alignItems='center'>
        <Tilde />
        <Box pr='10px' />
        <Box as='h1' {...theme.styles.h1}>
          {children}
        </Box>
        <Box pr='10px' />
        <Tilde />
      </Flex>
    </Box>
  );
};

export const H2 = ({ children, ...props }) => {
  const theme = useTheme();
  // maxwidth
  return (
    <Box {...props} as='h2' {...theme.styles.h2}>
      {children}
    </Box>
  );
};

export const H3 = ({ children, ...props }) => {
  const theme = useTheme();
  // maxwidth
  return (
    <Box {...props} as='h3' {...theme.styles.h3}>
      {children}
    </Box>
  );
};

export const H2Icon = ({ Icon, children, ...props }) => {
  return (
    <Box color='accent' textAlign='center'>
      <Flex justifyContent='center' alignItems='center'>
        {<Icon />}
        <H2 px='16px' {...props}>
          {children}
        </H2>
        {<Icon />}
      </Flex>
    </Box>
  );
};

export const H3Icon = ({ Icon, children }) => {
  const theme = useTheme();
  // maxwidth
  return (
    <Box color='accent' textAlign={'left'}>
      <Flex justifyContent='center'>
        {Icon && <Icon />}
        <Box pr='16px' />
        <Box as='h3' {...theme.styles.h3} minWidth='100%'>
          {children}
        </Box>
        <Box pr='16px' />
        {Icon && <Icon />}
      </Flex>
    </Box>
  );
};

export function Arrows({ children }) {
  const theme = useTheme();
  return (
    <Flex flexDirection='column' alignItems='center' color='accent'>
      <Icons.ArrowBottom />
      <Flex alignItems='center'>
        <Icons.ArrowRight />
        <Box px='16px' py='18px' {...theme.styles.button}>
          {children}{' '}
        </Box>
        <Icons.ArrowLeft />
      </Flex>
      <Icons.ArrowTop />
    </Flex>
  );
}

export function Search({ label }) {
  const theme = useTheme();
  return (
    <Flex
      width='max-content'
      borderWidth='1px'
      borderStyle='solid'
      color='accent'
    >
      <input
        css={{
          ...theme.styles.search,
          padding: '12px 18px',
          backgroundColor: 'inherit',
          color: theme.colors.primary,
          borderStyle: 'none',
        }}
        type='text'
        placeholder={label}
      />
      <button
        css={{
          borderRadius: 0,
          padding: 0,
          borderStyle: 'none',
          display: 'inline',
          width: '44px',
          backgroundColor: theme.colors.accent,
        }}
      >
        <img css={{ width: '50%', height: '50%' }} src={search} alt='search' />
      </button>
    </Flex>
  );
}

export function Card({ children }) {
  return (
    <Box borderStyle='solid' borderColor='primary' borderWidth='1px' p='8px'>
      <Box
        width='100%'
        height='100%'
        borderStyle='solid'
        borderColor='primary'
        borderWidth='1px'
        p='20px'
      >
        {children}
      </Box>
    </Box>
  );
}

export const Quote = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box color='accent' {...theme.styles.quote} {...props}>
      {children}
    </Box>
  );
};

export const QuoteSmall = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box color='accent' {...theme.styles.quoteSmall} {...props}>
      {children}
    </Box>
  );
};

export const QuoteXSmall = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box color='accent' {...theme.styles.quoteXSmall} {...props}>
      {children}
    </Box>
  );
};

export function SubtitleFooter({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box {...props} {...theme.styles.subtitleFooter}>
      {children}
    </Box>
  );
}
export function Subtitle({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box {...props} {...theme.styles.subtitle}>
      {children}
    </Box>
  );
}
export function Body1({ children }) {
  const theme = useTheme();
  return (
    <Box
      {...theme.styles.body1}
      css={{
        '& p': {
          marginBottom: theme.styles.body1.lineHeight,
        },
        '& p:last-child': {
          marginBottom: 0,
        },
      }}
    >
      {children}
    </Box>
  );
}

export function Body2({ children }) {
  const theme = useTheme();
  return <Box {...theme.styles.body2}>{children}</Box>;
}

export function Caption({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box {...props} {...theme.styles.caption} textAlign='center'>
      {children}
    </Box>
  );
}

export function NavigationFooter({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box {...props} {...theme.styles.navigationFooter} textAlign='center'>
      {children}
    </Box>
  );
}
export function Image({ width, height, src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      css={{
        width: width ?? 'auto',
        height: height ?? 'auto',
        margin: 'auto',
      }}
    />
  );
}

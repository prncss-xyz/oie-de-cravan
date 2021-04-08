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

export const BookCard = ({ book }) => {
  const couverture = book.couvertures?.[0];
  return (
    <Link to={book.page}>
      <Card pix='20px' piy='20px'>
        <H3 color='accent' pb='5px'>
          {book.titre}
        </H3>
        <Subtitle pb='20px'>{book.auteur}</Subtitle>
        {couverture ? (
          <Image src={couverture} alt={book.titre} width='275px' />
        ) : (
          '💩'
        )}
      </Card>
    </Link>
  );
};

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
  gap: '36px',
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

export const H1Tilde = ({ children }) => {
  const theme = useTheme();
  return (
    <Flex justifyContent='center' color='accent'>
      <Flex maxWidth='800px' {...theme.styles.h1} alignItems='center'>
        <Box>~</Box>
        <Box px='18px' textAlign='center' {...theme.styles.h1}>
          {children}
        </Box>
        <Box>~</Box>
      </Flex>
    </Flex>
  );
};

export const H2 = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box {...props} as='h2' {...theme.styles.h2}>
      {children}
    </Box>
  );
};

export const H3 = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box {...props} as='h3' {...theme.styles.h3}>
      {children}
    </Box>
  );
};

export const HSpacerLarge = () => <Box pb='180px' />;
export const HSpacerMedium = () => <Box pb='100px' />;
export const HSpacerSmall = () => <Box pb='60px' />;
export const HSpacerXSmall = () => <Box pb='40px' />;

export const H2Icon = ({ Icon, children, ...props }) => {
  return (
    <Flex justifyContent='center' color='accent'>
      <Flex justifyContent='center' alignItems='center'>
        {<Icon />}
        <H2 testAlign='center' textAlign='center' px='16px' {...props}>
          {children}
        </H2>
        {<Icon />}
      </Flex>
    </Flex>
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
        <Box px='18px' py='16px' {...theme.styles.button}>
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

export function Card({ children, pix, piy }) {
  return (
    <Box
      backgroundColor='background'
      borderStyle='solid'
      borderColor='primary'
      borderWidth='1px'
      p='8px'
    >
      <Box
        width='100%'
        height='100%'
        borderStyle='solid'
        borderColor='primary'
        borderWidth='1px'
        px={pix}
        py={piy}
      >
        {children}
      </Box>
    </Box>
  );
}

export const TextCard = ({ children }) => (
  <Card pix='30px' piy='25px'>
    {children}
  </Card>
);

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
    <Box
      color='accent'
      {...theme.styles.quoteSmall}
      css={{
        '& p': {
          marginBottom: theme.styles.quoteSmall.lineHeight,
        },
        '& p:last-child': {
          marginBottom: 0,
        },
        '& em': {
          fontStyle: 'normal',
        },
      }}
      {...props}
    >
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

export const ButtonSmall = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box color='accent' {...theme.styles.buttonSmall} {...props}>
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
  return (
    <Box
      {...theme.styles.body2}
      css={{
        '& p': {
          marginBottom: theme.styles.body2.lineHeight,
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

import React, { useRef, useEffect } from 'react';
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

export const BookCard = ({ book }) => {
  const couverture = book.couvertures?.[0];
  return (
    <Link to={book.page}>
      <Card pix='20px' piy='20px'>
        <H3 color='accent' pb='5px'>
          {book.titre}
        </H3>
        <Subtitle pb='20px'>{book.auteur}</Subtitle>
        <Flex justifyContent='center'>
          {couverture && (
            <Image src={couverture} alt={book.titre} />
          )}
        </Flex>
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
});
export const GridMd = ({ ...props }) => <Box
  display={['', 'grid']}
  gridTemplateColumns={['repeat(12, 1fr)']}
  {...props}
/>

export const Navigation = ({ children }) => {
  const theme = useTheme();
  return <Box {...theme.styles.navigation}>{children}</Box>;
};

export const Tilde = () => {
  const theme = useTheme();
  return <Box {...theme.styles.h1}>{'~'}</Box>;
};


// Create an object of arrays from an array of object,
// intended for reposive styles
const respPros = (...propObjs) => {
  const keys = {};
  for (const propObj of propObjs) {
    for (const key of Object.keys(propObj)) {
      keys[key] = true;
    }
  }
  const res = {};
  for (const key of Object.keys(keys)) {
    res[key] = propObjs.map(propObj => propObj[key]);
  }
  return res;
}

export const H1Tilde = ({ children }) => {
  const theme = useTheme();
  const styles = respPros(theme.styles.h2, theme.styles.h1)
  return (
    <Flex justifyContent='center' color='accent'>
      <Flex
        maxWidth='800px'
        {...theme.styles.h1}
        alignItems='center'
        flexDirection={['column', 'row']}
      >
        <Box>~</Box>
        <Box px='18px' textAlign='center' {...styles}>
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
    <Box as='h2' {...theme.styles.h2} {...props} >
      {children}
    </Box>
  );
};

export const H3 = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box as='h3' {...theme.styles.h3} {...props} >
      {children}
    </Box>
  );
};

export const VSpacerLarge = () => <Box pb={['100px', '180px']} />
export const VSpacerMedium = () => <Box pb={['60px', '100px']} />
export const VSpacerSmall = () => <Box pb={['40px', '60px']} />
export const VSpacerXSmall = () => <Box pb='40px' />;

export const H2Icon = ({ Icon, children, ...props }) => {
  return (
    <Flex justifyContent='center' color='accent'>
      <Flex
        justifyContent='center'
        alignItems='center'
        flexDirection={['column', 'row']}
      >
        {<Icon />}
        <H2
          testAlign='center'
          textAlign='center'
          px='16px'
          py={['20px', '0px']}
          {...props}
        >
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
        <Box px='18px' py='16px' textAlign="center" {...theme.styles.button}>
          {children}{' '}
        </Box>
        <Icons.ArrowLeft />
      </Flex>
      <Icons.ArrowTop />
    </Flex>
  );
}

export function Disk({ active, ...props }) {
  const theme = useTheme();
  const color = active ? theme.colors.accent : theme.colors.highLight;
  return (
    <svg
      css={{
        'height': '10px',
        'paddingRight': '10px',
        '&:last-child': { paddingRight: '0px' },
      }}
      fill={color}
      viewBox='0 0 10 10'
      {...props}
    >
      <circle cx='5' cy='5' r='5' />
    </svg>
  );
}

export function Search({ label, handler, value0, ...props }) {
  const theme = useTheme();
  const ref = useRef();
  const submit = (e) => {
    e.preventDefault();
    handler(ref.current.value);
  };
  const noop = (e) => {
    e.preventDefault();
  }
  useEffect(() => { ref.current.value = value0 }, [])
  return (
    <Box px={["20px", "0px"]}>
      <Flex
        width={['100%', 'max-content']}
        borderWidth='1px'
        borderStyle='solid'
        color='accent'
        {...props}
      >
        <form onChange={submit} onSubmit={noop}>
          <input
            css={{
              ...theme.styles.search,
              'height': '100%',
              'padding': '12px 18px',
              'backgroundColor': 'inherit',
              'color': theme.colors.primary,
              'borderStyle': 'none',
              '&:focus': {
                outline: 'none',
              },
            }}
            type='text'
            placeholder={label}
            ref={ref}
          />
        </form>
      </Flex></Box>
  );
}

export function Card({ children, pix, piy }) {
  return (
    <Box
      heigh='100%'
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

export function TextCardMd({ children, ...props }) {
  return (
    <Box
      heigh='100%'
      backgroundColor='background'
      borderStyle={['', 'solid']}
      borderColor='primary'
      borderWidth={['', '1px']}
      p={['', '8px']}
      margin={['auto', '']}
      maxWidth={['682px', '']}
      {...props}
    >
      <Box
        width='100%'
        height='100%'
        borderStyle={['', 'solid']}
        borderColor={['', 'primary']}
        borderWidth={['', '1px']}
        px={['', '30px']}
        py={['', '25px']}
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
    <Box {...theme.styles.subtitleFooter} {...props}>
      {children}
    </Box>
  );
}
export function Subtitle({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box {...theme.styles.subtitle} {...props}>
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
    <Box {...theme.styles.caption} {...props} >
      {children}
    </Box>
  );
}

export function NavigationFooter({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box{...theme.styles.navigationFooter} {...props} >
      {children}
    </Box>
  );
}
export function Image({ src, alt, ...props }) {
  return (
    <Box {...props}>
      <img
        src={src}
        alt={alt}
      />
    </Box>
  );
}

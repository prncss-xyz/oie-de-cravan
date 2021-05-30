import React, { useState } from 'react';
import { BreakpointsProvider } from '../breakpoints';
import { Global, ThemeProvider, useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { name } from '../../package.json';
import { Link } from 'gatsby';
import theme from './theme';
import logoOie_footer from '../images/LogoOie_Footer.png';
import arrowLeft from '../icons/arrow_left.svg';
import arrowRight from '../icons/arrow_right.svg';
import {
  Flex,
  Box,
  Nav,
  QuoteXSmall,
  Caption,
  NavigationFooter,
  SubtitleFooter,
  HSpacerMedium,
  Navigation,
} from './elements';
import panier from '../icons/panier.svg';
import 'modern-css-reset/dist/reset.min.css';
import '@fontsource/arimo';
import '@fontsource/arimo/400.css';
import '@fontsource/spectral/400-italic.css';
import '@fontsource/spectral';
import '@fontsource/spectral/400.css';
import { useBreakpoints, useBreakpointsArray } from '../breakpoints';

function OverlayMenu({ closeHandler }) {
  const theme = useTheme();
  return (
    <Flex
      css={{
        position: 'fixed',
        zIndex: 1,
      }}
      bg='accent'
      height='100%'
      width='100%'
      color='background'
      flexDirection='column'
      onClick={closeHandler}
      justifyContent='center'
      textAlign='center'
      {...theme.styles.h3}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
          closeHandler();
        }}
        href=''
      >
        Fermer
      </a>
      <Link to='/'>L’Oie de Cravan</Link>
      <Link to='/catalogue'>Catalogue</Link>
      <a href='https://oiedecravan.blogspot.com/'>Nouvelles</a>
      <Link to='/nous-rejoindre'>Nous rejoindre</Link>
    </Flex>
  );
}

const Header = () => {
  const breakpoint = useBreakpoints();
  const theme = useTheme();
  const [menuOpened, menuOpen] = useState(false);
  if (breakpoint === 0)
    return (
      <>
        {menuOpened && <OverlayMenu closeHandler={() => menuOpen(false)} />}
        <a
          href=''
          onClick={(e) => {
            e.preventDefault();
            menuOpen(true);
          }}
        >
          <Flex color='accent' justifyContent='space-between'>
            <Box {...theme.styles.h3}>L’Oie de Cravan</Box>
            <Box> = </Box>
          </Flex>
        </a>
      </>
    );
  return (
    <Box margin='auto' pt='80px' maxWidth='1560px' px='40px'>
      <Flex alignItems='baseline' css={{ '&>*>*': { paddingRight: '20px' } }}>
        <Flex color='accent' alignItems='baseline' {...theme.styles.oie}>
          <Link to='/'>L’Oie de Cravan</Link>
        </Flex>
        <Flex flexGrow='1' />
        <Flex alignItems='baseline'>
          <Nav to='/catalogue'>Catalogue</Nav>
          {/*
            <Nav to='/'>L'Oie de Cravan&nbsp;?</Nav>
            <Nav to='/'>Nouvelles de l'oie</Nav>
            <Nav to='/'>Les Ami.e.s</Nav>
            */}
          <Navigation>
            <a href='https://oiedecravan.blogspot.com/'>Nouvelles</a>
          </Navigation>
          <Nav to='/nous-rejoindre'>Nous rejoindre</Nav>
        </Flex>
      </Flex>
    </Box>
  );
};

const Footer = () => {
  const breakpoint = useBreakpoints();
  const cssLogo =
    breakpoint === 0 ? {} : { position: 'relative', bottom: '10px' };
  return (
    <>
      <Box color='accent' borderTopStyle='solid' borderWidth='1px' />

      <Flex
        px='40px'
        maxWidth='1480px'
        pt='60px'
        pb='60px'
        margin='auto'
        color='accent'
        flexDirection={['column', 'row']}
        alignItems={['center', 'flex-start']}
      >
        <img
          width='70px'
          height='100%'
          alt='logo oie'
          src={logoOie_footer}
          margin='auto'
          css={cssLogo}
        />
        <Flex flexDirection={['column', 'row']}>
          <Caption
            pr={['0px', '100px']}
            pl={['0px', '20px']}
            pb='40px'
            pt={['40px', '0px']}
            flexGrow='1'
          >
            <Box textAlign={['center', 'left']}>L’Oie de Cravan</Box>
            <Box textAlign={['center', 'left']}>6258 rue De La Roche</Box>
            <Box textAlign={['center', 'left']}>Montréal, Qc</Box>
            <Box textAlign={['center', 'left']}>H2S 2E1</Box>
            <Box textAlign={['center', 'left']}>
              lentement // oiedecravan.com
            </Box>
          </Caption>
          <NavigationFooter pr={['0px', '100px']} flexGrow='1'>
            <Box textAlign={['center', 'left']}>
              <Link to='/'>Accueil</Link>
            </Box>
            <Box textAlign={['center', 'left']}>
              <Link to='/catalogue'>Catalogue</Link>
            </Box>
            {/*
            <Box textAlign='left'>
              <Link to='/'>L'Oie de cravan&#8239;?</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/'>Les nouvelles</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/'>Les ami.e.s</Link>
            </Box>
            */}
            <Box textAlign={['center', 'left']}>
              <a href='https://oiedecravan.blogspot.com/'>Nouvelles</a>
            </Box>
            <Box textAlign={['center', 'left']}>
              <Link to='/nous-rejoindre'>Nous rejoindre</Link>
            </Box>
          </NavigationFooter>
          <NavigationFooter flexGrow='1'>
            <Box pt={['40px', '0px']} textAlign={['center', 'left']}>
              <a href='https://twitter.com/oiedecravan/'>Twitter</a>
            </Box>
            <Box textAlign={['center', 'left']}>
              <a href='https://www.instagram.com/oiedecravan/'>Instagram</a>
            </Box>
          </NavigationFooter>
        </Flex>
        <Box flexGrow='1' />
        <Box pt={['40px', '0px']} flexGrow='1' maxWidth={[undefined, '330px']}>
          <QuoteXSmall textAlign={['center', 'left']}>
            Les Oies de Cravan naissent des mâts pourris des navires perdus au
            Golfe du Mexique
          </QuoteXSmall>
          <SubtitleFooter textAlign={['center', 'left']}>
            <br />
            Louis Scutenaire
          </SubtitleFooter>
        </Box>
      </Flex>
    </>
  );
};

const Page = ({ title, children }) => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='robots' content='noindex,nofollow' />
        <title>{title ?? name}</title>
      </Helmet>
      <Global
        styles={{
          html: {
            'backgroundColor': theme.colors.background,
            'color': theme.colors.primary,
            '& a': {
              textDecoration: 'inherit',
              fontWeight: 'inherit',
              color: 'inherit',
            },
          },
        }}
      />
      <Header />
      <Box px='40px' maxWidth='1480px' margin='auto'>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <BreakpointsProvider breakpoints={['720px']}>
        <Page {...props} />
      </BreakpointsProvider>
    </ThemeProvider>
  );
}

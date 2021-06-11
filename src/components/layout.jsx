import React, { useState } from 'react';
import { BreakpointsProvider } from '../breakpoints';
import { Global, ThemeProvider, useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { name } from '../../package.json';
import { Link } from 'gatsby';
import {FaBars} from "react-icons/fa"
import theme from './theme';
import logoOie_footer from '../images/LogoOie_Footer.png';
import {ArrowLeftBlack, ArrowRightBlack} from "./icons"
import {
  Flex,
  Box,
  Nav,
  QuoteXSmall,
  Caption,
  NavigationFooter,
  SubtitleFooter,
  Navigation,
} from './elements';
import 'modern-css-reset/dist/reset.min.css';
import '@fontsource/arimo';
import '@fontsource/arimo/400.css';
import '@fontsource/arimo/700.css';
import '@fontsource/spectral/400-italic.css';
import '@fontsource/spectral';
import '@fontsource/spectral/400.css';
import { useBreakpoints, useBreakpointsArray } from '../breakpoints';

function OverlayMenu({ closeHandler }) {
  const theme = useTheme();
  console.log('caca')
  return (<Box
      bg='accent'
      color='background'
      css={{
        position: 'fixed',
        zIndex: 1,
      }}
      height='100%'
      width='100%'
>
      <a
        onClick={(e) => {
          e.preventDefault();
          closeHandler();
        }}
        href=''
      >
      <Flex  pt="40px" justifyContent="center" alignItems="center">
        <ArrowRightBlack/>
      <Box {...theme.styles.navigation} px="30px">
        Fermer
          </Box>
        <ArrowLeftBlack/>
        </Flex>
      </a>
    <Flex
      height='100%'
      flexDirection='column'
      onClick={closeHandler}
      justifyContent='center'
      textAlign='center'
      {...theme.styles.overlay}
      css={{gap: "10px"}}
    >
      <Link to='/'>L’Oie de Cravan</Link>
      <Link to='/catalogue'>Catalogue</Link>
      <a href='https://oiedecravan.blogspot.com/'>Nouvelles</a>
      <Link to='/nous-rejoindre'>Nous rejoindre</Link>
    </Flex>
  </Box>);
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
            <FaBars size={theme.styles.h3.fontSize}/>
          </Flex>
        </a>
      </>
    );
  return (
    <Box margin='auto' pt='80px' maxWidth='1560px' px='40px'>
      <Flex alignItems='baseline'  
        >
        <Flex color='accent' alignItems='baseline' {...theme.styles.oie}>
          <Link to='/'>L’Oie de Cravan</Link>
        </Flex>
        <Flex flexGrow='1' />
        <Flex alignItems='baseline' css={{ 'column-gap': '20px'}} {...theme.styles.navigation}>
          <Link to='/catalogue'>Catalogue</Link>
          <a href='https://oiedecravan.blogspot.com/'>Nouvelles</a>
          <Link to='/nous-rejoindre'>Nous rejoindre</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

const Footer = () => {
  const theme = useTheme();
  const mw = "10%"
  return (
    <>
      <Box color='accent' borderTopStyle='solid' borderWidth='1px' />
      <Flex
        px='40px'
        maxWidth={['300px', '1480px']}
        pt='50px'
        pb='60px'
        margin='auto'
        color='accent'
        flexDirection={['column', 'row']}
        alignItems={['center', 'flex-start']}
        textAlign={['center', 'left']}
        justifyContent="stretch"
      >
        <Box
          width='70px'
          height='100%'
          pr={['0px', '20px']}
          flex="0 0 auto"
        >
          <img
            alt='logo oie'
            src={logoOie_footer}
            margin='auto'
          />
        </Box>
        <Box
          flex='1 1 auto'
          pb='40px'
          pt={['40px', '10px']}
        {...theme.styles.caption}
        >
          <Box>L’Oie de Cravan</Box>
          <Box>6258 rue De La Roche</Box>
          <Box>Montréal, Qc</Box>
          <Box>H2S 2E1</Box>
          <Box>lentement // oiedecravan.com</Box>
        </Box>
        <Box 
          flex='1 1 auto'
          {...theme.styles.navigationFooter} 
          pt={['0px', '10px']} >
          <Box>
            <Link to='/'>Accueil</Link>
          </Box>
          <Box>
            <Link to='/catalogue'>Catalogue</Link>
          </Box>
          <Box>
            <a href='https://oiedecravan.blogspot.com/'>Nouvelles</a>
          </Box>
          <Box>
            <Link to='/nous-rejoindre'>Nous rejoindre</Link>
          </Box>
        </Box>
        <Box
          flex='1 1 auto'
          {...theme.styles.navigationFooter} pt={['40px', '10px']} >
          <Box>
            <a href='https://twitter.com/oiedecravan/'>Twitter</a>
          </Box>
          <Box>
            <a href='https://www.instagram.com/oiedecravan/'>Instagram</a>
          </Box>
        </Box>
        <Box flex={['0', '1 2 60px']} />
        <Flex flex={['1 1 auto', '0 2 400px']} pt={['40px', '10px']}>
          <Box>
          <QuoteXSmall>
            Les Oies de Cravan naissent des mâts pourris des navires perdus au
            Golfe du Mexique
          </QuoteXSmall>
          <SubtitleFooter pt="10px">
            Louis Scutenaire
          </SubtitleFooter>
          </Box>
        </Flex>
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
      <Box px={['0px', '40px']} maxWidth='1480px' margin='auto'>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <Page {...props} />
      </BreakpointsProvider>
    </ThemeProvider>
  );
}

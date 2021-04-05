import React from 'react';
import { Global, ThemeProvider, useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { name } from '../../package.json';
import { Link } from 'gatsby';
import theme from './theme';
import * as Icons from './icons';
import logoOie_footer from '../images/LogoOie_Footer.png';
import {
  Flex,
  Box,
  Nav,
  Image,
  QuoteXSmall,
  Caption,
  NavigationFooter,
  SubtitleFooter,
} from './elements';
import 'modern-css-reset/dist/reset.min.css';
import '@fontsource/arimo';
import '@fontsource/arimo/400.css';
import '@fontsource/spectral/400-italic.css';
import '@fontsource/spectral';
import '@fontsource/spectral/400.css';

const Page = ({ title, children }) => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
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
      <Flex alignItems='baseline'>
        <Flex color='accent' alignItems='baseline' {...theme.styles.body1}>
          <Link href='/'>L’Oie de Cravan</Link>
        </Flex>
        <Flex alignItems='baseline'>
          <Nav to='/catalogue'>Catalogue général de la compagnie</Nav>
          <Nav to='/'>L'Oie de Cravan&nbsp;?</Nav>
          <Nav to='/'>Nouvelles de l'oie</Nav>
          <Nav to='/'>Les Ami.e.s</Nav>
          <Nav to='/nous-rejoindre'>Nous rejoindre</Nav>
        </Flex>
        <Flex color='accent' {...theme.styles.button}>
          <Box>En</Box>
          <Box>
            <Icons.Panier />
          </Box>
        </Flex>
      </Flex>
      <Box>{children}</Box>
      <Flex color='accent' borderTopStyle='solid' borderWidth='1px'>
        <Image width='60px' alt='logo oie' src={logoOie_footer} />
        <Flex>
          <Caption width='100%'>
            <Box textAlign='left'>L’Oie de Cravan</Box>
            <Box textAlign='left'>6258 rue De La Roche</Box>
            <Box textAlign='left'>Montréal, Qc</Box>
            <Box textAlign='left'>H2S 2E1</Box>
            <Box textAlign='left'>lentement // oiedecravan.com</Box>
          </Caption>
          <NavigationFooter width='100%'>
            <Box textAlign='left'>
              <Link to='/'>Accueil</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/catalogue'>Catalogue</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/'>L'Oie de cravan&#8239;?</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/'>Les nouvelles</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/'>Les ami.e.s</Link>
            </Box>
            <Box textAlign='left'>
              <Link to='/nous-rejoindre'>Nous rejoindre</Link>
            </Box>
          </NavigationFooter>
          <NavigationFooter width='100%'>
            <Box textAlign='left'>
              <a href='https://twitter.com/oiedecravan/'>Twitter</a>
            </Box>
            <Box textAlign='left'>
              <a href='https://www.instagram.com/oiedecravan/'>Instagram</a>
            </Box>
          </NavigationFooter>
        </Flex>
        <Box>
          <QuoteXSmall>
            Les Oies de Cravan naissent des mâts pourris des navires perdus du
            Golfe du Mexique
          </QuoteXSmall>
          <SubtitleFooter>
            <br />
            Louis Scutenaire
          </SubtitleFooter>
        </Box>
      </Flex>
    </>
  );
};

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <Page {...props} />
    </ThemeProvider>
  );
}

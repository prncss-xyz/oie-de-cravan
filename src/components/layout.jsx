import React, { useState } from 'react';
import { useLang, LangProvider } from '/src/components/lang';
import { Clickable } from '/src/components/elements';
import { unP } from '/src/utils';
import { Global, ThemeProvider, useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import theme from './theme';
import logoOie_footer from '../images/LogoOie_Footer.png';
import { ArrowLeftBlack, ArrowRightBlack } from './icons';
import { CurrencyProvider } from '../components/currency';
import { Flex, Box } from './elements';
import 'modern-css-reset/dist/reset.min.css';
import '@fontsource/arimo';
import '@fontsource/arimo/400.css';
import '@fontsource/arimo/700.css';
import '@fontsource/spectral/400-italic.css';
import '@fontsource/spectral';
import '@fontsource/spectral/400.css';

const name = "L'Oie de Cravan";

function Lang({ short, en, fr }) {
  const { lang } = useLang();
  if (lang === 'fr') {
    const label = short ? 'en' : 'English';
    if (en) {
      return (
        <Box>
          <Link to={en}>{label}</Link>
        </Box>
      );
    }
    return <Box>{label}</Box>;
  }
  if (lang === 'en') {
    const label = short ? 'fr' : 'Français';
    if (fr) {
      return (
        <Box>
          <Link to={fr}>{label}</Link>
        </Box>
      );
    }
    return <Box>{label}</Box>;
  }
}

function OverlayMenu({ en, fr, closeHandler }) {
  const { layoutTextes, links } = useLang();
  const theme = useTheme();
  return (
    <Flex
      flexDirection='column'
      bg='accent'
      color='background'
      css={{
        position: 'fixed',
        zIndex: 1,
      }}
      height='100%'
      width='100%'
    >
      <Flex justifyContent='center'>
        <Clickable onClick={closeHandler}>
          <Flex pt='40px' justifyContent='center' alignItems='center'>
            <ArrowRightBlack />
            <Box
              {...theme.styles.navigation}
              px='30px'
              dangerouslySetInnerHTML={{ __html: unP(layoutTextes['fermer']) }}
            />
            <ArrowLeftBlack />
          </Flex>
        </Clickable>
      </Flex>
      <Flex
        flexGrow={1}
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
        {...theme.styles.overlay}
        css={{ gap: '10px' }}
      >
        <Link to={links['accueil']}>
          <div
            dangerouslySetInnerHTML={{ __html: unP(layoutTextes['accueil']) }}
          />
        </Link>
        <Link to={links['catalogue']}>
          <div
            dangerouslySetInnerHTML={{ __html: unP(layoutTextes['catalogue']) }}
          />
        </Link>
        <Link to={links['nouvelles']}>
          <div
            dangerouslySetInnerHTML={{ __html: unP(layoutTextes['nouvelles']) }}
          />
        </Link>
        <Link to={links['nous rejoindre']}>
          <div
            dangerouslySetInnerHTML={{
              __html: unP(layoutTextes['nous rejoindre']),
            }}
          />
        </Link>
      </Flex>
      <Flex
        pb='40px'
        justifyContent='center'
        flexDirection='column'
        {...theme.styles.body1}
      >
        <Lang short={false} en={en} fr={fr} />
        <Link>
          <div
            dangerouslySetInnerHTML={{
              __html: unP(layoutTextes['panier']),
            }}
          />
        </Link>
      </Flex>
    </Flex>
  );
}

const Header = ({ en, fr }) => {
  const theme = useTheme();
  const { lang, layoutTextes, links } = useLang();
  if (lang === 'en' && en) throw new Error(`unexpected 'en' parameter`);
  if (lang === 'fr' && fr) throw new Error(`unexpected 'fr' parameter`);
  const [menuOpened, menuOpen] = useState(false);
  return (
    <>
      <Flex>
        <Clickable onClick={() => !menuOpened && menuOpen(true)}>
          <Box display={['inherit', 'none']}>
            {menuOpened && (
              <OverlayMenu
                en={en}
                fr={fr}
                closeHandler={() => menuOpen(false)}
              />
            )}
            <Flex color='accent' justifyContent='space-between'>
              <Box
                {...theme.styles.h3}
                dangerouslySetInnerHTML={{ __html: unP(layoutTextes['titre']) }}
              />
              <Box color='accent'>
                <FaBars size={theme.styles.h3.fontSize} />
              </Box>
            </Flex>
          </Box>
        </Clickable>
      </Flex>
      <Box
        display={['none', 'inherit']}
        margin='auto'
        pt='80px'
        maxWidth='1560px'
        px='40px'
      >
        <Flex alignItems='baseline'>
          <Flex color='accent' alignItems='baseline' {...theme.styles.oie}>
            <Link
              to={links['accueil']}
              dangerouslySetInnerHTML={{ __html: unP(layoutTextes['titre']) }}
            />
          </Flex>
          <Flex flexGrow='1' />
          <Flex
            alignItems='baseline'
            css={{ columnGap: '20px' }}
            {...theme.styles.navigation}
          >
            <Link to={links['catalogue']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['catalogue']),
                }}
              />
            </Link>
            <Link to={links['nouvelles']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['nouvelles']),
                }}
              />
            </Link>
            <Link to={links['nous rejoindre']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['nous rejoindre']),
                }}
              />
            </Link>
          </Flex>
          <Flex alignItems='baseline' {...theme.styles.navigation}>
            <Box pl='20px' />
            <Box color='accent'>
              <Lang short={true} en={en} fr={fr} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const Footer = () => {
  const theme = useTheme();
  const { layoutTextes, links } = useLang();
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
        justifyContent='stretch'
      >
        <Box width='70px' height='100%' pr={['0px', '20px']} flex='0 0 auto'>
          <img alt='logo oie' src={logoOie_footer} margin='auto' />
        </Box>
        <Box
          flex='1 1 auto'
          pb='40px'
          pt={['40px', '10px']}
          {...theme.styles.caption}
          dangerouslySetInnerHTML={{
            __html: layoutTextes['adresse'],
          }}
        />
        <Box
          flex='1 1 auto'
          {...theme.styles.navigationFooter}
          pt={['0px', '10px']}
        >
          <Box>
            <Link to={links['accueil']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['accueil']),
                }}
              />
            </Link>
          </Box>
          <Box>
            <Link to={links['catalogue']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['catalogue']),
                }}
              />
            </Link>
          </Box>
          <Box>
            <Link to={links['nouvelles']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['nouvelles']),
                }}
              />
            </Link>
          </Box>
          <Box>
            <Link to={links['nous rejoindre']}>
              <div
                dangerouslySetInnerHTML={{
                  __html: unP(layoutTextes['nous rejoindre']),
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          flex='1 1 auto'
          {...theme.styles.navigationFooter}
          pt={['40px', '10px']}
        >
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
            <Box
              {...theme.styles.quoteXSmall}
              dangerouslySetInnerHTML={{
                __html: unP(layoutTextes['citation 0']),
              }}
            />
            <Box
              {...theme.styles.subtitle}
              pt='10px'
              dangerouslySetInnerHTML={{
                __html: unP(layoutTextes['signature 0']),
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

const Page = ({ title, children, en, fr }) => {
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
      <Header en={en} fr={fr} />
      <Box px={['0px', '40px']} maxWidth='1480px' margin='auto'>
        {children}
      </Box>
      <Footer />
    </>
  );
};

const page0 =
  (Main) =>
  ({ title, en, fr, data, ...props }) => {
    const Main1 = () => (
      <Page en={en} fr={fr} title={title}>
        <Main data={data} {...props} />
      </Page>
    );
    const Main0 = page(Main1);
    return (
      <ThemeProvider theme={theme}>
        <Main0 en={en} fr={fr} data={data} {...props} />
      </ThemeProvider>
    );
  };

const page =
  (Main) =>
  ({ data, en, fr, ...props }) => {
    const lang = en || en === null ? 'fr' : 'en';
    return (
      <LangProvider lang={lang} data={data}>
        <CurrencyProvider>
          <Main data={data} {...props} />
        </CurrencyProvider>
      </LangProvider>
    );
  };

export default page0;

const colors = {
  background: '#000000',
  accent: '#ED1F24',
  highLight: '#D8CECC',
  primary: '#929292',
};
const theme = {
  breakpoints: ['785px'],
  colors,
  //fontSizes: [14, 16, 18, 20, 22, 28, 38, 44, 58],
  styles: {
    h1: {
      fontFamily: 'Spectral',
      fontSize: '58px',
      letterSpacing: 1.18,
      lineHeight: '68px',
      textTransform: 'uppercase',
      fontWeight: 'normal',
    },
    authors: {
      fontFamily: 'Spectral',
      fontSize: '38px',
      letterSpacing: 1.18,
      lineHeight: '44px',
      fontWeight: 'normal',
    },
    h2: {
      fontFamily: 'Spectral',
      fontSize: '38px',
      letterSpacing: 1.18,
      lineHeight: '44px',
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    navigationMain: {
      fontFamily: 'Spectral',
      fontSize: '19px',
      letterSpacing: 1.18,
      lineHeight: '22px',
    },
    oie: {
      fontFamily: 'Spectral',
      fontSize: '33px',
      lineHeight: '32px',
      fontWeight: 'normal',
    },
    overlay: {
      fontFamily: 'Spectral',
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Spectral',
      fontSize: '28px',
      lineHeight: '32px',
      fontWeight: 'normal',
    },
    subtitle: {
      fontFamily: 'Arimo',
      fontSize: '20px',
      lineHeight: '26px',
    },
    subtitleFooter: {
      fontFamily: 'Arimo',
      fontSize: '16px',
      lineHeight: '20px',
    },
    body1: {
      fontFamily: 'Spectral',
      fontSize: '22px',
      lineHeight: '32px',
      css: {
        '& p': {
          marginBottom: '32px',
        },
        '& p:last-child': {
          marginBottom: 0,
        },
        '& code': {
          color: colors.accent,
          fontFamily: 'Spectral',
          fontSize: '22px',
          lineHeight: '32px',
        },
        '& h2': {
          // color: colors.accent,
          fontFamily: 'Spectral',
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: 'bold',
          // marginBottom: '16px',
        },
      },
    },
    body2: {
      fontFamily: 'Spectral',
      fontSize: '18px',
      lineHeight: '24px',
      css: {
        '& p': {
          marginBottom: '24px',
        },
        '& p:last-child': {
          marginBottom: 0,
        },
      },
    },
    caption: {
      fontFamily: 'Spectral',
      fontSize: '16px',
      lineHeight: '20px',
    },
    quote: {
      fontFamily: 'Spectral',
      fontSize: '38px',
      letterSpacing: 1.18,
      fontStyle: 'italic',
      lineHeight: '44px',
    },
    quoteSmall: {
      fontFamily: 'Spectral',
      fontStyle: 'italic',
      fontSize: '28px',
      lineHeight: '32px',
      css: {
        '& p': {
          marginBottom: '32p',
        },
        '& p:last-child': {
          marginBottom: 0,
        },
        '& em': {
          fontStyle: 'normal',
        },

        '& a': {
          fontWeight: 'bold',
          fontStyle: 'normal',
          // textTransform: 'uppercase',
          // textDecoration: 'underline',
        },
      },
    },
    quoteXSmall: {
      fontFamily: 'Spectral',
      fontStyle: 'italic',
      fontSize: '18px',
      lineHeight: '24px',
    },
    button: {
      fontFamily: 'Arimo',
      fontWeight: 'bold',
      fontSize: '16px',
      letterSpacing: 1,
      lineHeight: '20px',
      textTransform: 'uppercase',
    },
    buttonSmall: {
      color: 'accent',
      fontFamily: 'Arimo',
      fontWeight: 'bold',
      fontSize: '14px',
      letterSpacing: 0.75,
      lineHeight: '16px',
      textTransform: 'uppercase',
    },
    navigation: {
      fontFamily: 'Arimo',
      // fontWeight: 'bold',
      fontSize: '16px',
      letterSpacing: 1,
      lineHeight: '20px',
      textTransform: 'uppercase',
    },
    search: {
      fontFamily: 'Arimo',
      fontSize: '16px',
      letterSpacing: 1,
      lineHeight: '20px',
    },
    searchCritaria: {
      fontFamily: 'Arimo',
      fontSize: '14px',
      letterSpacing: 0.75,
      // letterSpacing: 1,
      lineHeight: '20px',
    },
    navigationFooter: {
      fontFamily: 'Arimo',
      fontSize: '14px',
      letterSpacing: 0.75,
      lineHeight: '20px',
      textTransform: 'uppercase',
    },
  },
};

export default theme;

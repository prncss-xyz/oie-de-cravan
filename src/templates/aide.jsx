import React from 'react';
import page from '../components/layout';
import { useTheme } from '@emotion/react';
import { H1Tilde, Box, VSpacerMedium } from '../components/elements';
import { useLang } from '../components/lang';
import { unP } from '../utils';

function Main() {
  const { textes } = useLang();
  const theme = useTheme();
  return (
    <>
      <VSpacerMedium />
      <H1Tilde dangerouslySetInnerHTML={{ __html: unP(textes['h1']) }} />
      <VSpacerMedium />
      <Box
        {...theme.styles.body1}
        dangerouslySetInnerHTML={{ __html: unP(textes['aide']) }}
      />
    </>
  );
}

export default page(Main);

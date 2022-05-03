import React from 'react';
import page from '../components/layout';
import * as Icons from '../components/icons';
import {
  H1Tilde,
  H2Icon,
  Box,
  GridMd,
  VSpacerMedium,
  VSpacerLarge,
  VSpacerSmall,
  TextCard,
  TextCardMd,
} from '../components/elements';
import { useTheme } from '@emotion/react';
import { unP } from '../utils';
import { useLang } from '../components/lang';
import { StaticImage } from 'gatsby-plugin-image';

function Main() {
  const { textes } = useLang();
  const theme = useTheme();
  return (
    <>
      <VSpacerLarge />
      <StaticImage
        placeholder='none'
        src='../images/NousRejoindre.png'
        alt='Nous rejoindre'
      />
      <VSpacerLarge />
      <H1Tilde dangerouslySetInnerHTML={{ __html: unP(textes['h1']) }} />
      <VSpacerMedium />
      <GridMd>
        <Box gcs={4} gce={10}>
          <TextCard>
            <Box
              {...theme.styles.body1}
              dangerouslySetInnerHTML={{ __html: textes['encadré 0'] }}
            />
          </TextCard>
        </Box>
      </GridMd>
      <Box pb={['40px', '0px']} />
      <GridMd>
        <TextCardMd
          gcs={7}
          gce={11}
          css={{ position: 'relative', bottom: '17px' }}
        >
          <Box
            {...theme.styles.body2}
            dangerouslySetInnerHTML={{ __html: textes['encadré 1'] }}
          />
        </TextCardMd>
      </GridMd>
      <VSpacerLarge />
      <H2Icon
        Icon={Icons.Nuage}
        dangerouslySetInnerHTML={{ __html: unP(textes['h2 0']) }}
      />
      <VSpacerSmall />
      <Box {...theme.styles.body1}>
        <GridMd gridGap='36px'>
          <Box
            gcs={2}
            gce={7}
            dangerouslySetInnerHTML={{ __html: textes['colonne 0'] }}
          />
          <Box
            gcs={7}
            gce={12}
            dangerouslySetInnerHTML={{ __html: textes['colonne 1'] }}
          />
        </GridMd>
      </Box>
      <VSpacerMedium />
      <GridMd>
        <Box gcs={4} gce={10}>
          <TextCard>
            <Box
              {...theme.styles.body1}
              dangerouslySetInnerHTML={{ __html: textes['encadré 2'] }}
            />
          </TextCard>
        </Box>
      </GridMd>
      <VSpacerLarge />
      <GridMd alignItems='end'>
        <Box gcs={2} gce={7}>
          <StaticImage
            placeholder='none'
            src='../images/CartePostaleBureauOie.png'
            alt='carte postale du bureau Oie'
          />
          <Box
            {...theme.styles.caption}
            textAlign='center'
            pt='20px'
            px={['0px', '20px']}
            pb='40px'
            dangerouslySetInnerHTML={{
              __html: textes['légende 0'],
            }}
          />
          <VSpacerMedium />
        </Box>
        <Box gcs='8' gce='12' color='accent'>
          <Box
            {...theme.styles.quote}
            dangerouslySetInnerHTML={{ __html: textes['citation 0'] }}
          />
          <Box
            pt='26px'
            {...theme.styles.subtitle}
            dangerouslySetInnerHTML={{ __html: textes['signature 0'] }}
          />
        </Box>
      </GridMd>
      {/* {false && (
        <>
          <H2Icon Icon={Icons.Coeur}>Mécénat express</H2Icon>
          <VSpacerSmall />
          <Grid>
            <Box gcs='4' gce='10'>
              <TextCard>
                <Body1>
                  L'Oie de Cravan tient à poursuivre son style de vie poétique
                  et accepte donc les dons.
                </Body1>
              </TextCard>
            </Box>
          </Grid>
          <VSpacerSmall />
          <Arrows href='#' dangerouslySetInnerHTML="Envoyer un don à L'Oie" />
        </>
      )} */}
    </>
  );
}

export default page(Main);

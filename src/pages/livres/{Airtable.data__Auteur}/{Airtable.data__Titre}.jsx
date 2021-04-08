import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/layout';
import * as Icons from '../../../components/icons';
import {
  H1Tilde,
  H2Icon,
  H2,
  H3,
  Box,
  Body1,
  Body2,
  Flex,
  Card,
  QuoteSmall,
  Grid,
  Tilde,
  Image,
  Arrows,
  Caption,
  Subtitle,
  SubtitleFooter,
  HSpacerMedium,
  HSpacerLarge,
  HSpacerSmall,
  HSpacerXSmall,
  ButtonSmall,
  TextCard,
} from '../../../components/elements';
import { useTheme } from '@emotion/react';
import bookSample from '../../../images/book-sample.jpg';
import nuage from '../../../icons/nuage.svg';
import arrowLeft from '../../../icons/arrow_left.svg';
import { cleanBook, MD } from '../../../utils';

const Nuage = () => {
  return (
    <Box px='10px' alignSelf='center'>
      <img src={nuage} alt='nuage' height='8px' />
    </Box>
  );
};

function BackLink() {
  const theme = useTheme();
  return (
    <Link to='/catalogue'>
      <Flex color='accent' alignItems='baseline'>
        <Box pr='8px'>
          <img width='8px' src={arrowLeft} alt='catalogue' />
        </Box>
        <ButtonSmall pt='20px'>
          Retour au catalogue général de la compagnie
        </ButtonSmall>
      </Flex>
    </Link>
  );
}

function Buy({ data, epuise, noticeRetour }) {
  const theme = useTheme();
  const color = epuise ? 'muted' : 'accent';
  return (
    <>
      <Flex color={color} {...theme.styles.button}>
        {data.prixCAD && data.prixEuro && (
          <Box p='10px' borderWidth='1px' borderStyle='solid'>
            {data.prixCAD}&nbsp;$
            <span css={{ paddingLeft: '10px', paddingRight: '10px' }}>/</span>
            {data.prixEuro}&nbsp;€
          </Box>
        )}
        <Box
          px='18px'
          py='12px'
          borderWidth='1px'
          borderStyle='solid'
          borderColor={color}
          backgroundColor={color}
          color='background'
        >
          {epuise ? 'Non disponible' : 'Ajouter au panier'}
        </Box>
      </Flex>
      {epuise && noticeRetour && <Body2>{noticeRetour}</Body2>}
    </>
  );
}

function Share() {
  const theme = useTheme();
  return (
    <Flex color='accent' {...theme.styles.button}>
      <Box>Partager </Box>
    </Flex>
  );
}

const BookCol = ({ data }) => {
  const theme = useTheme();
  return (
    <Box color='accent' {...theme.styles.button} textTransform='uppercase'>
      <img
        width='1000px'
        src={data.couvertures[0]}
        alt="L'amour et autres choses plates"
        css={{ paddingBottom: '20px' }}
      />
      {data.ISBN && <Box>ISBN: {data.ISBN}</Box>}
      {data.annee && <Box>{data.annee}</Box>}
      {data.hauteur && data.largeur && (
        <Box>
          {data.hauteur} x {data.largeur} cm
        </Box>
      )}
      {data.pages && <Box>{data.pages} pages</Box>}
    </Box>
  );
};

export default function Livre({ data: { airtable } }) {
  const dataOut = cleanBook(airtable);

  return (
    <Layout title={dataOut.titre}>
      <HSpacerSmall />
      <BackLink />
      <HSpacerSmall />
      <Grid>
        <Box gcs='1' gce='4'>
          <BookCol data={dataOut} />
        </Box>
        <Box gcs='5' gce='13'>
          <H2 color='accent'>{dataOut.titre}</H2>
          <Box color='accent'>
            <Tilde />
          </Box>
          <H3 color='accent' textTransform='uppercase'>
            {dataOut.auteur}
          </H3>
          {dataOut.createursSecondaires && (
            <Subtitle>Couverture de Mireille Bouchard</Subtitle>
          )}
          <HSpacerXSmall />
          <Flex color='accent' alignItems='baseline'>
            {dataOut.genre && <Subtitle>{dataOut.genre}</Subtitle>}
            {dataOut.genre && dataOut.collection && <Nuage />}
            {dataOut.collection && <Subtitle>{dataOut.collection}</Subtitle>}
          </Flex>
          <HSpacerXSmall />
          <Body1>
            {dataOut.presentation.length > 0 && (
              <MD raw={dataOut.presentation} />
            )}
          </Body1>
          <HSpacerXSmall />
          <Buy data={dataOut} />
          <HSpacerXSmall />
          <Share />
        </Box>
      </Grid>
      <HSpacerLarge />
      {dataOut.autourDuLivre.length > 0 && (
        <>
          <H2Icon Icon={Icons.Ecrire}>Autour du livre</H2Icon>
          <HSpacerSmall />
          <Grid>
            <Box gcs='3' gce='11'>
              <Flex>
                {/*arrow left*/}
                <TextCard>
                  <Box color='accent'>
                    <QuoteSmall>
                      {dataOut.autourDuLivre && (
                        <MD raw={dataOut.autourDuLivre} />
                      )}
                    </QuoteSmall>
                    {
                      // <SubtitleFooter>
                      //   <br />
                      //   <Box>Anne-Renée Caillée, Liberté.</Box>
                      // </SubtitleFooter>
                    }
                  </Box>
                </TextCard>
                {/*arrow left*/}
              </Flex>
            </Box>
          </Grid>
        </>
      )}
      <HSpacerLarge />
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    airtable(id: { eq: $id }) {
      data {
        Auteur
        Collection
        Couverture {
          url
        }
        Critiques__extrait_
        Genre
        Hauteur__cm_
        Largeur__cm_
        ISBN
        Pages__nombre_
        Prix_site_Web__CAD_
        Prix_site_Web__EU_
        Publication__date_
        Titre
        Pr_sentation
        Autour_du_livre
        Cr_ateurs_secondaires
        _puis_
      }
    }
  }
`;

//        Pr_sentation

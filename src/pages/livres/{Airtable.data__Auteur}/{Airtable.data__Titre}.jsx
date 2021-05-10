import React, { useReducer } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/layout';
import * as Icons from '../../../components/icons';
import {
  Disk,
  H2Icon,
  H2,
  H3,
  Box,
  Body1,
  Body2,
  Flex,
  QuoteSmall,
  Grid,
  Tilde,
  Subtitle,
  HSpacerLarge,
  HSpacerSmall,
  HSpacerXSmall,
  ButtonSmall,
  TextCard,
} from '../../../components/elements';
import { useTheme } from '@emotion/react';
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
  return (
    <Flex justifyContent='space-between' alignItems='flex-end'>
      <Link to='/catalogue'>
        <Box pr='8px' pb='4px'>
          <img width='8px' src={arrowLeft} alt='catalogue' />
        </Box>
      </Link>
      <Link to='/catalogue'>
        <ButtonSmall pt='20px'>
          Retour au catalogue général de la compagnie
        </ButtonSmall>
      </Link>
      <Box flexGrow='1' />
    </Flex>
  );
}

function Buy({ data, epuise, noticeRetour }) {
  const theme = useTheme();
  if (!data.prixCAD) epuise = true;
  if (!data.prixEuro) epuise = true;
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

const useCycle = (length) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'CYCLE':
        let position = state.position + 1;
        if (position === state.length) position = 0;
        return { ...state, position };
      case 'GO':
        return { ...state, position: action.position };
    }
  };

  const [state, dispatch] = useReducer(reducer, { position: 0, length });
  const cycle = () => dispatch({ type: 'CYCLE' });
  const go = (position) => dispatch({ type: 'GO', position });
  return {
    position: state.position,
    cycle,
    go,
  };
};

const BookCol = ({ data }) => {
  const theme = useTheme();
  const { position, cycle, go } = useCycle(data.couvertures.length);
  return (
    <Box color='accent' {...theme.styles.button} textTransform='uppercase'>
      {data.couvertures.length > 0 && (
        <img
          onClick={cycle}
          width='1000px'
          src={data.couvertures[position]}
          alt='couverture'
          css={{ paddingBottom: '15px' }}
        />
      )}
      {data.couvertures.length > 1 && (
        <Flex pb='20px' justifyContent='center'>
          {data.couvertures.map((_, index) => (
            <Disk
              key={index}
              active={index === position}
              onClick={() => go(index)}
            />
          ))}
        </Flex>
      )}
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
          <Link to={dataOut.pageAuteur}>
            <H3 color='accent' textTransform='uppercase'>
              {dataOut.auteur}
            </H3>
          </Link>
          {dataOut.createursSecondaires && (
            <Subtitle>{dataOut.createursSecondaires}</Subtitle>
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
              <MD lang='fr' contents={dataOut.presentation} />
            )}
          </Body1>
          <HSpacerXSmall />
          <Buy data={dataOut} />
          <HSpacerXSmall />
          {/*<Share />*/}
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
                        <MD lang='fr' contents={dataOut.autourDuLivre}/>
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
        Pr_sentation_et_Bio
        Autour_du_livre
        Cr_ateurs_secondaires
        _puis_
      }
    }
  }
`;

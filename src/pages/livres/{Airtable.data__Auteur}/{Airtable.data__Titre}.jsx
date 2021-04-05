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
  Tilde,
  Image,
  Arrows,
  Caption,
  Subtitle,
  SubtitleFooter,
} from '../../../components/elements';
import { useTheme } from '@emotion/react';
import bookSample from '../../../images/book-sample.jpg';
import nuage from '../../../icons/nuage.svg';

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
    <Link to='catalogue'>
      <Flex color='accent' {...theme.styles.button}>
        <Icons.ArrowLeft />
        <Box>Retour au catalogue général de la compagnie</Box>
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
            {data.prixCAD}&nbsp;$&nbsp;/&nbsp;{data.prixEuro}&nbsp;€
          </Box>
        )}
        <Box
          p='10px'
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
      <Image
        width='1000px'
        src={data.couvertures[0]}
        alt="L'amour et autres choses plates"
      />
      {data.ISBN && <Box>ISBN: {data.ISBN}</Box>}
      {data.annee && <Box>{data.annee}</Box>}
      {data.hauteur && data.largeur && (
        <Box>
          {data.hauteur} x {data.largeur} cm.
        </Box>
      )}
      {data.pages && <Box>{data.pages} pages</Box>}
    </Box>
  );
};

export default function Livre({
  data: {
    airtable: { data: dataIn },
  },
}) {
  console.log(dataIn);
  const dataOut = {
    titre: dataIn['Titre'],
    annee: dataIn['Publication__date_']?.slice(0, 4),
    auteur: dataIn['Auteur'],
    collection: dataIn['Collection'],
    genre: dataIn['Genre'],
    hauteur: dataIn['Hauteur__cm_'],
    largeur: dataIn['Largeur__cm_'],
    isbn: dataIn['ISBN'],
    prixCAD: dataIn['Prix_site_Web__CAD_'],
    prixEuro: dataIn['Prix_site_Web__EU_'],
    pages: dataIn['Pages__nombre_'],
    presentation: dataIn['Pr_sentation'],
    autourDuLivre: dataIn['Autour_du_livre'],
    epuise: dataIn['_puis_'],
    couvertures: dataIn['Couverture']?.map(({ url }) => url),
  };
  console.log(dataOut);

  return (
    <Layout title={dataOut.titre}>
      <BackLink />
      <Flex>
        <BookCol data={dataOut} />
        <Box>
          <H2 color='accent'>{dataOut.titre}</H2>
          <Box color='accent'>
            <Tilde />
          </Box>
          <H3 color='accent' textTransform='uppercase'>
            {dataOut.auteur}
          </H3>
          <SubtitleFooter>Couverture de Mireille Bouchard</SubtitleFooter>
          <Flex color='accent' alignItems='baseline'>
            {dataOut.genre && <Subtitle>{dataOut.genre}</Subtitle>}
            {dataOut.genre && dataOut.collection && <Nuage />}
            {dataOut.collection && <Subtitle>{dataOut.collection}</Subtitle>}
          </Flex>
          <Body1>
            Voici un premier recueil écorché, les premiers pas de quelqu'un qui
            croyait que les mots, ce n'état pas pour lui, mais qui s'est
            découvert une voix, encore proche de celle de ses modèles mais
            unique aussi, avec un sens de l'image qui ne trompe pas.
          </Body1>
          <Buy data={dataOut} />
          <Share />
        </Box>
      </Flex>
      <H2Icon Icon={Icons.Ecrire}>Autour du livre</H2Icon>
      <Flex>
        <Icons.ArrowLeft />
        <Card>
          <Box color='accent'>
            <QuoteSmall>
              C'est certes lyrique et un peu naïf, mais l'assurance
              désintéressée qui parcourt le texte a quelque chose d'inattendu.
              Il fait parfois bon lire des poètes qui ne se soucient pas de
              dépasser une quelconque ère ou de répondre à quelque ascendant
              exercé par un milieu. J'ai toujours trouvé qu'il fallait avoir du
              culot pour écrire dans un poèeme "je t'aime". Jonathan Doré le
              fait et il décrit avec aplomb le corps de l'aimée, sa peau douce
              comme des oreillers de plume", les lèvre "en forme de ciel" ou sa
              "tignasse blonde [qui] rayonne comme Dubaï la nuit".
            </QuoteSmall>
            <SubtitleFooter>
              <br />
              <Box>Anne-Renée Caillée, Liberté.</Box>
            </SubtitleFooter>
          </Box>
        </Card>
        <Icons.ArrowRight />
      </Flex>
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
        Autour_du_livre
        Cr_ateurs_secondaires
        _puis_
      }
    }
  }
`;

//        Pr_sentation

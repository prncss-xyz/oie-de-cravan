import React from 'react';
import { Masonry } from 'masonic';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import * as Icons from '../../components/icons';
import { Link, graphql } from 'gatsby';
import { cleanBook, rectAuteur } from '../../utils';
import {
  H1Tilde,
  H2Icon,
  H2,
  H3,
  Box,
  Flex,
  Card,
  Quote,
  Image,
  Arrows,
  Body1,
  Body2,
  ButtonSmall,
  Caption,
  Subtitle,
  BookCard,
  VSpacerXSmall,
  VSpacerSmall,
  VSpacerMedium,
  VSpacerLarge,
} from '../../components/elements';
import nousRejoindre from '../../images/NousRejoindre.png';
import cartePostaleDuBureauOie from '../../images/CartePostaleBureauOie.png';
import { useTheme } from '@emotion/react';

export default function Auteur({ data, pageContext }) {
  const edges = data.allAirtable.edges;
  const books = edges.map(({ node }) => cleanBook(node));
  const auteur = pageContext.data__Auteur;
  return (
    <Layout title={rectAuteur(auteur)}>
      <VSpacerLarge />
      <H1Tilde>Catalogue général de la compagnie</H1Tilde>
      <VSpacerLarge />
      <Link to='/auteurs'>
        <ButtonSmall
          color='accent'
          textAlign='right'
          css={{ textDecoration: 'underline' }}
        >
          Voir nos auteur.e.s
        </ButtonSmall>
      </Link>
      <VSpacerSmall />
      <Box color='accent' borderTopStyle='solid' borderWidth='1px' />
      <VSpacerSmall />
      <Box color='accent'>
        <H2>{rectAuteur(auteur)}</H2>
      </Box>
      <VSpacerXSmall />
      <Masonry items={books} render={bc} columnCount={4} columnGutter={36} />
      {books.map((book) => (
        <bc book={book} />
      ))}
      <VSpacerLarge />
    </Layout>
  );
}

const bc = (...args) => {
  const book = args[0].data;
  if (!book) {
    return <div></div>;
  }
  return <BookCard book={book} />;
};

// allAirtable(filter: { data: { Auteur: { eq: "Hellman, Michel" } } }) {

export const query = graphql`
  query AuteurQuery($data__Auteur: String) {
    allAirtable(filter: { data: { Auteur: { eq: $data__Auteur } } }) {
      edges {
        node {
          data {
            Auteur
            Titre
            Auteur_livre
            Couverture {
              url
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { Masonry } from 'masonic';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
import { Link, graphql } from 'gatsby';
import { cleanBook } from '../utils';
import {
  H1Tilde,
  H2Icon,
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
  HSpacerSmall,
  HSpacerMedium,
  HSpacerLarge,
} from '../components/elements';
import nousRejoindre from '../images/NousRejoindre.png';
import cartePostaleDuBureauOie from '../images/CartePostaleBureauOie.png';
import { useTheme } from '@emotion/react';

export default function Catalogue({
  data: {
    allAirtable: { edges },
  },
}) {
  const books = edges.map(({ node }) => cleanBook(node));

  return (
    <Layout title='Catalogue'>
      <HSpacerLarge />
      <H1Tilde>Catalogue général de la compagnie</H1Tilde>
      <HSpacerLarge />
      <Link to='/auteurs'>
        <ButtonSmall
          color='accent'
          textAlign='right'
          css={{ textDecoration: 'underline' }}
        >
          Voir nos auteur.e.s
        </ButtonSmall>
      </Link>
      <HSpacerSmall />
      <Masonry items={books} render={bc} columnCount={4} columnGutter={36} />
      {books.map((book) => (
        <bc book={book} />
      ))}
      <HSpacerLarge />
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

export const query = graphql`
  query CatalogueQuery {
    allAirtable(sort: { fields: data___Publication__date_, order: DESC }) {
      edges {
        node {
          id
          data {
            Auteur_livre
            Couverture {
              url
            }
            Titre
            Auteur
          }
        }
      }
    }
  }
`;

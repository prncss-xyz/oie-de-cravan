import React from 'react';
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
  Caption,
  Subtitle,
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
  console.log(books);

  return (
    <Layout title='Catalogue'>
      <H1Tilde>Catalogue général de la compagnie</H1Tilde>
      <Link to='/auteurs'>
        <Box
          color='accent'
          textAlign='right'
          css={{ textDecoration: 'underline' }}
        >
          Voir nos auteur.e.s
        </Box>
      </Link>
      {books.map((book) => {
        const couverture = book.couvertures?.[0];
        return (
          <Card>
            <H3 color='accent'>{book.titre}</H3>
            <Subtitle>{book.auteur}</Subtitle>
            {couverture ? <Image src={couverture} alt={book.titre} /> : '💩'}
          </Card>
        );
      })}
      <Arrows>Afficher plus</Arrows>
    </Layout>
  );
}

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

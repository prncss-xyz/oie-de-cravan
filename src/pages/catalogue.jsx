import React, { useState } from 'react';
import { Masonry } from 'masonic';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { cleanBook, normalize } from '../utils';
import { useLunr } from 'react-lunr';
import {
  H1Tilde,
  Flex,
  ButtonSmall,
  BookCard,
  HSpacerSmall,
  HSpacerLarge,
  Search,
} from '../components/elements';

export default function Catalogue({
  data: {
    allAirtable: { edges },
    localSearchBooks: { store, index },
  },
}) {
  const [query0, setQuery] = useState('');
  const query = normalize(query0);
  const res = useLunr(query, index, store);
  const books = edges
    .filter(({ node }) => query === '' || res.some(({ id }) => id === node.id))
    .map(({ node }) => cleanBook(node));
  return (
    <Layout title='Catalogue'>
      <HSpacerLarge />
      <H1Tilde>Catalogue général de la compagnie</H1Tilde>
      <HSpacerLarge />
      <Flex alignItems='baseline' justifyContent='space-between'>
        <Search label='Rechercher un titre' handler={setQuery} />
        <Link to='/auteurs'>
          <ButtonSmall
            color='accent'
            textAlign='right'
            css={{ textDecoration: 'underline' }}
          >
            Voir nos auteur·e·s
          </ButtonSmall>
        </Link>
      </Flex>
      <HSpacerSmall />
      <Masonry
        key={query}
        items={books}
        render={Bc}
        columnCount={4}
        columnGutter={36}
      />
      <HSpacerLarge />
    </Layout>
  );
}

const Bc = ({ data }) => {
  return <BookCard book={data} />;
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
    localSearchBooks {
      store
      index
    }
  }
`;

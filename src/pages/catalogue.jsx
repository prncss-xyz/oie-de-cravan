import { Masonry } from 'masonic';
import React, { useState, useMemo, useEffect } from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { cleanBook, normalize } from '../utils';
import {
  H1Tilde,
  Flex,
  ButtonSmall,
  BookCard,
  VSpacerSmall,
  VSpacerLarge,
  Search,
} from '../components/elements';
import lunr from 'lunr'

const processQuery = query => (query.length < 3) ? null : normalize(query).toLocaleLowerCase();

// returns an array which is the intersection of a list of arrays
// returns undefined to an empty list
const intersect = (ass) => {
  let res;
  for (const as of ass) {
    if (!res) {
      res = {}
      for (const a of as) {
        res[a] = true;
      }
      continue;
    }
    const nxt = {}
    for (const a of as) {
      if (a in res) {
        nxt[a] = true;
      }
    }
    res = nxt;
  }
  if (res) {
    return Object.keys(res)
  }
}

export default function Catalogue({
  location: { search },
  data: {
    allAirtable: { edges },
    localSearchBooks: { store, index },
  },
}) {
  const searchParams = new URLSearchParams(search);
  const q0 = searchParams.get('q') || '';
  // console.log(decodeURI(search));
  const [query0, setQuery] = useState(q0);
  const query = processQuery(query0);
  const indexObj = useMemo(() => {
    return lunr.Index.load(JSON.parse(index));
  }, [index])
  const books = useMemo(() => {
    let filtered;
    if (query === null) {
      filtered = edges;
    } else {
      const qq = query.split(' ')
      const res0 = qq.map(query => (indexObj.query((fn) => {
        fn.term(query)
        fn.term(query, { wildcard: lunr.Query.wildcard.TRAILING })
        for (const cons of 'lsd') {
          fn.term(cons + query)
          fn.term(query, { wildcard: lunr.Query.wildcard.TRAILING })
        }
      }).map(({ ref }) => store[ref].id)))
      const res = intersect(res0);
      filtered = edges.filter(({ node }) => res.some((id) => id === node.id));
    }
    return filtered.map(({ node }) => cleanBook(node));
  }, [query]);
  return (
    <Layout title='Catalogue'>
      <VSpacerLarge />
      <H1Tilde>Catalogue général de la compagnie</H1Tilde>
      <VSpacerLarge />
      <Flex flexDirection={['column', 'row']} alignItems={['center', 'baseline']} justifyContent='space-between'>
        <Search label='Rechercher un titre' handler={setQuery} value0={q0} mb="40px" />
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
      <VSpacerSmall />
      <Masonry
        key={query}
        items={books}
        render={Bc}
        columnWidth={280}
        columnGutter={36}
      />
      <VSpacerLarge />
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

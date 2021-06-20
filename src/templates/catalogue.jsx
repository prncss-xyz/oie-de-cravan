import { useLang } from '../components/lang';
import { Masonry } from 'masonic';
import { useTheme } from '@emotion/react';
import React, { useState, useMemo } from 'react';
import page from '../components/layout';
import { Link } from 'gatsby';
import { cleanBook, normalize } from '../utils';
import {
  H1Tilde,
  Flex,
  Box,
  ButtonSmall,
  BookCard,
  VSpacerSmall,
  VSpacerLarge,
  Search,
} from '../components/elements';
import lunr from 'lunr';

const processQuery = (query) =>
  query.length < 3 ? null : normalize(query).toLocaleLowerCase();

// returns an array which is the intersection of a list of arrays
// returns undefined to an empty list
const intersect = (ass) => {
  let res;
  for (const as of ass) {
    if (!res) {
      res = {};
      for (const a of as) {
        res[a] = true;
      }
      continue;
    }
    const nxt = {};
    for (const a of as) {
      if (a in res) {
        nxt[a] = true;
      }
    }
    res = nxt;
  }
  if (res) {
    return Object.keys(res);
  }
};

const Critaria = () => {
  const theme = useTheme();
  const { textes } = useLang();
  return (
    <Box {...theme.styles.searchCritaria}>
      <i dangerouslySetInnerHTML={{ __html: textes['critères'] }} />
    </Box>
  );
};

const Bc = ({ data }) => {
  return <BookCard book={data} />;
};

function Main({
  location: { search },
  data: {
    allAirtableCatalogue: { nodes },
    localSearchBooks: { store, index },
  },
}) {
  const theme = useTheme();
  const { textes } = useLang();
  const searchParams = new URLSearchParams(search);
  const q0 = searchParams.get('q') || '';
  // console.log(decodeURI(search));
  const [query0, setQuery] = useState(q0);
  const query = processQuery(query0);
  const indexObj = useMemo(() => {
    return lunr.Index.load(JSON.parse(index));
  }, [index]);
  const books = useMemo(() => {
    let filtered;
    if (query === null) {
      filtered = nodes;
    } else {
      const qq = query.split(' ');
      const res0 = qq.map((query) =>
        indexObj
          .query((fn) => {
            fn.term(query);
            fn.term(query, { wildcard: lunr.Query.wildcard.TRAILING });
            for (const cons of 'lsd') {
              fn.term(cons + query);
              fn.term(query, { wildcard: lunr.Query.wildcard.TRAILING });
            }
          })
          .map(({ ref }) => store[ref].id),
      );
      const res = intersect(res0);
      filtered = nodes.filter((node) => res.some((id) => id === node.id));
    }
    return filtered.map(node => cleanBook(node));
  }, [query]);
  return (
    <>
      <VSpacerLarge />
      <H1Tilde dangerouslySetInnerHTML={{ __html: textes['h1'] }} />
      <VSpacerLarge />
      <Flex
        flexDirection={['column', 'row']}
        alignItems={['center', 'baseline']}
        justifyContent='space-between'
      >
        <Flex flexDirection='column'>
          <Search label='Rechercher' handler={setQuery} value0={q0} />
          <Box pb='10px' />
          <Critaria />
        </Flex>
        <Box pb='20px' />
        <Link to='/auteurs'>
          <Box
            color='accent'
            textAlign='right'
            {...theme.styles.buttonSmall}
            css={{ textDecoration: 'underline' }}
            dangerouslySetInnerHTML={{ __html: textes['voir auteurs'] }}
          />
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
    </>
  );
}


export default page(Main);

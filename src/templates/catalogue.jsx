import { useLang } from '../components/lang';
import { Masonry } from 'masonic';
import { useTheme } from '@emotion/react';
import React, { useState, useMemo } from 'react';
import page from '../components/layout';
import { cleanBook, normalize } from '../utils';
import {
  H1Tilde,
  Flex,
  Box,
  BookCard,
  VSpacerSmall,
  VSpacerLarge,
  Search,
} from '../components/elements';
import lunr from 'lunr';
import {unP} from '../utils'

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
      <i dangerouslySetInnerHTML={{ __html: unP(textes['critères']) }} />
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
  const { lang, textes } = useLang();
  const searchParams = new URLSearchParams(search);
  const q0 = searchParams.get('q') || '';
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
            // in French, some words stars by "l'", "s'" or "d'"
            // lunr does not deal well with it,
            // so here is a workaround
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
    return filtered.map((node) => cleanBook(lang, node));
  }, [query, indexObj, nodes, store, lang]);
  return (
    <>
      <VSpacerLarge />
      <H1Tilde dangerouslySetInnerHTML={{ __html: unP(textes['h1']) }} />
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
      </Flex>
      <VSpacerSmall />
      <Masonry
        key={query}
        items={books}
        render={Bc}
        columnWidth={280}
        columnGutter={36}
      />
    </>
  );
}

export default page(Main);

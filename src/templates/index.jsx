import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { cleanBook, unP, typo_ajust } from '../utils';
import { useLang } from '../components/lang';
import page from '../components/layout';
import { useTheme } from '@emotion/react';
import * as Icons from '../components/icons';
import {
  H1Tilde,
  H2Icon,
  Box,
  Arrows,
  BookCard,
  VSpacerSmall,
  VSpacerLarge,
  VSpacerMedium,
  GridMd,
  Flex,
  TextCardMd,
} from '../components/elements';
import oiseauHome from '../images/Oiseau_Home.svg';
import stoneGoose from '../images/stonegoose1_BasseResolution-Remplacer.png';

const getCurrentIndex = (books, date) => {
  let currentIndex = 0;
  for (const book of books) {
    if (book.date < date) break;
    currentIndex++;
  }
  return currentIndex;
};

// TODO: FIXME:
const useWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    const ro = new ResizeObserver((e) => {
      setWidth(e[0].contentRect.width);
    });
    ro.observe(ref.current);
  }, [ref.current]);
  return [ref, width];
};

const Books = ({ books, startIndex }) => {
  const [ref, width] = useWidth();
  const n = Math.floor((width + 36) / (280 + 36));
  return (
    <Flex ref={ref} css={{ gap: '36px' }}>
      <Box flex='1'>
        <BookCard book={books[startIndex + 0]} />
      </Box>
      {n > 1 && (
        <Box flex='1'>
          <BookCard book={books[startIndex + 1]} />
        </Box>
      )}
      {n > 2 && (
        <Box flex='1'>
          <BookCard book={books[startIndex + 2]} />
        </Box>
      )}
      {n > 3 && (
        <Box flex='1'>
          <BookCard book={books[startIndex + 3]} />
        </Box>
      )}
    </Flex>
  );
};

function Main({ data }) {
  const {
    allAirtableCatalogue: { nodes },
    site: { buildTime },
  } = data;
  const build = new Date(buildTime);
  const { lang, textes } = useLang();
  const books = nodes.map((node) => cleanBook(lang, node));
  const [currentIndex, setCurrentIndex] = useState(
    getCurrentIndex(books, build),
  );
  useEffect(() => {
    const index = getCurrentIndex(books, Date.now());
    setCurrentIndex(index);
  }, [books]);
  const theme = useTheme();
  return (
    <>
      <Box pb={['80px', '100px']} />
      <Box width={['160px', '320px']} margin='auto'>
        <img src={oiseauHome} alt='oie de Cravan' />
      </Box>
      <Box pb={['80px', '180px']} />
      <H1Tilde dangerouslySetInnerHTML={{ __html: unP(textes['h1']) }} />
      <Box pb={['60px', '100px']} />
      <TextCardMd>
        <Box
          {...theme.styles.body1}
          dangerouslySetInnerHTML={{ __html: textes['encadré 0'] }}
        />
      </TextCardMd>
      <Box pb={['80px', '180px']} />
      <GridMd alignItems='end'>
        <Box color='accent' gcs='2' gce='7'>
          <Box
            {...theme.styles.quote}
            dangerouslySetInnerHTML={{ __html: textes['citation 0'] }}
          />
          <br />
          <Box
            {...theme.styles.subtitle}
            dangerouslySetInnerHTML={{ __html: textes['signature 0'] }}
          />
        </Box>
        <Box pb={['80px', '180px']} />
        <Box
          gcs='8'
          gce='13'
          pt={['40px', '0px']}
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <img src={stoneGoose} alt='oie de Cravan' />
          <Box
            textAlign='center'
            px={['0px', '40px']}
            pt='20px'
            maxWidth='570px'
            {...theme.styles.caption}
            dangerouslySetInnerHTML={{ __html: textes['légende 0'] }}
          />
          <VSpacerMedium />
        </Box>
      </GridMd>
      <Box pb={['80px', '180px']} />
      <H2Icon
        Icon={Icons.Soleil}
        dangerouslySetInnerHTML={{ __html: textes['h2 0'] }}
      />
      <VSpacerSmall />
      <Books books={books} startIndex={currentIndex} />
      <VSpacerSmall />
      <Link to={lang === 'fr' ? '/catalogue' : '/en/catalogue'}>
        <Arrows dangerouslySetInnerHTML={{ __html: textes['action 0'] }} />
      </Link>
      <VSpacerLarge />
      {currentIndex > 0 && (
        <>
          <H2Icon
            Icon={Icons.Avion}
            dangerouslySetInnerHTML={{ __html: textes['h2 1'] }}
          />
          <VSpacerSmall />
          <Box textAlign='center' {...theme.styles.body1}>
            {books.slice(0, currentIndex).map((book) => (
              <div key={book.id}>
                {book.auteur},<i> {typo_ajust(book.titre)}</i>
              </div>
            ))}
          </Box>
          <VSpacerLarge />
        </>
      )}
    </>
  );
}

export default page(Main);

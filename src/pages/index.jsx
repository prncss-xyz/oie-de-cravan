import React, { useRef, useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { cleanBook } from '../utils';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
import {
  H1Tilde,
  H2Icon,
  Box,
  Quote,
  Image,
  Arrows,
  Body1,
  Subtitle,
  Caption,
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
}

export default function Home({
  data: {
    allAirtable: { edges },
    site: {
      buildTime
    }
  },
}) {
  const build = new Date (buildTime);
  const books = edges.map(({ node }) => cleanBook(node));
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndex(books, build));
  useEffect(() => {
    const index = getCurrentIndex(books, Date.now())
    setCurrentIndex(index);
  }, [])
  return (
    <Layout>
      <Box pb={['60px', '100px']} />
      <Image width={['160px', '320px']} margin='auto' src={oiseauHome} alt='oie de Cravan' />
      <Box pb={['100px', '180px']} />
      <H1Tilde>La Poésie</H1Tilde>
      <Box pb={['60px', '100px']} />
      <TextCardMd>
        <Body1>
          <p>
            D'abord, répéter une évidence : la poésie n'est pas particulièrement
            affaire de livre. Elle ne l'est même que rarement, et les livres, y
            compris ceux de l'Oie, ne sauraient être suffisants&nbsp;! Toute
            l'histoire poétique du siècle qui vient de passer nous fait voir que
            si c'est bien avec les mots que l'on fait le poème, ce n'est pas
            nécessairement avec leur concours qu'apparaît la poésie.
          </p>
          <p>
            Sans doute, au départ, la poésie ne serait qu'assemblage
            d'éléments&nbsp;: le collage est cette belle leçon. Ces éléments
            peuvent être les instants de la vie, les bribes de la nature, les
            mots, les images. Ce sont ces éléments qui nous bouleversent lorsque
            nous les laissons nous bouleverser.
          </p>
          <p>
            La poésie, c'est notre présence au monde, c'est nous comme pont
            entre les éléments les plus éloignés les uns des autres (le secret
            du surréalisme), et c'est notre vie que l'on danse sur ce fil tendu
            au-dessus du vide. On veut nous faire croire que la vie est vide,
            qu'elle ne peut chercher que le confort et sa répétition, que notre
            vie est mort. La vie au contraire ne peut être que révolte,
            profonde, souriante&nbsp;; ne peut être que poésie. Un livre de
            l'Oie, aimons-nous penser, est une fenêtre différente sur les
            possibles poétiques&nbsp;; une fenêtre petite, certes, mais bien
            présente. Une invitation à jouer avec le monde et avec la phrase.
            L'ennemi de la poésie, c'est l'institué, l'institution, la mort dans
            l'âme et dans le mot. La voix du poème reste à chacun·e.
          </p>
        </Body1>
      </TextCardMd>
      <VSpacerLarge />
      <GridMd alignItems='end'>
        <Box color='accent' gcs='2' gce='7'>
          <Quote>
            Jeunes gens, refusez le siège qu'on vous offre. Vous n'en seriez que
            la housse humaine, très vite froissée.
          </Quote>
          <Subtitle>
            <br />
            Georges Henein
          </Subtitle>
        </Box>
        <Box pb={['0px', '180px']} />
        <Box gcs='8' gce='13' pt={['40px', '0px']} display="flex" flexDirection="column" alignItems='center'>
          <Image src={stoneGoose} alt='oie de Cravan' />
          <Caption textAlign='center' px={['0px', '40px']} pt='20px' maxWidth='570px'>
            Lorem ipsum sic dolor sit amet, consectetur adispiscing elit. Donec
            eros odio, tempor at vulputate in, tincidunt et metus.
          </Caption>
          <VSpacerMedium />
        </Box>
      </GridMd>
      <VSpacerLarge />
      <H2Icon Icon={Icons.Soleil}>Les Nouveautés de l’oie de Cravan</H2Icon>
      <VSpacerSmall />
      <Books books={books} startIndex={currentIndex} />
      <VSpacerSmall />
      <Link to='/catalogue'>
        <Arrows>Consulter le catalogue complet</Arrows>
      </Link>
      <VSpacerLarge />
      {
        (currentIndex > 0) && (<>
      <H2Icon Icon={Icons.Avion}>Ce qui vient</H2Icon>
      <VSpacerSmall />
      <Box textAlign='center'>
        <Body1>
          {books.slice(0,currentIndex).map(book => <div key={book.id}><i>{book.auteur},</i> {book.titre}</div>)}
        </Body1>
      </Box>
      <VSpacerLarge />
      </>)
   }
    </Layout>
  );
}

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

export const query = graphql`
  query IndexQuery {
    site {
      buildTime
    }
    allAirtable(
      sort: { fields: data___Publication__date_, order: DESC }
    ) {
      edges {
        node {
          id
          data {
            Auteur_livre
            Couverture {
              url
            }
            Publication__date_
            Titre
            Auteur
          }
        }
      }
    }
  }
`;

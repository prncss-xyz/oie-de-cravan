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
  TextCard,
  VSpacerSmall,
  VSpacerLarge,
  VSpacerMedium,
  Grid,
  Flex,
} from '../components/elements';
import oiseauHome from '../images/Oiseau_Home.svg';
import stoneGoose from '../images/stonegoose1_BasseResolution-Remplacer.png';
import { useBreakpoints, switchedBreakpoints } from '../breakpoints';

const Id = ({ children }) => children;
const TextMd = ({ children }) => (
  <Box margin='auto' maxWidth='682px'>
    <TextCard>{children}</TextCard>
  </Box>
);
const Text = switchedBreakpoints(Id, TextMd);

const BoxMd = ({ children }) => <Grid alignItems='end'>{children}</Grid>;
const Box1 = switchedBreakpoints(Id, BoxMd);
const Sp1 = switchedBreakpoints(VSpacerLarge, null);

export default function Home({
  data: {
    allAirtable: { edges },
  },
}) {
  const books = edges.map(({ node }) => cleanBook(node));
  const bp = useBreakpoints();
  return (
    <Layout>
      <Box pb={['60px', '100px']} />
      <Image width={['160px', '320px']} margin='auto' src={oiseauHome} alt='oie de Cravan' />
      <Box pb={['100px', '180px']} />
      <H1Tilde>La Poésie</H1Tilde>
      <Box pb={['60px', '100px']} />
      <Text>
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
      </Text>
      <VSpacerLarge />
      <Box1>
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
        <Sp1 />
        <Box gcs='8' gce='13' pt={['40px', '0px']} display="flex" flexDirection="column" alignItems='center'>
          <Image src={stoneGoose} alt='oie de Cravan' />
          <Caption textAlign='center' px={['0px', '40px']} pt='20px' maxWidth='570px'>
            Lorem ipsum sic dolor sit amet, consectetur adispiscing elit. Donec
            eros odio, tempor at vulputate in, tincidunt et metus.
          </Caption>
          <VSpacerMedium />
        </Box>
      </Box1>
      <VSpacerLarge />
      <H2Icon Icon={Icons.Soleil}>Les Nouveautés de l’oie de Cravan</H2Icon>
      <VSpacerSmall />
      <Books books={books} />
      <VSpacerSmall />
      <Link to='/catalogue'>
        <Arrows>Consulter le catalogue complet</Arrows>
      </Link>
      <VSpacerLarge />
      <H2Icon Icon={Icons.Avion}>Ce qui vient</H2Icon>
      <VSpacerSmall />
      <Box textAlign='center'>
        <Body1>
          <div>
            <i>Camille Readman Prud’homme,</i> Quand je ne dis rien je pense
            encore
          </div>
          <div>
            <i>Alice Massénat,</i> Le croque-l’œil
          </div>
          <div>
            <i>Michel Garneau</i>, Le couteau de bois
          </div>
          <div>
            <i>Anne Lardeux,</i> Les mauvais plis
          </div>
          <div>
            <i>et bien d’autres encore…</i>
          </div>
        </Body1>
      </Box>
      <VSpacerLarge />
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

const Books = ({ books }) => {
  const [ref, width] = useWidth();
  const n = Math.floor((width + 36) / (280 + 36));
  return (
    <Flex ref={ref} css={{ gap: '36px' }}>
      <Box flex='1'>
        <BookCard book={books[0]} />
      </Box>
      {n > 1 && (
        <Box flex='1'>
          <BookCard book={books[1]} />
        </Box>
      )}
      {n > 2 && (
        <Box flex='1'>
          <BookCard book={books[2]} />
        </Box>
      )}
      {n > 3 && (
        <Box flex='1'>
          <BookCard book={books[3]} />
        </Box>
      )}
    </Flex>
  );
};

export const query = graphql`
  query IndexQuery {
    allAirtable(
      limit: 4
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

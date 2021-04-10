import React from 'react';
import { graphql, Link } from 'gatsby';
import { cleanBook } from '../utils';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
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
  Subtitle,
  Caption,
  BookCard,
  TextCard,
  HSpacerSmall,
  HSpacerLarge,
  HSpacerMedium,
  Grid,
} from '../components/elements';
import oiseauHome from '../images/Oiseau_Home.svg';
import stoneGoose from '../images/stonegoose1_BasseResolution-Remplacer.png';
import bookSample from '../images/book-sample.jpg';

export default function Home({
  data: {
    allAirtable: { edges },
  },
}) {
  const books = edges.map(({ node }) => cleanBook(node));
  return (
    <Layout>
      <HSpacerMedium />
      <Image width='320px' src={oiseauHome} alt='oie de Cravan' />
      <HSpacerLarge />
      <H1Tilde>La Poésie</H1Tilde>
      <HSpacerMedium />
      <Grid>
        <Box gcs='4' gce='10'>
          <TextCard>
            <Body1>
              <p>
                D'abord, répéter une évidence : la poésie n'est pas
                particulièrement affaire de livre. Elle ne l'est même que
                rarement, et les livres, y compris ceux de l'Oie, ne sauraient
                être suffisants ! Toute l'histoire poétique du siècle qui vient
                de passer nous fait voir que si c'est bien avec les mots que
                l'on fait le poème, ce n'est pas nécessairement avec leur
                concours qu'apparaît la poésie.
              </p>
              <p>
                Sans doute, au départ, la poésie ne serait qu'assemblage
                d'éléments : le collage est cette belle leçon. Ces éléments
                peuvent être les instants de la vie, les bribes de la nature,
                les mots, les images. Ce sont ces éléments qui nous bouleversent
                lorsque nous les laissons nous bouleverser.
              </p>
              <p>
                La poésie, c'est notre présence au monde, c'est nous comme pont
                entre les éléments les plus éloignés les uns des autres (le
                secret du surréalisme), et c'est notre vie que l'on danse sur ce
                fil tendu au-dessus du vide. On veut nous faire croire que la
                vie est vide, qu'elle ne peut chercher que le confort et sa
                répétition, que notre vie est mort. La vie au contraire ne peut
                être que révolte, profonde, souriante ; ne peut être que poésie.
                Un livre de l'Oie, aimons-nous penser, est une fenêtre
                différente sur les possibles poétiques ; une fenêtre petite,
                certes, mais bien présente. Une invitation à jouer avec le monde
                et avec la phrase. L'ennemi de la poésie, c'est l'institué,
                l'institution, la mort dans l'âme et dans le mot. La voix du
                poème reste à chacun.
              </p>
            </Body1>
          </TextCard>
        </Box>
      </Grid>
      <HSpacerLarge />
      <Grid alignItems='end'>
        <Box color='accent' gcs='2' gce='7'>
          <Quote>
            Jeune gens, refusez le siège qu'on vous offre. Vous n'en seriez que
            la housse humaine, très vite froissée.
          </Quote>
          <Subtitle>
            <br />
            Georges Henein
          </Subtitle>
        </Box>
        <Box gcs='8' gce='13'>
          <Image src={stoneGoose} alt='oie de Cravan' />
          <Caption px='20px' pt='20px'>
            Lorem ipsum sic dolor sit amet, consectetur adispiscing elit. Donec
            eros odio, tempor at vulputate in, tincidunt et metus.
          </Caption>
          <HSpacerMedium />
        </Box>
      </Grid>
      <HSpacerLarge />
      <H2Icon Icon={Icons.Soleil}>Les Nouveautés de l'oie de Cravan</H2Icon>
      <HSpacerSmall />
      <Books books={books} />
      <HSpacerSmall />
      <Link to='/catalogue'>
        <Arrows>Consulter le catalogue complet</Arrows>
      </Link>
      <HSpacerLarge />
      <H2Icon Icon={Icons.Avion}>Ce qui s'en vient</H2Icon>
      <HSpacerSmall />
      <Box textAlign='center'>
        <Body1>
          <div>
            <i>Dans le bois avec les sorcières, </i>poèmes de Julie Roy
          </div>
          <div>
            <i>Delete</i>, prose poétique de Daphné B.
          </div>
          <div>
            <i>Maman apprivoisée</i>, poèmes de Geneviève Elverum (Geneviève
            Castrée)
          </div>
          <div>
            <i>L'Oiseau de ma mère</i>, poèmes de Natalie Thibault
          </div>
          <div>
            Le catalogue historique des 25 ans de L'Oie de Cravan&nbsp;!
          </div>
        </Body1>
      </Box>
      <HSpacerLarge />
    </Layout>
  );
}

const Books = ({ books }) => {
  return (
    <Grid>
      <Box gcs='1' gce='4'>
        <BookCard book={books[0]} />
      </Box>
      <Box gcs='4' gce='7'>
        <BookCard book={books[1]} />
      </Box>
      <Box gcs='7' gce='10'>
        <BookCard book={books[2]} />
      </Box>
      <Box gcs='10' gce='13'>
        <BookCard book={books[3]} />
      </Box>
    </Grid>
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

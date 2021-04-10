import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
import {
  H1Tilde,
  H2Icon,
  Box,
  Flex,
  Grid,
  Quote,
  Image,
  Arrows,
  Body1,
  Body2,
  Caption,
  Subtitle,
  HSpacerMedium,
  HSpacerLarge,
  HSpacerSmall,
  TextCard,
} from '../components/elements';
import nousRejoindre from '../images/NousRejoindre.png';
import cartePostaleDuBureauOie from '../images/CartePostaleBureauOie.png';
import { useTheme } from '@emotion/react';

const Accent = ({ children }) => {
  const theme = useTheme();
  return <span css={{ color: theme.colors.accent }}>{children}</span>;
};

export default function NousRejoindre() {
  return (
    <Layout title='Nous rejoindre'>
      <HSpacerLarge />
      <Image src={nousRejoindre} alt='Nous rejoindre' />
      <HSpacerLarge />
      <H1Tilde>Nous rejoindre</H1Tilde>
      <HSpacerMedium />
      <Grid>
        <Box gcs='4' gce='10'>
          <TextCard>
            <Body1>
              <p>
                Nos gigantesques bureaux sont situés au bucolique 6264 De la
                Roche. Comme le facteur craint de déranger notre concentration,
                le courrier est plutôt livré à l'adresse du dessous, à laquelle
                on peut nous écrire:
              </p>
              <p>
                6258, rue De a Roche
                <br />
                Montréal, Qc H2S 2E1 Canada
              </p>
              <p>
                Vous pouvez aussi écrire à
                <Accent> lentement // oiedecravan.com</Accent>
                <span css={{ fontWeight: 'bold' }}> *</span>
              </p>
            </Body1>
          </TextCard>
        </Box>
      </Grid>
      <Grid>
        <Box gcs='7' gce='11'>
          <div css={{ position: 'relative', bottom: '17px' }}>
            <TextCard>
              <Body2>
                * Le lecteur aura compris qu'il faut remplacer // par le signe @
                pour nous joindre. Nous recourons ici à cette forme subtilement
                codée afin d'éviter les vils robots spammeurs.
              </Body2>
            </TextCard>
          </div>
        </Box>
      </Grid>
      <HSpacerLarge />
      <H2Icon Icon={Icons.Nuage}>Pour vos envois de manuscrits</H2Icon>
      <HSpacerSmall />
      <Body1>
        <Grid>
          <Box gcs='2' gce='7'>
            <p>
              L'Oie de Cravan est une structure minuscule et un éditeur lent.
              Pour cette raison, il ne nous est malheureusement pas possible de
              répondre adéquatement à tous les envois qui nous sont faits. Nous
              nous engageons à vous manifester notre intérêt, le cas échéant,
              dans les trois mois suivant la réception de votre manuscrit. Par
              contre, si votre manuscrit ne retient pas notre attention, nous ne
              vous enverrons pas de lettre de refus ou d'évaluation crittique.
            </p>
            <p>
              Pour les livres d'images/bandes dessinées envoyées par courriel,
              nous vous demandons de nous noumettre quelques planches seulement.
              Si votre projet suscite notre intérêt, nous communiquerons avec
              vous pour en voir d'avantage.
            </p>
          </Box>
          <Box gcs='7' gce='12'>
            <p>
              La non-publication d'un manuscrit ne peut en aucune façon être
              interprétée comme un jugement spécifique sur un projet et encore
              moins sur son auteur! L'éditeur ne se veut pas critique
              littérarie. La littérature n'a que peu à voir avec nos choix.
              Plutôt la petite liberté de publier ce qui frappe de prime abord
              au coeur, quelquefois inexplicablement.
            </p>
            <p>
              En dernier lieu, une invitation: s'il le faut, s'il y a nécessité,
              vos textes trouveront leur voie. À vous d'y voir, chacun peut
              trouver le moyen de sa diffusion. Les outils sont là. La voix du
              poème reste à chacun.
            </p>
          </Box>
        </Grid>
      </Body1>
      <HSpacerMedium />
      <Grid>
        <Box gcs='4' gce='10'>
          <TextCard>
            <Body1>
              <p>
                Veuillez nous acheminer votre manuscrit à l'adresse suivante:
                oiedecravan.manuscrits // gmail.com.
              </p>
              <p>
                Nous continuons par ailleurs d'accepter les envois papier. Merci
                d'y indiquer une adresse courriel afin que nous puissions
                communiquer avec vous au besoin. Si vous désirez récupérer votre
                manuscrit, il est nécessaire d'inclure une enveloppe
                préaffranchie.
              </p>
            </Body1>
          </TextCard>
        </Box>
      </Grid>
      <HSpacerLarge />
      <Grid alignItems='end'>
        <Box gcs='2' gce='7'>
          <Image
            src={cartePostaleDuBureauOie}
            alt='carte postale du bureau Oie'
          />
          <Caption pt='20px' px='20px' pb='40px'>
            Lorem ipsum dolor sit amet, consectetur adipscing elit. Donec eros
            odio, tempor at vulputate in, tincidunt et metus.
          </Caption>
          <HSpacerMedium />
        </Box>
        <Box gcs='8' gce='12' color='accent'>
          <Quote>
            N'oublions jamais que presque toute époque est mauvaise pour la
            poésie, comme elle l'est pour la vie.
          </Quote>
          <Subtitle>
            <br />
            Jean-Yves Bériou
          </Subtitle>
        </Box>
      </Grid>
      <HSpacerLarge />
      {/*
      <H2Icon Icon={Icons.Coeur}>Mécénat express</H2Icon>
      <HSpacerSmall />
      <Grid>
        <Box gcs='4' gce='10'>
          <TextCard>
            <Body1>
              L'Oie de Cravan tient à poursuivre son style de vie poétique et
              accepte donc les dons.
            </Body1>
          </TextCard>
        </Box>
      </Grid>
      <HSpacerSmall />
      <Arrows href='#'>Envoyer un don à L'Oie</Arrows>
      <HSpacerLarge />
      */}
    </Layout>
  );
}

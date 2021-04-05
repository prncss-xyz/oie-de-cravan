import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import * as Icons from '../components/icons';
import {
  H1Tilde,
  H2Icon,
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

const Accent = ({ children }) => {
  const theme = useTheme();
  return <span css={{ color: theme.colors.accent }}>{children}</span>;
};

export default function NousRejoindre() {
  return (
    <Layout title='Nous rejoindre'>
      <Image src={nousRejoindre} alt='Nous rejoindre' />
      <H1Tilde>Nous rejoindre</H1Tilde>
      <Card>
        <Body1>
          <p>
            Nos gigantesques bureaux sont situés au bucolique 6264 De la Roche.
            Comme le facteur craint de déranger notre concentration, le courrier
            est plutôt livré à l'adresse du dessous- à laquelle on peut nous
            écrire:
          </p>
          <p>
            6258, rue De a Roche
            <br />
            Montréal, Qc H2S 2E1 Canada
          </p>
          <p>
            Vous pouvez aussi écrire à{' '}
            <Accent>lentement // oiedecravan.com</Accent>{' '}
            <span css={{ fontWeight: 'bold' }}>*</span>
          </p>
        </Body1>
      </Card>
      <Card>
        <Body2>
          * Le lecteur aura compris qu'il faut remplacer // par le signe @ pour
          nous joindre. Nous recourons ici à cette forme subtilement codée afin
          d'éviter les vils robots spammeurs depuis 2004.
        </Body2>
      </Card>
      <H2Icon Icon={Icons.Nuage}>Pour vos envois de manuscrits</H2Icon>
      <Flex>
        <Body1>
          <p>
            L'Oie de Cravan est une structure minuscule et un éditeur lent. Pour
            cette raison, il ne nous est malheureusemetn pas possible de
            répondre adéquatement à tous les envois qui nous sont fiats. Nous
            nous engageons à vous manifester notre intérêt, le cas échéant, dans
            les trosi mois suivant la réception de votre manuscrit. Par contre,
            si votre manuscrit ne retient pas notre attention, nous ne vous
            enverrons pas de lettre de refus ou d'évaluation crittique.{' '}
          </p>
          <p>
            Pour les livres d'images/bandes dessinées envoyées par courriel,
            nous vous demandons de nous noumettre quelques planches seulement.
            Si votre projet suscite notre intérêt, nous communiquerons vaec vous
            pour en voir d'avantage.
          </p>
        </Body1>
        <Body1>
          <p>
            La non-publication d'un manuscrit ne peut en aucune façon être
            interprétée comme un jugement spécifique sur un projet et encore
            moins sur son auteur! L'éditeur ne se veut pas critique littérarie.
            La littérature n'a que peu à voir avec nos choix. Plutôt la petite
            liberté de publier ce qui frappe de prime abord au coeur,
            quelquefois inexplicablement.
          </p>
          <p>
            En dernier lieu, une invitation: s'il le faut, s'il y a nécessité,
            vos textes trouveront leur voie. À vous d'y voir, chacun peut
            trouver le moyen de sa diffusion. Les outils sont là. La voix du
            poème reste à chacun.
          </p>
        </Body1>
      </Flex>
      <Card>
        <Body1>
          <p>
            Veuillez nous acheminer votre manuscrit à l'adresse suivante:
            oiedecravan.manuscrits // gmail.com.
          </p>
          <p>
            Nous continuons par ailleurs d'accepter les envois papier. Merci d'y
            indiquer une adresse courriel afin que nous puissions communiquer
            avec vous au besoin. Si vous désirez récupérer votre manuscrit, il
            est nécessaire d'inclure une enveloppe préaffranchie.
          </p>
        </Body1>
      </Card>
      <Box>
        <Image
          src={cartePostaleDuBureauOie}
          alt='carte postale du bureau Oie'
        />
        <Caption px='20px'>
          Lorem ipsum dolor sit amet, consectetur adipscing elit. Donec eros
          odio, tempor at vulputate in, tincidunt et metus.
        </Caption>
      </Box>
      <Box color='accent'>
        <Quote>
          N'oublions jamais que presque toute époque est mauvaise pour la
          poésie, comme elle l'est pour la vie.
        </Quote>
        <Subtitle>
          <br />
          Jean-Yves Bériou
        </Subtitle>
      </Box>
      <H2Icon Icon={Icons.Coeur}>Mécénat express</H2Icon>
      <Card>
        <Body1>
          L'Oie de Cravan tient à poursuivre son style de vie poétique et
          accepte donc les dons.
        </Body1>
      </Card>
      <Arrows href='#'>Envoyer un don à L'Oie</Arrows>
    </Layout>
  );
}

import React from 'react';
import arrowLeft from '../icons/arrow_left.svg';
import arrowRight from '../icons/arrow_right.svg';
import arrowTop from '../icons/arrow_top.svg';
import arrowBottom from '../icons/arrow_bottom.svg';
import avion from '../icons/avion.svg';
import ecrire from '../icons/ecrire.svg';
import panier from '../icons/panier.svg';
import search from '../icons/search.svg';
import coeur from '../icons/coeur.svg';
import nuage from '../icons/nuage.svg';
import play from '../icons/play.svg';
import soleil from '../icons/soleil.svg';
import Box from './elements';

const height = '18px';

export function ArrowLeft() {
  return <img width='22px' src={arrowLeft} alt='arrow left' />;
}
export function ArrowRight() {
  return <img width='22px' src={arrowRight} alt='arrow right' />;
}
export function ArrowTop() {
  return <img height='24px' src={arrowTop} alt='arrow top' />;
}
export function ArrowBottom() {
  return <img height='24px' src={arrowBottom} alt='arrow bottom' />;
}

export function Avion() {
  return <img height='22px' src={avion} alt='avion' />;
}

export function Ecrire() {
  return <img height={height} src={ecrire} alt='écrire' />;
}

export function Panier() {
  return <img height='20px' src={panier} alt='panier' />;
}

export function Search() {
  return <img src={search} alt='search' />;
}

export function Coeur() {
  return <img height={height} src={coeur} alt='coeur' />;
}

export function Nuage() {
  return <img height={height} src={nuage} alt='nuage' />;
}

export function Play() {
  return <img src={play} alt='play' />;
}

export function Soleil() {
  return <img height='22px' src={soleil} alt='soleil' />;
}

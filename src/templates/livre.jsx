import React, { useReducer } from 'react';
import { useCurrency } from '../components/currency';
import { Link } from 'gatsby';
import { useTheme } from '@emotion/react';
import { useLang } from '../components/lang';
import page from '../components/layout';
import * as Icons from '../components/icons';
import {
  Clickable,
  Video,
  Disk,
  H2Icon,
  H2,
  H3,
  Box,
  Body1,
  Flex,
  QuoteSmall,
  Grid,
  GridMd,
  Tilde,
  Subtitle,
  TextCard,
} from '../components/elements';
import nuage from '../icons/nuage.svg';
import { ArrowLeft, ArrowRight } from '../components/icons';
import { cleanBook, MD, unP } from '../utils';

const lang = 'fr';

const Nuage = () => {
  return (
    <Box px='10px' pb='2px'>
      <img src={nuage} alt='nuage' height='8px' />
    </Box>
  );
};

function BackLink() {
  const theme = useTheme();
  const { textes } = useLang();
  return (
    <Flex justifyContent='space-between' alignItems='flex-end'>
      <Link to='/catalogue'>
        <Box pr='8px' pb='4px'>
          <ArrowLeft />
        </Box>
      </Link>
      <Link to='/catalogue'>
        <Box
          t='20px'
          {...theme.styles.buttonSmall}
          dangerouslySetInnerHTML={{ __html: textes['retour'] }}
        />
      </Link>
      <Box flexGrow='1' />
    </Flex>
  );
}

function AddToCart({ data }) {
  const currency = 'CAD'; // EURO
  const amount = currency === 'CAD' ? data.prixCAD : data.prixEuro;
  const query = new URLSearchParams({
    add: 1,
    cmd: '_cart',
    business: 'lentement@oiedecravan.com',
    item_name: `${data.auteurLivre} - ${data.titre}`,
    amount,
    currency_code: currency,
    lc: 'fr',
    bn: 'PP-ShopCartBF',
    charset : 'iso-8859-15',
    return: 'http://www.oiedecravan.com/cat/catalogue.php?lang=fr%expire=true',
    shopping_url : 'http://www.oiedecravan.com/cat/catalogue.php?lang=fr',
    no_shipping: 0,
    no_note: 0,
  });
  const href = 'https://www.paypal.com/cgi-bin/webscr?' + query;
  return <a href={href}>Acheter {href}</a>;
}

function BuyButtonText({data}) {
  const [currency] = useCurrency();
  if (currency === 'unset') return (<>
    {data.prixCAD}&nbsp;$
    <span css={{ paddingLeft: '10px', paddingRight: '10px' }}>/</span>
    {data.prixEuro}&nbsp;€
  </>);
  if (currency==='CAD') return (<>{data.prixCAD}</>);
  if (currency==='USD') return (<>{data.prixUSD}</>);
  if (currency==='EUR') return (<>{data.prixEUR}</>);
}

function BuyButton({data}) {
  const theme = useTheme();
  return <>
    <Flex color='accent' {...theme.styles.button}>
      <Box p='10px' borderWidth='1px' borderStyle='solid'>
        <BuyButtonText data={data} />
      </Box>
    </Flex>
    <AddToCart data={data} />
    </>
}

function Epuise() {
  const theme = useTheme();
  return <Flex color='muted' {...theme.styles.button}>
    <Box p='10px' borderWidth='1px' borderStyle='solid'>Épuisé</Box>
  </Flex>
}

function Buy({ data, epuise}) {
  const disponible = !epuise && data.prixCAD && data.prixEuro && data.prixUSD;
  if (disponible) return <BuyButton data={data}/>;
  return <Epuise/>;
}

function Share() {
  const theme = useTheme();
  return (
    <Flex color='accent' {...theme.styles.button}>
      <Box>Partager </Box>
    </Flex>
  );
}

const useCycle = (length) => {
  const reducer = (state, action) => {
    let position;
    switch (action.type) {
      case 'CYCLE':
        position = state.position;
        position++;
        if (position === state.length) position = 0;
        return { ...state, position };
      case 'BACKCYCLE':
        position = state.position;
        if (position === 0) position = state.length;
        position--;
        return { ...state, position };
      case 'GO':
        return { ...state, position: action.position };
      default:
        throw Error('Unkown action');
    }
  };

  const [state, dispatch] = useReducer(reducer, { position: 0, length });
  const cycle = () => dispatch({ type: 'CYCLE' });
  const backcycle = () => dispatch({ type: 'BACKCYCLE' });
  const go = (position) => dispatch({ type: 'GO', position });
  return {
    position: state.position,
    cycle,
    backcycle,
    go,
  };
};

const BookCol = ({ data, ...props }) => {
  const { textes } = useLang();
  const theme = useTheme();
  const { position, cycle, go } = useCycle(data.couvertures.length);
  return (
    <Box
      color='accent'
      {...theme.styles.button}
      textTransform='uppercase'
      {...props}
      pb='15px'
    >
      {data.couvertures.length > 0 && (
        <Clickable onClick={cycle}>
          <img src={data.couvertures[position]} alt='couverture' />
          <Box pb='15px' />
        </Clickable>
      )}
      {data.couvertures.length > 1 && (
        <Flex pb='20px' justifyContent='center'>
          {data.couvertures.map((_, index) => (
            <Disk
              key={index}
              active={index === position}
              onClick={() => go(index)}
            />
          ))}
        </Flex>
      )}
      <Box py={['20px', '0px']}>
        {data.ISBN && <Box>ISBN: {data.ISBN}</Box>}
        {data.annee && <Box>{data.annee}</Box>}
        {data.hauteur && data.largeur && (
          <Box>
            {data.hauteur} x {data.largeur} cm
          </Box>
        )}
        {data.pages && (
          <Box>
            {data.pages}{' '}
            <div dangerouslySetInnerHTML={{ __html: unP(textes['pages']) }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const EmbbededText = ({ text, caption }) => {
  const theme = useTheme();
  return (
    <TextCard>
      <Box color='accent'>
        <QuoteSmall>
          <MD lang={lang} contents={text} />
        </QuoteSmall>
        <Box pt='20px' {...theme.styles.subtitle}>
          {caption}
        </Box>
      </Box>
    </TextCard>
  );
};

const EmbbededYoutube = ({ id, caption }) => {
  const theme = useTheme();
  return (
    <>
      <Box width='100%' height='500px'>
        <Video url={'https://www.youtube.com/embed/' + id} title={'caca'} />
      </Box>
      <Box pt='20px' {...theme.styles.body2}>
        <i>{caption}</i>
      </Box>
    </>
  );
};

const re = /youtube.com\/watch\?v=(.+)/;

const AutourDuLivre = ({ autour }) => {
  const { position, cycle, backcycle } = useCycle(autour.length);
  const {
    Description: description,
    Texte: texte,
    Youtube: youtube,
  } = autour[position].data;
  const { textes } = useLang();
  const youtubeId = youtube?.match(re)?.[1];
  return (
    <>
      <H2Icon
        Icon={Icons.Ecrire}
        dangerouslySetInnerHTML={{ __html: unP(textes['h2 0']) }}
      />
      <Box pb={['40px', '60px']} />
      <Grid>
        {autour.length > 1 && (
          <Box gcs='3' gce='4' justifyContent='end' alignSelf='center'>
            <Clickable onClick={backcycle}>
              <ArrowLeft />
            </Clickable>
          </Box>
        )}
        <Box gcs='4' gce='10'>
          {youtubeId ? (
            <EmbbededYoutube id={youtubeId} caption={description} />
          ) : (
            <EmbbededText text={texte} caption={description} />
          )}
        </Box>
        {autour.length > 1 && (
          <Box gcs='11' gce='12' alignSelf='center'>
            <Clickable onClick={cycle}>
              <ArrowRight />
            </Clickable>
          </Box>
        )}
      </Grid>
      <Box pb={['40px', '60px']} />
    </>
  );
};

const Main = ({ data: { airtableCatalogue, allAirtableAutourDuLivre } }) => {
  const data = cleanBook(airtableCatalogue);
  const autour = allAirtableAutourDuLivre.nodes;
  return (
    <>
      <Box pb={['40px', '60px']} />
      <GridMd>
        <Box gcs='2' gce='12' display={['none', 'inherit']}>
          <BackLink />
          <Box pb={['40px', '60px']} />
        </Box>
        <Box gcs='2' gce='5' display={['none', 'inherit']}>
          <BookCol data={data} />
        </Box>
        <Box gcs='6' gce='12'>
          <H2 color='accent'>{data.titre}</H2>
          <Box color='accent'>
            <Tilde />
          </Box>
          <Link to={`/catalogue?q=${data.auteur}`}>
            <H3 color='accent' textTransform='uppercase'>
              {data.auteurLivre}
            </H3>
          </Link>
          {data.createursSecondaires && (
            <Subtitle>{data.createursSecondaires}</Subtitle>
          )}
          <Box pb='40px' />
          <Flex color='accent' alignItems='baseline'>
            {data.genre && <Subtitle>{data.genre}</Subtitle>}
            {data.genre && data.collection && (
              <Box px='10px'>
                <Nuage />
              </Box>
            )}
            {data.collection && <Subtitle>{data.collection}</Subtitle>}
          </Flex>
          <Box pb='40px' />
          <Box display={['inherit', 'none']}>
            <BookCol data={data} />
          </Box>
          <Body1>
            {data.presentation.length > 0 && (
              <MD lang={lang} contents={data.presentation} />
            )}
          </Body1>
          <Box pb='40px' />
          { process.env.GATSBY_TRANSACTION==='true' &&  
            <Buy data={data} />
          }
          <Box pb='40px' />
          {/*<Share />*/}
        </Box>
      </GridMd>
      <Box pb={['100px', '180px']} />
      {process.env.GATSBY_AUTOUR_DU_LIVRE==='true' &&  
        <AutourDuLivre autour={autour} autourDuLivre={data.autourDuLivre} />
      }
    </>
  );
};

export default page(Main);

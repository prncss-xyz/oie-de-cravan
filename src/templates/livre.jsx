import React, { useReducer } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
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
  GridMd,
  Tilde,
  Subtitle,
  TextCard,
} from '../components/elements';
import nuage from '../icons/nuage.svg';
import { ArrowLeft, ArrowRight } from '../components/icons';
import { cleanBook, unP } from '../utils';
import { typo_ajust } from '../../util';

const Nuage = () => {
  return (
    <Box px='10px' pb='2px'>
      <img src={nuage} alt='nuage' height='8px' />
    </Box>
  );
};

function BackLink() {
  const theme = useTheme();
  const { lang, textes } = useLang();
  return (
    <Link to={lang === 'fr' ? '/catalogue' : '/en/catalogue'}>
      <Flex justifyContent='space-between' alignItems='flex-end'>
        <Box pr='8px' pb='4px'>
          <ArrowLeft />
        </Box>
        <Box
          t='20px'
          {...theme.styles.buttonSmall}
          dangerouslySetInnerHTML={{ __html: textes['retour'] }}
        />
        <Box flexGrow='1' />
      </Flex>
    </Link>
  );
}

function AddToCart({ data }) {
  const { lang } = useLang();
  const currency = 'CAD'; // EURO
  const amount = currency === 'CAD' ? data.prixCAD : data.prixEuro;
  const query = new URLSearchParams({
    add: 1,
    cmd: '_cart',
    business: 'lentement@oiedecravan.com',
    item_name: `${data.auteurLivre} - ${data.titre}`,
    amount,
    currency_code: currency,
    lc: lang,
    bn: 'PP-ShopCartBF',
    charset: 'iso-8859-15',
    return: 'http://www.oiedecravan.com/cat/catalogue.php?lang=fr%expire=true', // FIXME:
    shopping_url: 'http://www.oiedecravan.com/cat/catalogue.php?lang=fr', // FIXME:
    no_shipping: 0,
    no_note: 0,
  });
  const href = 'https://www.paypal.com/cgi-bin/webscr?' + query;
  return <a href={href}>Acheter {href}</a>;
}

function BuyButtonText({ data }) {
  const [currency] = useCurrency();
  if (currency === 'unset')
    return (
      <>
        {data.prixCAD}&nbsp;$
        <span css={{ paddingLeft: '10px', paddingRight: '10px' }}>/</span>
        {data.prixEuro}&nbsp;???
      </>
    );
  if (currency === 'CAD') return <>{data.prixCAD}</>;
  if (currency === 'USD') return <>{data.prixUSD}</>;
  if (currency === 'EUR') return <>{data.prixEUR}</>;
}

function BuyButton({ data }) {
  const theme = useTheme();
  return (
    <>
      <Flex color='accent' {...theme.styles.button}>
        <Box p='10px' borderWidth='1px' borderStyle='solid'>
          <BuyButtonText data={data} />
        </Box>
      </Flex>
      <AddToCart data={data} />
    </>
  );
}

function Epuise() {
  const theme = useTheme();
  return (
    <Flex color='muted' {...theme.styles.button}>
      <Box p='10px' borderWidth='1px' borderStyle='solid'>
        ??puis??
      </Box>
    </Flex>
  );
}

function Buy({ data, epuise }) {
  const disponible = !epuise && data.prixCAD && data.prixEuro && data.prixUSD;
  if (disponible) return <BuyButton data={data} />;
  return <Epuise />;
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
  const { lang, textes } = useLang();
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
        <>
          <Clickable onClick={cycle}>
            <Flex flexDirection='colum' justifyContent='center'>
              <img src={data.couvertures[position]} alt='couverture' />
            </Flex>
          </Clickable>
          <Box pb='15px' />
        </>
      )}
      {data.couvertures.length > 1 && (
        <Flex justifyContent='center'>
          {data.couvertures.map((_, index) => (
            <Disk
              key={index}
              active={index === position}
              onClick={() => go(index)}
            />
          ))}
        </Flex>
      )}
      <Box pb='20px' />
      <Box py={['20px', '0px']}>
        {data.ISBN && <Box>ISBN: {data.ISBN}</Box>}
        {data.annee && (
          <Link to={`${lang === 'fr' ? '/' : '/en/'}catalogue?q=${data.annee}`}>
            {data.annee}
          </Link>
        )}
        {data.hauteur && data.largeur && (
          <Box>
            {data.hauteur} x {data.largeur} cm
          </Box>
        )}
        {data.pages && (
          <Box>
            <div
              dangerouslySetInnerHTML={{
                __html: data.pages + ' ' + textes['pages'],
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

function SignatureText(data) {
  const signature = typo_ajust(data.Texte__signature)?.trim();
  const description_italiques = typo_ajust(
    data['Texte__description_italiques']?.trim(),
  );
  const description_romain = typo_ajust(
    data['Texte__description_romain'],
  )?.trim();
  return (
    <>
      {signature}
      {signature && (description_romain || description_italiques) && ', '}
      <i>{description_italiques}</i>
      {description_italiques && description_romain && ' ??? '}
      {description_romain}
    </>
  );
}

function SignatureLink({ children, ...data }) {
  const href = data['Texte__hyperlien'];
  if (href) {
    return (
      <Link href={href}>
        {children}
        <FaExternalLinkAlt css={{ marginLeft: 10 }} size={14} />
      </Link>
    );
  }
  return children;
}

const EmbbededText = (data) => {
  const texte = data.Texte_contenu?.childMarkdownRemark.html;
  const theme = useTheme();
  if (!texte) return null;
  return (
    <TextCard>
      <Box
        color='accent'
        // css={{'& a': {color: 'primary'}}}
      >
        <Box
          {...theme.styles.quoteSmall}
          dangerouslySetInnerHTML={{ __html: texte }}
        />
        <Box pt='20px' {...theme.styles.subtitle}>
          <SignatureLink {...data}>
            <SignatureText {...data} />
          </SignatureLink>
        </Box>
      </Box>
    </TextCard>
  );
};

const EmbbededYoutube = (data) => {
  const id = data['Youtube__URL']?.match(re)?.[1];
  // const caption = data['Image__l_gende'];
  // const theme = useTheme();
  if (!id) return null;
  return (
    <>
      <Box width='100%' height='500px'>
        <Video url={'https://www.youtube.com/embed/' + id} title={'caca'} />
      </Box>
      {/* {caption && <Box pt='20px' {...theme.styles.body2}> */}
      {/*   <i>{caption}</i> */}
      {/* </Box>} */}
    </>
  );
};

const re = /youtube.com\/watch\?v=(.+)/;

const AutourDuLivre0 = ({ autour }) => {
  const { position, cycle, backcycle } = useCycle(autour.length);
  const { textes } = useLang();
  return (
    <>
      <H2Icon
        Icon={Icons.Ecrire}
        dangerouslySetInnerHTML={{ __html: unP(textes['h2 0']) }}
      />
      <Box pb={['40px', '60px']} />
      <GridMd>
        {autour.length > 1 && (
          <Box gcs={3} gce={4} justifyContent='end' alignSelf='center'>
            <Clickable onClick={backcycle}>
              <Box py='10px'>
                <ArrowLeft />
              </Box>
            </Clickable>
          </Box>
        )}
        <Box gcs={4} gce={10}>
          <EmbbededYoutube {...autour[position].data} />
          <EmbbededText {...autour[position].data} />
        </Box>
        {autour.length > 1 && (
          <Box gcs={11} gce={12} alignSelf='center'>
            <Clickable onClick={cycle}>
              <Box py='10px'>
                <ArrowRight />
              </Box>
            </Clickable>
          </Box>
        )}
      </GridMd>
      <Box pb={['40px', '60px']} />
    </>
  );
};

const AutourDuLivre = ({ autour }) => {
  if (autour.length === 0) return null;
  return <AutourDuLivre0 autour={autour} />;
};

const Main = ({ data: { airtableCatalogue, allAirtableAutourDuLivre } }) => {
  const { lang } = useLang();
  const data = cleanBook(lang, airtableCatalogue);
  const autour = allAirtableAutourDuLivre.nodes;
  return (
    <>
      <Box pb={['40px', '60px']} />
      <GridMd>
        <Box gcs={2} gce={12} display={['none', 'none', 'inherit']}>
          <BackLink />
          <Box pb={['40px', '60px']} />
        </Box>
        <Box gcs={2} gce={5} display={['none', 'none', 'inherit']}>
          <BookCol data={data} />
        </Box>
        <Box gcs={[0, 2, 6]} gce={[13, 12, 12]}>
          <H2 color='accent'>{typo_ajust(data.titre)}</H2>
          <Box color='accent'>
            <Tilde />
          </Box>
          <Link
            to={`${lang === 'fr' ? '/' : '/en/'}catalogue?q=${data.auteur}`}
          >
            <H3 color='accent' textTransform='uppercase'>
              {typo_ajust(data.auteurLivre)}
            </H3>
          </Link>
          {data.createursSecondaires && (
            <Subtitle>{typo_ajust(data.createursSecondaires)}</Subtitle>
          )}
          <Box pb='40px' />
          <Flex color='accent' alignItems='baseline'>
            {data.genre && (
              <Link
                to={`${lang === 'fr' ? '/' : '/en/'}catalogue?q=${data.genre}`}
              >
                <Subtitle>{typo_ajust(data.genre)}</Subtitle>
              </Link>
            )}
            {data.genre && data.collection && (
              <Box px='10px'>
                <Nuage />
              </Box>
            )}
            {data.collection && (
              <Link
                to={`${lang === 'fr' ? '/' : '/en/'}catalogue?q=${
                  data.collection
                }`}
              >
                <Subtitle>{data.collection}</Subtitle>
              </Link>
            )}
          </Flex>
          <Box pb='40px' />
          <Box display={['inherit', 'inherit', 'none']}>
            <BookCol data={data} />
          </Box>
          <Body1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  airtableCatalogue.data['Presentation_et_bio_' + lang]
                    ?.childMarkdownRemark.html,
              }}
            />
          </Body1>
          <Box pb='40px' />
          {process.env.GATSBY_TRANSACTION === 'true' && <Buy data={data} />}
          <Box pb='40px' />
          {/*<Share />*/}
        </Box>
      </GridMd>
      <AutourDuLivre autour={autour} />
    </>
  );
};

export default page(Main);

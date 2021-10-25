import React, { useContext } from 'react';

const linksFr = {
  'accueil': '/',
  'catalogue': '/catalogue',
  'nouvelles': null,
  'nous rejoindre': '/nous-rejoindre',
}

const linksEn = {
  'accueil': '/en',
  'catalogue': '/en/catalogue',
  'nouvelles': null,
  'nous rejoindre': '/en/reach-us',
}

const Context = React.createContext(null);

export const LangProvider = ({ data: {
  layout: { nodes: layoutTextes0 },
  allAirtableTexteDuSite: { nodes: textes0 },
}, lang, children }) => {
  const textes = Object.fromEntries(
    textes0.map(({ data }) => [
      data.Name,
      data[lang].childMarkdownRemark.html,
    ]),
  );
  const layoutTextes = Object.fromEntries(
    layoutTextes0.map(({ data }) => [
      data.Name,
      data[lang].childMarkdownRemark.html,
    ]),
  );
  const links = lang === 'fr' ? linksFr : linksEn;
  return <Context.Provider value={{ lang, textes, layoutTextes, links }}>{children}</Context.Provider>
}

export const useLang = () => {
  const res = useContext(Context);
  if (!res) throw new Error('useLang should be case wihtin a LangProvider');
  return res;
}

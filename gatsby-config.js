const { normalize } = require('./util');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/oie-de-cravan`,
  siteMetadata: {
    title: "L'Oie de Cravan",
  },
  plugins: [
    {
      options: {},
      resolve: `gatsby-plugin-pnpm`,
    },
    `gatsby-plugin-emotion`,
    // BUG: `placeholder=none` causes memory leak; see https://github.com/gatsbyjs/gatsby/issues/34795
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Spectral:ital,400,700`, `Arimo:400,700`],
        display: 'block',
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_CATALOGUE,
            tableName: 'Catalogue',
            queryName: 'Catalogue',
            separateNodeType: true,
            mapping: {
              Presentation_et_bio_fr: 'text/markdown',
              Presentation_et_bio_en: 'text/markdown',
            },
            defaultValues: {
              Createurs_secondaires_fr: '',
              Createurs_secondaires_en: '',
            },
          },
          {
            baseId: process.env.AIRTABLE_BASE_CATALOGUE,
            tableName: 'Autour du livre',
            queryName: 'AutourDuLivre',
            tableLinks: ['Catalogue'],
            separateNodeType: true,
            mapping: {
              Texte_contenu: 'text/markdown',
            },
          },
          {
            baseId: process.env.AIRTABLE_BASE_TEXTES_DU_SITE,
            tableName: 'Textes du site',
            queryName: 'TextesDuSite',
            separateNodeType: true,
            mapping: {
              fr: 'text/markdown',
              en: 'text/markdown',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-custom`],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'books',
        engine: 'lunr',
        query: `
          {
            allAirtableCatalogue {
              edges {
                node {
                  id
                  data {
                    Titre
                    Auteur
                    Collection
                    Genre
                    ISBN
                    Createurs_secondaires_fr
                    Createurs_secondaires_en
                    Publication__date_(formatString: "YYYY")
                  }
                }
              }
            }
          }
        `,
        ref: 'id',
        index: [
          'titre',
          'auteur',
          'collection',
          'genre',
          'isbn',
          'createursSecondaires_en',
          'createursSecondaires_fr',
          'annee',
        ],
        normalizer: ({ data }) =>
          data.allAirtableCatalogue.edges.map(({ node }) => {
            return {
              id: node.id,
              titre: normalize(node?.data['Titre']),
              auteur: normalize(node?.data['Auteur']),
              collection: normalize(node?.data['Collection']),
              genre: normalize(node?.data['Genre']),
              isbn: normalize(node?.data['ISBN']),
              createursSecondaires_fr: normalize(
                node?.data['Createurs_secondaires_fr'],
              ),
              createursSecondaires_en: normalize(
                node?.data['Createurs_secondaires_en'],
              ),
              annee: node?.data['Publication__date_'],
            };
          }),
      },
    },
  ],
};

const { normalize } = require('./util');
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
    // {
    //   options: {
    //     resolve: `gatsby-plugin-paypal`,
    //     //clientId: process.env.PAYPAL_CLIENT_ID,
    //     clienId: 'sb',
    //     // buyerCountry: 'CA',
    //     //currency: `EUR`, // Optional
    //     //vault: true, // Optional
    //   },
    // },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Catalogue',
            queryName: 'Catalogue',
            separateNodeType: true,
            defaultValues: {
              Cr_ateurs_secondaires__en_: '',
            },
          },
         {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Autour du livre',
            queryName: 'AutourDuLivre',
            tableLinks: ['Livre'],
            separateNodeType: true,
          },
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: 'Texte du site',
            queryName: 'TexteDuSite',
            mapping: {
              fr: 'text/markdown',
              en: 'text/markdown',
            },
            separateNodeType: true,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-custom`],
      }
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
                    Cr_ateurs_secondaires__fr_
                    Cr_ateurs_secondaires__en_
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
                node?.data['Cr_ateurs_secondaires__fr_'],
              ),
              createursSecondaires_en: normalize(
                node?.data['Cr_ateurs_secondaires__en_'],
              ),
            };
          }),
      },
    },
  ],
};

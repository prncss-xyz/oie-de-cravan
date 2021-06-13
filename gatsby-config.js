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
    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        //clientId: process.env.PAYPAL_CLIENT_ID,
        clienId: 'sb',
        // buyerCountry: 'CA',
        //currency: `EUR`, // Optional
        //vault: true, // Optional
      },
    },
    // {
    //   resolve: `gatsby-plugin-build-date`,
    // },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            tableName: process.env.AIRTABLE_TABLE_NAME,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'books',
        engine: 'lunr',
        query: `
          {
            allAirtable {
              edges {
                node {
                  id
                  data {
                    Titre
                    Auteur
                    Collection
                    Genre
                    ISBN
                    Cr_ateurs_secondaires
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
          'createursSecondaires',
        ],
        normalizer: ({ data }) =>
          data.allAirtable.edges.map(({ node }) => {
            return {
              id: node?.id,
              titre: normalize(node?.data['Titre']),
              auteur: normalize(node?.data['Auteur']),
              collection: normalize(node?.data['Collection']),
              genre: normalize(node?.data['Genre']),
              isbn: normalize(node?.data['ISBN']),
              createursSecondaires: normalize(
                node?.data['Cr_ateurs_secondaires'],
              ),
            };
          }),
      },
    },
  ],
};

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
                  }
                }
              }
            }
          }
        `,

        ref: 'id',
        index: ['titre'],
        normalizer: ({ data }) =>
          data.allAirtable.edges.map(({ node }) => {
            return {
              id: node.id,
              titre: normalize(node.data['Titre']),
            };
          }),
      },
    },
  ],
};

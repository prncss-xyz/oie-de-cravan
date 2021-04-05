const { resolve } = require('path');

// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "L'Oie de Cravan",
  },
  plugins: [
    {
      options: {},
      resolve: `gatsby-plugin-pnpm`,
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE,
            // tableName: 'catalogue',
            tableName: process.env.AIRTABLE_TABLE_NAME,
          },
        ],
      },
    },
  ],
};

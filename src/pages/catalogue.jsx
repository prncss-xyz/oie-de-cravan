import React from 'react';
import { graphql } from 'gatsby';
import Catalogue from '/src/templates/catalogue';

export default function Page({ ...props }) {
  return <Catalogue en='/en/catalogue' {...props} />;
}

export const query = graphql`
  query CatalogueQuery {
    layout: allAirtableTextesDuSite(
      filter: { data: { url: { eq: "layout" } } }
    ) {
      nodes {
        data {
          fr {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/catalogue" } } }) {
      nodes {
        data {
          fr {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    allAirtableCatalogue(
      filter: {data: {Pr_sentation_et_bio__fr_: {glob: "*"}}} 
      sort: { fields: data___Publication__date_, order: DESC }
    ) {
      nodes {
        id
        data {
          Auteur_livre
          Couverture {
            url
          }
          Titre
          Auteur
          Pr_sentation_et_bio__en_
          Pr_sentation_et_bio__fr_
        }
      }
    }
    localSearchBooks {
      store
      index
    }
  }
`;

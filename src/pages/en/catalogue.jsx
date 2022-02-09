import React from 'react';
import { graphql } from 'gatsby';
import Catalogue from '/src/templates/catalogue'

export default function Page({ ...props }) {
  return <Catalogue fr='/catalogue' {...props} />
}

export const query = graphql`
  query EnCatalogueQuery {
    layout: allAirtableTextesDuSite(
      filter: { data: { url: { eq: "layout" } } }
    ) {
      nodes {
        data {
          en {
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
          en {
            childMarkdownRemark {
              html
            }
          }
          Name
        }
      }
    }
    allAirtableCatalogue(
      filter: {data: {Pr_sentation_et_bio__en_: {glob: "*"}}} 
      sort: {fields: data___Publication__date_, order: DESC }
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
        }
      }
    }
    localSearchBooks {
      store
      index
    }
  }
`;

import Main from '/src/templates/nous-rejoindre';
import { graphql } from 'gatsby';

export default function Page({ ...props }) {
  return <Main en='/en/reach-us' {...props} />;
}

export const queryStr = graphql`
  query NousRejoindreQuery {
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
    allAirtableTextesDuSite(filter: { data: { url: { eq: "/nous-rejoindre" } } }) {
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
  }
`;

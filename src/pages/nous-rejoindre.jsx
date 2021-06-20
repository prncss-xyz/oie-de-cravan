import Main from '/src/templates/nous-rejoindre';
import { graphql } from 'gatsby';

export default function Page({ ...props }) {
  return <Main en='/en/reach-us' {...props} />;
}

export const queryStr = graphql`
  query NousRejoindreQuery {
    layout: allAirtableTexteDuSite(
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
    allAirtableTexteDuSite(filter: { data: { url: { eq: "/nous-rejoindre" } } }) {
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

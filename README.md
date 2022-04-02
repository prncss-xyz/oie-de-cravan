# Oie de Cravan's website

L'Oie de Cravan is a poetry editor. This is the new website's source code, build with Gatsby, with Airtable as CMS and deployed on gitlab with CI/CD. (If your reading this from github, this is obiously a clone of the intended repo.)

Pre-launch verion can be seen [here](https://prncss.gitlab.io/oie-de-cravan/).

Graphism is provides by [LOKI design](https://www.lokidesign.net/). Translated as reusable components. Layout is responsive.

## Known issues

Airtable has it's private markdown engine. `_word _rest of the text` will italicize 'word' in airtable live editor, but not with any of the open source markdown engine I have tested. This requires extra caution for the client.

Markdown is notoriously not ergonomical for displaying verses. It is however a required feature for this site. We must use `remark-breaks` plugin, which further increases discrepency between live edition in airtable and final display on the website. It is a likely cause of typographical errors and contents must be reviewed carefully.

A benign memory leek is caused by `gatsby-plugin-image` when attribute `placeholder` is set to `none`. See
https://github.com/gatsbyjs/gatsby/issues/34795. Proposed fix does not seem to work with pnpm.

I was unable to correctly configure attachments, probably dued to version discrepency. This lead to unability to fetch images at build times with following consequences:

- slower load time,
- inconsistencies in the masonery layout,
- unresonsive carrousel.

The `gatsby-source-airtable` seems to be unmaintained and have a few issues.

It deals badly with column names that are not valid GraphQl identifiers, introducing different problems depending of the configuration options relative to that colum. The safest is to set column names in airtable to their unpalatable yet computer friendly version.

Despite these inconveniencies, client is quite happy having the new website well integreted in their preexisting workflow.

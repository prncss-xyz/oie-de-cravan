/**
 * @jest-environment jsdom
 */
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import renderer from 'react-test-renderer';
import {unP} from '../utils'

import theme from './theme';
import {
  Arrows,
  Box,
  Flex,
  Grid,
  BookCard,
  Navigation,
  Tilde,
  H1Tilde,
  NavigationFooter,
  Video,
  H2,
  H3,
  GridMd,
  H3Icon,
  VSpacerLarge,
  VSpacerMedium,
  VSpacerSmall,
  VSpacerXSmall,
  Disk,
  Card,
  TextCardMd,
  TextCard,
} from './elements';

describe('Video', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Video />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Box', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Box>contenu</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Flex', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Flex>contenu</Flex>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Grid', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Grid>contenu</Grid>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('BookCard', () => {
  const book = {
    page: 200,
    titre: 'Le titre',
    auteurLivre: 'Prénom Nom',
    couverture: 'couverture.jpg',
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <BookCard book={book} color='blue' />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Navigation', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Navigation color='blue'>content</Navigation>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Tilde', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Tilde />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GridMd color='blue' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('H1Tilde', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <H1Tilde dangerouslySetInnerHTML={{__html: unP('contents')}} color='blue' />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('H2', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <H2>content</H2>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('H3', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <H3>content</H3>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('H3Icon', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <H3Icon
            icon='icon.png'
            dangerouslySetInnerHTML={{__html: unP('<p>contents</p>')}}
            color='blue'
          />
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('VSpacerLarge', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VSpacerLarge />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('VSpacerMedium', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VSpacerMedium />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('VSpacerSmall', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VSpacerSmall />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('VSpacerXSmall', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VSpacerXSmall />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Arrows', () => {
  it('renders correctly', () => {
    const treeActive = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Arrows dangerouslySetInnerHTML={{__html: unP('<p>contents</p>')}} />
        </ThemeProvider>,
      )
      .toJSON();
    expect(treeActive).toMatchSnapshot();
  });
});

describe('Disk', () => {
  it('renders correctly', () => {
    const treeActive = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Disk active={true} color='blue' />
        </ThemeProvider>,
      )
      .toJSON();
    expect(treeActive).toMatchSnapshot();
    const treeInactive = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Disk active={true} color='blue' />
        </ThemeProvider>,
      )
      .toJSON();
    expect(treeInactive).toMatchSnapshot();
  });
});

// TODO: test Search

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Card pix='20px' piy='30px' color='blue'>contents</Card>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TextCardMd', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <TextCardMd color='blue'>contents</TextCardMd>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('TextCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <TextCard color='blue'>contents</TextCard>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// TODO: test Clickable
// TODO: should we keep components that do nothing but adding a style? test of so

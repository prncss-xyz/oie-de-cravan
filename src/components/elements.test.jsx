import React from 'react';
import renderer from "react-test-renderer";

import { Video } from './elements';

describe('Video', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Video />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { IFrame } from './iframe';


describe('iFrame', () => {
  it('should snapshot', () => {
    const tree = renderer.create(<IFrame src='https://www.google.com' />);
    expect(tree).toMatchSnapshot();
  });
});

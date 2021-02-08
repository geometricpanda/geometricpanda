import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { IFrameContainer } from './iframe-container';

describe('iFrame Container', () => {

  it('should have 0 height when loading', () => {
    const tree = renderer.create(<IFrameContainer loaded={false} />);
    expect(tree.toJSON()).toHaveStyleRule('max-height', '0');
  });

  it('should have 100% height when loaded', () => {
    const tree = renderer.create(<IFrameContainer loaded={true} />);
    expect(tree.toJSON()).toHaveStyleRule('max-height', '100%');
  });
});

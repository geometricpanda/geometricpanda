import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { IFrameContainer } from './iframe-container';

describe('iFrame Manager', () => {

  it('should have scale 0 when loaded', () => {
    const tree = renderer.create(<IFrameContainer loaded={false} />);
    expect(tree.toJSON()).toHaveStyleRule('transform', 'scale(0)');
  });

  it('should have scale 1 when loaded', () => {
    const tree = renderer.create(<IFrameContainer loaded={true} />);
    expect(tree.toJSON()).toHaveStyleRule('transform', 'scale(1)');
  });
});

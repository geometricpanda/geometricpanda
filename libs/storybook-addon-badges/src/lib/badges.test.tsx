import React from 'react';
import renderer from 'react-test-renderer';
import { TBadgesConfig } from './types';
import { Badges } from './badges';

enum BADGE_KEYS {
  BADGE = 'badge',
  BADGE_TWO = 'badge-two',
}

const badgesConfig: TBadgesConfig = {
  [BADGE_KEYS.BADGE]: {
    title: 'Badge',
    contrast: '#6200EE',
    color: '#018786'
  },
  [BADGE_KEYS.BADGE_TWO]: {
    title: 'Badge Two',
    contrast: '#6200EE',
    color: '#018786'
  }
};

/**
 * Tree length is always offset by two due to the Storybook separator
 */

describe('Badges', () => {

  it('should render zero badges', () => {
    const parameters = {
      badgesConfig,
      badges: []
    };

    const tree = renderer.create(<Badges parameters={parameters} />);
    expect(tree.toJSON().length).toBe(2);
  });

  it('should render badges', () => {
    const parameters = {
      badgesConfig,
      badges: [
        BADGE_KEYS.BADGE
      ]
    };

    const tree = renderer.create(<Badges parameters={parameters} />);
    expect(tree.toJSON().length).toBe(3);
  });

});

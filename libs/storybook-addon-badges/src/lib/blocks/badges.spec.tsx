import React from 'react';
import renderer from 'react-test-renderer';
import { BadgesConfig } from '../types';
import { Badges } from './badges';

enum BADGE_KEYS {
  BADGE = 'badge',
  BADGE_TWO = 'badge-two',
}

const badgesConfig: BadgesConfig = {
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

    const tree = renderer.create(<Badges {...parameters} />);
    expect(Object.keys(tree.toJSON()).length).toBe(2);
  });

  it('should not crash out if config is empty', () => {
    const parameters = {};
    const tree = renderer.create(<Badges {...parameters} />);
    expect(Object.keys(tree.toJSON()).length).toBeTruthy();
  });

  it('should render a badge', () => {
    const parameters = {
      badgesConfig,
      badges: [
        BADGE_KEYS.BADGE
      ]
    };

    const tree = renderer.create(<Badges {...parameters} />);
    expect(Object.keys(tree.toJSON()).length).toBe(3);
  });


  it('should render multiple badges', () => {
    const parameters = {
      badgesConfig,
      badges: [
        BADGE_KEYS.BADGE,
        BADGE_KEYS.BADGE_TWO
      ]
    };

    const tree = renderer.create(<Badges {...parameters} />);
    expect(Object.keys(tree.toJSON()).length).toBe(4);
  });

});

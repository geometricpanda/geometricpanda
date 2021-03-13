import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { BadgesConfig } from '../types';
import { Badge, BadgeInner } from './badge';
import { defaultBadgeConfig } from '../shared';

enum BADGE_KEYS {
  BADGE = 'badge',
  NO_TITLE = 'no-title',
  NO_COLOR = 'no-color',
  NO_CONTRAST = 'no-contrast',
  UNKNOWN_BADGE = 'unknown'
}

const badgeConfig: BadgesConfig = {
  [BADGE_KEYS.BADGE]: {
    title: 'Badge',
    contrast: '#6200EE',
    color: '#018786'
  },
  [BADGE_KEYS.NO_TITLE]: {
    contrast: '#6200EE',
    color: '#018786'
  },
  [BADGE_KEYS.NO_COLOR]: {
    title: 'Badge',
    contrast: '#6200EE'
  },
  [BADGE_KEYS.NO_CONTRAST]: {
    title: 'Badge',
    color: '#018786'
  }
};

describe('Badge', () => {

  it('should render a styled badge from config', () => {
    const tree = renderer.create(<Badge badge={BADGE_KEYS.BADGE} config={badgeConfig} />);
    expect(tree).toMatchSnapshot();
  });

  const badgeMap = [
    ['Full Badge', BADGE_KEYS.BADGE, badgeConfig[BADGE_KEYS.BADGE].title],
    ['No Title', BADGE_KEYS.NO_TITLE, BADGE_KEYS.NO_TITLE],
    ['No Color', BADGE_KEYS.NO_COLOR, badgeConfig[BADGE_KEYS.NO_COLOR].title],
    ['No Contrast', BADGE_KEYS.NO_CONTRAST, badgeConfig[BADGE_KEYS.NO_CONTRAST].title],
    ['Unknown', BADGE_KEYS.UNKNOWN_BADGE, BADGE_KEYS.UNKNOWN_BADGE]
  ];

  describe.each(badgeMap)(`Badge - %s`, (_, key, title) => {
    it(`should have a title of ${title} `, () => {
      const tree = renderer.create(<Badge badge={key} config={badgeConfig[key]} />);
      expect(JSON.stringify(tree)).toContain(title);
    });
  });

  const badgeInnerMap = [
    ['Full Badge', BADGE_KEYS.BADGE, badgeConfig[BADGE_KEYS.BADGE].contrast, badgeConfig[BADGE_KEYS.BADGE].color],
    ['No Title', BADGE_KEYS.NO_TITLE, badgeConfig[BADGE_KEYS.NO_TITLE].contrast, badgeConfig[BADGE_KEYS.NO_TITLE].color],
    ['No Color', BADGE_KEYS.NO_COLOR, badgeConfig[BADGE_KEYS.NO_COLOR].contrast, defaultBadgeConfig.color],
    ['No Contrast', BADGE_KEYS.NO_CONTRAST, defaultBadgeConfig.contrast, badgeConfig[BADGE_KEYS.NO_CONTRAST].color],
    ['Unknown', BADGE_KEYS.UNKNOWN_BADGE, defaultBadgeConfig.contrast, defaultBadgeConfig.color]
  ];

  describe.each(badgeInnerMap)('Badge Inner - %s', (_, key, contrast, color) => {

    it(`should have a color of ${color} `, () => {
      const tree = renderer.create(<BadgeInner badge={key} config={badgeConfig[key]} />);
      expect(tree.toJSON()).toHaveStyleRule('color', color);
    });

    it(`should have a contrast color of ${color} `, () => {
      const tree = renderer.create(<BadgeInner badge={key} config={badgeConfig[key]} />);
      expect(tree.toJSON()).toHaveStyleRule('background-color', contrast);
    });

  });

});

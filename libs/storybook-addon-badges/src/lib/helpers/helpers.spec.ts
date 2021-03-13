import { BadgeConfig, BadgesConfig } from '../types';
import { defaultBadgeConfig } from '../shared';
import { getBadgeConfig, getColor, getContrastColor, getTitle } from './helpers';

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

describe('getBadgeConfig', () => {

  it('should return the full badge config', () => {
    const config = getBadgeConfig(BADGE_KEYS.BADGE, badgeConfig[BADGE_KEYS.BADGE]);
    const expectedConfig: BadgeConfig = badgeConfig[BADGE_KEYS.BADGE];
    expect(config).toEqual(expectedConfig);
  });

  it('should return a full badge config with key as title', () => {
    const config = getBadgeConfig(BADGE_KEYS.NO_TITLE, badgeConfig[BADGE_KEYS.NO_TITLE]);

    const expectedConfig: BadgeConfig = {
      ...badgeConfig[BADGE_KEYS.NO_TITLE],
      title: BADGE_KEYS.NO_TITLE
    };

    expect(config).toEqual(expectedConfig);
  });

  it('should return a full badge config with default colour', () => {
    const config = getBadgeConfig(BADGE_KEYS.NO_COLOR, badgeConfig[BADGE_KEYS.NO_COLOR]);

    const expectedConfig: BadgeConfig = {
      ...badgeConfig[BADGE_KEYS.NO_COLOR],
      color: defaultBadgeConfig.color
    };

    expect(config).toEqual(expectedConfig);
  });

  it('should return a full badge config with default contrast', () => {
    const config = getBadgeConfig(BADGE_KEYS.NO_CONTRAST, badgeConfig[BADGE_KEYS.NO_CONTRAST]);

    const expectedConfig: BadgeConfig = {
      ...badgeConfig[BADGE_KEYS.NO_CONTRAST],
      contrast: defaultBadgeConfig.contrast
    };

    expect(config).toEqual(expectedConfig);
  });

});

describe('getColor', () => {
  it('should return the configured color', () => {
    const color = getColor(BADGE_KEYS.BADGE, badgeConfig[BADGE_KEYS.BADGE]);
    expect(color).toBe(badgeConfig[BADGE_KEYS.BADGE].color);
  });

  it('should return the default color', () => {
    const color = getColor(BADGE_KEYS.UNKNOWN_BADGE, badgeConfig[BADGE_KEYS.UNKNOWN_BADGE]);
    expect(color).toBe(defaultBadgeConfig.color);
  });
});

describe('getContrastColor', () => {
  it('should return the configured contrast', () => {
    const contrast = getContrastColor(BADGE_KEYS.BADGE, badgeConfig[BADGE_KEYS.BADGE]);
    expect(contrast).toBe(badgeConfig[BADGE_KEYS.BADGE].contrast);
  });

  it('should return the default contrast', () => {
    const contrast = getContrastColor(BADGE_KEYS.UNKNOWN_BADGE, badgeConfig[BADGE_KEYS.UNKNOWN_BADGE]);
    expect(contrast).toBe(defaultBadgeConfig.contrast);
  });
});

describe('getTitle', () => {
  it('should return the configured title', () => {
    const title = getTitle(BADGE_KEYS.BADGE, badgeConfig[BADGE_KEYS.BADGE]);
    expect(title).toBe(badgeConfig[BADGE_KEYS.BADGE].title);
  });

  it('should return the key as title', () => {
    const title = getTitle(BADGE_KEYS.UNKNOWN_BADGE, badgeConfig[BADGE_KEYS.UNKNOWN_BADGE]);
    expect(title).toBe(BADGE_KEYS.UNKNOWN_BADGE);
  });
});

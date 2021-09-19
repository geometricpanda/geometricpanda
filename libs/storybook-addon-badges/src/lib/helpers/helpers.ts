import { BadgeConfig, TooltipConfig } from '../types';
import { defaultBadgeConfig } from '../shared';

export const getBadgeConfig = (
  badge: string,
  config: BadgeConfig
): BadgeConfig => ({
  ...defaultBadgeConfig,
  title: badge,
  ...config,
});

export const getColor = (badge: string, config: BadgeConfig): string =>
  getBadgeConfig(badge, config).color;

export const getContrastColor = (badge: string, config: BadgeConfig): string =>
  getBadgeConfig(badge, config).contrast;

export const getTitle = (badge: string, config: BadgeConfig): string =>
  getBadgeConfig(badge, config).title;

export const getTooltip = (badge: string, config: BadgeConfig): TooltipConfig =>
  getBadgeConfig(badge, config).tooltip;

export const getBadgeCustomProperty = (name: string, suffix: string) => {
  const normalisedName = name.replace(/[^a-z0-9]/g, (str) => {
    const char = str.charCodeAt(0);

    if (char == 32) {
      return '-';
    }

    if (char >= 65 && char <= 90) {
      return '_' + str.toLowerCase();
    }

    return '__' + ('000' + char.toString(16)).slice(-4);
  });

  return `--badge-${normalisedName}-${suffix}`;
};

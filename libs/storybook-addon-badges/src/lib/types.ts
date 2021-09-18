import { ComponentProps } from 'react';
import { TooltipMessage } from '@storybook/components';

export type TooltipConfig =
  | Omit<ComponentProps<typeof TooltipMessage>, 'children'>
  | string;

export type BadgeConfig = {
  title?: string;
  color?: string;
  contrast?: string;
  tooltip?: TooltipConfig;
};

export interface BadgesConfig {
  [id: string]: BadgeConfig;
}

export interface BadgeProps {
  badge: string;
  config: BadgeConfig;
}

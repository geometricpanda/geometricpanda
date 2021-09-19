import { ComponentProps } from 'react';
import { TooltipMessage } from '@storybook/components';

export type TooltipConfig =
  | Omit<ComponentProps<typeof TooltipMessage>, 'children'>
  | string;

export type BadgeConfig = {
  title?: string;
  // @deprecated: Color has been deprecated, please use the `styles` property.
  color?: string;
  // @deprecated: Contrast has been deprecated, please use the `styles` property.
  contrast?: string;
  styles?: {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: string;
    borderStyle?: string;
    borderWidth?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    lineHeight?: string | number;
    textTransform?: string;
    paddingInline?: string;
    paddingBlock?: string;
  };
  tooltip?: TooltipConfig;
};

export interface BadgesConfig {
  [id: string]: BadgeConfig;
}

export interface BadgeProps {
  badge: string;
  config: BadgeConfig;
}

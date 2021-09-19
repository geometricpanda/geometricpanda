import React, { FC, ComponentType } from 'react';
import { WithTooltip, TooltipMessage } from '@storybook/components';

import type { BadgeProps } from '../types';
import { getTooltip } from '../helpers/helpers';

export const WithBadgeTooltip =
  <T extends BadgeProps = BadgeProps>(Component: ComponentType<T>): FC<T> =>
  ({ badge, config, ...rest }) => {
    const tooltipData = getTooltip(badge, config);

    let tooltipMessageProps: typeof tooltipData;
    if (typeof tooltipData === 'string') {
      tooltipMessageProps = { desc: tooltipData };
    } else {
      tooltipMessageProps = tooltipData;
    }

    return tooltipData ? (
      <WithTooltip tooltip={<TooltipMessage {...tooltipMessageProps} />}>
        <Component badge={badge} {...(rest as T)} />
      </WithTooltip>
    ) : (
      <Component badge={badge} {...(rest as T)} />
    );
  };

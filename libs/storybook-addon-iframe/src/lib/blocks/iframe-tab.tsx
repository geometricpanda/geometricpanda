import { Group, Story } from '@storybook/api';
import React, { useLayoutEffect, useState } from 'react';
import { EmbeddedIframeLayout, GenericLayout } from '../layouts';
import { NotFoundIcon } from '../icons';

export interface OtherTabProps {
  parameters: Story['parameters'] | Group['parameters']
}

export const IframeTab: React.FC<OtherTabProps> = ({ parameters }) => {
  const [src, setSrc] = useState<string>(null);

  useLayoutEffect(() => {
    setSrc(parameters['iframeSrc'] || null);
  }, [parameters]);

  return src
    ? <EmbeddedIframeLayout src={src} />
    : <GenericLayout icon={<NotFoundIcon/>}>Nothing to see</GenericLayout>;
};

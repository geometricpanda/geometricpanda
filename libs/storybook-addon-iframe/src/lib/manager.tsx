import React from 'react';
import { Combo, Consumer } from '@storybook/api';
import { AddonParameters, DEFAULT_PARAMETERS, PARAM_KEY } from './shared';
import { EmbeddedIframeLayout } from './layouts';

interface ManagerProps {
  active: boolean;
}

export const Manager: React.FC<ManagerProps> = ({ active }) => {
  return active
    ? (
      <Consumer>
        {({ api, state }: Combo) => {
          const story = api.getData(state.storyId, state.refId);
          const parameters = {
            ...DEFAULT_PARAMETERS,
            ...api.getCurrentParameter<AddonParameters>(PARAM_KEY)
          };

          console.log(parameters);

          return story && parameters?.url
            ? (
              <EmbeddedIframeLayout
                data-test-id={'EmbeddedIframeLayout'}
                url={parameters.url}
                timeout={parameters.timeout} />
            )
            : null;
        }}
      </Consumer>
    )
    : null;
};

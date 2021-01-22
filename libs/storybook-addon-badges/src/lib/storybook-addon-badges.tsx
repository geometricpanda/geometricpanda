import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StorybookAddonBadgesProps {}

const StyledStorybookAddonBadges = styled.div`
  color: pink;
`;

export function StorybookAddonBadges(props: StorybookAddonBadgesProps) {
  return (
    <StyledStorybookAddonBadges>
      <h1>Welcome to storybook-addon-badges!</h1>
    </StyledStorybookAddonBadges>
  );
}

export default StorybookAddonBadges;

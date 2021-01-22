import React from 'react';
import { render } from '@testing-library/react';

import StorybookAddonBadges from './storybook-addon-badges';

describe('StorybookAddonBadges', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StorybookAddonBadges />);
    expect(baseElement).toBeTruthy();
  });
});

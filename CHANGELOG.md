# Changelog

All notable changes to this project will be documented in this file
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.2.2

### Fixes
- **@geometricpanda/storybook-addon-badges**: Lists storybook addons as dependency. Resolving [#35](https://github.com/geometricpanda/geometricpanda/issues/35)
- **@geometricpanda/storybook-addon-iframe**: Lists storybook addons as dependency. Resolving [#35](https://github.com/geometricpanda/geometricpanda/issues/35)

## 0.2.1

### Fixes

- **@geometricpanda/storybook-addon-badges**: Lists storybook as a peer dependency. Resolving [#32](https://github.com/geometricpanda/geometricpanda/issues/32)
- **@geometricpanda/storybook-addon-badges**: Uses camel case for customisable properties. Resolving [#30](https://github.com/geometricpanda/geometricpanda/issues/30)
- **@geometricpanda/storybook-addon-iframe**: Lists storybook as a peer dependency. Resolving [#32](https://github.com/geometricpanda/geometricpanda/issues/32)

## 0.2.0

### Fixes

- **@geometricpanda/storybook-addon-badges**: Resolves minor badge misalignment

### Features

- **@geometricpanda/storybook-addon-badges**: Allows greater theming of badges using the `styles` configuration parameter.

### Deprecations

- **@geometricpanda/storybook-addon-badges**: Deprecation on `color` and `contrast` configuration parameters, will be removed in 1.0.0.

## 0.1.0

### Features

- **@geometricpanda/storybook-addon-badges**: Integrates with Storybook tooltips.

Thanks to [clbagrat](https://github.com/clbagrat).

## 0.0.5

### Features

- **@geometricpanda/storybook-addon-badges**: Updates style of badges to be less prominent
- **@geometricpanda/storybook-addon-iframe**: Changes animation style to fade

### Fixes

- **@geometricpanda/storybook-addon-badges**: Adds `react-is` to dependencies. Resolving [#23](https://github.com/geometricpanda/geometricpanda/issues/23)
- **@geometricpanda/storybook-addon-badges**: Adds `react-dom` to dependencies. Resolving [#24](https://github.com/geometricpanda/geometricpanda/issues/24)

### Other

- **@geometricpanda/storybook-addon-badges**: Replaces `styled-components` with `@storybook/theming`
- **@geometricpanda/storybook-addon-iframe**: Replaces `styled-components` with `@storybook/theming`

## 0.0.4

### Features

- **@geometricpanda/storybook-addon-badges**: Adds a suite of default badge styles [#20](https://github.com/geometricpanda/geometricpanda/issues/20)
- **@geometricpanda/storybook-addon-badges**: Updates style of badges to be more prominent [#20](https://github.com/geometricpanda/geometricpanda/issues/20)

## 0.0.3

### Features

- **@geometricpanda/storybook-addon-iframe**: Exporting `ADDON_ID` to allow consumers to rename tab titles without using magic strings [#17](https://github.com/geometricpanda/geometricpanda/issues/17)

### Docs

- **@geometricpanda/storybook-addon-iframe**: Documenting how to rename Storybook tab titles URL [#17](https://github.com/geometricpanda/geometricpanda/issues/17)

## 0.0.2

### Fixes

- **@geometricpanda/storybook-addon-iframe**: Removed console log in `manager.tsx` [#12](https://github.com/geometricpanda/geometricpanda/issues/12)

### Docs

- **@geometricpanda/storybook-addon-badges**: Updated grammar in `package.json` which reflects onto the Storybook addons directory [#14](https://github.com/geometricpanda/geometricpanda/issues/14)
- **@geometricpanda/storybook-addon-iframe**: Removed typo in docs URL `htttps` to `https` [#13](https://github.com/geometricpanda/geometricpanda/issues/13)

## 0.0.1

### Features

- **@geometricpanda/storybook-addon-badges**: Initial commit of `@geometricpanda/storybook-addon-badges`.
- **@geometricpanda/storybook-addon-iframe**: Initial commit of `@geometricpanda/storybook-addon-iframe`.

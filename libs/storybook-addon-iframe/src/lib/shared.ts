export const ADDON_ID = '@geometricpanda/storybook-addon-iframe';
export const ADDON_TITLE = 'External Content';
export const PARAM_KEY = `iframe`;


export interface AddonParameters {
  timeout: number;
  url: string;
}

export const DEFAULT_PARAMETERS: AddonParameters = {
  timeout: 10000,
  url: ''
};

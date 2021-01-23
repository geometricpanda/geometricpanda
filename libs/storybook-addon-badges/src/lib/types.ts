export type TBadgeConfig = {
  title?: string;
  color?: string;
  contrast?: string;
}

export interface TBadgesConfig {
  [id: string]: TBadgeConfig,
}


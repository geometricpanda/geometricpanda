export type BadgeConfig = {
  title?: string;
  color?: string;
  contrast?: string;
}

export interface BadgesConfig {
  [id: string]: BadgeConfig,
}


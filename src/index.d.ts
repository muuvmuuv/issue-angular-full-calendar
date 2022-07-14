/**
 * Add missing Window properties.
 */
interface Window extends ZoneGlobalConfigurations {
  GoogleAnalyticsObject: string;
}

/** Angular build mode/env */
declare const BUILD_ENV: 'development' | 'production';

/** Project app version */
declare const APP_VERSION: string;

/** Git commit hash */
declare const COMMIT_HASH: string;

/** Negate a string type */
declare type Negated<Type extends string> = `!${Type}`;

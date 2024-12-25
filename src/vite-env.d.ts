/// <reference types="vite/client" />

// TypeScript intelliSense for User Defined ENV Variabels prefixed with 'VITE_'
interface ImportMetaEnv {
  readonly VITE_APP_ENV: "development" | "production";

  readonly VITE_APPWRITE_DEV_PROJECT_ID: string;
  readonly VITE_APPWRITE_PROD_PROJECT_ID: string;
}

export const isAppRunningInDevelopment =
  import.meta.env.VITE_APP_ENV == "development";

export default {
  app: {
    env: import.meta.env.VITE_APP_ENV
      ? import.meta.env.VITE_APP_ENV
      : "development",
  },
  api: {
    appwrite: {
      projectId: isAppRunningInDevelopment
        ? import.meta.env.VITE_APPWRITE_DEV_PROJECT_ID
        : import.meta.env.VITE_APPWRITE_PROD_PROJECT_ID,
    },
  },
};

export const isAppRunningInDevelopment =
  import.meta.env.VITE_APP_ENV == "development";

export default {
  app: {
    env: import.meta.env.VITE_APP_ENV
      ? import.meta.env.VITE_APP_ENV
      : "development",
    status: import.meta.env.VITE_APP_STATUS
      ? import.meta.env.VITE_APP_STATUS
      : "down",
  },
  api: {
    appwrite: {
      projectId: isAppRunningInDevelopment
        ? import.meta.env.VITE_APPWRITE_DEV_PROJECT_ID
        : import.meta.env.VITE_APPWRITE_PROD_PROJECT_ID,
    },
  },
};

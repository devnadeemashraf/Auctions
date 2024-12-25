import { Client, Account } from "appwrite";

import env from "@/config/env";

const appwriteClientAPI = new Client();
appwriteClientAPI.setProject(env.api.appwrite.projectId);

const appwriteAccountAPI = new Account(appwriteClientAPI);

export { appwriteClientAPI, appwriteAccountAPI };

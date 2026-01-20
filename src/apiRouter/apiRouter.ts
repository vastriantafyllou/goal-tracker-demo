import { IS_DEMO_MODE } from "@/config.ts";
import * as realAuth from "@/services/api.login.ts";
import * as demoAuth from "@/demo/demoAuth.ts";
import * as realGoals from "@/services/api.goals.ts";
import * as demoGoals from "@/demo/demoGoals.ts";
import * as realCategories from "@/services/api.categories.ts";
import * as demoCategories from "@/demo/demoCategories.ts";
import * as realUsers from "@/services/api.users.ts";
import * as demoUsers from "@/demo/demoUsers.ts";
import * as realPasswordRecovery from "@/services/api.passwordRecovery.ts";
import * as demoPasswordRecovery from "@/demo/demoAuth.ts";

export const AuthAPI = IS_DEMO_MODE ? demoAuth : realAuth;
export const GoalsAPI = IS_DEMO_MODE ? demoGoals : realGoals;
export const CategoriesAPI = IS_DEMO_MODE ? demoCategories : realCategories;
export const UsersAPI = IS_DEMO_MODE ? demoUsers : realUsers;
export const PasswordRecoveryAPI = IS_DEMO_MODE ? demoPasswordRecovery : realPasswordRecovery;

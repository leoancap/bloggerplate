import { Account } from "../../../models/Account";
import { Post } from "../../../models/Post";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserProjectsArgs } from "./args/UserProjectsArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    projects(user: User, ctx: any, args: UserProjectsArgs): Promise<Post[]>;
}

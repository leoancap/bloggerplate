import { UserCreateOrConnectWithoutProjectsInput } from "../inputs/UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserUpdateWithoutProjectsInput } from "../inputs/UserUpdateWithoutProjectsInput";
import { UserUpsertWithoutProjectsInput } from "../inputs/UserUpsertWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutProjectsInput {
    create?: UserCreateWithoutProjectsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | undefined;
    upsert?: UserUpsertWithoutProjectsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutProjectsInput | undefined;
}

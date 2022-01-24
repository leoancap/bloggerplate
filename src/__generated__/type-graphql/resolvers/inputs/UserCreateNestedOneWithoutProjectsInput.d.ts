import { UserCreateOrConnectWithoutProjectsInput } from "../inputs/UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutProjectsInput {
    create?: UserCreateWithoutProjectsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}

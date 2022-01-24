import { PostCreateManyUserInputEnvelope } from "../inputs/PostCreateManyUserInputEnvelope";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutUserInput {
    create?: PostCreateWithoutUserInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: PostCreateManyUserInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}

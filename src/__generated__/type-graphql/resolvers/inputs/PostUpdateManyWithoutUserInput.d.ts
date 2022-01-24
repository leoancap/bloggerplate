import { PostCreateManyUserInputEnvelope } from "../inputs/PostCreateManyUserInputEnvelope";
import { PostCreateOrConnectWithoutUserInput } from "../inputs/PostCreateOrConnectWithoutUserInput";
import { PostCreateWithoutUserInput } from "../inputs/PostCreateWithoutUserInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutUserInput } from "../inputs/PostUpdateManyWithWhereWithoutUserInput";
import { PostUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostUpdateWithWhereUniqueWithoutUserInput";
import { PostUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostUpsertWithWhereUniqueWithoutUserInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutUserInput {
    create?: PostCreateWithoutUserInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: PostCreateManyUserInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}

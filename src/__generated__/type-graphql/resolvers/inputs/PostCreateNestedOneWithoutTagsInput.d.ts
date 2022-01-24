import { PostCreateOrConnectWithoutTagsInput } from "../inputs/PostCreateOrConnectWithoutTagsInput";
import { PostCreateWithoutTagsInput } from "../inputs/PostCreateWithoutTagsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedOneWithoutTagsInput {
    create?: PostCreateWithoutTagsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | undefined;
    connect?: PostWhereUniqueInput | undefined;
}

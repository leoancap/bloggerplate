import { PostCreateOrConnectWithoutTagsInput } from "../inputs/PostCreateOrConnectWithoutTagsInput";
import { PostCreateWithoutTagsInput } from "../inputs/PostCreateWithoutTagsInput";
import { PostUpdateWithoutTagsInput } from "../inputs/PostUpdateWithoutTagsInput";
import { PostUpsertWithoutTagsInput } from "../inputs/PostUpsertWithoutTagsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateOneWithoutTagsInput {
    create?: PostCreateWithoutTagsInput | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput | undefined;
    upsert?: PostUpsertWithoutTagsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PostWhereUniqueInput | undefined;
    update?: PostUpdateWithoutTagsInput | undefined;
}

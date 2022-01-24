import { TagCreateManyPostInputEnvelope } from "../inputs/TagCreateManyPostInputEnvelope";
import { TagCreateOrConnectWithoutPostInput } from "../inputs/TagCreateOrConnectWithoutPostInput";
import { TagCreateWithoutPostInput } from "../inputs/TagCreateWithoutPostInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagCreateNestedManyWithoutPostInput {
    create?: TagCreateWithoutPostInput[] | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: TagCreateManyPostInputEnvelope | undefined;
    connect?: TagWhereUniqueInput[] | undefined;
}

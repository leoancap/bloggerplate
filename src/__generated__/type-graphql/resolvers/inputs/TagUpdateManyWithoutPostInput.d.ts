import { TagCreateManyPostInputEnvelope } from "../inputs/TagCreateManyPostInputEnvelope";
import { TagCreateOrConnectWithoutPostInput } from "../inputs/TagCreateOrConnectWithoutPostInput";
import { TagCreateWithoutPostInput } from "../inputs/TagCreateWithoutPostInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutPostInput } from "../inputs/TagUpdateManyWithWhereWithoutPostInput";
import { TagUpdateWithWhereUniqueWithoutPostInput } from "../inputs/TagUpdateWithWhereUniqueWithoutPostInput";
import { TagUpsertWithWhereUniqueWithoutPostInput } from "../inputs/TagUpsertWithWhereUniqueWithoutPostInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagUpdateManyWithoutPostInput {
    create?: TagCreateWithoutPostInput[] | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: TagUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: TagCreateManyPostInputEnvelope | undefined;
    set?: TagWhereUniqueInput[] | undefined;
    disconnect?: TagWhereUniqueInput[] | undefined;
    delete?: TagWhereUniqueInput[] | undefined;
    connect?: TagWhereUniqueInput[] | undefined;
    update?: TagUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: TagUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: TagScalarWhereInput[] | undefined;
}

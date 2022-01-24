import { TagCreateNestedManyWithoutPostInput } from "../inputs/TagCreateNestedManyWithoutPostInput";
export declare class PostCreateWithoutUserInput {
    id?: string | undefined;
    title: string;
    body: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    tags?: TagCreateNestedManyWithoutPostInput | undefined;
}

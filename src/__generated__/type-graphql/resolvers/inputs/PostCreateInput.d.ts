import { TagCreateNestedManyWithoutPostInput } from "../inputs/TagCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";
export declare class PostCreateInput {
    id?: string | undefined;
    title: string;
    body: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    tags?: TagCreateNestedManyWithoutPostInput | undefined;
    user: UserCreateNestedOneWithoutProjectsInput;
}

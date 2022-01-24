import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";
export declare class PostCreateWithoutTagsInput {
    id?: string | undefined;
    title: string;
    body: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutProjectsInput;
}

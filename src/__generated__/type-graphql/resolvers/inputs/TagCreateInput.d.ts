import { PostCreateNestedOneWithoutTagsInput } from "../inputs/PostCreateNestedOneWithoutTagsInput";
export declare class TagCreateInput {
    name: string;
    Post?: PostCreateNestedOneWithoutTagsInput | undefined;
}

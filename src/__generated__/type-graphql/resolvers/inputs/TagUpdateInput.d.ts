import { PostUpdateOneWithoutTagsInput } from "../inputs/PostUpdateOneWithoutTagsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TagUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    Post?: PostUpdateOneWithoutTagsInput | undefined;
}

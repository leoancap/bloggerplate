import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutPostInput } from "../inputs/TagUpdateManyWithoutPostInput";
import { UserUpdateOneRequiredWithoutProjectsInput } from "../inputs/UserUpdateOneRequiredWithoutProjectsInput";
export declare class PostUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    tags?: TagUpdateManyWithoutPostInput | undefined;
    user?: UserUpdateOneRequiredWithoutProjectsInput | undefined;
}

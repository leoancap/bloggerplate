import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSessionsInput } from "../inputs/UserUpdateOneRequiredWithoutSessionsInput";
export declare class SessionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutSessionsInput | undefined;
}

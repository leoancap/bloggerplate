import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAccountsInput } from "../inputs/UserUpdateOneRequiredWithoutAccountsInput";
export declare class AccountUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    provider?: StringFieldUpdateOperationsInput | undefined;
    providerAccountId?: StringFieldUpdateOperationsInput | undefined;
    refresh_token?: NullableStringFieldUpdateOperationsInput | undefined;
    access_token?: NullableStringFieldUpdateOperationsInput | undefined;
    expires_at?: NullableIntFieldUpdateOperationsInput | undefined;
    token_type?: NullableStringFieldUpdateOperationsInput | undefined;
    scope?: NullableStringFieldUpdateOperationsInput | undefined;
    id_token?: NullableStringFieldUpdateOperationsInput | undefined;
    session_state?: NullableStringFieldUpdateOperationsInput | undefined;
    oauth_token_secret?: NullableStringFieldUpdateOperationsInput | undefined;
    oauth_token?: NullableStringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAccountsInput | undefined;
}

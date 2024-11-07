import { makeRequest } from "../AxiosServices";
import { POST_REQUEST } from "../../configs/Globals";
import endpoints from "../endpoints";

export interface IChangePassword {
  old_password: string;
  password: string;
  password_confirmation: string;
}
export async function changePasswordService(data: IChangePassword) {
  return await makeRequest(POST_REQUEST, endpoints.change_password, data);
}

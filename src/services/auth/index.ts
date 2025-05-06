import AxiosUtility, { makeRequest } from "../AxiosServices";
import { POST_REQUEST } from "../../configs/Globals";
import endpoints from "../endpoints";

export interface IChangePassword {
  old_password: string;
  password: string;
  password_confirmation: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IPassword {
  password: string;
  password_confirmation: string;
}

export interface IResetPassword extends IPassword {
  token?: string | string[];
  email?: string | string[];
}

export async function changePasswordService(data: IChangePassword) {
  return await makeRequest(POST_REQUEST, endpoints.change_password, data);
}

export async function forgotPasswordService(data: IForgotPassword) {
  return await AxiosUtility.post(endpoints.password_reset, data);
}

export async function resetPasswordService(data: IResetPassword) {
  return await AxiosUtility.post(endpoints.reset_password, data);
}

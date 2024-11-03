import { GET_REQUEST, POST_REQUEST } from "@/configs/Globals";
import { makeRequest } from "./AxiosServices";
import endpoints from "./endpoints";

export const getFees = async () => {
  const { data } = await makeRequest(GET_REQUEST, endpoints.fee);

  return data;
};

export const payFeeViaMpesa = async (payload) => {
  const { data } = await makeRequest(
    POST_REQUEST,
    endpoints.pay_via_mpesa,
    payload
  );

  return data;
};

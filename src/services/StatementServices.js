import { GET_REQUEST } from "@/configs/Globals";
import { makeRequest } from "./AxiosServices";
import endpoints from "./endpoints";

export const getFeeStatement = async () => {
    const { data } = await makeRequest(GET_REQUEST, endpoints.fee_statements);

    return data;
}
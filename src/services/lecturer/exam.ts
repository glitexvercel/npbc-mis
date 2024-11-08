import { makeRequest } from "@/services/AxiosServices";
import { GET_REQUEST } from "@/configs/Globals";
import endpoints from "@/services/endpoints";

export async function getStudentScores(
  semester?: number,
  year?: number,
  course?: number
) {
  if (!semester || !year || !course) {
    return [];
  }

  return await makeRequest(
    GET_REQUEST,
    `${endpoints.users}?semester=${semester}&full_year=${year}&course=${course}`,
    null
  );
}

export async function getExamResults() {}

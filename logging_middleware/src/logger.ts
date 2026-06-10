import axios from "axios";
import { getAccessToken, getToken } from "./auth";
import {
  StackType,
  LevelType,
  PackageType
} from "./types";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export async function Log(
  stack: StackType,
  level: LevelType,
  packageName: PackageType,
  message: string
): Promise<any> {
  try {
    let token: string = getToken();

    if (!token) {
      token = await getAccessToken();
    }

    const response = await axios.post(
      `${BASE_URL}/logs`,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "Log failed:",
      error?.response?.data || error.message
    );
    throw error;
  }
}
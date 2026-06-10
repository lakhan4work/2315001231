import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

const EMAIL = "lakhan.lal_cs23@gla.ac.in";
const NAME = "lakhan lal";
const ROLL_NO = "2315001231";

const ACCESS_CODE = "RPsgYt";

const CLIENT_ID = "ff33a2c4-021a-43d7-8a2f-6413f7178eb1";
const CLIENT_SECRET = "QEhecmrtYraGAmZE";

let accessToken = "";

export async function getAccessToken(): Promise<string> {
  try {
    if (accessToken) {
      return accessToken;
    }

    const response = await axios.post(
      `${BASE_URL}/auth`,
      {
        email: EMAIL,
        name: NAME,
        rollNo: ROLL_NO,
        accessCode: ACCESS_CODE,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      }
    );

    accessToken = response.data.access_token;

    return accessToken;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
}

export function getToken(): string {
  return accessToken;
}
export const isDev = process.env.NODE_ENV !== "production";

const API_BASEPATH = isDev ? "http://localhost:3020/" : "https://api.fozg.net/";

export default {
  USER_INFO_STORAGE_KEY: "USERINFO_MESSNOTE",
  API_MESSNOTE_URL: API_BASEPATH + "messnote",
  API_CURRENT_USER: API_BASEPATH + "me",

  AUTHEN_URL:
    "https://accounts.fozg.net/signin?continueUrl=" +
    (isDev ? "http://localhost:3000/" : "https://messnote.fozg.net/")
};

export const isDev = process.env.NODE_ENV !== "production";

const API_BASEPATH = isDev ? "http://localhost:3020/" : "https://api.fozg.net/";

export default {
  USER_INFO_STORAGE_KEY: "USERINFO_MESSNOTE",
  API_MESSNOTE_URL: API_BASEPATH + "messnote"
};

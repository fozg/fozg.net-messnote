import { api_call } from "../utils/api_helper";
import consts from "../consts";

export default class MessnoteApi {
  constructor() {
    var userinfo = localStorage.getItem(consts.USER_INFO_STORAGE_KEY);
    if (userinfo !== null) {
      this.token = JSON.parse(userinfo).token;
    }
  }

  get_all_messnote() {
    return api_call("GET", consts.API_MESSNOTE_URL, null, this.token);
  }

  add_messnote(body, backgroundColor) {
    return api_call(
      "POST",
      consts.API_MESSNOTE_URL,
      { body, backgroundColor },
      this.token
    );
  }
}

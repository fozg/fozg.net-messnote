import consts from "../consts";
import MessnoteApi from "../api/messnote";

export default class Auth {
  static isAuthen = () => {
    let userinfo = localStorage.getItem(consts.USER_INFO_STORAGE_KEY);
    if (userinfo === null) {
      return false;
    } else {
      return JSON.parse(userinfo);
    }
  };

  static authenUrlCallback = async doCheck => {
    var url = new URL(window.location.href);
    var auth = url.searchParams.get("token") || url.searchParams.get("auth");
    if (auth !== null) {
      doCheck();
      localStorage.setItem(
        consts.USER_INFO_STORAGE_KEY,
        JSON.stringify({ token: auth })
      );
      try {
        var user = await new MessnoteApi().get_current_user();
        console.log("continute auth..");
        var storeValue = {
          token: auth,
          ...user
        };
        localStorage.setItem(
          consts.USER_INFO_STORAGE_KEY,
          JSON.stringify(storeValue)
        );
        window.history.pushState(null, "", "/");
      } catch (res) {
        if (res.status === 403) {
          localStorage.removeItem(consts.USER_INFO_STORAGE_KEY);
          window.history.pushState(null, "", "/");
        }
      }
    }
  };
}

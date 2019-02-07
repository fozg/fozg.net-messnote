import consts from '../consts'

export default class Auth {
  static isAuthen = () => {
    let userinfo = localStorage.getItem(consts.USER_INFO_STORAGE_KEY)
    if (userinfo === null) {
      return false
    } else {
      return JSON.parse(userinfo)
    }
  }
}
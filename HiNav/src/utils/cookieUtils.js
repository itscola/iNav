export function setCookie(key, value, hours) {
    const da = new Date();
    da.setTime(da.getTime() + hours * 3600 * 1000);
    document.cookie = key + "=" + value + "; expires=" + da.toUTCString();
}

export function setToken(token) {
  clearCookie("token");
  setCookie("token", token, 24 * 2);
}

export function getCookie(key) {
    const reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)"),
    arr = document.cookie.match(reg);
    if (arr !== null) {
        return arr[2];
    }
    return null;
}

export function clearCookie(key) {
    setCookie(key, "", -1);
}

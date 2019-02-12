/**
 *
 * @param {*} method
 * @param {*} url
 * @param {*} bearerToken
 * @param {*} data
 */
export const api_call = async function(
  method,
  url,
  body = null,
  bearerToken,
  authenReqired = false
) {
  let headers = {
    "Content-Type": "application/json"
  };

  if (authenReqired && !bearerToken) {
    return;
  }

  if (bearerToken) {
    headers = { ...headers, Authorization: `Bearer ${bearerToken}` };
  }

  let bodi = body ? JSON.stringify(body) : null;
  let config = {
    method,
    headers,
    mode: "cors"
  };
  if (body) {
    config = { ...config, body: bodi };
  }

  let result = fetch(url, config).then(response => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });

  return result;
};

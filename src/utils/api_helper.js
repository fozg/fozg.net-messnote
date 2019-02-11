/**
 *
 * @param {*} method
 * @param {*} url
 * @param {*} bearerToken
 * @param {*} data
 */
export const api_call = async function(method, url, body = null, bearerToken) {
  let headers = {
    "Content-Type": "application/json"
  };

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
    return response.json();
  });

  return result;
};

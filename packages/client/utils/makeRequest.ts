import fetch from 'isomorphic-unfetch';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

enum HttpStatus {
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  SUCCESS = 200
}

export default function makeRequest(method: HttpMethod, url: string, headers: HeadersInit, body: string): Promise<any> {
  return fetch(url, {
    method,
    headers,
    body,
  }).then(response => {
    return new Promise(resolve => resolve(response.json()))
      .catch(err => {
        Promise.reject({
          type: 'NetworkError',
          status: response.status,
          message: err,
        });
      })
      .then(responseBody => {
        if (response.ok) {
          return responseBody;
        }

        if (response.status >= HttpStatus.SERVER_ERROR) {
          return Promise.reject({
            type: 'ServerError',
            status: response.status,
            body: responseBody,
          });
        }
        if (response.status < HttpStatus.SERVER_ERROR) {
          return Promise.reject({
            type: 'ApplicationError',
            status: response.status,
            body: responseBody,
          });
        }
      });
  })
    .catch(err => {
      return err.type ? Promise.reject(err) : Promise.reject({
        type: 'ConnectionRefused',
        status: HttpStatus.SERVER_ERROR,
        body: 'Check your internet connection',
      });
    })
}


/**
 * getUserIDbyUsername (username) => {...}
 * getUserStatsByUserID (userID) => {...}
 */
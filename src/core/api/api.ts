import { API_KEY, BASE_API_URL } from './api.consts';
import { AppHeaders, DeleteRequest, FetchOptions, GetRequest, PostRequest, Request } from './api.models';

export abstract class API {
    static headers: null | AppHeaders = null;

    static async request<T extends unknown>({ url = '', method = 'GET', body }: Request): Promise<T> {
        const stringifyBody = JSON.stringify(body);
        const fetchOptions: FetchOptions = {
            method,
            headers: {
                'X-Api-Key': API_KEY,
            },
        };

        if (body) fetchOptions.body = stringifyBody;

        const path = `${BASE_API_URL}${url}`;

        return fetch(path, fetchOptions)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.statusCode >= 400) throw new Error(json.message);
                return json;
            })
            .catch((err) => {
                return Promise.reject(err.message);
            });
    }

    static get<T extends unknown>({ url, headers }: GetRequest): Promise<T> {
        return this.request({ url, headers });
    }
    static post<T extends unknown>({ url, body, headers }: PostRequest): Promise<T> {
        return this.request({ url, method: 'POST', body, headers });
    }

    static delete<T extends unknown>({ url, headers, id }: DeleteRequest): Promise<T> {
        return this.request({ url: `?records[]=${id}`, method: 'DELETE', headers });
    }
}

export default API;

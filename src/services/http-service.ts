import { type AxiosError } from "axios";
import apiClient from "@/services/api-client.ts";

class HttpService {
    private _endpoint: string = '';
    private _delayMs = 1000;

    public set endpoint(value: string) {
        this._endpoint = value;
    }

    public async getAll<T>() {
        const request = apiClient.get<T[]>(this._endpoint);
        return Promise.all([request, this.delay()])
            .then(([resp]) => {
                return resp.data;
            })
            .catch((error: AxiosError) => {
                throw {
                    name: error.name,
                    message: error.message,
                    code: error.code,
                    status: error.status,
                };
            })
            .finally(() => {
            });
    }

    private delay() {
        return new Promise<void>(resolve => setTimeout(resolve, this._delayMs));
    }
}

export default new HttpService();

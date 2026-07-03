import apiClient, { CanceledError } from "@/services/api-client.ts";
import type ApiError from "@/dto/api-error.ts";

export type ResponseType<T> = (data: T) => void;
export type ErrorType = (error: ApiError, data?: {}) => void;
export type FinallyType = () => void;

class HttpService {
    private _endpoint: string = '';
    private _delayMs = 1000;

    public set endpoint(value: string) {
        this._endpoint = value;
    }

    public getAll<T>(responseCallback?: ResponseType<T[]>, errorCallback?: ErrorType, finallyCallback?: FinallyType) {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this._endpoint, { signal: controller.signal });
        Promise.all([request, this.delay()])
            .then(([resp]) => {
                responseCallback?.(resp.data);
            })
            .catch((error) => {
                if (error instanceof CanceledError) {
                    return;
                }
                errorCallback?.(error as ApiError);
            })
            .finally(() => {
                finallyCallback?.();
            });
        return controller;
    }

    private delay() {
        return new Promise<void>(resolve => setTimeout(resolve, this._delayMs));
    }
}

export default new HttpService();

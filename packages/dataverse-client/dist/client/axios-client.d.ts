import { TokenProvider } from "../token-provider";
import { RequestOptions as WebClientRequestOptions, Response as WebClientResponse, WebClient } from "./web-client";
import { AxiosInstance, CreateAxiosDefaults } from "axios";
export interface ErrorResponse {
    errorCode: number;
    message: string;
}
export declare class AxiosClient implements WebClient {
    protected readonly client: AxiosInstance;
    constructor(axiosConfig: CreateAxiosDefaults);
    setTokenProvider(tokenProvider: TokenProvider): void;
    request(config: WebClientRequestOptions): Promise<WebClientResponse>;
}

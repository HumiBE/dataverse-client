import { DeviceCodeResponse } from "@azure/msal-common";
import { ConnectionString } from "./connection-string";
import { TokenProvider } from "../token-provider";
/**
 * Persistence options.
 * Persistence is enabled when `AuthType` is `OAuth` and `TokenCacheStorePath` is set in connection string.
 */
interface PersistenceOptions {
    /**
     * Service name. Used by Linux and macOS keychain.
     * @default "Primno.DataverseClient"
     */
    serviceName?: string;
    /**
     * Account name. Used by Linux and macOS keychain.
     * @default "MSALCache"
     */
    accountName?: string;
}
/**
 * Options for OAuth2 authentication
 */
interface OAuthOptions {
    /**
     * Persistence options.
     * Persistence is enabled when `AuthType` is `OAuth` and `TokenCacheStorePath` is set in connection string.
     */
    persistence?: PersistenceOptions;
    /**
     * Device code callback. Only used when grant_type is device_code.
     * @param response The device code response
     */
    deviceCodeCallback?: (response: DeviceCodeResponse) => void;
}
/**
 * Options for connection string authentication.
 */
export interface ConnectionStringOptions {
    oAuth?: OAuthOptions;
}
/**
 * Provides a token from a connection string.
 */
export declare class ConnStringTokenProvider implements TokenProvider {
    private options?;
    private csp;
    private tokenProvider;
    /**
     * Creates a new instance of ConnStringClientProvider.
     * Supported authentication types: OAuth.
     * @param connectionString Connection string as string or ConnectionString object.
     * @param options Options for connection string authentication.
     */
    constructor(connectionString: string | ConnectionString, options?: ConnectionStringOptions | undefined);
    get url(): string;
    private getTokenProvider;
    getToken(): Promise<string>;
}
export {};

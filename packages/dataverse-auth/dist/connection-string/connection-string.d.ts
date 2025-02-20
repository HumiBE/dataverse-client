/**
 * Authentication type.
 */
export declare enum AuthenticationType {
    /**
     * Active Directory authentication.
     */
    AD = 0,
    /**
     * OAuth authentication.
     */
    OAuth = 1,
    /**
     * Unsupported.
     */
    Office365 = 2,
    /**
     * Unsupported.
     */
    Certificate = 3,
    /**
     * Unsupported.
     */
    ClientSecret = 4
}
export declare enum LoginPromptType {
    Auto = 0,
    Always = 1,
    Never = 2
}
/**
 * Connection string of a Dataverse / D365 environment.
 */
export declare class ConnectionString {
    private connectionString;
    /**
     * Url to the Dataverse / D365 environment.
     */
    serviceUri?: string;
    /**
     * User identification name.
     */
    userName?: string;
    /**
     * Password for the user name.
     */
    password?: string;
    /**
     * Domain for the user. Used for AD authentication.
     */
    domain?: string;
    homeRealmUri?: string;
    /**
     * Authentication type.
     * AD and OAuth are supported.
     */
    authType?: AuthenticationType;
    requireNewInstance?: boolean;
    /**
     * Client id for OAuth authentication.
     * @default 51f81489-12ee-4a9e-aaae-a2591f45987d
     */
    clientId?: string;
    /**
     * Redirect url for OAuth authentication.
     * @default app://58145B91-0C36-4500-8554-080854F2AC97
     */
    redirectUri?: string;
    /**
     * Path to the token cache file.
     * Used for OAuth authentication only.
     * Must be set to persist the token.
     */
    tokenCacheStorePath?: string;
    loginPrompt?: LoginPromptType;
    certThumbprint?: string;
    certStoreName?: string;
    skipDiscovery?: boolean;
    integratedSecurity?: string;
    /**
     * Client secret for OAuth authentication.
     */
    clientSecret?: string;
    constructor(connectionString: string);
    private parseLoginPrompt;
    private parseAuthenticationType;
    toString(): string;
}

export interface Authority {
    /**
     * Authority url.
     */
    authUrl: string;
    /**
     * Resource id / scope.
     */
    resource?: string;
}
/**
 * Discover authority from a Dataverse/D365 url.
 * @param url Url to discover authority from.
 * @param client Web client to use for discovery. If not specified, a new axios client will be created.
 */
export declare function discoverAuthority(url: string): Promise<Authority>;

import { TokenProvider } from "../token-provider";
import { OAuthConfig } from "./oauth-configuration";
/**
 * Provides OAuth2 authentication.
 */
export declare class OAuthTokenProvider implements TokenProvider {
    private tokenProvider;
    constructor(oAuthConfig: OAuthConfig);
    private getTokenProvider;
    get url(): string;
    getToken(): Promise<string>;
}

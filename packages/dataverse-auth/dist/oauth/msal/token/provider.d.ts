import { AuthenticationResult, IConfidentialClientApplication, IPublicClientApplication } from "@azure/msal-node";
import { TokenProvider } from "../../../token-provider";
import { OAuthConfig } from "../../oauth-configuration";
import { Application } from "./application";
type ClientApplication = IConfidentialClientApplication | IPublicClientApplication;
declare abstract class MsalTokenProvider implements TokenProvider {
    protected oAuthOptions: OAuthConfig;
    protected supportedApplication: Application["type"][];
    private application;
    constructor(oAuthOptions: OAuthConfig, supportedApplication: Application["type"][]);
    protected getClient(): Promise<ClientApplication>;
    abstract acquireToken(client: ClientApplication): Promise<AuthenticationResult | null>;
    private tryGetAccountFromCache;
    get url(): string;
    getToken(): Promise<string>;
}
export declare class DeviceCodeTokenProvider extends MsalTokenProvider {
    constructor(oAuthOptions: OAuthConfig);
    acquireToken(client: IPublicClientApplication): Promise<AuthenticationResult | null>;
}
export declare class UserPasswordTokenProvider extends MsalTokenProvider {
    constructor(oAuthOptions: OAuthConfig);
    acquireToken(client: IPublicClientApplication | IConfidentialClientApplication): Promise<AuthenticationResult | null>;
}
export declare class ClientCredentialTokenProvider extends MsalTokenProvider {
    constructor(oAuthOptions: OAuthConfig);
    acquireToken(client: IConfidentialClientApplication): Promise<AuthenticationResult | null>;
}
export {};

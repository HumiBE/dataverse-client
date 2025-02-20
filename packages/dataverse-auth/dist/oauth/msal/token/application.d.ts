import { IConfidentialClientApplication, IPublicClientApplication } from "@azure/msal-node";
import { OAuthConfig } from "../../oauth-configuration";
interface PublicApplication {
    type: "public";
    client: IPublicClientApplication;
}
interface ConfidentialApplication {
    type: "confidential";
    client: IConfidentialClientApplication;
}
export type Application = PublicApplication | ConfidentialApplication;
export declare function createApplication(oAuthOptions: OAuthConfig): Promise<Application>;
export {};

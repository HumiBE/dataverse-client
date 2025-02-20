import { Authority } from "../../oauth/authority";
import { OAuthCredentials } from "../../oauth/oauth-configuration";
import { ConnectionString } from "../connection-string";
export declare function convertToOAuth2Credential(connectionString: ConnectionString, authority: Authority): OAuthCredentials;

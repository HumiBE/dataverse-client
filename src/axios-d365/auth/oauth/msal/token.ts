import { AuthenticationResult, CacheOptions, ConfidentialClientApplication, LogLevel, PublicClientApplication } from "@azure/msal-node";
import { DataProtectionScope, Environment, PersistenceCachePlugin, PersistenceCreator } from "@azure/msal-node-extensions";
import path from "path";
import { OAuth2Credentials } from "..";
import { AxiosNetworkModule } from "./axios-network-module";

async function getCacheOptions(): Promise<CacheOptions> {
    // TODO: Set a correct cache path
    const cachePath = path.join(Environment.getUserRootDirectory(), "./Primno/cache.json");

    const persistenceConfiguration = {
        cachePath,
        dataProtectionScope: DataProtectionScope.CurrentUser,
        usePlaintextFileOnLinux: false,
    };

    const persistence = await PersistenceCreator.createPersistence(persistenceConfiguration);

    return {
        cachePlugin: new PersistenceCachePlugin(persistence)
    };
}

export async function getToken(credentials: OAuth2Credentials) {
    const client = new PublicClientApplication({
        auth: {
            clientId: credentials.client_id,
            authority: credentials.url,
            clientSecret: credentials.client_secret,
            knownAuthorities: [credentials.url]
        },
        system: {
            networkClient: new AxiosNetworkModule(),
            loggerOptions: {
                loggerCallback(loglevel, message, containsPii) {
                    //console.log(message);
                },
                logLevel: LogLevel.Verbose,
                piiLoggingEnabled: false
            }
        },
        cache: await getCacheOptions()
    });

    let result: AuthenticationResult | null;

    switch (credentials.grant_type) {
        /*case "client_credential":
            result = await client.acquireTokenByClientCredential({
                scopes: [credentials.scope as string]
            });
            break;*/
        case "password":
            try {
                const tokenCache = client.getTokenCache();
                const account = (await tokenCache.getAllAccounts())[0];
                result = await client.acquireTokenSilent({ scopes: [credentials.scope as string], account: account });
            }
            catch(except) {
                result = await client.acquireTokenByUsernamePassword({
                    scopes: [credentials.scope as string],
                    username: credentials.username,
                    password: credentials.password
                });
            }
            break;
        default: throw new Error("Invalid grant type");
    }

    return result?.accessToken;
}
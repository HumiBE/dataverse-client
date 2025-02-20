import { CacheOptions } from "@azure/msal-node";
import { PersistenceOptionsOn } from "../../oauth-configuration";
export declare function getCacheOptions(persistenceOptions: PersistenceOptionsOn): Promise<CacheOptions>;

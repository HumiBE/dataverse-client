import { DataverseClientOptions } from "./dataverse-client-options";
import { RetrieveMultipleOptions, RetrieveOptions } from "./query-options";
import { Response } from "./client";
import { TokenProvider } from "./token-provider";
/**
 * Collection of entities.
 */
export interface EntityCollection<TModel extends Model = Model> {
    /**
     * Entities.
     */
    entities: TModel[];
    /**
     * Link to the next page. To retrieve the next page, nextLink must be passed to the options parameter of `retrieveMultipleRecords()`.
     */
    nextLink?: string;
}
type Model = Record<string, any>;
/**
 * Dataverse client.
 * Allows to perform CRUD operations on Dataverse / D365 CE (on-premises) entities.
 */
export declare class DataverseClient {
    private options;
    private client;
    /**
     * Creates a new instance of DataverseClient.
     * @param tokenProvider Token provider.
     * @param options Configuration of DataverseClient.
     */
    constructor(tokenProvider: TokenProvider, options?: DataverseClientOptions);
    private readonly defaultHeaders;
    private readonly preferRepresentationHeaders;
    private getMaxPageSizeHeader;
    private request;
    /**
     * Gets a record from its id.
     * @param entitySetName Entity set name. Eg: accounts, contacts.
     * @param id Guid of the record you want to retrieve.
     * @param options Selected fields.
     * @returns The record
     */
    retrieveRecord<TModel extends Model = Model>(entitySetName: string, id: string, options?: RetrieveOptions): Promise<TModel>;
    /**
     * Retrieves a collection of records.
     * @param entitySetName Entity set name. Eg: accounts, contacts.
     * @param options OData query options. Can be a a custom string, a query options object or the nextLink of a previous result of retrieveMultipleRecords().
     * @param maxPageSize Max page size to retrieve. Default value is 5000.
     * @example
     * // Retrieve 2 accounts. Select only the name.
     * retrieveMultipleRecords("accounts", "?$select=name&$top=2");
     * // Retrieve all contacts with the last name Smith. Select only the first name and the last name.
     * retrieveMultipleRecords("contacts", {
     *      select: ["firstname", "lastname"],
     *      filter: [{ conditions: [{ attribute: "lastname", operator: "eq", value: "Smith"}] }]
     * });
     * @returns Collection of records.
     */
    retrieveMultipleRecords<TModel extends Model = Model>(entitySetName: string, options?: RetrieveMultipleOptions, maxPageSize?: number): Promise<EntityCollection<TModel>>;
    /**
     * Create a record.
     * @param entitySetName Entity set name. Eg: accounts, contacts.
     * @param data Record to create.
     * @returns Created record.
     */
    createRecord<TModel extends Model = Model>(entitySetName: string, data: TModel): Promise<TModel>;
    /**
     * Update a record.
     * @param entitySetName  Entity set name. Eg: accounts, contacts.
     * @param id Guid of the record you want to update.
     * @param data Record with updated data.
     * @returns Updated record.
     */
    updateRecord<TModel extends Model = Model>(entitySetName: string, id: string, data?: TModel): Promise<TModel>;
    /**
     * Delete a record.
     * @param entitySetName Entity set name. Eg: accounts, contacts.
     * @param id Guid of the record you want to delete.
     */
    deleteRecord(entitySetName: string, id: string): Promise<void>;
    executeAction(actionName: string, data: Record<string, any>): Promise<Response>;
}
export {};

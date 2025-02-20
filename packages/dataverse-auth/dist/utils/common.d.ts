export declare const EmptyString = "";
/**
 * Indicates whether the string is null or empty.
 * @param text
 */
export declare function isNullOrEmpty(text: string | null | undefined): text is null | undefined | "";
export declare function takeFirstNotNullOrEmpty(record: Record<string, string>, keys: string[]): string | undefined;
export declare function parseBoolean(value?: string): boolean | undefined;

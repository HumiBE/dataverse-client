export type RetrieveMultipleOptions = MultipleQueryOptions | string;
export declare function convertRetrieveMultipleOptionsToString(options: RetrieveMultipleOptions | undefined): string;
export type RetrieveOptions = QueryOptions | string;
export declare function convertRetrieveOptionsToString(options: RetrieveOptions | undefined): string;
export interface Expand {
    attribute: string;
    select: string[];
}
export interface QueryOptions {
    select: string[];
    expands?: Expand[];
}
export type Order = "asc" | "desc";
export interface OrderBy {
    attribute: string;
    order?: Order;
}
export type QueryFunction = "Above" | "AboveOrEqual" | "Between" | "Contains" | "ContainValues" | "DoesNotContainValues" | "EqualBusinessId" | "EqualUserId" | "EqualUserLanguage" | "EqualUserOrUserHierarchy" | "EqualUserOrHierarchyAndTeams" | "EqualUserOrUserTeams" | "EqualUserTeams" | "In" | "InFiscalPeriod" | "InFiscalPeriodAndYear" | "InFiscalYear" | "InOrAfterFiscalPeriodAndYear" | "InOrBeforeFiscalPeriodAndYear" | "Last7Days" | "LastFiscalPeriod" | "LastFiscalYear" | "LastMonth" | "LastWeek" | "LastXDays" | "LastXFiscalPeriods" | "LastXFiscalYears" | "LastXHours" | "LastXMonths" | "LastXWeeks" | "LastXYears" | "LastYear" | "Next7Days" | "NextFiscalPeriod" | "NextFiscalYear" | "NextMonth" | "NextWeek" | "NextXDays" | "NextXFiscalPeriods" | "NextXFiscalYears" | "NextXHours" | "NextXMonths" | "NextXWeeks" | "NextXYears" | "NextYear" | "NotBetween" | "NotEqualBusinessId" | "NotEqualUserId" | "NotIn" | "NotUnder" | "OlderThanXDays" | "OlderThanXHours" | "OlderThanXMinutes" | "OlderThanXMonths" | "OlderThanXWeeks" | "OlderThanXYears" | "On" | "OnOrAfter" | "OnOrBefore" | "ThisFiscalPerios" | "ThisFiscalYear" | "ThisMonth" | "ThisWeek" | "ThisYear" | "Today" | "Tomorrow" | "Under" | "UnderOrEqual" | "Yesterday";
declare const filterCondition: readonly ["eq", "ne", "gt", "ge", "lt", "le"];
export type FilterCondition = typeof filterCondition[number];
export interface Condition {
    attribute: string;
    operator?: FilterCondition | QueryFunction;
    value?: any;
}
export type FilterType = "and" | "or" | "not";
export interface Filter {
    type?: FilterType;
    conditions: Condition[];
    filters?: Filter[];
}
export interface MultipleQueryOptions extends QueryOptions {
    filters?: Filter[];
    orders?: OrderBy[];
    top?: number;
}
export declare function convertQueryOptionsToString(options: MultipleQueryOptions): string;
export {};

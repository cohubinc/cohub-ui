export declare type TDateFormat = "monthDayYear" | "monthDayYearShort" | "dateWithTime" | "dateWithTimeShort" | "monthShort" | "dateShort" | "tabularDate" | "input";
declare const renderDate: (format: TDateFormat) => (dateTime?: string | null | undefined) => string;
export default renderDate;
export declare const formats: string[];
//# sourceMappingURL=render-dates.d.ts.map
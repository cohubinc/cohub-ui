export declare type TDateFormat = "monthDayYear" | "monthDayYearShort" | "dateWithTime" | "dateWithTimeShort" | "monthShort" | "dateShort" | "tabularDate" | "input";
declare const renderDate: (format: TDateFormat) => (dateTime?: string | undefined) => string;
export default renderDate;
export declare const formats: string[];

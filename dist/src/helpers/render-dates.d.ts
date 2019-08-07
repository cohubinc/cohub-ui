declare type TFormat = "monthDayYear" | "monthDayYearShort" | "dateWithTime" | "dateWithTimeShort" | "monthShort" | "dateShort" | "tabularDate" | "input";
declare const renderDate: (format: TFormat) => (dateTime?: string | undefined) => string;
export default renderDate;
export declare const formats: string[];

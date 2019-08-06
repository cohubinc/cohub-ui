declare type TFormat = "monthDayYear" | "monthDayYearShort" | "dateWithTime" | "dateWithTimeShort" | "monthShort" | "dateShort" | "tabularDate" | "input";
export declare const renderDate: (format: TFormat) => (dateTime?: string | undefined) => string;
export {};

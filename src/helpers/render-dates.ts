import moment from "moment";

export type TDateFormat =
  | "monthDayYear"
  | "monthDayYearShort"
  | "dateWithTime"
  | "dateWithTimeShort"
  | "monthShort"
  | "dateShort"
  | "tabularDate"
  | "input";

// Use like -> renderDate("dateWithTimeShort")(item.created_at)
const renderDate = (format: TDateFormat) => (dateTime?: string | null) => {
  if (!dateTime) return "";

  return moment(dateTime).format(formatMap[format]);
};
export default renderDate;

type TDateFormatMap = { [Key in TDateFormat]: string };
const formatMap: TDateFormatMap = {
  monthDayYear: "MMM Do[,] YYYY",
  monthDayYearShort: "MMM D[,] YYYY",
  dateWithTime: "MMM Do[,] YYYY [at] h:mma",
  dateWithTimeShort: "MM/DD/YYYY [at] h:mma",
  monthShort: "MMM",
  dateShort: "MM/DD/YY",
  tabularDate: "MM/DD/YY",
  input: "MM-DD-YYYY"
};

// Needed to generate documentation
export const formats = Object.keys(formatMap);

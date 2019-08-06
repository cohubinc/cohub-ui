import moment from "moment";
// Use like -> renderDate("dateWithTimeShort")(item.created_at)
export var renderDate = function (format) { return function (dateTime) {
    if (!dateTime)
        return "";
    return moment(dateTime).format(formatMap[format]);
}; };
var formatMap = {
    monthDayYear: "MMM Do[,] YYYY",
    monthDayYearShort: "MMM D[,] YYYY",
    dateWithTime: "MMM Do[,] YYYY [at] h:mma",
    dateWithTimeShort: "MM/DD/YYYY [at] h:mma",
    monthShort: "MMM",
    dateShort: "MM/DD/YY",
    tabularDate: "MM/DD/YY",
    input: "MM-DD-YYYY"
};
//# sourceMappingURL=render-dates.js.map
export default function calculateMonth(month, year) {
    var m = parseInt(month);
    var y = parseInt(year);
    var monthStart = getMonthStartingDay(m, y);
    var daysInMonth = numberOfDaysInMonth(m, y);
    return [monthStart, daysInMonth];
}
function numberOfDaysInMonth(month, year) {
    if (month === 2 && isLeapYear(year)) {
        return DAYS_IN_FEB_ON_LEAP_YEAR;
    }
    return DAYS_IN_MONTH[month];
}
function isLeapYear(year) {
    var regularLeapYear = false;
    var centuryLeapYear = false;
    if (year % 4 === 0 || year % 400 === 0) {
        regularLeapYear = true;
    }
    if (year % 100 === 0 && year % 400 !== 0) {
        centuryLeapYear = true;
    }
    return regularLeapYear && !centuryLeapYear;
}
var DAYS_IN_MONTH = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_FEB_ON_LEAP_YEAR = 29;
// # formula based on Zeller's congruence.
// # https://en.wikipedia.org/wiki/Zeller%27s_congruence
function getMonthStartingDay(month, year) {
    var D = 1;
    if (month < 3) {
        month += 12;
        year--;
    }
    var J = Math.floor(year / 100);
    var K = year - 100 * J;
    var S = Math.floor(2.6 * month - 5.39) +
        Math.floor(K / 4) +
        Math.floor(J / 4) +
        D +
        K -
        2 * J;
    return S - 7 * Math.floor(S / 7);
}
//# sourceMappingURL=calculateMonth.js.map
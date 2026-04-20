const leapYears = function(year) {

    if(year % 4 === 0 && year % 400 === 0){
        return year + " is a leap year";
    } else if (year % 100 === 0) {
        return year + " not a leap year";
    } else {
        return year + " not a leap year jamon";
    }
};

// Do not edit below this line
module.exports = leapYears;

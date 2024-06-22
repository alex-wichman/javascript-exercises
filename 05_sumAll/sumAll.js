const sumAll = function(start, end) {
    let sum = 0;
    
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end))
        {
            return "ERROR";
        }

    let max = Math.max(start,end);
    let min = Math.min(start,end);
    for (min; min <= max; min++)
        {
            sum += min;
        }
        return sum;
};

// Do not edit below this line
module.exports = sumAll;

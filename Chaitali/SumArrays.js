// Sum Numbers
sum = function (numbers) {
    "use strict";
    var total = 0;
    for (var i = 0; i < numbers.length; i++)
    {
      total += numbers[i];
    }
    return total;
};
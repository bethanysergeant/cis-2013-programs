     //days weeks months fortnights
     var floatAge, floatDays, floatMonths, intWeeks, floatFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = parseFloat(floatAge * 365).toFixed(2);
     alert("Your age in days is " + floatDays);
     floatMonths = parseFloat(floatAge * 12).toFixed(2);
     alert("Your age in months is " + floatMonths);
     intWeeks = (floatAge * 52).toFixed(2);
     alert("Your age in weeks is " + intWeeks);
     floatFortnights = parseFloat(floatAge * 26).toFixed(2);
     alert("Your age in fortnights is " + floatFortnights);
     
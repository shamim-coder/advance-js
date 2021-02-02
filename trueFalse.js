/*
Full list of falsy values:________
checks = '', "", or ``
checks = 0   || Anything evaluated to be 0
checks = undefine
checks = null
checks = NaN
checks = false  || Obviously false
checks = 0n  || Big integers relative to 0n

Full list of truthy values:________
checks = " "   or   checks = "0"   or  checks = []   or checks = {}  or checks = isNaN  or checks = Number
*/


const checks = [0];

if(checks){
    console.log('condition is true');
}
else {
    console.log('condition is false');
}


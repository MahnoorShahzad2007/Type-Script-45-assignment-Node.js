var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//original order
var placesToVisit = ['Turkey', 'America', 'Paris', 'Korea', 'Japan'];
console.log("Original Order:", placesToVisit);
//alphabetical order
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
//still in original order
console.log(" Still in Original Order:", placesToVisit);
//reverse order
console.log("Reverse Order:", __spreadArray([], placesToVisit, true).reverse());
//still in original order
console.log(" Still in Original Order:", placesToVisit);
//original array reversed
console.log("Original Array Reversed:", placesToVisit.reverse());
//again to original array
console.log("Back to Original Order:", placesToVisit.reverse());
//sort original order in alphabetical order
console.log("Original Order in Alphabetical Order:", placesToVisit.sort());
//reverse again 
console.log("Original Array Reversed again:", placesToVisit.reverse());

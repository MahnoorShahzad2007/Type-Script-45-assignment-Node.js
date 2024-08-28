function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making Sandwich with following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy your Sandwich \n");
}
makeSandwich("chicken", "mayo", "bread");
makeSandwich("jam", "butter", "bread");
makeSandwich("egg", "mayo", "chicken", "bread");

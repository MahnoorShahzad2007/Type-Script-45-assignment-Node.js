function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return ("The Great ".concat(name)); });
}
var magicians_Name = ["Harry Potter", "Zach Wizard", "The Beast"];
var copy_magicians_Name = magicians_Name.slice();
var copy_great_magicians = make_great(copy_magicians_Name);
console.log("\n Original Array \n");
show_magicians(magicians_Name);
console.log("\n Copied Array \n");
show_magicians(copy_great_magicians);

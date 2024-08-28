function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return ("The Great ".concat(name)); });
}
var magicians_Name = ["Harry Potter", "Zach Wizard", "The Beast"];
var great_magicians = make_great(magicians_Name);
show_magicians(great_magicians);

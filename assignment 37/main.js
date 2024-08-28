"use strict";
function make_shirt(size = "Large", message = "I LOVE TYPESCRIPT") {
    console.log(`Creating a T-shirt of size ${size} with ${message} print on it.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I LOVE JAVASCRIPT");

var personName = "mahnoor shahzad";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (capital) { return capital.toUpperCase(); }));

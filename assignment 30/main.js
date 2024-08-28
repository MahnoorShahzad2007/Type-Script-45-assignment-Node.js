var userNames = ["Ahmed", "Aima", "Fatima", "Admin"];
for (var i = 0; i < userNames.length; ++i) {
    //let  username = userNames[i];
    if (userNames[i] === "Admin") {
        console.log("Hello Admin, Would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, " thsnk you logging in again."));
    }
}

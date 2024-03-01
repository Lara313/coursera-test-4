(function () {

    var names = ["lara", "John", "Jen", "Jason", "noor", "sami", "Larry", "hiba", "zen", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            console.log("goodbye"+"  " +names[i]);
        } 
        else {
            console.log("hello"+"  " +names[i]);
        }
    }

})();

function full_Sentence() { //Combines all parts into a complete sentence.
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //Finds a particular place in a string depending on where in the string it is located.
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Case() { //Turns all text uppercase.
    let text = "This text is in uppercase!";
    let result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result
}

function search_Function() { //Allows you to search for a vaule in your string.
    let text = "The big blue house on the hill has a big back backyard."
    let position = text.search("house");
    document.getElementById("search").innerHTML = position;
}

function string_Method() {  //Returns a number as a string.
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //Formats a number to a specified length.
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() { //Converts a number to a string.
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

function valueOf_Method() { //Returns the primitive value of a string.
    let text = "Hello this is a string!";
    let result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}
function Call_Loop() { //A while loop to count to ten.
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //A for loop that displays different types of instruments
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //A function that calls on a array
    var array_Example = [];
    array_Example[0] = "first";
    array_Example[1] = "second";
    array_Example[2] = "third";
    array_Example[3] = "fourth";
    document.getElementById("Array").innerHTML = "This array is the " + 
        array_Example[2] + " array.";
}

function constant_function() { //A constant function that calls on preset value to display
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$975";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function let_keyword() {
    var X = 82;
            document.write(X);
            {
                let X = 33;
                document.write("<br>" + X);
            }
            document.write("<br>" + X);
    document.getElementById("Let").innerHTML = X;
}

function Object_Example(){ //A function to show an object with different properties put together
    let car = {
        make: " Dodge",
        model: " Viper ",
        year: " 2021 ",
        color: " red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

function break_Statement() { //A break statement that breaks if i is equal to 3.
        let text = "";
    for (let i = 0; i < 5; i++) {
    if (i == 3) break;
    text += i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continue_Statement() { //A continue statement that continues while i is less than 5.
    let text = "";
    let i = 0;
    while (i < 5) {
    i++;
    if (i === 3) continue;
    text += i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
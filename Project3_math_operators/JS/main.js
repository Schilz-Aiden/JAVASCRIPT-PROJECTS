function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction; //Function to do simple subtraction
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + simple_Math; //Function to do simple multiplicaction
}

function division() {
    var simple_Math = 48 /6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + simple_Math; //Function to do simple division
}

function more_math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; //Function to do a more complicated math equation
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //Function utilizing the Modulus Operator
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x; //Function using the unary operator turning the number into a negative
}

function Increment() {
    let y = 5;
    let x = y++;
    document.getElementById("Math8").innerHTML = "Value of y: " + y; //Function for increment
    document.getElementById("Math9").innerHTML = "Value of x: " + x;
}

function Decrement() {
    let y = 6;
    let x = y--;
    document.getElementById("Math10").innerHTML = "Value of y: " + y; //Function for decrement
    document.getElementById("Math11").innerHTML = "Value of x: " + x;
}
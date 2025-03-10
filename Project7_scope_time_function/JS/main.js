var X = 10;
function Global_Variable_1() {
    document.write(20 + X + "<br>");
}

function Global_Variable_2() {
    document.write(X + 100 + "<br>");
}
Global_Variable_1();
Global_Variable_2();

function Local_Variable_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}

function Local_Variable_2() {
    var x = 10;
    document.write(x + 100);
}
Local_Variable_1();
Local_Variable_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"; //Function to tell ask how you are doing before 6pm
    }
}

if (10 > 6) {
    document.write("<br> That is true")  //Simple if statement
}

function Age_Function() {  //Function to see if you are old enought to work.
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {  //Function to tell the time of day.
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
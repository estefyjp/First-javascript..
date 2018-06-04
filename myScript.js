function myFunction() {
    document.getElementById("demo").innerHTML = "Temporizador ";
    var b = 11;
    var x = setInterval(function(){ //updates value  every second
        b--;
        document.getElementById("demo").innerHTML = b;  // shows value in body
        if(b<=0){
            clearInterval(x); //to stop updating every second
        }
    }, 1000); //miliseconds

}
function myFunction2() {
        document.getElementById("demo").innerHTML = "Redireccionador ";
        var stringToArray = prompt("Enter an array of numbers, separated by sapces");
        var arrayDigits = stringToArray.split(" "); //string -> array
        document.getElementById("demo").innerHTML = "Your array of numbers " + arrayDigits; //shows array
        var maxNumber = Math.max.apply(null, arrayDigits); //finds max number in array
        var operation = maxNumber % 2; //finds if maxNumber is even or odd
        if(operation == 0) { //even
                window.location = 'http://www.iteso.mx' //redirects to link
              }
        if(operation > 0 ) { //odd
            window.alert("Impar"); //shows message
        }
}

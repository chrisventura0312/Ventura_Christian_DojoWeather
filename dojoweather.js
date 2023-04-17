function cityAlert(cityElement){
    var cityName = cityElement.innerText;
    alert("Loading data for " + cityName + "...");
}
function cookieAccept(){
    var cookieElement = document.getElementById("cookie");
    cookieElement.remove();
}
function c2f(temp){
    return Math.round(temp * 9/5 + 32);
}
function f2c(temp){
    return Math.round((temp - 32) * 5/9);
}
function convertTemp(element){
    console.log(element.value);
    for(var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C"){
            tempSpan.innerText = f2c(tempVal + "°");
        } else {
            tempSpan.innerText = c2f(tempVal) + "°";
            }
        }
        element.removeEventListener("onchange", convertTemp);
    }
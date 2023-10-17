//Event listener que ejecuta una función cuando se ha cargado
//el documento html por completo
document.addEventListener("DOMContentLoaded", function() {
    //ya que estárán todos los elementos html y sus valores, entonces
    //procede a ejecutar la función
    calcularPrecio();
})
//defino las variables que voy a usar, capturo los valores de un elemento
//mediante función getElementById por su Id único, y obtengo el value
let ticketCategory = document.getElementById("buyFormCategory").value;
let quantity = document.getElementById("buyFormQty").value;
let result = document.getElementById("finalPayment");

//este eventListener permite capturar permanentemente cualquier cambio en el
//input al que se llama y lo envía a la función
buyFormCategory.addEventListener("input", calcularPrecio);
buyFormQty.addEventListener("input", calcularPrecio);

function calcularPrecio() {
//defino variables en el scope local
    let ticketCategory = parseFloat(buyFormCategory.value);
    let quantity = parseFloat(buyFormQty.value);
    let basePrice = 5000;
    let totalPayment;
//uso la estructura de control switch
    switch(ticketCategory) {
        case 1:
            totalPayment = quantity * (basePrice - (basePrice * 0.80));
            //el resultado se lo paso a la variable result,
            //mediante textContent que me permite definir su contenido
            result.textContent = "Total a pagar: $" + totalPayment;
            break;
        case 2:
            totalPayment = quantity * (basePrice - (basePrice * 0.50));
            result.textContent = "Total a pagar: $" + totalPayment;
            break;
        case 3:
            totalPayment = quantity * (basePrice - (basePrice * 0.15));
            result.textContent = "Total a pagar: $" + totalPayment;
            break;
        case 4:
            totalPayment = quantity * basePrice;
            result.textContent = "Total a pagar: $" + totalPayment;
            break;
        default:
            result.textContent = "Por favor elija una categoría";
    }
}
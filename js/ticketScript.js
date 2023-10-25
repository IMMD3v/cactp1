//Event listener que ejecuta una función cuando se ha cargado
//el documento html por completo
document.addEventListener("DOMContentLoaded", function() {
    //ya que estárán todos los elementos html y sus valores, entonces
    //procede a ejecutar la función
    calcularPrecio();
})

//BLOQUE DE VARIABLES------------------------------------
//defino las variables que voy a usar, capturo los valores de un elemento
//mediante función getElementById por su Id único, y obtengo el value
let ticketCategory = document.getElementById("buyFormCategory").value;
let quantity = document.getElementById("buyFormQty").value;
let result = document.getElementById("finalPayment");
let modalResult = document.getElementById("modalFinalPayment");

//este eventListener permite capturar permanentemente cualquier cambio en el
//input al que se llama y lo envía a la función
buyFormCategory.addEventListener("input", calcularPrecio);
buyFormQty.addEventListener("input", calcularPrecio);

//BLOQUE DE FUNCIONES------------------------------------
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
            modalResult.textContent = "Total a pagar: $" + totalPayment;
            break;
        case 2:
            totalPayment = quantity * (basePrice - (basePrice * 0.50));
            result.textContent = "Total a pagar: $" + totalPayment;
            modalResult.textContent = "Total a pagar: $" + totalPayment;
            break;
        case 3:
            totalPayment = quantity * (basePrice - (basePrice * 0.15));
            result.textContent = "Total a pagar: $" + totalPayment;
            modalResult.textContent = "Total a pagar: $" + totalPayment;
            break;
        case 4:
            totalPayment = quantity * basePrice;
            result.textContent = "Total a pagar: $" + totalPayment;
            modalResult.textContent = "Total a pagar: $" + totalPayment;
            break;
        default:
            result.textContent = "Por favor elija una categoría";
            modalResult.textContent = "Por favor elija una categoría";
    }
}
//función para resetear el formulario
function resetForm() {
    document.getElementById("buyTicketForm").reset();
}
//función que simularía haber comprado las entradas
function confirmPayment() {
    alert("Muchas gracias por tu compra!");
}

function openConfirmModal() {
    let buyName = document.getElementById("buyFormName").value;
    let modalName = document.getElementById("buyName");
    modalName.textContent = buyName;

    let buySurname = document.getElementById("buyFormSurname").value;
    let modalSurname = document.getElementById("buySurname");
    modalSurname.textContent = buySurname;

    let buyEmail = document.getElementById("buyFormEmail").value;
    let modalEmail = document.getElementById("buyEmail");
    modalEmail.textContent = buyEmail;

    let totalTickets = document.getElementById("buyFormQty").value;
    let modalTotalTickets = document.getElementById("ticketQty");
    modalTotalTickets.textContent = totalTickets;
}
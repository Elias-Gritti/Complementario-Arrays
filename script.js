//Ingreso de usuario
let idUsuario = prompt("ingrese su nombre por favor")
alert(`Bienvenido ${idUsuario} a rotiseria La Barra`)

function ordenComida(){
    let eleccionComida = (prompt(`A continuacion, elija lo que va a llevar
        \n 1-Pizza
        \n 2-Empanada
        \n 3-Hamburguesa
        \n 4-Tarta`))

        if(eleccionComida == "1" || eleccionComida == "pizza" || eleccionComida == "Pizza" || eleccionComida == "PIZZA"){
            alert("Usted esta por elegir pizza, el valor es $750")
            pagoComida()
            finPedido()
        } else if(eleccionComida == "2" || eleccionComida == "empanada" || eleccionComida == "Empanada" || eleccionComida == "EMPANADA"){
            alert("Usted esta por elegir empanada, el valor es $150")
            pagoComida()
            finPedido()
        } else if(eleccionComida == "3" || eleccionComida == "hamburguesa" || eleccionComida == "Hamburguesa" || eleccionComida == "HAMBURGUESA"){
            alert("Usted esta por elegir hamburguesa, el valor es $500")
            pagoComida()
            finPedido()
        } else if(eleccionComida == "4" || eleccionComida == "tarta" || eleccionComida == "Tarta" || eleccionComida == "TARTA"){
            alert("Usted esta por elegir tarta, el valor es $400")
        pagoComida()
        finPedido()}

} ordenComida()

function pagoComida(){
    
    let pago = parseInt(prompt(`A continuacion, elija el metodo de pago:
    \n 1-Transferencia.
    \n 2-Credito (1 pago).
    \n 3-Debito.
    \n 4-Mercado pago.
    \n *TARJETA DE CREDITO Y MERCADO PAGO TIENEN 15% DE INTERES*`))
    
    if (pago == "1" || pago == "Transferencia" || pago == "transferencia" || pago == "TRANSFERENCIA"){
        alert("Tiene un 5% de descuento")
        let montoDescuento = parseFloat(prompt('Ingrese el monto a pagar.'))
        let descuento = montoDescuento *0.05
        let totalDescuento = montoDescuento - descuento
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else if(pago == "2" || pago == "credito" || pago == "Credito" || pago == "CREDITO"){
        alert('Tiene recargo del 15%')
        let montoRecargo = parseFloat(prompt('Ingrese el monto a pagar.'))
        let recargo = montoRecargo * 0.15
        let totalRecargo = montoRecargo + recargo
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else if(pago == "3" || pago == "debito" || pago == "Debito" || pago == "DEBITO"){
        alert("Tiene un 5% de descuento")
        let montoDescuento = parseFloat(prompt('Ingrese el monto a pagar.'))
        let descuento = montoDescuento *0.05
        let totalDescuento = montoDescuento - descuento
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else if(pago == "4" || pago == "mercado pago" || pago == "Mercado pago" || pago == "Mercado Pago" || pago == "MERCADO PAGO"){
        alert('Tiene recargo del 15%')
        let montoRecargo = parseFloat(prompt('Ingrese el monto a pagar.'))
        let recargo = montoRecargo * 0.15
        let totalRecargo = montoRecargo + recargo
        alert("Su pago ha sido realizado con exito, muchas gracias")
    } else {
        alert("Ingrese una opcion valida!!")
        pagoComida()}
} 
pagoComida()

function finPedido(){
    let pregunta = parseInt(prompt(`¿Desea hacer otro pedido?
    \n 1-Si
    \n 2-No`))
    if (pregunta == "1" || pregunta =="si" || pregunta == "Si" || pregunta == "SI"){
        ordenComida()
    } else if(pregunta == "2" || pregunta =="no" || pregunta == "No" || pregunta == "NO"){
        alert("Muchas gracias, vuelva prontos! xd")
    } else {
        alert("Ingrese una opcion valida!!")
        finPedido()
    }
}
    
class adicionales {
    constructor(adicional, precio) {
        this.adicional = adicional
        this.precio = precio
    }
}

const mensaje = (laIsla) => {
    alert("el combo de " + rotiseria.adicional + "cuesta" + rotiseria.precio)
}

const totalPrecio = () => {
    let sumaTotal = 0
    carrito.forEach ((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

const comboPizz = new adicionales("Especial", 1000)
const comboEmpa = new adicionales("XL", 200)
const comboHamb = new adicionales("Monstruo", 800)
const comboPapas = new adicionales("Papas Fritas", 400)

const carrito = []

const combosAdicionales = () => {
    const comElegido = prompt(`Elija sus adicionales:
    \n Combo de pizza especial
    \n Combo de empanada XL
    \n combo de hamburguesa monstruo
    \n combo de papas Fritas`).toLowerCase()
}
    

switch (comElegido){
    case "Pizza especial":
        mensaje (comboPizz)
        carrito.push(comboPizz)
        break
    case "Empanada XL":
        mensaje (comboEmpa)
        carrito.push(comboEmpa)
        break
    case "Hamburguesa monstruo":
        mensaje (comboHamb)
        carrito.push(comboHamb)
        break
    case "Papas fritas":
        mensaje (comboPapas)
        carrito.push(comboPapas)
        break
    default:
        alert("Ingrese una opcion valida")
        break
} if(confirm("Desea agregar otro producto")){
    combosAdicionales()
} else {
    alert("El total es de " + " " + "$" + totalPrecio())
    console.log(carrito)
} combosAdicionales()
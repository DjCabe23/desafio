usuario()

function usuario() {
    let nombre = prompt("Por favor ingrese su nombre")
    if (nombre){
        alert(`Gracias ${nombre} que tenga buena compra`)
    }else{
        return usuario()
    }
}

const contenedorCarrito = document.getElementById(`carrito-contenedor`);
const botonvaciar = document.getElementById("vaciarcarro");
botonvaciar.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito()
    });

const preciototal = document.getElementById("precioTotal")
let carrito = []

const contenedor = document.getElementById("ropaDeportiva");
let tipoDeProductos = [
    {id: 1, nombre: "Zapatilla", precio :2500, img : `./zapatilla.jpg`},
    {id: 2, nombre: "Remera", precio :3000, img : `./remera.jpg`},
    {id: 3, nombre: "Pantalon", precio :4500, img : `./pantalom.jpg`},
    ]

tipoDeProductos.forEach((producto) =>{
    const div = document.createElement(`div`);
    div.classList.add(`producto`);
    div.innerHTML = `
    <img src=${producto.img}>
    <h4>${producto.nombre}</h4>
    <p>$${producto.precio}</p>
    <button id ="agregar${producto.id}" class="boton-agregar">AGREGAR</button>`

    contenedor.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener(`click`, () => {
        agegarCarrito(producto.id)
        console.log(carrito)
    })
})

function agegarCarrito(prodId) {
    const item = tipoDeProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=""


    carrito.forEach((prod)=>{
    const div = document.createElement(`div`);
    div.className = (`productoEnCarrito`);
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>`
    
    contenedorCarrito.appendChild(div)
    });
    preciototal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio, 0)
}
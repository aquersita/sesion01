//funciones tipadas 
    //crear la funcion sumar que sume 2 números y retorne un número
function sumar(a:number=0,b:number=0): number{
    return a+b;
}
console.log(sumar(5,5))

//funcion saludar y no me devuelva nada 
function saludar(nombre:string = "Usuario"):void{
    console.log("Bienvenido, ", nombre)
}
saludar("Mari");

//funcion con parametros opcionales 
interface Usuario{
    nombre:string,
    email:string,
    edad?:number,  //esto para que el dato sea opcional
}

function crearUsuario(nombre:string, email:string, edad?:number):Usuario{
    return{
        nombre,
        email,
        edad
    };
}
crearUsuario("Carlos","carlos@gmail.com", 34)

//types en TypeScript -> sirve para asociar diferentes tipos a una varible
let id: string | number;
// id= "10"
type Tamano= "small" | "medium" | "large"
const talla: Tamano = "large"



//Ejercicio1:
//crear uan interfaz producto(id, nombre, precio, disponible, categoria) siendo categoria opcional
//declarar una funcion llamada calcularTotal que reciba un array de productos y retorne la suma de los 
//productos que esten disponibles

interface Producto{
    id:number,
    nombre:string,
    precio:number,
    disponible:boolean,
    categoria?:string,
}
function calcularTotal(productos: Producto[]): number{
    return productos.reduce((total, producto)=>{     //total = lo que se va acumulando    y producto=cada interaccion
        return total + (producto.disponible? producto.precio:0)
    },0)
}
const misProductos : Producto[]= [
    {
        id:1,
        nombre:"impresora",
        precio:234,
        disponible: true,
        categoria:"Electronica"
    },
    {
        id:2,
        nombre:"impresora HP",
        precio:500,
        disponible: true,
        categoria:"Electronica"
    },
    {
        id:3,
        nombre:"Microporcesadror",
        precio:100,
        disponible: false,
        categoria:"Electronica"
    }
]
const total = calcularTotal(misProductos);
console.log("El total de mis productos es ", total);


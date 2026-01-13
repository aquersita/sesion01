const nombre: string = "pepe"
const edad: number = 23
const esEstudiante: boolean = true
const nulo: null = null;
const indefinido: undefined = undefined
const lenguajes: string[] = ["React, JavaScript, TypeScript"] 
const numeros: number[] = [1,2,3,4]

//array de objetos:
const usuarios: { nombre:string ;  edad:number}[]= [
    {nombre:"Antonio", edad:19},
    {nombre:"Sara", edad:39}
];

//solo un tipo de objeto 
const persona: {nombre:string , edad:number , activo:boolean}= {
    nombre:"Maria",
    edad:30,
    activo:true
}

// LAS INTERFACES O CONTRATOS
// Una interfaz es un contrato que define la forma que va a tener un objeto. Las interfaces se definen con la primera palabra en mayuscula
interface Usuario{
    id: number,
    nombre:string,
    email:string,
    edad?:number,  //esto para que el dato sea opcional
    activo:boolean,
}

const usuarios1: Usuario = {
    id:1,
    nombre:"Pelayo",
    email:"pelayo@gmail.com",
    activo:false
}
const usuarios2: Usuario = {
    id:2,
    nombre:"Marta",
    email:"marta@gmail.com",
    edad:19,
    activo:false
}
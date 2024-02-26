// 1. Dado un array, retornar un nuevo array con los numeros multiplicados por 2.

import { stringify } from "querystring";

const multiplicarPorDos = (numbers: number[]): number[] => numbers.map((num) => num*2 );


// 2. Dado un array, retornar un nuevo array con los numeros pares positivos.

const paresPositivos = (numbers: number[]): number[] => {
    let newArr = numbers.filter(num => num % 2 === 0)
    return newArr;
}

// 3. Dado un array, retornar el array ordenado de mayor a menor.

const ordenarMayorAMenor = (numbers: number[]): number[] => numbers.sort((a,b) => b - a);

// 4. Dado un array de objetos con la interfaz Usuarios,retornar el nombre del usuario de mayor edad.

const mayorEdad = (usuarios: Usuarios[]): string => {
    let mayor = usuarios[0].edad;
    let nombre = usuarios[0].nombre;
    usuarios.forEach((usuario) => {
        if(usuario.edad > mayor){
            mayor = usuario.edad;
            nombre = usuario.nombre;
        }
    })
    return nombre;
}
// 5. Dado un array de objetos con la interfaz Usuarios, retornar el nombre del usuario masculino de menor edad.
const menorEdad = (usuarios: Usuarios[]): string => {
    let menor = usuarios[0].edad;
    let nombre = usuarios[0].nombre;
    usuarios.forEach((usuario) => {
        if(usuario.edad < menor && usuario.sexo === 'masculino'){
            menor = usuario.edad;
            nombre = usuario.nombre;
        }
    })
    return nombre;
}
// 6. Dado un array de objetos con la interfaz Usuarios, retornar el pais con mayor cantidad de personas con sexo femenino.

const paisConMasMujeres = (usuarios: Usuarios[]) => {
    let paises = {
        nombre: '',
        cantidad: 0,
    };
    let cantidad = 0;
    usuarios.forEach((usuario) => {
        if(usuario.pais === undefined){
            paises.push('chile');
        }else{
            paises.push(usuario.pais);
        }
    })
    return cantidad;
}



interface Usuarios {
    nombre: string;
    edad: number;
    pais?: string;
    sexo: 'masculino' | 'femenino' | 'otros';
}

let usuarios: Usuarios[] = [{
     nombre: 'camilo',
     edad: 19,
     pais: 'argentina',
     sexo: 'masculino'
},

{

     nombre: 'javiera',
     edad: 19,
     sexo: 'femenino'
},

{
     nombre: 'francisco',
     edad: 18,
     pais: 'españa',
     sexo: 'masculino'
},

{
     nombre: 'maria',
     edad: 20,
     sexo: 'otros'
},

{
     nombre: 'maria isabel',
     edad: 19,
     sexo: 'femenino',
     pais: 'peru'
},

{
     nombre: 'jesus',
     edad: 20,
     sexo: 'masculino',
     pais: 'peru'
},

{
     nombre: 'mario',
     edad: 45,
     sexo: 'otros'
},
];

const numbers = [1,2,3,6,23,53,1,-1,-64,-100,1000,3,7,9,-2353,-1];


console.log(mayorEdad(usuarios));
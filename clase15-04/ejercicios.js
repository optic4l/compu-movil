// 1. Dado un array, retornar un nuevo array con los numeros multiplicados por 2.
var multiplicarPorDos = function (numbers) { return numbers.map(function (num) { return num * 2; }); };
// 2. Dado un array, retornar un nuevo array con los numeros pares positivos.
var paresPositivos = function (numbers) {
    var newArr = numbers.filter(function (num) { return num % 2 === 0; });
    return newArr;
};
// 3. Dado un array, retornar el array ordenado de mayor a menor.
var ordenarMayorAMenor = function (numbers) { return numbers.sort(function (a, b) { return b - a; }); };
// 4. Dado un array de objetos con la interfaz Usuarios,retornar el nombre del usuario de mayor edad.
var mayorEdad = function (usuarios) {
    var mayor = usuarios[0].edad;
    var nombre = usuarios[0].nombre;
    usuarios.forEach(function (usuario) {
        if (usuario.edad > mayor) {
            mayor = usuario.edad;
            nombre = usuario.nombre;
        }
    });
    return nombre;
};
// 5. Dado un array de objetos con la interfaz Usuarios, retornar el nombre del usuario masculino de menor edad.
var menorEdad = function (usuarios) {
    var menor = usuarios[0].edad;
    var nombre = usuarios[0].nombre;
    usuarios.forEach(function (usuario) {
        if (usuario.edad < menor && usuario.sexo === 'masculino') {
            menor = usuario.edad;
            nombre = usuario.nombre;
        }
    });
    return nombre;
};
// 6. Dado un array de objetos con la interfaz Usuarios, retornar el pais con mayor cantidad de personas con sexo femenino.
var paisFemenino = function (usuarios) {
    var pais = usuarios[0].pais;
    return pais;
};
var usuarios = [{
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
var numbers = [1, 2, 3, 6, 23, 53, 1, -1, -64, -100, 1000, 3, 7, 9, -2353, -1];
console.log(mayorEdad(usuarios));

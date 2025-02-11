//FUNCIONES

//FUNCIONES DE CALLBACK
/*
//OPCION A
const mostrar = nombre => nombre;
console.log(mostrar("pepito"));

//OPCION B
const enseñar = (nombre) => {
    nombre;
}
console.log(enseñar("pepito"));
*/
/*
const sumar = (num1, num2) => {
    let resultado = num1 + num2;
    console.log(resultado);
}
sumar(2, 5);
*/
/*

const mostrar = (cb) => {
    console.log("Hola")
    cb();
}

mostrar(() => { console.log("Acabo de decirte Hola") });

*/
const mostrar = (cb) => {
    console.log("Hola");
    const ncb = () => {
        console.log("Acabo de decirte Hola desde dentro de la funcion");
    }
    cb();
    ncb();
}


mostrar(() => { console.log("Acabo de decirte Hola desde fuera de la funcion") });













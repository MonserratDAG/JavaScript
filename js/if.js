function Pares_impares(x) {
    if (x % 2 == 0) { // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
        return alert("Numero par");
    } else {
        return alert("Numero impar");
    }
}

function CalculoEdad(edad) {
    if (edad > 18)  {
        document.write("Eres adulto")
    } else {
        document.write ("No eres adulto")
    }
}
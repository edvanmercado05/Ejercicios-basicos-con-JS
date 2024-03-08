
function cambiarTexto() {
    // Obtener el valor de la caja de texto
    var nuevoTexto = document.getElementById("textoNuevo").value;
    
    // Seleccionar el elemento DIV por su ID
    var div = document.getElementById("miDiv");
    
    // Adjuntar el nuevo texto al elemento DIV
    div.innerText = nuevoTexto;
    
    }

{
var colores = ["red", "blue", "green", "purple", "orange"]; // Array de colores
}

{
var estilos = ["font-size: 24px; font-weight: bold; text-transform: uppercase;", // Tamaño grande, negrita, y texto en mayúsculas
    "font-style: italic; color: red;", // Estilo cursiva y color rojo
    "text-decoration: underline; color: blue; font-family: 'Courier New', monospace;" // Subrayado, color azul, y fuente monoespaciada
];

}
function cambiarColor() {
    var div = document.getElementById("miDiv");
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Seleccionar un color aleatorio
    div.style.color = colorAleatorio; // Cambiar el color del texto
}

function agregarEstilos() {
    var div = document.getElementById("miDiv");
    var estiloAleatorio = estilos[Math.floor(Math.random() * estilos.length)]; // Seleccionar un estilo aleatorio
    div.style.cssText += estiloAleatorio; // Agregar el estilo al texto existente
}

var contador = 0;
function contadorClicks() {
    contador++;
    var div = document.getElementById("miDiv");
    div.innerText = "Hola Mundo (" + contador + " clics)";
}

function agregarLista() {
    var div = document.getElementById("miDiv");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.innerText = "Elemento 1";
    var li2 = document.createElement("li");
    li2.innerText = "Elemento 2";
    ul.appendChild(li1);
    ul.appendChild(li2);
    div.appendChild(ul);
}

function eliminarContenido() {
    var div = document.getElementById("miDiv");
    div.innerHTML = "";
}

function agregarImagen() {
    var div = document.getElementById("miDiv");
    var img = document.createElement("img");
    img.src = "https://ethic.es/wp-content/uploads/2022/12/vangog-2.jpg"; // Cambiar por la ruta de la imagen
    div.appendChild(img);
}

function agregarEnlace() {
    var div = document.getElementById("miDiv");
    var a = document.createElement("a");
    a.href = "https://www.youtube.com"; // Cambiar por la URL deseada
    a.innerText = "YOUTUBE";
    div.appendChild(a);
}

function agregarAnimacion() {
    var div = document.getElementById("miDiv");
    div.style.transition = "transform 1s";
    div.style.transform = "rotate(360deg)";
    setTimeout(function() {
        div.style.transition = "none";
        div.style.transform = "none";
    }, 1000);
}

function agregarATabla() {
    var div = document.getElementById("miDiv");
    var tabla = document.createElement("table");
    var fila = tabla.insertRow();
    var celda = fila.insertCell();
    celda.innerText = document.getElementById("textoNuevo").value;
    div.appendChild(tabla);
}
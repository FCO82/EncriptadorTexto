//let textoTextTarea = document.getElementById('texto').value;
let textosCifrado = document.querySelector(".texto__cifrado");

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//funcion que valida el texto de entrada
function validarTextoEntrada() {
  let textoTextTarea = document.getElementById('texto').value;
  let validadorTexto = textoTextTarea.match('^[a-z !ñ]+$');
  if (!validadorTexto) {
    //asignarTextoElemento('h6', 'Solo son permitidas letras minúsculas y sin acentos')
    Swal.fire({
      title: "Oops!",
      text: "Solo son permitidas letras minúsculas y sin acentos!",
      icon: "warning"
    });

    setTimeout(() => {
      location.reload()
    }, "3000");
    return true;

  }

}

function encriptar() {
  let textoTextTarea = document.getElementById('texto').value;
  let titulo = document.getElementById('titulo');
  let parrafo = document.getElementById('parrafo');
  let muneco = document.getElementById('muneco');
  let copy1 = document.getElementById('copy1');
  let caja = document.getElementById('caja');

  if (!validarTextoEntrada()) {
    let textoCifrado = textoTextTarea.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    let cifras = document.getElementById('texto').value.length;
   /* alert(cifras);*/
    if (document.getElementById('texto').value.length != 0) {
      document.getElementById('encriptado').value = textoCifrado;
      titulo.textContent = " ";
      parrafo.textContent = " ";
      muneco.src = "";
      copy1.style.display="block";
      caja.style.display="block"

    } else {
      /*alert("entre al else de encriptado")*/
      muneco.src = "./Img/Muñeco.png";
      titulo.textContent = "Ningún mensaje fue encontrado ";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      copy1.style.display = "none";
      caja.style.display = "none"
      //elemento.style.visibility="hidden"
      Swal.fire({
        title: "Oops!",
        text: "Ingresa un texto!",
        icon: "warning"
      });
    }
  }

//alert(textoCifrado);

}

function ocultar(id) {
  let elemento = document.getElementById(id);
  elemento.style.display = "none";

}


function desencriptar() {
  let textoTextTarea = document.getElementById('texto').value;
  let titulo = document.getElementById('titulo');
  let parrafo = document.getElementById('parrafo');
  let muneco = document.getElementById('muneco');
  let copy1 = document.getElementById('copy1');
  let caja = document.getElementById('caja');
  let textoCifrado = textoTextTarea.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  //alert(textoCifrado);
  if (document.getElementById('texto').value.length != 0) {
    document.getElementById('encriptado').value = textoCifrado;
    setTimeout(() => {
      location.reload()
    }, "10000");
  } else {
   /* alert("entre desencriptar else")*/
    muneco.src = "./Img/Muñeco.png";
    titulo.textContent = "Ningún mensaje fue encontrado ";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    copy1.style.display = "none";
    caja.style.display = "none"
    Swal.fire({
      title: "Oops!",
      text: "Ingresa un texto!",
      icon: "warning"
    });
  }
}

function limpiarcaja() {
  let valorCaja = document.querySelector('#texto').value = '';
}

function condicionesIniciales() {
  asignarTextoElemento('h6', '');
}

function valorEncriptado(elemento, valor) {
  elemento.style.display = valor;

}

function copy() {
  navigator.clipboard.writeText(encriptado.value)
  encriptado.value = "";
  /*alert("Texto Copiado")*/
}





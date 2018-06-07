// Formula Cifrado César (x - 65  + n ) % 26 +65
// Código ASKII
function cifrar (elemento) {
  let frase = document.getElementsByTagName("input")[0].value;
  let caracteres = frase.charCodeAt(0);
  let fraseCifrada = [(caracteres - 65  + 7 ) % 26 + 65];
  let caracteresT = String.fromCharCode(fraseCifrada);
  document.getElementById("resultado").innerHTML = caracteresT;
}
//function descifrar (elemento) {
  //let frase = document.getElementsByTagName("input")[0].value;
  //let fraseDesifrada = [(frase - 65  + 7 ) % 26 - 65];
  //document.getElementById("resultado").innerHTML = fraseDesifrada;
//}

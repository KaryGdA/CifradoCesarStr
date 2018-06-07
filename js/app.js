// Formula Cifrado César (x - 65  + n ) % 26 +65
// Código ASKII
function cifrar (elemento) {
  let frase = document.getElementsByTagName("input")[0].value;
  let caracteres = frase.charCodeAt(0);
  let fraseCifrada = [(caracteres - 65  + 7 ) % 26 + 65];
  let caracteresT = String.fromCharCode(fraseCifrada);
  document.getElementById("resultado").innerHTML = caracteresT;
}
function descifrar (elemento) {
  let fraseR = document.getElementsByTagName("input")[0].value;
  let caracteresR = fraseR.charCodeAt(0);
  let fraseDesifrada = [(caracteresR - 65  - 7 ) % 26 + 65];
  let caracteresL = String.fromCharCode(fraseDesifrada);
  document.getElementById("resultado").innerHTML = caracteresL;
}

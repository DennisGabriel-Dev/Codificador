var outputMessage = document.getElementById("saida_texto");

function criptografar(){
  const text = document.querySelector("textarea").value;
  const saidaTexto = document.getElementById("saida_texto");

  const resultCript = text
  .replaceAll('e', 'enter')
  .replaceAll('i', 'imes')
  .replaceAll('a', 'ai')
  .replaceAll('u', 'ufat')
  .replaceAll('o', 'ober');
  saidaTexto.innerHTML = resultCript;
}

function descriptografar() {
    const text = document.getElementById("saida_texto").value;
  
    const rDescriptografar = text
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ufat', 'u')
    .replaceAll('ober', 'o')
    saida_texto.innerHTML = rDescriptografar;
  }
function copiar(){
  const copiarTexto = document.getElementById("saida_texto");
  copiarTexto.select();
  copiarTexto.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiarTexto.value);
} 

function mudarTexto(){
  const text = document.querySelector("textarea").value;
  const outText = document.getElementById("saida_texto");

  outText.innerHTML = text;
}



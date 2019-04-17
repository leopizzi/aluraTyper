var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(" ").length;
  $("#contador-palavras").text(qtdPalavras);
  $("#contador-caracteres").text(conteudo.length);
});

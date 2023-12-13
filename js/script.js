function calcular() {
  var largura = parseFloat(document.getElementById("largura").value);
  var altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para largura e altura.");
    document.getElementById("largura").innerHTML = ""; 
	document.getElementById("altura").innerHTML = "";
	return;
  }
  //isNaN = is Not_a_Number 

  var area = largura * altura;
  var quantidadeTinta = area / 2;

  document.getElementById("area").textContent = area.toFixed(2);
  document.getElementById("tinta").textContent = quantidadeTinta.toFixed(2);
}

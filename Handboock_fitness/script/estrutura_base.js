// Dende aqui carganse os contedores principais que van estar en todalas paxinas

$(document).ready(function(){
  $('#cabeceira').html(`
    <a href="./index.html">
      <img id="logo" id="icono" src="./img/sinFondo/Logo_sinFondo.png" alt="icono">
    </a>

    <ul id="menu">
      <a href="./exercicicos.html"><li>Exercicicos</li></a>
      <a href="./flexibilidade.html"><li>Flexibilidade</li></a>
      <a href="./nutricion.html"><li>Nutricion</li></a>
      <a href="./rutinas.html"><li>Rutinas</li></a>
      <a href="./calculadoras.html"><li>Calculadoras</li></a>
    </ul>
  `);
});
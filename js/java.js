var arrayImagenes = new Array();
arrayImagenes[0] = "./img/Ugin.png";
arrayImagenes[1] = "./img/Akroma.png";
arrayImagenes[2] = "./img/Bruna.png";
arrayImagenes[3] = "./img/Dread.jpg";
arrayImagenes[4] = "./img/Iona.jpg";
arrayImagenes[5] = "./img/Parnova.jpg";
arrayImagenes[6] = "./img/Platinun.png";
arrayImagenes[7] = "./img/Serra.png";
arrayImagenes[8] = "./img/Ace.jpg";

var i = 0;

function siguiente(){
  i++;
  if (i > arrayImagenes.length -1) {
    i = 0;
  }
  document.getElementById('imagen').src = arrayImagenes[i];
  
}

function anterior(){
  i--;
  if (i < 0) {
    i = arrayImagenes.length -1;
  }
  document.getElementById('imagen').src = arrayImagenes[i];
}
function pasar(){
  for(i=0; i<cambios.botones.length; i++)
    if(cambios.botones[i].checked){
      imagen.src="img/"+cambios.botones[i].value;
    }
}
function radios(){
  for(i=0; i<cambios.botones.length; i++)
    cambios.botones[i].addEventListener("change",pasar);
}
setInterval("siguiente()",2000);

window.addEventListener("load",radios);
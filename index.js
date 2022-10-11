let rightArrow = document.querySelector("#right-arrow");
let leftArrow = document.querySelector("#left-arrow");
let img = document.querySelector("#img-1");
let position = document.querySelectorAll(".position");

//Variável para armazenar o margin-left das imagens
let mL = 0;

//Inicia a primeira bolinha de posição na cor branca
position[0].style.color = "white"

//Faz o carrossel girar automaticamnete a ca 8 segundos
setInterval(() => {
  autoSlide();
}, 8000);


function autoSlide(){
  if(mL>-(position.length-1)*100){
    mL -= 100;
  }else{
    mL = 0;
    position[position.length-1].style.color = "#ffffff4b";
  }

  refreshPosition();

  img.style.marginLeft = `${mL}%`;

}

//Atualiza as cores da bolinha de acordo com a nova posição
function refreshPosition(){

  let i = -(mL/100);

  if(i!=0){
    position[i-1].style.color = "#ffffff4b";
  }

  if(i!=(position.length-1)){
    position[i+1].style.color = "#ffffff4b";
  }
  
  position[i].style.color = "white";

}

//Gira o carrosel para direita
rightArrow.addEventListener('click', () => {

  if(mL>-(position.length-1)*100){

    mL -= 100;
    refreshPosition();
    img.style.marginLeft = `${mL}%`;

  }else{
    mL=0;
    refreshPosition();
    position[position.length-1].style.color = "#ffffff4b";
    img.style.marginLeft = `${mL}%`;
  }

});

//Gira o carrosel para esquerda
leftArrow.addEventListener('click', () => {

  if(mL!=0){

    mL += 100;
    refreshPosition();
    img.style.marginLeft = `${mL}%`;
  }else{
    mL=-(position.length-1)*100;
    refreshPosition();
    position[0].style.color = "#ffffff4b";
    img.style.marginLeft = `${mL}%`;
  }

});

//Indentifica em qual bolinha de posição o usuário clicou
document.addEventListener('click', function(e){

  if(e.target.classList.contains('position')){
    selectPosition(e.target.id);
  }

});


//Atualiza a cor da bolinha de posição quando o carrosel e girado pelo ação de click nas bolinhas
function selectPosition(target){
  for(let i=0; i<position.length; i++){
    if(i!=Number(target)){
      position[i].style.color = "#ffffff4b";
    }
  }

  position[Number(target)].style.color="white";


  mL = Number(target) * -100;

  img.style.marginLeft = `${mL}%`;

}




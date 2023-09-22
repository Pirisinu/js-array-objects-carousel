/*
SVOLGIMENTO 

1. Richiamare i vari elementi
2. Creo un arrey con le immagini da inserire nell'html


*/
//1.Richiamare i vari elementi
//elementi
const boxImg = document.querySelector('.box-img');
const ltlImg = document.querySelector('.ltl-img');

//bottoni
const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');
btnDown.classList.add('hide');

//Serve per dichiarare l'inizio
let counter = 0;

//2.Creare un arrey contenete le immagini
const listImg = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp' 
]
//4.a
//Sostituisco il ciclo trdizionale con un for..of
for (let singleImg of listImg){
  my
  boxImg.innerHTML += `<img src="${singleImg}" class="my_img hide">`;
  console.log(singleImg)
  if (listImg[0]){
    
  }
}
//5.
const imgCollection = document.getElementsByClassName('my_img');
console.log(imgCollection);


btnTop.addEventListener('click', function (){
  imgCollection[counter].classList.add('hide');
  btnDown.classList.remove('hide');
  counter++;
  imgCollection[counter].classList.remove('hide');
  if(counter == imgCollection.length -1) {
    btnTop.classList.add('hide');
  }
});

btnDown.addEventListener('click', function (){
  imgCollection[counter].classList.add('hide');
  counter--;
  imgCollection[counter].classList.remove('hide');
  btnTop.classList.remove('hide');
  if(counter == 0) btnDown.classList.add('hide');
});




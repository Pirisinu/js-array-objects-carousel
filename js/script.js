/*
SVOLGIMENTO 

1. Richiamare i vari elementi
2. Creo un arrey con le immagini da inserire nell'html


*/
//1.Richiamare i vari elementi
//elementi
const container = document.querySelector('.container');
const boxImg = document.querySelector('.box-img');
const ltlImg = document.querySelector('.ltl-img');

//bottoni
const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');
btnDown.classList.add('hide');

//Serve per dichiarare l'inizio
let counter = 0;

//2.Creare un arrey contenete le immagini
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];
//4.a
//Sostituisco il ciclo trdizionale con un for..of
for (let singleImg of images){
  boxImg.innerHTML += `
  <img src="${singleImg.image}" class="my_img hide">
  `;
  boxImg.innerHTML += `
  <p class="p-absolute">${singleImg.title}</p>
  `;
  
  console.log(singleImg)
}
//5.
const imgCollection = document.getElementsByClassName('my_img');
imgCollection[0].classList.remove('hide');
console.log(imgCollection[0])


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




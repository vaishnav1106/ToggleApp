'use strict'

//Select the toggle button,text card

const toggleBtn = document.getElementById('btn')
const text = document.querySelector('.card p')
const card = document.querySelector('.card')
const btn = document.querySelector('.btn')

//Add click event to button

toggleBtn.addEventListener('click',function(){
  // toggle 'dark class on card
  card.classList.toggle('dark')

  //change text based on mode

  if (card.classList.contains('dark')){
    text.textContent = 'Dark Theme'
  }else{
    text.textContent = 'Light Theme'
  }
})
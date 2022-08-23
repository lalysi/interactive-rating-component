// document.querySelector('button').addEventListener('click', hide())

const btnOne = document.getElementById('one')
const btnTwo = document.getElementById('two')
const btnThree = document.getElementById('three')
const btnFour = document.getElementById('four')
const btnFive = document.getElementById('five')
const button = document.getElementById('button')
const main = document.querySelector('.main')
const second = document.querySelector('.second')

let reviewRating = 0 
let ratingConf = document.getElementById('rating-confirmation')

second.style.display = "none";

btnOne.addEventListener('click', function onClick() {
    btnOne.style.backgroundColor = 'hsl(25, 97%, 53%)'
    btnOne.style.color = 'white'
    btnTwo.style.backgroundColor = 'rgb(40, 47, 55)'
    btnTwo.style.color = 'hsl(217, 12%, 63%)'
    btnThree.style.backgroundColor = 'rgb(40, 47, 55)'
    btnThree.style.color = 'hsl(217, 12%, 63%)'
    btnFour.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFour.style.color = 'hsl(217, 12%, 63%)'
    btnFive.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFive.style.color = 'hsl(217, 12%, 63%)'
    reviewRating = "1"

})

btnTwo.addEventListener('click', function onClick() {
    btnOne.style.backgroundColor = 'rgb(40, 47, 55)'
    btnOne.style.color = 'hsl(217, 12%, 63%)'
    btnTwo.style.backgroundColor = 'hsl(25, 97%, 53%)'
    btnTwo.style.color = 'white'
    btnThree.style.backgroundColor = 'rgb(40, 47, 55)'
    btnThree.style.color = 'hsl(217, 12%, 63%)'
    btnFour.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFour.style.color = 'hsl(217, 12%, 63%)'
    btnFive.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFive.style.color = 'hsl(217, 12%, 63%)'
    reviewRating = "2"

})

btnThree.addEventListener('click', function onClick() {
    btnOne.style.backgroundColor = 'rgb(40, 47, 55)'
    btnOne.style.color = 'hsl(217, 12%, 63%)'
    btnTwo.style.backgroundColor = 'rgb(40, 47, 55)'
    btnTwo.style.color = 'hsl(217, 12%, 63%)'
    btnThree.style.backgroundColor = 'hsl(25, 97%, 53%)'
    btnThree.style.color = 'white'
    btnFour.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFour.style.color = 'hsl(217, 12%, 63%)'
    btnFive.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFive.style.color = 'hsl(217, 12%, 63%)'
    reviewRating = 3

})

btnFour.addEventListener('click', function onClick() {
    btnOne.style.backgroundColor = 'rgb(40, 47, 55)'
    btnOne.style.color = 'hsl(217, 12%, 63%)'
    btnTwo.style.backgroundColor = 'rgb(40, 47, 55)'
    btnTwo.style.color = 'hsl(217, 12%, 63%)'
    btnThree.style.backgroundColor = 'rgb(40, 47, 55)'
    btnThree.style.color = 'hsl(217, 12%, 63%)'
    btnFour.style.backgroundColor = 'hsl(25, 97%, 53%)'
    btnFour.style.color = 'white'
    btnFive.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFive.style.color = 'hsl(217, 12%, 63%)'
    reviewRating = 4

})

btnFive.addEventListener('click', function onClick() {
    btnOne.style.backgroundColor = 'rgb(40, 47, 55)'
    btnOne.style.color = 'hsl(217, 12%, 63%)'
    btnTwo.style.backgroundColor = 'rgb(40, 47, 55)'
    btnTwo.style.color = 'hsl(217, 12%, 63%)'
    btnThree.style.backgroundColor = 'rgb(40, 47, 55)'
    btnThree.style.color = 'hsl(217, 12%, 63%)'
    btnFour.style.backgroundColor = 'rgb(40, 47, 55)'
    btnFour.style.color = 'hsl(217, 12%, 63%)'
    btnFive.style.backgroundColor = 'hsl(25, 97%, 53%)'
    btnFive.style.color = 'white'
    reviewRating = 5

})

button.addEventListener('click', function onClick() {
    ratingConf.innerHTML = `You selected ${reviewRating} out of 5`
    main.style.display = "none"
    second.style.display = "block";
})
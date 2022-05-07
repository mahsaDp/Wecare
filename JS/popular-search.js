'use strict'

let Popular=document.querySelectorAll('.popular__container>div')


Popular.forEach(popular => {
    popular.addEventListener('click', function (){
        Popular.forEach(pop =>{
            pop.classList.remove('popular__active')
        })
        popular.classList.add('popular__active')
    })
})
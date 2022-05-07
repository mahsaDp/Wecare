'use strict'


let input= document.querySelectorAll('input')




input.forEach(input =>{
    input.addEventListener('focus', function (){
        input.parentElement.style.border='2px solid lightblue'
    })

    input.addEventListener('focus', function (){
        input.placeholder=''
    })
})


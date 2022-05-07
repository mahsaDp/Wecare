'use strict'


let input= document.querySelectorAll('input')



input.forEach(input =>{
    let text=input.placeholder
    input.addEventListener('focus', function (){
        input.parentElement.style.border='2px solid lightblue'
        input.placeholder=''
    })

    input.addEventListener('focusout', function (){
        input.parentElement.style.border='1px solid #efefef'
        input.placeholder=text
    })

})

'use strict'


let input= document.querySelectorAll('input')
const UpBtn= document.querySelector('.goUp')




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

window.addEventListener('scroll', function (){
    if (window.scrollY>=350) {
        UpBtn.style.opacity='1'
        UpBtn.style.display='flex'
    }else {
        UpBtn.style.opacity='0'
        UpBtn.style.display='none'
    }
})

UpBtn.addEventListener('click', function (){
    window.scrollTo({top:0, behavior:"smooth"})
})
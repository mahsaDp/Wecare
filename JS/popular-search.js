'use strict'

let Popular=document.querySelectorAll('.popular__container>div')
const popularlist = document.querySelectorAll('.popular_list>li')
const special=document.querySelector('#Specialties')
const conditional=document.querySelector('#Conditional')
const procedure=document.querySelector('#Procedures')
const specialBox=document.querySelector('.Specialties-items')
const procedureBox=document.querySelector('.Procedures-items')
const conditionalBox=document.querySelector('.Conditional-items')
let popWrapper= document.querySelectorAll('.popular__wrapper>div')




Popular.forEach(popular => {
    popular.addEventListener('mouseover', function (){
        Popular.forEach(pop =>{
            pop.classList.remove('popular__active')
        })
        popular.classList.add('popular__active')
    })
    popular.addEventListener('click', function (){
        Popular.forEach(pop =>{
            pop.classList.remove('popular__active')
        })
        popular.classList.add('popular__active')
    })
})

popularlist.forEach(list => {
    list.addEventListener('click', function (){
        popularlist.forEach(li =>{
            li.classList.remove('popular_list_active')
        })
        list.classList.add('popular_list_active')
    })
})

special.addEventListener('click', function (){
    popWrapper.forEach(wrapper=>{
        wrapper.classList.remove('hide')
    })
    conditionalBox.classList.add('hide')
    procedureBox.classList.add('hide')
})

conditional.addEventListener('click', function (){
    popWrapper.forEach(wrapper=>{
        wrapper.classList.remove('hide')
    })
    specialBox.classList.add('hide')
    procedureBox.classList.add('hide')
})

procedure.addEventListener('click', function (){
    popWrapper.forEach(wrapper=>{
        wrapper.classList.remove('hide')
    })
    conditionalBox.classList.add('hide')
    specialBox.classList.add('hide')
})
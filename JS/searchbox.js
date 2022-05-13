
'use strict'

const tags= document.querySelectorAll('.search-tags>div>span')

tags.forEach((tag,index) => {
    tag.addEventListener('click', function (){
        tags[index].parentElement.remove()
    })
})
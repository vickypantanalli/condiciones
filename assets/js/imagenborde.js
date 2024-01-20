imagenborde = document.querySelector('img')
let borde = true

imagenborde.addEventListener("click", function(){
    if(borde == true){
    imagenborde.style.border = "solid 2px red"
    borde = false
} else{
    imagenborde.style.border = 'none'
    borde = true
}
})




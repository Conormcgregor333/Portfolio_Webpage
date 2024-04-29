let x=document.getElementById("myForm")
x.addEventListener("click",function(){
    setTimeout(() => {
        x.reset()
    }, 5000);
})
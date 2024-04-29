let x=document.getElementById("myForm")
let y=document.getElementById("sbmt")
y.addEventListener("click",function(){
    setTimeout(() => {
        x.reset()
    }, 5000);
})
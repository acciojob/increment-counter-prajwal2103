let i=document.getElementById("incrementBtn");
let count=0;
function counter(){
   alert(count);
   ++count;
   // console.log(count);
   let c=document.getElementById("counter");
   c.innerText=count;
}
i.addEventListener("click",counter)

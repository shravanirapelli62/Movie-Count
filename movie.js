let count=0;
function incr(){
    console.log(count);
    count++
    a.innerHTML=count;
}

function decr(){
    if(count<0){
        console.log("we cant decrease blow zero")
    }
    else{
        count--;
        a.innerHTML=count
        console.log(count);
    }
}
 function reset(){
    count=0;
    a.innerHTML=count;
    console.log(count);
 }

let a=document.getElementById("h1");
a.innerHTML=count;
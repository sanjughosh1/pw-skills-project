var data= 0;
document.getElementById("value").innerText=data;
function decrement(){
    data=data-1;
    document.getElementById("value").innerText=data;  
}
function increment(){
    data=data+1;
    document.getElementById("value").innerText=data;  
}
function reset(){
    data=0;
    document.getElementById("value").innerText=data;  
}
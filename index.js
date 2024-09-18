let add=0;
let add_bt= document.getElementById("counter")
let entered=document.getElementById("saved")
function Increment(){
    add=add+1
    add_bt.textContent=add;
}

let saver=add;
function Save_It(){
    saver=saver+add+" - ";
    entered.textContent=saver; 
    add_bt.textContent=0;
    add=0; 
}
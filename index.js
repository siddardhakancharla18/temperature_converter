const textbox = document.getElementById("textbox");
const tofarenheit = document.getElementById("tofarenheit");
const tocelsius = document.getElementById("tocelsius");
const result=document.getElementById("p");
let temp;
function convert(){
    if(tofarenheit.checked){
        temp = Number(textbox.value);
        temp = (9/5 * temp)+32;
        result.textContent=temp+"°F";
    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = 5/9*(temp-32);
        result.textContent=temp+"°c";

    }
    else{
        result.textContent="select an unit";

    }
}
const form = document.getElementById('form');
if (form){
    form.addEventListener('click', getFormValue);
}
function mult(){
let cs = document.getElementById('field_cost').value;
let am = document.getElementById('field_amount').value;
if (cs == ""){
    alert("Полжалуйста, заполните все формы!");
    return;
}
if (am == ""){
    alert("Полжалуйста, заполните все формы!");
    return;
}
if (/\D/.test(cs)){
    alert("Полжалуйста, вводите только числовы символы! (Allowed input:0-9)");
    return;
}
if (/\D/.test(am)){
    alert("Полжалуйста, вводите только числовы символы! (Allowed input:0-9)");
    return;
}
let r = document.getElementById('result');
r.value = "Общая стоимость покупки = " + cs * am + " руб.";
//alert("Общая стоимость покупки = " + cs * am + " руб.");
}
window.addEventListener('DOMContentLoaded', function (event) {
console.log("DOM fully loaded and parsed");
let b = document.getElementById("my-button");
if (b){
    b.addEventListener("click", mult());
}
});
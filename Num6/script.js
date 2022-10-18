window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
      let s = document.getElementsByName("mySelect");

      function mult(num, cost){
          return num*cost;
      }

      s[0].addEventListener("change", function(event) {
      let select = event.target;
      let radios = document.getElementById("radios");
      let check = document.getElementById("check");
      console.log(select.value);
      let amount = document.getElementById('field_amount');
      let result = document.getElementById('result');
      amount.addEventListener('change', function(){
              if (amount.value == ""){
                  alert("Полжалуйста, заполните все формы!");
                  return;
              }
              if (/\D/.test(amount.value)){
                  alert("Полжалуйста, вводите только числовы символы! (Allowed input:0-9)");
                  return;
              }
              
              result.value = mult(amount.value, select.value) + " руб.";
      })
          
      if(select.value == 100000){
          radios.style.display = "none";
          check.style.display = "none";
          result.value = mult(amount.value, select.value) + " руб.";
      }
      else{
          if (select.value == 25000) {
              check.style.display = "none";
              radios.style.display = "block";
              let r = document.querySelectorAll(".radios input[type=radio]");
              r.forEach(function(radio) {
              radio.addEventListener("change", function(event) {
              let r = event.target;
              result.value = mult(amount.value, r.value) + " руб.";
              console.log(r.value);
              });    
              });
          }
          else {
              radios.style.display = "none";
              check.style.display = "block";
              let cb = document.getElementById('checkbox');
              cb.addEventListener('click', function(){
                  if(this.checked){
                      let temp = select.value*1.5;
                      result.value = mult(amount.value, temp) + " руб.";
                  }else{
                      result.value = mult(amount.value, select.value) + " руб.";
                  }
              });
          }
      } 
      });
});


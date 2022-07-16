const btn = document.querySelector('.btn-submit');
const btnText = document.querySelector('.btnText');
const errorText = document.querySelector('.needs-validation');

var bigImg = document.createElement("img");
var btnSpan = document.createElement("span");

btn.addEventListener('click', function(){
  'use strict'

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            bigImg.src="img/error.png";
            bigImg.classList.add('me-3');
            btn.insertBefore(bigImg, btnText);
            btnText.innerHTML = 'failure';
            btnText.style.color = "#FFE3E3";
            errorText.appendChild(btnSpan);
            btnSpan.innerHTML = 'This person does not exist';
            btnSpan.classList.add('text-center');
            btnSpan.style.color = "#E06D6D";

          } else {
            bigImg.src="img/success.svg";
            bigImg.classList.add('me-3');
            btn.insertBefore(bigImg, btnText);
            btnText.innerHTML = 'success';
            btnText.style.color = "#E6FFB1";
            alert('送出成功');
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  
  // if(document.send.account.value=='') {
  //   alert('警示文字');
  // }

});

var index = document.querySelector(".index");

if ( index ) {

  var communication_link = index.querySelector(".write_us");
  var modal_communication = document.querySelector(".modal_communication");
  var communication_close = modal_communication.querySelector(".modal_close");
  var name_field = modal_communication.querySelector("[name=name]");
  var email_field = modal_communication.querySelector("[name=email]");
  var letter_field = modal_communication.querySelector("[name=letter]");
  var form = modal_communication.querySelector("form");
  var storage_support = true;
  var storage_name
  var storage_email

  try {
    storage_name = localStorage.getItem("name");
    storage_email = localStorage.getItem("email");
  } catch (err) {
    storage_support = false;
  }

  communication_link.addEventListener("click", function (evt){
    evt.preventDefault();
    modal_communication.classList.add("modal_shown");
    if ( storage_name && storage_email ) {
      name_field.value = storage_name;
      email_field.value = storage_email;
      letter_field.focus();
    } else {
      name_field.focus();
    }
  });

  communication_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_communication.classList.remove("modal_shown");
    modal_communication.classList.remove("modal_eror");
  });

  form.addEventListener("submit", function(evt){
    if ( !name_field.value || !email_field.value || !letter_field.value ) {
      evt.preventDefault();
      modal_communication.classList.remove("modal_eror");
      modal_communication.offsetWidth = modal_communication.offsetWidth;
      modal_communication.classList.add("modal_eror");
    } else {
      if (storage_support) {
        localStorage.setItem("name", name_field.value);
        localStorage.setItem("email", email_field.value);
      }
    }
  });

  var map_link = document.querySelector(".map_link");
  var modal_map = document.querySelector(".modal_map");
  var map_close = modal_map.querySelector(".modal_close")

  map_link.addEventListener("click", function (evt){
    evt.preventDefault();
    modal_map.classList.add("modal_shown")
  });

  map_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal_shown")
  });

  window.addEventListener("keydown", function(evt) {
    if ( evt.keyCode === 27 ) {
      if ( modal_communication.classList.contains("modal_shown") ) {
        evt.preventDefault();
        modal_communication.classList.remove("modal_shown");
        modal_communication.classList.remove("modal_eror");
      }
      if ( modal_map.classList.contains("modal_shown")) {
        evt.preventDefault();
        modal_map.classList.remove("modal_shown");
      }
    }
  });
}

var buy_link = document.querySelectorAll(".buy_btn");
var modal_success_buy = document.querySelector(".modal_success_buy");
var success_close = modal_success_buy.querySelector(".modal_close");
var success_buttons = modal_success_buy.querySelectorAll(".button")

Array.prototype.forEach.call(buy_link, function(elem){
  elem.addEventListener("click", function (evt){
    evt.preventDefault();
    modal_success_buy.classList.add("modal_shown")
  });
})

success_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_success_buy.classList.remove("modal_shown")
});

Array.prototype.forEach.call(success_buttons, function(elem){
  elem.addEventListener("click", function (){
    modal_success_buy.classList.remove("modal_shown")
  });
});

window.addEventListener("keydown", function(evt){
  if ( evt.keyCode === 27 ) {
    if ( modal_success_buy.classList.contains("modal_shown") ) {
      evt.preventDefault();
      modal_success_buy.classList.remove("modal_shown");
    }
  }
});

"use strict";

function setContact(contactData) {
  var tel = document.getElementById('contact-tel');
  tel.innerHTML = "Tel / Cel: &nbsp;".concat(contactData.tel);
  var adress = document.getElementById('contact-adress');
  adress.innerHTML = contactData.adress;
  var email = document.getElementById('contact-email');
  email.href = "mailto:".concat(contactData.email);
  email.innerHTML = contactData.email;
}
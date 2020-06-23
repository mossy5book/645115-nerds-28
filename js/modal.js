var btnAddress = document.querySelector(".btn-address");
var modalLetter = document.querySelector(".modal-wrapper");
var modalClose = modalLetter.querySelector(".closing-button");
var modalForm = modalLetter.querySelector(".modal-form");
var modalName = modalLetter.querySelector(".letter-name");
var modalEmail = modalLetter.querySelector(".letter-email");
var modalText = modalLetter.querySelector(".letter-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

btnAddress.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalLetter.classList.add("modal-show");

	if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
	  modalName.focus();
 	}
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLetter.classList.remove("modal-show");
  modalLetter.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
	if (!modalName.value || !modalEmail.value || !modalText.value) {
    evt.preventDefault();
    modalLetter.classList.remove("modal-error");
    modalLetter.offsetWidth = modalLetter.offsetWidth;
    modalLetter.classList.add("modal-error");
	} else {
	  if (isStorageSupport) {
    	localStorage.setItem("name", modalName.value);
  	}
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLetter.classList.contains("modal-show")) {
      evt.preventDefault();
      modalLetter.classList.remove("modal-show");
      modalLetter.classList.remove("modal-error");
    }
  }
});

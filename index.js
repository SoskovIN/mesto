let showPopupButtonEdit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

let formElement = document.querySelector('.formElement');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

let nameProfile = document.querySelector('.profile__full-name');
let jobProfile = document.querySelector('.profile__profession');

function togglePopupdEdit(event) {
  event.preventDefault();
  if (popup.classList.contains('popup_opened')) {
    nameInput.value = "Жак-Ив Кусто";
    jobInput.value = "Исследователь океана";
    }
  popup.classList.toggle('popup_opened');
}

showPopupButtonEdit.addEventListener('click', togglePopupdEdit);
closePopupButton.addEventListener('click', togglePopupdEdit);
popup.addEventListener('click', togglePopupdEdit);

document.querySelector('.popup__content').addEventListener('click', function (event) {
  event.stopPropagation();
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}
  formElement.addEventListener('submit', formSubmitHandler);




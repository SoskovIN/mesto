import {Card} from "../components/Card.js";
import {initialCards} from "../utils/initial-cards.js";
import {cardContainer, templateElement, popupEdit, popupAdd,
popupImage, showPopupButtonEdit, showPopupButtonAdd, nameInput,
jobInput, nameProfile, jobProfile, validationConfig} from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';

import './index.css';

// Валидаторы для форм
const formEditCardValidator = new FormValidator(validationConfig, popupEdit);
const formAddCardValidator = new FormValidator(validationConfig, popupAdd);

const userInfo = new UserInfo({ nameSelector: nameProfile, jobSelector: jobProfile, });
const popupCardImage = new PopupWithImage(popupImage);
const popupFormEdit = new PopupWithForm(popupEdit, editFormSubmitHandler);
const popupFormAddCard = new PopupWithForm(popupAdd, addCardSubmitHandler);

// Функция создания карточки
function creatCard(data) {
    const card = new Card(data, templateElement, { handleCardClick() { popupCardImage.open(data)}});
    const cardElement = card.generateCard();
    return cardElement;
}

// Создать начальные карточки "из коробки"
const cardsList = new Section( { items: initialCards, renderer: (data) => {
  cardsList.addItem(creatCard(data));
}}, cardContainer);

// Функция отправки формы Edit,
// добавляет на страницу данные пользователя и закрывает попап
function editFormSubmitHandler(data) {
  userInfo.setUserInfo(data.fullname, data.job);
  popupFormEdit.close();
}

// Навесить слушатель на кнопку открытия попапа Edit
showPopupButtonEdit.addEventListener("click", () => {
  // Данные в поля формы заполняются из профиля страницы
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
  popupFormEdit.open();
  formEditCardValidator.resetValidation()
});

// Функция отправки формы Add,
// добавляет на страницу новую карточку и закрывает попап
function addCardSubmitHandler(data) {
  cardContainer.prepend(creatCard(data));
  popupFormAddCard.close();
}

// Навесить слушатель на кнопку открытия попапа Add
showPopupButtonAdd.addEventListener("click", () => {
  popupFormAddCard.open();
  formAddCardValidator.resetValidation();
});

cardsList.renderItems();
popupFormAddCard.setEventListeners();
popupFormEdit.setEventListeners();
popupCardImage.setEventListeners();
formAddCardValidator.enableValidation();
formEditCardValidator.enableValidation();

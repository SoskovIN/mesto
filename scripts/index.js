// Присвоить значение переменным:
  // Кнопка открытия попапа
let showPopupButtonEdit = document.querySelector('.profile__edit-button');
  // Сам попап
let popup = document.querySelector('.popup');
// Кнопка закрытия попапа
let closePopupButton = document.querySelector('.popup__close');
// Форма
let formElement = document.querySelector('.form-edit');
// Поле ввода имени пользователя
let nameInput = document.querySelector('.form-edit__input_type_name');
// Поле ввода рода деятельности пользователя
let jobInput = document.querySelector('.form-edit__input_type_job');
// Имя пользователя, отображаемое на главное странице
let nameProfile = document.querySelector('.profile__full-name');
// Род деятельности пользователя, отображаемый на главное странице
let jobProfile = document.querySelector('.profile__profession');

// Функция открытия попапа
function addPopupdEdit(event) {
  event.preventDefault();
  popup.classList.add('popup_opened');
}

// Функция  закрытия попапа
function removePopupdEdit(event) {
  event.preventDefault();
  // Обновление значений полей ввода из данных профиля с основной страницы
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
   popup.classList.remove('popup_opened');
}

// Функция обработки ввода данных
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  removePopupdEdit(evt);
}

// Добавить действие на кнопку:
  // Открыть попап на кнопку редактирования профиля
  showPopupButtonEdit.addEventListener('click', addPopupdEdit);
  // Закрыть попап на кнопку - Крестик
  closePopupButton.addEventListener('click', removePopupdEdit);
  // Отправить форму на кнопку "Сохранить" или Enter
  formElement.addEventListener('submit', formSubmitHandler);








  // let likeButton = document.querySelector('.element__like');
  // function addLike (event) {
  //   event.preventDefault();
  //   likeButton.classList.add('element__like_active');
  // }
  //   likeButton.addEventListener('click', addLike);

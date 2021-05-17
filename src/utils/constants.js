// Глобальыне переменные:

  // Место, куда будут добавляются карточки
  export const cardContainer = document.querySelector('.elements');
  // Элемент, который будет клонироваться
  export const templateElement = document.querySelector(".template").content.querySelector(".element");

  // Попап редактирования профиля (edit)
  export const popupEdit = document.querySelector('.popup-edit');
  // Попап добавления карточки на страницу (add)
  export const popupAdd = document.querySelector('.popup-add');
  // Попап для детального просмотра изображения
  export const popupImage = document.querySelector('.popup-image');

  // Кнопки открытия/закрытия попапа редактирования профиля (edit)
  export const showPopupButtonEdit = document.querySelector('.profile__edit-button');
  // Кнопки открытия/закрытия попапа добавления карточки (add)
  export const showPopupButtonAdd = document.querySelector('.profile__add-button');

  // Поле ввода имени пользователя
  export const nameInput = document.querySelector('.form__input_type_name');
  // Поле ввода рода деятельности пользователя
  export const jobInput = document.querySelector('.form__input_type_job');
  // Имя пользователя, отображаемое на главное странице
  export const nameProfile = document.querySelector('.profile__full-name');
  // Род деятельности пользователя, отображаемый на главное странице
  export const jobProfile = document.querySelector('.profile__profession');

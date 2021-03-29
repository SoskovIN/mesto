// Присвоить значение переменным:
  // Место, куда будут добавляются карточки
  const cardContainer = document.querySelector('.elements');
  // Содержимое Шаблона
  const templateCard = document.querySelector('.template').content;
  // Новый образец Шаблона
  const cardElement = templateCard.querySelector('.element').cloneNode(true);

  // Попап
  const popup = document.querySelector('.popup');
  // Попап редактирвоания профиля (edit)
  const popupEdit = document.querySelector('.popup-edit');
  // Попап добавления карточки на страницу (add)
  const popupAdd = document.querySelector('.popup-add');
  // Попап для детального просмотра изображения
  const popupImage = document.querySelector('.popup-image');

  // Описание изображения в попапе img (под изображением)
  const titlePopupImage = document.querySelector('.popup__image-title');

  // Кнопки открытия/закрытия попапа редактирования профиля (edit)
  const showPopupButtonEdit = document.querySelector('.profile__edit-button');
  const closePopupButtonEdit = document.querySelector('.popup__close-edit');
  // Кнопки открытия/закрытия попапа добавления карточки (add)
  const showPopupButtonAdd = document.querySelector('.profile__add-button');
  const closePopupButtonAdd = document.querySelector('.popup__close-add');
  // Кнопки открытия и закрытия попапа увеличения изображения
  const buttonPopupImage = document.querySelector('.popup__image');
  const closePopupButtonImg = document.querySelector('.popup__close-img');

  // Форма редактирование данных пользователя
  const formEditElement = document.querySelector('.form');
  // Поле ввода имени пользователя
  const nameInput = document.querySelector('.form__input_type_name');
  // Поле ввода рода деятельности пользователя
  const jobInput = document.querySelector('.form__input_type_job');
  // Имя пользователя, отображаемое на главное странице
  const nameProfile = document.querySelector('.profile__full-name');
  // Род деятельности пользователя, отображаемый на главное странице
  const jobProfile = document.querySelector('.profile__profession');

  // Форма добавлния карточки
 const formAddElement = document.querySelector('.form-add');
  // Поле ввода названия карточки
  const titleInput = document.querySelector('.form__input_type_title');
  // Поле ввода ссылки на загружаемое изображение
  const imageInput = document.querySelector('.form__input_type_link');


// Функция создания шаблонной карточки
function createCardDomNode(card) {
  // Создать переменные
  // Новая карточка
  const newCard = templateCard.cloneNode(true);
  // Заголовок карточки
  const cardTitle = newCard.querySelector('.element__title');
  // Изображение карточки
  const cardImage = newCard.querySelector('.element__image');
  // Заполнить поля новой карточки элементами из объекта
  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  // Навесить слушатель на карточку
  addCardListeners(newCard);
  // Возвратить карточку
	return newCard;
}

// Функция отображения шести карточек "из коробки"
function renderCards() {
	const result = initialCards.map(function(card) {
		const newCard = createCardDomNode(card);
		return newCard;
	});
	cardContainer.append(...result);
}

//Отобразить на странице 6 карточек
renderCards();

// Функция смены активности лайка на карточке
function toggleLike(evt) {
  const target = evt.target;
  const likeButton = target.closest('.element__like');
  likeButton.classList.toggle('element__like_active');
}

// Функция удаления карточки со страницы
function deleteCard(evt) {
  const target = evt.target;
  const currentCard = target.closest('.element');
  currentCard.remove();
}

// Навесить слушатель на фотографию в карточке, открывающую попап image
closePopupButtonImg.addEventListener('click', () => {
  closePopup(popupImage);
});

// Функция открытия попапа c изображением
function openPopupImage(evt) {
  const target = evt.target;
  buttonPopupImage.src = target.src;
  buttonPopupImage.alt = target.alt;
  titlePopupImage.textContent = target.alt;
  openPopup(popupImage);
}

// Добавить слушатели событий для шаблонной карточки
function addCardListeners(card) {
  const likeButton = card.querySelector('.element__like');
  likeButton.addEventListener('click', toggleLike);

  const deleteCardButton = card.querySelector('.element__delete');
  deleteCardButton.addEventListener('click', deleteCard);

  const cardImage = card.querySelector('.element__image');
  cardImage.addEventListener('click', openPopupImage);
  cardImage.addEventListener('click', (evt) => {
  });
}

// Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  // Навесить слушатель на кнопку "Escape" для закрытия открытого Попапа
  document.addEventListener('keyup', closePopupByEsc);
}
// Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEsc);
  clearError(popup, obj);
}
// Обработчик полей ввода формы Edit
function openPopupEditHandler(popupOpen) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupOpen);
}
// бработчик полей ввода формы Add
function openPopupAddHandler(popupOpen) {
  titleInput.value = "";
  imageInput.value = "";
  openPopup(popupOpen);
}
// Навесить слушатель на кнопку открытия попапа Edit
showPopupButtonEdit.addEventListener('click', () => {
  openPopupEditHandler(popupEdit);
});

// Навесить слушатель на кнопку закрытия попапа Edit
closePopupButtonEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

// Навесить слушатель на кнопку открытия попапа Add
showPopupButtonAdd.addEventListener('click', () => {
  openPopupAddHandler(popupAdd);
  // Найти кнопку "Сохранить"
  const buttonElement = document.querySelector(obj.submitButtonSelector);
  buttonElement.setAttribute('disabled', true);
});
// Навесить слушатель на кнопку закрытия попапа Add
closePopupButtonAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

// Функция обработки ввода данных в форме Edit
function submitFormEditHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}
// Отправить форму Edit на кнопку "Сохранить" или Enter
formEditElement.addEventListener('submit', submitFormEditHandler);

// Функция обработки ввода данных в форме Add
function submitFormAddHandler(evt) {
  evt.preventDefault();
  const valueTitleInput = titleInput.value;
  const scrImageInput = imageInput.value;
  const newCard = createCardDomNode({name: valueTitleInput, link: scrImageInput})
  cardContainer.prepend(newCard);
  closePopup(popupAdd);
}
// Отправить форму Add на кнопку "Сохранить" или Enter
formAddElement.addEventListener('submit', submitFormAddHandler);


// Получить массив всех попапов
const popupList = Array.from(document.querySelectorAll('.popup'));
// Обработать попапы в цикле
popupList.forEach(popup => {
  // Закрыть конкретный попап при нажатии ЛКМ на оверлей попапа
  popup.onclick = (evt) => {
    if(evt.target.classList.contains('popup')) {
      closePopup(popup)
    }
  }
});

// Задать глобальную переменную со значением клавиши Escape
const Escape = 27;
// Функция закрытия попапа при нажатии на кнпоку "Escape"
function closePopupByEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
    if (evt.keyCode === Escape) {
      closePopup(popupOpened)
  }
}

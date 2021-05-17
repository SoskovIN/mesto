export class Card {
  constructor (cardData, cardSelector, { handleCardClick }) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  // Приватный метод генерации карточки
  _getTemplate() {
    const cardElement = this._cardSelector.cloneNode(true);
    // const cardElement = document.querySelector(this._cardSelector)
    // .content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  // Публичный метод наполнения шаблонной карточки
  generateCard() {
    // Записать разметку в приватное поле _element
    this._element = this._getTemplate();

    this._likeButton = this._element.querySelector(".element__like");
    this._deleteButton = this._element.querySelector(".element__delete");

    // Заполнить поля новой карточки элементами из объекта
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    // Навесить слушатель на карточку
    this._setEventListeners();
    return this._element;
  };

  // Приватный метод добавления слушателей событий для шаблонной карточки
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._toggleLikeHandler();
    });
    this._deleteButton.addEventListener('click', () => {
      this._deleteCardHandler();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
      // this._handleCardClick();
    });
  }

  // Приватный метод смены состояния отображения лайка
  _toggleLikeHandler() {
    this._likeButton.classList.toggle("element__like_active");
  }

  // Приватный метод удаления карточки со страницы
  _deleteCardHandler() {
    this._element.remove();
  }

}


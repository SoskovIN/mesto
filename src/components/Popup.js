// Класс, отвечает за поткрытие и закрытие попапов
export class Popup {
  constructor (popupElement) {
    this._popupElement = popupElement;
    this._popupActiveSelector = "popup_opened";
    this._buttonClosePopup = this._popupElement.querySelector('.popup__close');
    this._handleEscCloseBind = this._handleEscClose.bind(this);
    this._handleOverlayCloseBind = this._handleOverlayClose.bind(this);
  }

  // Метод открытия попапа
  open() {
    this._popupElement.classList.add(this._popupActiveSelector);
    // Навесить слушатель на кнопку "Escape" и клик для закрытия открытого Попапа
    document.addEventListener('keydown', this._handleEscCloseBind);
    document.addEventListener ('click', this._handleOverlayCloseBind);
  }

  // Метод закрытия попапа
  close() {
    this._popupElement.classList.remove(this._popupActiveSelector);
    // Удалить слушатель с кнопки "Escape" и клик для закрытия открытого Попапа
    document.removeEventListener('keydown', this._handleEscCloseBind);
    document.removeEventListener ('click', this._handleOverlayCloseBind);
  }

    // Приватный метод закрытия попапа на Esq
  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
        this.close();
    }
  }

  // Приватный метод закрытия попапа кликом на креcтик и оверлей
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_opened')
      || evt.target.classList.contains('popup__close')) {
        this.close();
      }
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', () => {
        this.close();
    });
  }

}

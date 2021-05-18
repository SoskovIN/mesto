import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupElement, submitHandler) {
    super(popupElement);
    this._submitHandler = submitHandler;
    this._popupForm = this._popupElement.querySelector('.form');
    this._inputList = this._popupForm.querySelectorAll('.form__input');
  }

  // Метод собирает данные всех полей формы
  _getInputValues() {
    // Создать пустой объект
    this._formValues = {};

  // Добавить в этот объект значения всех полей
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    // super.setEventListener();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      // this.close();
      super.setEventListener();
    });

  }

  close() {
    super.close();
    this._popupForm.reset();
  }

}

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_invalid',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}

export class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(validationConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(
      validationConfig.submitButtonSelector);
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  }

  // Публичный метод включения валидации
  enableValidation () {
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      // Навесить слушатели для полей форм
      this._setEventListeners();
  };

  // Публичный метод очистки ошибок и изменения состояния кнопки отправки формы
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
    this._toggleButtonState();
  };

  // Приватный метод добавления слушателей, реагирующих на вводимые дданые в поля форм
  _setEventListeners() {
    // Начальная установка кнопки в нужное положение
    // this._toggleButtonState();   ===> уже вроде как и без этого работает
    // Обработать инпуты в цикле
    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._toggleButtonState();
          this._checkInput(inputElement);
        });
    });
  };

  // Приватный метод переключения состояния кнопки "Сохранить"
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled", false);
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  // Приватный метод проверки корректности заполнения полей ввода
  _hasInvalidInput() {
    return this._inputList.some(input => {
      return !input.validity.valid;
    })
  };

  // Приватный  метод проверки полей ввода на валидность
  _checkInput (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage );
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Приватный  метод добавления действий при ошибке валидации
  _showInputError (inputElement, errorMessage) {
    // Поиск поля с текстом ошибки
    const errorPlace  = this._formElement.querySelector(`#${inputElement.id}-error`);
    // Показать сообщение об ошибке под полем
    errorPlace.classList.add(this._validationConfig.errorClass);
    errorPlace.textContent = errorMessage;
    // Добавить красную границу инпута
    inputElement.classList.add(this._validationConfig.inputErrorClass);
  };

  //Приватный  метод удаления действий при ошибке под полем
  _hideInputError (inputElement) {
    const errorPlace  = this._formElement.querySelector(`#${inputElement.id}-error`)
    // Cкрыть сообщение об ошибке
    errorPlace.classList.remove(this._validationConfig.errorClass);
    errorPlace.textContent = '';
    // Удалить красную границу инпута
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
  };

}



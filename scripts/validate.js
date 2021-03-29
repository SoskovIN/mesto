// Функция проверки: есть ли хоть одно пустое поле
const allInputsEmpty = (inputList) => {
  return inputList.some(inputElement => inputElement.value.length === 0);
};

// Функция проверки: есть ли хотя бы одно невалидное поле в форме?
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
};

// Функция переключения состояния кнопки "Сохранить"
const toggleButtonState = (inputList, buttonElement, obj) => {
  //Если хотя бы один инпут невалиден, то форма невалидна
  if (hasInvalidInput(inputList, obj) || allInputsEmpty(inputList, obj)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// Функция добавления действий при ошибке
const showInputError = (formElement, inputElement, obj) => {
  // Поиск поля с текстом ошибки
  const errorPlace = formElement.querySelector(`#${inputElement.id}-error`);
  // Добавить красную границу инпута
  inputElement.classList.add(obj.inputErrorClass);
  // Показать ошибку под полем
  errorPlace.classList.add(obj.errorClass);
  errorPlace.textContent = inputElement.validationMessage;
};

// Функция удаления действий при ошибке
const hideInputError = (formElement, inputElement, obj) => {
  // Поиск поля с текстом ошибки
  const errorPlace = formElement.querySelector(`#${inputElement.id}-error`);
  // Удалить красную границу инпута
  inputElement.classList.remove(obj.inputErrorClass);
  // Cкрыть ошибку под полем
  errorPlace.classList.remove(obj.errorClass);
  errorPlace.textContent = "";
};

// // Функция сбрасывания валидации форм, для повторногом открытия попапа с формой
// const clearError = (formElement, obj) => {
//   const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
//   inputList.forEach(inputElement => {
//     inputElement.classList.remove(obj.inputErrorClass);

//     const spanList = Array.from(formElement.querySelectorAll(`#${inputElement.id}-error`))
//     spanList.forEach(spanElement => {
//       spanElement.classList.remove(obj.errorClass);
//       spanElement.textContent = "";
//     });
//   });
// }

// Функция проверки состояния поля на валидность
const checkInput = (formElement, inputElement, obj) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, obj)
  } else {
    showInputError(formElement, inputElement, obj);
  }
};

// Функция навешивания слушателей для полей форм
const setInputListeners = (formElement, obj) => {
  // Получить массив всех инпутов
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  // Найти кнопку "Сохранить"
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  // Обработать инпуты в цикле
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      // Проверить состояние поля на валидность
      checkInput(formElement, inputElement, obj);
      // Переключить состояние кнопки
      toggleButtonState(inputList, buttonElement, obj);
    });
    toggleButtonState(inputList, buttonElement, obj);
  });
};

// Функция включения валидации
const enableValidation = (obj) => {
  // Действие запуска процесса наложения валидации

  // Получить массив всех форм
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  // Обработать формы в цикле
  formList.forEach(
    formElement => {
      formElement.addEventListener('submit', (evt) => {
        // Отменить для формы поведение по умолчанию
        evt.preventDefault()
        // Отключить кнопку и сменить стиль при открытии формы добавления карточки
        const buttonAdd = document.querySelector('#buttonAdd');
        buttonAdd.classList.add(obj.inactiveButtonClass);
        buttonAdd.setAttribute('disabled', true);
      });
      // Навесить слушатели для полей формы
      setInputListeners(formElement, obj);
    }
  );
};

// Объект с настройками валидации
const obj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_invalid',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}

// Включение валидации
enableValidation(obj);




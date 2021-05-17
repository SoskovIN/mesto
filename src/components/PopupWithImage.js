import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
  }

  open({name, link}) {
    super.open();

    this._popupElement.querySelector('.popup__image').src = link;

    const popupElementTitle = this._popupElement.querySelector('.popup__image-title');
    popupElementTitle.textContent = name;
    popupElementTitle.alt = name;

    super.setEventListeners();
  }

}

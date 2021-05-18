import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor (popupElement) {
    super(popupElement);
  }

  open({name, link}) {
    super.open();
    const popupElementImage = this._popupElement.querySelector('.popup__image');
    const popupElementTitle = this._popupElement.querySelector('.popup__image-title');
    popupElementImage.src = link;
    popupElementImage.alt = name;
    popupElementTitle.textContent = name;
    super.setEventListeners();
  }

}

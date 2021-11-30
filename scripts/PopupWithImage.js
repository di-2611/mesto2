import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
    super(popupSelector);
    }

    open(name, link) {
        const image = this._popupSelector.querySelector('.popup__image');
        const imageSubtitle = this._popupSelector.querySelector('.popup__image-title');
        image.src = link;
        image.alt = name;
        imageSubtitle.textContent = name;
        super.open();
       
    }
}
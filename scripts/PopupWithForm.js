import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
	constructor(popupSelector, submitFormEdit) {
    super(popupSelector);
    this.submitFormEdit = submitFormEdit;
    }

    _getInputValues() {}

    setEventListeners(){}

    close(){}
}
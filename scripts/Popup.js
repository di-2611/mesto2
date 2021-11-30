export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", (event) => this._handleEscClose(event));
        document.addEventListener("mousedown", (event) => this._closePopupByClickOnOverlay(this));
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener("keydown", (event) => this._handleEscClose(event));
        document.addEventListener("mousedown", (event) => this._closePopupByClickOnOverlay(this));
    }

    _closePopupByClickOnOverlay(event) {
        if (event.target !== event.currentTarget) {
          return;
        }
        this.close(event.currentTarget);
      };

    _handleEscClose(event) {
        if (event.key === "Escape") {
            const popupOpened = document.querySelector(".popup_opened");
            this.close(popupOpened);
          }
    }

    setEventListeners() {
        this._popupSelector.querySelector(".popup__close").removeEventListener("click", this.close.bind(this));
    }
}

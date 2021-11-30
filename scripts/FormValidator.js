export default class FormValidator {
  constructor(formSelector, validationConfig) {
    this._formElement = document.querySelector(formSelector);
    this._validationConfig = validationConfig;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = "";
    errorElement.classList.remove(this._validationConfig.errorClass);
  }

  _checkInputValidity(formElement, inputElement) {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;

      this._showInputError(formElement, inputElement, errorMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
      buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this._validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._validationConfig.submitButtonSelector
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });

    this._toggleButtonState(inputList, buttonElement);
  }

  enableValidation = () => {
    const submitFormHandler = (event) => {
      event.preventDefault();
    };
    this._formElement.addEventListener("submit", submitFormHandler);

    this._setEventListeners(this._formElement, this._validationConfig);
  };
}



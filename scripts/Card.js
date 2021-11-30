class Card {
  // в конструкторе будут динамические данные,
  // для каждого экземпляра свои
  constructor(data, cardSelector, prependCard, openPopupImg) {
    // text и image — приватные поля,
    // они нужны только внутри класса
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._openPopupImg = openPopupImg;
  }
  _getTemplate() {
    // забираем размеку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._element
      .querySelector(".element__group")
      .classList.toggle("element__group_like");
  }

  _handlePreviewPicture() {
    this._openPopupImg(this._name, this._link);
  }

  _setListeners() {
    this._element.querySelector(".element__delete").addEventListener("click", this._handleDeleteCard.bind(this));
    this._element.querySelector(".element__group").addEventListener("click", this._handleLikeCard.bind(this));
    this._element.querySelector(".element__image").addEventListener("click", this._handlePreviewPicture.bind(this));
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    // Добавим данные
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__subtitle").textContent = this._name;
    this._element.querySelector(".element__image").alt = this._name;
    this._setListeners();
    // Вернём элемент наружу
    return this._element;
  }
}

export default Card;

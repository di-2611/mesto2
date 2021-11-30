import { validationConfig } from "./Config.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";


const editPopup = document.querySelector(".popup_type_edit");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = editPopup.querySelector(".popup__close");
const formElementEdit = editPopup.querySelector(".popup__content");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_profession");

const addPopup = document.querySelector(".popup_type_add");
const popupOpenAddButton = document.querySelector(".profile__add-button");
const popupCloseAddButton = addPopup.querySelector(".popup__close");
const addPopupSubmit = addPopup.querySelector(".popup__submit");

const elementsPhotoGrid = ".elements__photo-grid";
const popupInputPlace = document.querySelector(".popup__input_place");
const popupInputLink = document.querySelector(".popup__input_link");

const imagePopup = document.querySelector(".popup_type_image");
const imagePopupOpen = ".popup_type_image";
const popupCloseImgButton = document.querySelector(".popup__close_position");

const zoomImg = document.querySelector(".popup__image");
const zoomImgSubtitle = document.querySelector(".popup__image-title");

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const prependCard = (element) => {
  elementsPhotoGrid.prepend(element);
};
/*
initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(
    item,
    ".elements__template_type_default",
    prependCard,
    openPopupImg
  );
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  elementsPhotoGrid.append(cardElement);
});*/

// новый код
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.elements__template_type_default', prependCard, openPopupImg);

    const cardElement = card.generateCard();

    cardList.setItem(cardElement);
    },
  },
  elementsPhotoGrid
);

cardList.renderItems();
/*
const popupImageOpened = (name, link) => {
  const popupImage = new PopupWithImage('.popup_type_image');
  popupImage.open(name, link);
}*/

const popup = new Popup('.popup');
popup.setEventListeners();

function openPopupImg(name, link) {
  const popupImage = new PopupWithImage('.popup_type_image');
  popupImage.open(name, link);
}

const popupAdd = new PopupWithForm('.popup_type_image');

/*
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByClickOnEscape);
}*/
/*
function openPopupImg(name, link) {
  zoomImg.src = link;
  zoomImg.alt = name;
  zoomImgSubtitle.textContent = name;
  openPopup(imagePopup);
}*/

const copyPopup = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
};
/*
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByClickOnEscape);
};*/

function submitFormEdit(evt) {
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(editPopup);
}

const addCard = (event) => {
  const cardData = {
    name: popupInputPlace.value,
    link: popupInputLink.value,
  };
  const card = new Card(
    cardData,
    ".elements__template_type_default",
    prependCard,
    openPopupImg,
    '.popup_type_image'
  );
  const element = card.generateCard();
  elementsPhotoGrid.prepend(element);
  closePopup(addPopup);
};
/*
const closePopupByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};*/
/*
const closePopupByClickOnEscape = (event) => {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};*/

// для валидации
const formSigninValidator = new FormValidator(
  validationConfig.formSelectorEdit,
  validationConfig
);
formSigninValidator.enableValidation();

const formSignupValidator = new FormValidator(
  validationConfig.formSelectorAdd,
  validationConfig
);
formSignupValidator.enableValidation();


/*popupOpenButton.addEventListener("click", () => {
  openPopup(editPopup);
  copyPopup();
});*/

popupOpenAddButton.addEventListener("click", () => {
  openPopup(addPopup);
});
/*popupCloseButton.addEventListener("click", () => {
  closePopup(editPopup);
});*/
popupCloseAddButton.addEventListener("click", () => {
  closePopup(addPopup);
});
/*popupCloseImgButton.addEventListener("click", () => {
  closePopup(imagePopup);
});*/
formElementEdit.addEventListener("submit", submitFormEdit);
/*editPopup.addEventListener("click", closePopupByClickOnOverlay);
addPopup.addEventListener("click", closePopupByClickOnOverlay);
imagePopup.addEventListener("click", closePopupByClickOnOverlay);*/
addPopupSubmit.addEventListener("click", addCard);






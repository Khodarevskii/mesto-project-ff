import { popupOpened,popupHide} from "./modalShow"

const elementPlace = document.querySelector('.places__list');
const element = document.querySelector('#card-template');
const  imagePopup = document.querySelector('.popup_type_image')
const imagePopupLink = imagePopup.querySelector('.popup__image')
const imagePopupCaption = imagePopup.querySelector('.popup__caption')
const deleteElement = function (evt) { 
  evt.target.closest('.card').remove() 
}
function like(evt){
  evt.target.classList.toggle('card__like-button_is-active')
}

function ImagePopup(evt){
  imagePopupLink.setAttribute('src',evt.target.src)
  imagePopupCaption.textContent = evt.target.closest('.card').querySelector('.card__title').textContent
  popupOpened(imagePopup)
  popupHide(imagePopup)
}


function createElement(imageValue, textValue, deleteElement,like,ImagePopup) { 
    const userElemntPlace = element.content.querySelector('.places__item').cloneNode(true);
    const cardImage = userElemntPlace.querySelector('.card__image')
    const cardTitle =  userElemntPlace.querySelector('.card__title')
    const cardLikeButton =  userElemntPlace.querySelector('.card__like-button')
    cardImage.src = imageValue
    cardImage.alt = textValue
    cardTitle.textContent = textValue
    const deleteButton = userElemntPlace.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteElement);
    cardLikeButton.addEventListener('click',like)
    cardImage.addEventListener('click',ImagePopup)
    return userElemntPlace;
  }

  function renderCard(img, text) {
    return elementPlace.prepend(createElement(img, text,deleteElement,like,ImagePopup))
  }


export{renderCard}
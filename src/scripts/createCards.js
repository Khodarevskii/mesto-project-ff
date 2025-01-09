import {elementPlace,openImagePopup,initPopupCloseByClick} from "./index.js"
const element = document.querySelector('#card-template');

const deleteElement = function (evt) { 
  evt.target.closest('.card').remove() 
}
function like(evt){
  evt.target.classList.toggle('card__like-button_is-active')
}



function createElement(imageValue, textValue, deleteElement,like,openImagePopup) { 
    const userElementPlace = element.content.querySelector('.places__item').cloneNode(true);
    const cardImage = userElementPlace.querySelector('.card__image')
    const cardTitle =  userElementPlace.querySelector('.card__title')
    const cardLikeButton =  userElementPlace.querySelector('.card__like-button')
    cardImage.src = imageValue
    cardImage.alt = textValue
    cardTitle.textContent = textValue
    const deleteButton = userElementPlace.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteElement);
    cardLikeButton.addEventListener('click',like)
    cardImage.addEventListener('click',  function(){openImagePopup(textValue, imageValue)})
    return userElementPlace;
  }

  function renderCard(img, text) {
    return elementPlace.prepend(createElement(img, text,deleteElement,like,openImagePopup))
  }


export{renderCard}
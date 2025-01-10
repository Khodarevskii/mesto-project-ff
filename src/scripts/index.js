import {initialCards} from './cardsElements.js'
import {deleteElement,like,createElement} from './createCards.js'
import '../pages/index.css';
import avatarImage from '../images/avatar.jpg';

import {openPopup,initPopupCloseByClick} from './modalShow.js';
import { initSubmitListeners,fillProfileFormInputs } from './form.js';
avatarImage = new URL ('../images/avatar.jpg', import.meta.url) ;

const allPopup = document.querySelectorAll('.popup')

const elementPlace = document.querySelector('.places__list');
const  imagePopup  = document.querySelector('.popup_type_image') 
const imagePopupLink = imagePopup.querySelector('.popup__image') 
const imagePopupCaption = imagePopup.querySelector('.popup__caption') 

const editButton = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector('.popup_type_edit')
const addButton = document.querySelector('.profile__add-button')
const popupAddCard = document.querySelector('.popup_type_new-card')




function renderCard(img, text) {
  return elementPlace.prepend(createElement(img, text,deleteElement,like,openImagePopup))
}

allPopup.forEach(function(popup){ 
  initPopupCloseByClick(popup) 
}) 

initialCards.forEach(function (elements) {
    return renderCard(elements.link, elements.name);
  });
  
function openImagePopup(textValue,imageValue){
  imagePopupLink.setAttribute('src',imageValue)
  imagePopupCaption.textContent = textValue
  openPopup(imagePopup)
}

function popupEditShow(){
  editButton.addEventListener('click',function(){
    openPopup(popupEdit)
    fillProfileFormInputs()
  })
}
function popupAddShow(){
  addButton.addEventListener('click',function(){
    openPopup(popupAddCard)
  })
}



popupEditShow()
popupAddShow()
initSubmitListeners()
export{elementPlace,imagePopup,imagePopupLink,imagePopupCaption,openImagePopup,renderCard,editButton,popupEdit,addButton,popupAddCard}
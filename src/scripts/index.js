import {initialCards} from './cardsElements.js'
import { renderCard } from './createCards.js';
import '../pages/index.css';
import avatarImage from '../images/avatar.jpg';
import {popupEditShow,popupAddShow,openPopup,closePopup,popupAll} from './modalShow.js';
import { editEventButton,addCardEventButton } from './form.js';
avatarImage = new URL ('../images/avatar.jpg', import.meta.url) ;
const elementPlace = document.querySelector('.places__list');
const  imagePopup  = document.querySelector('.popup_type_image') 
const imagePopupLink = imagePopup.querySelector('.popup__image') 
const imagePopupCaption = imagePopup.querySelector('.popup__caption') 

initialCards.forEach(function (elements) {
    return renderCard(elements.link, elements.name);
  });
  
function openImagePopup(textValue,imageValue){
  imagePopupLink.setAttribute('src',imageValue)
  imagePopupCaption.textContent = textValue
  openPopup(imagePopup)
}

function initPopupCloseByClick(popup){
  popup.addEventListener('click',function(evt){ 
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){ 
      closePopup(popup) 
    }
  }) 
}




popupAll.forEach(function(popup){
  initPopupCloseByClick(popup)
})

popupEditShow()
popupAddShow()
editEventButton
addCardEventButton
export{elementPlace,imagePopup,imagePopupLink,imagePopupCaption,openImagePopup,initPopupCloseByClick}
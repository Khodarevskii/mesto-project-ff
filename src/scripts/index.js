import {deleteElement,like,createElement} from './createCards.js'
import '../pages/index.css';
import avatarImage from '../images/avatar.jpg';
import {newAvatarPicture,getInitialCards,getUserData} from './api.js'
import {openPopup,initPopupCloseByClick} from './modalShow.js';
import { initSubmitListeners,fillProfileFormInputs,userDescription,userName } from './form.js';
import { enableValidation,clearValidation,validationConfig} from './validation.js';
avatarImage = new URL ('../images/avatar.jpg', import.meta.url) ;

const allPopup = document.querySelectorAll('.popup')

const elementPlace = document.querySelector('.places__list');
const imagePopup  = document.querySelector('.popup_type_image') 
const imagePopupLink = imagePopup.querySelector('.popup__image') 
const imagePopupCaption = imagePopup.querySelector('.popup__caption') 

const editButton = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector('.popup_type_edit')
const addButton = document.querySelector('.profile__add-button')
const popupAddCard = document.querySelector('.popup_type_new-card')


const editAvatar = document.querySelector('.popup_type_edit-avatar')
const avatar = document.querySelector('.profile__image')


function renderCard( text,img,id,userId,cardOwnerId,likeCounter) {
  return elementPlace.prepend(createElement(text, img,id,userId,cardOwnerId,likeCounter,deleteElement,like,openImagePopup))
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 




allPopup.forEach(function(popup){ 
  initPopupCloseByClick(popup) 
}) 



function openImagePopup(textValue,imageValue){
  imagePopupLink.setAttribute('src',imageValue)
  imagePopupCaption.textContent = textValue
  openPopup(imagePopup)
}

function popupEditShow(){
  editButton.addEventListener('click',function(){
    openPopup(popupEdit)
    fillProfileFormInputs()
    clearValidation(popupEdit,validationConfig)
  })
}
function popupAddShow(){
  addButton.addEventListener('click',function(){
    openPopup(popupAddCard)
    clearValidation(popupAddCard,validationConfig)
  })
}

function popupEditAvatarShow(){
  avatar.addEventListener('click',function(){
    openPopup(editAvatar)
    clearValidation(editAvatar,validationConfig)
  })
}

Promise.all([
  getInitialCards(),
  getUserData()
]).then(results => {
  results[0].forEach((element)=>{
     renderCard(element.name,element.link,element._id,results[1]._id,element.owner._id,element.likes.length)
     userName.textContent = results[1].name
     userDescription.textContent = results[1].about
     avatar.style.backgroundImage =`url(${results[1].avatar})`
  })
});





popupEditShow()
popupAddShow()
popupEditAvatarShow()
initSubmitListeners()
export{elementPlace,imagePopup,imagePopupLink,imagePopupCaption,openImagePopup,renderCard,editButton,popupEdit,addButton,popupAddCard,avatar,editAvatar}
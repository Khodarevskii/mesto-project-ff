import { fillProfileFormInputs } from "./form.js"

const popupAll = document.querySelectorAll('.popup')
const editButton = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector('.popup_type_edit')
const addButton = document.querySelector('.profile__add-button')
const popupAddCard = document.querySelector('.popup_type_new-card')


function closePopup(popup){ 
  popup.classList.remove('popup_is-opened') 
  
}

function openPopup(popup){
  popup.classList.add('popup_is-opened')
  document.addEventListener('keydown',closePopupByEsc)
}

const closePopupByEsc = function(evt,popup){ 
  if (evt.key === "Escape"){ 
    closePopup(document.querySelector('.popup_is-opened')) 
  } 
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
  export { popupEditShow,popupAddShow,closePopup,popupEdit,popupAddCard,openPopup,popupAll}

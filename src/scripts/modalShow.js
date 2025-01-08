import { inputShowText } from "./form"
const editButton = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector('.popup_type_edit')
const addButton = document.querySelector('.profile__add-button')
const popupAddCard = document.querySelector('.popup_type_new-card')


function popupClose(popup){
  popup.classList.remove('popup_is-opened')
}

function popupOpened(popup){
  popup.classList.add('popup_is-opened')

}

function popupHide(popup){
  const popupCloseEsc = function(evt){
    if (evt.key === "Escape"){
      popupClose(popup)
      document.removeEventListener('keydown',popupCloseEsc)
    }
   }

    popup.addEventListener('click',function(evt){
      if(evt.target.classList.contains('popup')){
        popupClose(popup)
      }
      if(evt.target.classList.contains('popup__close')){
        popupClose(popup)
      }
    })

    document.addEventListener('keydown',popupCloseEsc)
  }

  function popupEditShow(){
    editButton.addEventListener('click',function(){
      popupOpened(popupEdit)
      popupHide(popupEdit)
      inputShowText()
    })
  }
  function popupAddShow(){
    addButton.addEventListener('click',function(){
      popupOpened(popupAddCard)
      popupHide(popupAddCard)
    })
  }
  export { popupEditShow,popupAddShow,popupHide,popupClose,popupEdit,popupAddCard,popupOpened}

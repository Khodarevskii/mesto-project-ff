import { closePopup } from "./modalShow.js"
import {renderCard,popupEdit,popupAddCard,avatar,editAvatar} from './index.js'
import {createNewCard,pushUserInfo,customizeAvatar} from './api.js'
const editForm = document.forms['edit-profile']

const nameInput = editForm.elements.name
const userName = document.querySelector('.profile__title')

const jobInput = editForm.elements.description
const userDescription = document.querySelector('.profile__description')

const addCardForm = document.forms['new-place']
const nameCardInput = addCardForm.elements['place-name']
const linkCardInput = addCardForm.elements.link

const editAvatarForm = document.forms['edit-avatar']
const editAvatarInput = editAvatarForm.elements.link
function setInputValueFrontTextContent(input,content){
    input.value = content.textContent
}

function setFrontTextContentValueInput(input,content){
    content.textContent = input.value
}

function fillProfileFormInputs(){
    setInputValueFrontTextContent(nameInput,userName)
    setInputValueFrontTextContent(jobInput,userDescription)
}
function handleFormEditSubmit(evt) {
    evt.preventDefault()
    renderLoading(true,popupEdit.querySelector('.popup__button'))
    pushUserInfo(nameInput.value,jobInput.value)
    .then(()=>{
      setFrontTextContentValueInput(nameInput,userName)
      setFrontTextContentValueInput(jobInput,userDescription)
      closePopup(popupEdit)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      renderLoading(false,popupEdit.querySelector('.popup__button'))
    })
  

}

function createUserCard(evt){
    evt.preventDefault()
    renderLoading(true,popupAddCard.querySelector('.popup__button'))
    createNewCard(nameCardInput.value,linkCardInput.value)
    .then((res)=>{
      renderCard(res.name,res.link,res._id,res.owner._id,res.owner._id)
      closePopup(popupAddCard)
      addCardForm.reset()
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      renderLoading(false,popupAddCard.querySelector('.popup__button'))
    })
}
function createNewAvatar(evt){
  evt.preventDefault()
  renderLoading(true,editAvatar.querySelector('.popup__button'))
  customizeAvatar(editAvatarInput.value)
  .then((res)=>{
     avatar.style.backgroundImage =`url(${res.avatar})`
     editAvatarForm.reset()
     closePopup(editAvatar)
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    renderLoading(false,editAvatar.querySelector('.popup__button'))
  })

}


const initSubmitListeners = () => {
    editForm.addEventListener('submit',handleFormEditSubmit);
    addCardForm.addEventListener('submit',createUserCard);
    editAvatarForm.addEventListener('submit',createNewAvatar);
}


function renderLoading(isLoading,button){
  if(isLoading){
    button.textContent = 'Сохранение...'
  }else{
    button.textContent = 'Сохраненить'
  }
}

export {fillProfileFormInputs,initSubmitListeners,userName,userDescription,nameInput,jobInput}

import { closePopup } from "./modalShow.js"
import {renderCard,popupEdit,popupAddCard,avatar,editAvatar} from './index.js'
import {createNewCards,setFrontAvatarInfo,customizeAvatar} from './api.js'
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
    setFrontAvatarInfo(nameInput,jobInput)
    setFrontTextContentValueInput(nameInput,userName)
    renderLoading(true,popupEdit.querySelector('.popup__button'))
    setFrontTextContentValueInput(jobInput,userDescription)
    closePopup(popupEdit)
}

function createUserCard(evt){
    evt.preventDefault()
    createNewCards(nameCardInput.value,linkCardInput.value,renderCard)
    renderLoading(true,popupAddCard.querySelector('.popup__button'))
    closePopup(popupAddCard)
    addCardForm.reset()
}
function createNewAvatar(evt){
  evt.preventDefault()

  renderLoading(true,editAvatar.querySelector('.popup__button'))
  avatar.style.backgroundImage =`url(${editAvatarInput.value})`
  customizeAvatar(editAvatarInput)
  editAvatarForm.reset()
  closePopup(editAvatar)
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

import { closePopup } from "./modalShow.js"
import {renderCard,popupEdit,popupAddCard} from './index.js'
const editForm = document.forms['edit-profile']

const nameInput = editForm.elements.name
const userName = document.querySelector('.profile__title')

const jobInput = editForm.elements.description
const userDescription = document.querySelector('.profile__description')

const addCardForm = document.forms['new-place']
const nameCardInput = addCardForm.elements['place-name']
const linkCardInput = addCardForm.elements.link

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
    setFrontTextContentValueInput(nameInput,userName)
    setFrontTextContentValueInput(jobInput,userDescription)
    closePopup(popupEdit)
}


function createUserCard(evt){
    evt.preventDefault()
    renderCard(linkCardInput.value,nameCardInput.value)
    closePopup(popupAddCard)
    addCardForm.reset()
}


const initSubmitListeners = () => {
    editForm.addEventListener('submit',handleFormEditSubmit);
    addCardForm.addEventListener('submit',createUserCard);
}
export {fillProfileFormInputs,initSubmitListeners,}

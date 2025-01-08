import { popupClose,popupEdit,popupAddCard } from "./modalShow.js"
import {renderCard} from './createCards.js'

const editForm = document.forms[0]
const editFormButton = editForm.querySelector('.button')

const nameInput = editForm.elements.name
const avatarName = document.querySelector('.profile__title')

const jobInput = editForm.elements.description
const avatarDescription = document.querySelector('.profile__description')

const addCardForm = document.forms[1]
const addCardFormButton = addCardForm.querySelector('.button')
const nameCardInput = addCardForm.elements['place-name']
const LinkCardInput = addCardForm.elements.link

function TextForm(input,content){
    input.value = content.textContent
}

function textEdit(input,content){
    content.textContent = input.value
}

function inputShowText(){
    TextForm(nameInput,avatarName)
    TextForm(jobInput,avatarDescription)
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    textEdit(nameInput,avatarName)
    textEdit(jobInput,avatarDescription)
    popupClose(popupEdit)
}

function cleanInput(input){
    input.value = ''
}

function createUserCard(evt){
    evt.preventDefault()
    console.log(LinkCardInput.value)
    renderCard(LinkCardInput.value,nameCardInput.value)
    popupClose(popupAddCard)
    cleanInput(LinkCardInput)
    cleanInput(nameCardInput)
}


const editEventButton = editFormButton.addEventListener('submit',handleFormSubmit)
const addCardEventButton = addCardFormButton.addEventListener('submit',createUserCard)
export {inputShowText,editEventButton,addCardEventButton}

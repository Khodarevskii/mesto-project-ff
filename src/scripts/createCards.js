import { deleteCards,likeToggle} from "./api";

const element = document.querySelector('#card-template');
const deleteElement = function (evt) { 
  evt.target.closest('.card').remove() 
  let cardId =  evt.target.closest('.card').getAttribute('id')
  deleteCards(cardId)
}
function like(evt){
  evt.target.classList.toggle('card__like-button_is-active')
  let cardId =  evt.target.closest('.card').getAttribute('id')
  const cardLikeButtonCounter =  evt.target.closest('.card').querySelector('.card__like-button-counter')
  if(evt.target.classList.contains('card__like-button_is-active')){
    likeToggle(cardId,'PUT',cardLikeButtonCounter)
  }else{
    likeToggle(cardId,'DELETE',cardLikeButtonCounter)
  }
 
}

function createElement(textValue, imageValue,id,likeCounter,avatarId,cardId,deleteElement,like,openImagePopup) { 
    const userElementPlace = element.content.querySelector('.places__item').cloneNode(true);
    userElementPlace.setAttribute('id',`${id}`)
    const cardImage = userElementPlace.querySelector('.card__image')
    const cardTitle =  userElementPlace.querySelector('.card__title')
    const cardLikeButton =  userElementPlace.querySelector('.card__like-button')
    const cardLikeButtonCounter =  userElementPlace.querySelector('.card__like-button-counter')
    cardImage.src = imageValue
    cardImage.alt = textValue
    cardLikeButtonCounter.textContent = likeCounter
    cardTitle.textContent = textValue
    const deleteButton = userElementPlace.querySelector('.card__delete-button');
    if(avatarId == cardId){
      deleteButton.addEventListener('click',deleteElement)
    }else{
      deleteButton.remove()
    }
    cardLikeButton.addEventListener('click', like);
    cardImage.addEventListener('click',function(){openImagePopup(textValue, imageValue)})
    return userElementPlace;
  }

export{deleteElement,like,createElement}
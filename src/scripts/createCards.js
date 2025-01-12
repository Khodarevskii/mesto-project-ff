import { deleteCard,likeToggle} from "./api";

const element = document.querySelector('#card-template');
const deleteElement = function (evt) { 
  const cardId =  evt.target.closest('.card').getAttribute('id')
  deleteCard(cardId)
  .then(()=>{
    evt.target.closest('.card').remove() 
  })
  .catch((error)=>{
    console.log(error)
  })
}
function like(evt){
  evt.target.classList.toggle('card__like-button_is-active')
  const cardId =  evt.target.closest('.card').getAttribute('id')
  const cardLikeButtonCounter =  evt.target.closest('.card').querySelector('.card__like-button-counter')
  if(evt.target.classList.contains('card__like-button_is-active')){
    likeToggle(cardId,'true')
    .then(()=>{
      cardLikeButtonCounter.textContent++
    })
    .catch((error)=>{
      console.log(error)
    })
  }else{
    likeToggle(cardId,'false')
    .then(()=>{
      cardLikeButtonCounter.textContent--
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
 
}

function createElement(textValue, imageValue,id,userId,cardOwnerId,likeCounter,deleteElement,like,openImagePopup) { 
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
    if(userId == cardOwnerId){
      deleteButton.addEventListener('click',deleteElement)
    }else{
      deleteButton.remove()
    }
    cardLikeButton.addEventListener('click', like);
    cardImage.addEventListener('click',function(){openImagePopup(textValue, imageValue)})
    return userElementPlace;
  }

export{deleteElement,like,createElement}
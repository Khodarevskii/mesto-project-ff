
const elementPlace = document.querySelector('.places__list');
const element = document.querySelector('#card-template');
const deleteElement = function (evt) { 
  evt.target.closest('.card').remove() 
}


initialCards.forEach(function (elements) {
    return renderCard(elements.link, elements.name);
  });

function createElement(imageValue, textValue, deleteElement) { 
    const userElemntPlace = element.content.querySelector('.places__item').cloneNode(true);
    const cardImage = userElemntPlace.querySelector('.card__image')
    const cardTitle =  userElemntPlace.querySelector('.card__title')
    cardImage.src = imageValue
    cardImage.alt = textValue
    cardTitle.textContent = textValue
    const deleteButton = userElemntPlace.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteElement);
    return userElemntPlace;
  }

  function renderCard(img, text) {
    return elementPlace.prepend(createElement(img, text,deleteElement))
  }
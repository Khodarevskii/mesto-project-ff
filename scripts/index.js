
const elementPlace = document.querySelector('.places__list');
const element = document.querySelector('#card-template').content;

initialCards.forEach(function (elements) {
    return renderCard(elements.link, elements.name);
  });

function createElement(imageValue, textValue, deleteElement) {
    const userElemnt = document.querySelector('#card-template').content;
    const userElemntPlace = userElemnt.querySelector('.places__item').cloneNode(true);
    userElemntPlace.querySelector('.card__image').src = imageValue
    userElemntPlace.querySelector('.card__image').alt = textValue
    userElemntPlace.querySelector('.card__title').textContent = textValue
    const deleteButton = userElemntPlace.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteElement);
    return userElemntPlace;
  }

  function renderCard(img, text) {
    return elementPlace.prepend(createElement(img, text, function (evt) {
      evt.target.closest('.card').remove() 
      }));
  }
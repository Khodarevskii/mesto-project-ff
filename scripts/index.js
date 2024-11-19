// @todo: Темплейт карточки
const elementPlace = document.querySelector('.places__list');
const element = document.querySelector('#card-template').content;
// @todo: DOM узлы

initialCards.forEach(function (elements) {
    return renderCard(elements.link, elements.name);
  });

// @todo: Функция создания карточки
function createElement(imageValue, textValue) {
    const userElemnt = document.querySelector('#card-template').content;
    const element = userElemnt.querySelector('.places__item').cloneNode(true);
    element.querySelector('.card__image').src = imageValue
    element.querySelector('.card__title').textContent = textValue
    const deleteButton = element.querySelector('.card__delete-button');
    const image = element.querySelector('.card__image').src;
    const text = element.querySelector('.card__title').textContent;
    const likes = element.querySelector('.card__like-button');
    deleteButton.addEventListener('click', deleteElement.bind('button', deleteButton));
    return element;
  }
// @todo: Функция удаления карточки
function deleteElement(target) {
    target.parentElement.remove()
  }

// @todo: Вывести карточки на страницу


  function renderCard(img, text) {
    return elementPlace.prepend(createElement(img, text));
  }

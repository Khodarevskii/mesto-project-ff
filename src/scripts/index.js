import {initialCards} from './cardsElements.js'
import { renderCard } from './createCards.js';
import '../pages/index.css';
import avatarImage from '../images/avatar.jpg';
import {popupEditShow,popupAddShow} from './modalShow.js';
import { editEventButton,addCardEventButton } from './form.js';
avatarImage = new URL ('../images/avatar.jpg', import.meta.url) ;
const whoIsTheGoat =  { name: 'Avatar', link: avatarImage }
initialCards.forEach(function (elements) {
    return renderCard(elements.link, elements.name);
  });
popupEditShow()
popupAddShow()
editEventButton
addCardEventButton
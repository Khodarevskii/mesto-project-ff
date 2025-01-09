
function closePopup(popup){ 
  popup.classList.remove('popup_is-opened') 
  document.removeEventListener('keydown',closePopupByEsc)
}

function openPopup(popup){
  popup.classList.add('popup_is-opened')
  document.addEventListener('keydown',closePopupByEsc)
  initPopupCloseByClick(popup)
}

function initPopupCloseByClick(popup){
  popup.addEventListener('click',function(evt){ 
    if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){ 
      closePopup(popup) 
    }
  }) 
}

const closePopupByEsc = function(evt){ 
  if (evt.key === "Escape"){ 
    closePopup(document.querySelector('.popup_is-opened')) 
  } 
 } 


  export {closePopup,openPopup}

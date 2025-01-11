let validationConfig = {}
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(`${validationConfig.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${validationConfig.errorClass}`);
  };
  
  const clearValidation = (profileForm, validationConfig) => {
    const popupAll  =  Array.from(profileForm.querySelectorAll(`${validationConfig.inputSelector}`));
    const errorElement = profileForm.querySelector(`.${validationConfig.errorClass}`);
    const popupError =  profileForm.querySelector(`.${validationConfig.inputErrorClass}`)
    const submitButtonSelector = profileForm.querySelector(`${validationConfig.submitButtonSelector}`)
    if(errorElement){
        errorElement.classList.remove(`${validationConfig.errorClass}`);
        errorElement.textContent = '';
    }
    if(popupError){
        popupError.classList.remove(`${validationConfig.inputErrorClass}`);
    }
    toggleButtonState(popupAll,submitButtonSelector)
  };
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';

  };

  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`${validationConfig.inputSelector}`));
    const buttonElement = formElement.querySelector(`${validationConfig.submitButtonSelector}`);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  function enableValidation(object){
    validationConfig = object
    const formList = Array.from(document.querySelectorAll(`${validationConfig.formSelector}`));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault()
      });
      formList.forEach((form) => {
        setEventListeners(form);
      });
    });
  }
  const hasInvalidInput = (inputList) => {
    
    return inputList.some((inputElement) => {
        if (inputElement.validity.patternMismatch) {
  
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
      } else {
  
        inputElement.setCustomValidity("");
      }
    if (!inputElement.validity.valid){
      return true
    }else{
     return false
    }
    })
  }
  
  const toggleButtonState  = (inputList,buttonElement) => {
    if(hasInvalidInput(inputList)){
      buttonElement.setAttribute('disabled','true')
      buttonElement.classList.add('popup__button_disabled')
    }else{
       buttonElement.removeAttribute('disabled')
       buttonElement.classList.remove('popup__button_disabled')
    }
  }
  
  export{enableValidation,clearValidation,validationConfig}
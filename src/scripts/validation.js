let validationConfig = {}
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(`${validationConfig.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${validationConfig.errorClass}`);
  };
  
  const clearValidation = (form, validationConfig) => {
    const inputAll  =  Array.from(form.querySelectorAll(`${validationConfig.inputSelector}`));
    const submitButton = form.querySelector(`${validationConfig.submitButtonSelector}`)
    inputAll.forEach((element)=>{
      hideInputError(form,element)
    })
    toggleButtonState(inputAll,submitButton)
  };
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(`${validationConfig.inputErrorClass}`);
    errorElement.classList.remove(`${validationConfig.inputErrorClass}`);
    errorElement.textContent = '';

  };

  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } 
    else {
        hideInputError(formElement, inputElement);
    }
    if (inputElement.validity.patternMismatch) { 
   
      inputElement.setCustomValidity(inputElement.dataset.errorMessage); 
    } else { 
      inputElement.setCustomValidity(""); 
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
      return !inputElement.validity.valid;
  })

  }
  
  const toggleButtonState  = (inputList,buttonElement) => {
    if(hasInvalidInput(inputList)){
      buttonElement.setAttribute('disabled','true')
      buttonElement.classList.add(`${validationConfig.inactiveButtonClass}`)
    }else{
       buttonElement.removeAttribute('disabled')
       buttonElement.classList.remove(`${validationConfig.inactiveButtonClass}`)
    }
  }
  
  export{enableValidation,clearValidation,validationConfig}
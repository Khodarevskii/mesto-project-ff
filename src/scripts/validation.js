
objectSettings = {}

const showInputError = (formSelector,inputElement ) => {
    const errorElement = formSelector.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  const clearValidation = ( inputErrorClass,errorClass) => {
    const errorElement = profileForm.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  const clearInputError = ( inputErrorClass,errorClass) =>{
    let allErrorPlace = Array.from(form.querySelectorAll(errorClass)) 
    let allErrorInput =  Array.from(form.querySelectorAll(inputSelector)) 
    allErrorInput.forEach((inputElement)=>{
        inputElement.classList.remove(inputErrorClass);
    })
    allErrorPlace.forEach((error)=>{
        error.classList.remove(errorClass);
        error.textContent = ''
    })
  }
  
  const checkInputValidity = (inputElement,formSelector) => {
    if (!inputElement.validity.valid) {
      showInputError(formSelector, inputElement, inputElement.validationMessage);
    } else {
      clearValidation(formSelector, inputElement);
    }
  };
  
  const setEventListeners = (formSelector,inputSelector) => {
    const inputSelectorForm = Array.from(formSelector.querySelectorAll(`${inputSelector}`));
    const submitButtonSelector = formSelector.querySelector(submitButtonSelector);
    toggleButtonState(inputSelectorForm, submitButtonSelector);
    inputSelectorForm.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formSelector, inputElement);
        toggleButtonState(inputSelectorForm, submitButtonSelector);
      });
    });
  };
  
  function enableValidation(object){
        setEventListeners(object.formSelector,object.inputSelector);

  }
  const hasInvalidInput = (inputSelector,inputElement) => {
    
    return inputSelector.some((inputElement) => {
        if (inputElement.validity.patternMismatch) {
  
        inputElement.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы");
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
  
  const toggleButtonState  = (inputSelector,submitButtonSelector,inactiveButtonClass) => {
    if(hasInvalidInput(inputSelector)){
      submitButtonSelector.classList.add(inactiveButtonClass)
    }else{
        submitButtonSelector.classList.remove(inactiveButtonClass)
    }
  }

export{enableValidation,clearInputError}
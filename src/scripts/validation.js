
let enableValidation ={
    showInputError : (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add('popup__input_type_error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('popup__input-error');
      },
      
       clearValidation : (profileForm, validationConfig) => {
        const errorElement = profileForm.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove('popup__input_type_error');
        errorElement.classList.remove('popup__input-error');
        errorElement.textContent = '';
      },
    
       clearInputError : (form) =>{
        let allErrorPlace = Array.from(form.querySelectorAll('.popup__input-error')) 
        let allErrorInput =  Array.from(form.querySelectorAll('.popup__input')) 
        allErrorInput.forEach((inputElement)=>{
            inputElement.classList.remove('popup__input_type_error');
        })
        allErrorPlace.forEach((error)=>{
            error.classList.remove('popup__input-error');
            error.textContent = ''
        })
      },
      
       checkInputValidity : (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
          showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
          clearValidation(formElement, inputElement);
        }
      },
      
       setEventListeners : (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
        const buttonElement = formElement.querySelector('.popup__button');
        toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
          });
        });
      },
      
      formSelector: (formElement)=>{
        const formList = Array.from(document.querySelectorAll(formElement));
        formList.forEach((formElement) => {
          formElement.addEventListener('submit', function (evt) {
            evt.preventDefault()
          });
          formList.forEach((form) => {
            setEventListeners(form);
          });
        });
      },
    
       hasInvalidInput : (inputList) => {
        console.log(inputList)
        return inputList.some((inputElement) => {
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
      },
    
       toggleButtonState  : (inputList,buttonElement) => {
        if(hasInvalidInput(inputList)){
          buttonElement.setAttribute('disabled','true')
        }else{
           buttonElement.removeAttribute('disabled')
        }
      }
    
}

export{enableValidation}
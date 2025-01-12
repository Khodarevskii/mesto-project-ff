
const  handleResponse = () =>{
  return res => {
    if (res.ok) {
      return res.json();
    }else{
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    
  } 
}
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-29',
    headers: {
      authorization: 'd6cf003f-e9fc-4f07-8135-f8c201818150',
      'Content-Type': 'application/json'
    }
  }
  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
    .then (handleResponse())
    .catch((error)=>{
      console.log(error)
    })
  } 
  export const createNewCard = (name,link) => {
    return fetch(`${config.baseUrl}/cards`, {
      method:'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    
    .then (handleResponse())
    .catch((error)=>{
      console.log(error)
    })
}


export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then (handleResponse())
  .catch((error)=>{
    console.log(error)
  })
} 

export const pushUserInfo = (name,about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method:'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        name: name,
        about: about
      })
    })
    
    .then (handleResponse())
    .catch((error)=>{
      console.log(error)
    })
}



export const deleteCard = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method:'DELETE',
      headers: config.headers,
    })
    
    .then (handleResponse())
    .catch((error)=>{
      console.log(error)
    })
}

export const likeToggle = (cardId,isLiked) => {
  if(isLiked){
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method:`PUT`,
    headers: config.headers,
  })
  .then (handleResponse())
  .catch((error)=>{
    console.log(error)
  })
  
  }else{
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method:`DELETE`,
    headers: config.headers,
  })
  .then (handleResponse())
  .catch((error)=>{
    console.log(error)
  })
  }
  
}


export const customizeAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method:'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        avatar: link
      })
    })
    
    .then (handleResponse())
    .catch((error)=>{
      console.log(error)
    })
}








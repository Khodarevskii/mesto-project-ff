import { avatar } from ".";


const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-29',
    headers: {
      authorization: 'd6cf003f-e9fc-4f07-8135-f8c201818150',
      'Content-Type': 'application/json'
    }
  }
  export const getInitialCards = (avatarId,renderCard) => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res)=>{
        res.forEach((elem)=>{ 
            return  renderCard(elem.name,elem.link,elem._id,elem.likes.length,avatarId,elem.owner._id)
        })
      })
  } 
  export const createNewCards = (name,link,renderCard) => {
    return fetch(`${config.baseUrl}/cards`, {
      method:'POST',
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res)=>{
        
        return  renderCard(res.name,res.link,res.owner._id)
    })
}

export const getUserPrimaryKey = (renderCard) => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res)=>{
       return getInitialCards(res._id,renderCard)
    })
}

export const pushAvatarInfo = (nameInput,jobInput) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method:'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        name: nameInput.value,
        about: jobInput.value
      })
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
}

export const setFrontAvatarInfo = (userName,userDescription) => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })

      .then((res) => {
        userName.textContent =  res.name
        userDescription.textContent = res.about
      })
}




export const deleteCards = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method:'DELETE',
      headers: config.headers,
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
}

export const likeToggle = (cardId,toggle,cardLikeButtonCounter) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method:`${toggle}`,
      headers: config.headers,
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res)=>{
        cardLikeButtonCounter.textContent  =res.likes.length
      })
}


export const customizeAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method:'PATCH',
        headers: config.headers,
        body: JSON.stringify({
        avatar: link.value
      })
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
}


export const newAvatarPicture = (avatar) => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
    
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })

      .then((res) => {
        avatar.style.backgroundImage =`url(${res.avatar})`
      })
}






const BASE_URL = `${window.location.protocol}//${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
// const BASE_URL = `http://localhost:3001`;

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => checkResponse(res))
};

export const authorize = (data) => {
  data = {email:data.email, password:data.password}
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => checkResponse(res))
};

export const getUserContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => checkResponse(res))
}

export const patchUser = (data) => {
    const jwt = localStorage.getItem('jwt')

    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: jwt,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })

    })
      .then(res => checkResponse(res))
}

export const postCard = (data) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  } = data
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        country,
        director,
        duration,
        year,
        description,
        image: image.url,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail: `https://${image.formats.small.hash}`,
        movieId: id,
      }
    )
  })
    .then(res => checkResponse(res))
}




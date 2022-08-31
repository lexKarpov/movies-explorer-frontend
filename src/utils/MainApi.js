// const BASE_URL = `${window.location.protocol}//${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
const BASE_URL = `https://api.alexkarpov.students.nomoredomains.xyz`;

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

export const postFilm = (data) => {
  let {
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
        country: country || 'NoSelected',
        director: director || 'NoSelected',
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        nameRU: nameRU || '123',
        nameEN: nameEN || '123',
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
      }
    )
  })
    .then(res => checkResponse(res))
}

export const getSavedFilms = () => {
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: jwt,
      "Content-Type": "application/json"
    },
  })
    .then(res => checkResponse(res))
    .catch(err => console.log(err))
}

export const deleteMovie = (cardId) => {
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: `${jwt}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => checkResponse(res))
}


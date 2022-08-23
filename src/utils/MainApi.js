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

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => checkResponse(res))
}

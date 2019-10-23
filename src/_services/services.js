import {authHeader} from '../_helps';

function logout(){
    localStorage.removeItem('user');
}
/* eslint-disable */
function handleResponse(response) {
    console.log('response',response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
/* eslint-enable */ 
function login(username,password){
    const requestOption = {
        method: 'POST',
        headers : {'Content-Type':'application/json',Accept: 'application/json'},
        body: JSON.stringify({username,password})
    }
    return fetch (`https://vietapi1612810.herokuapp.com/login`,requestOption)
        .then(handleResponse)
        .then(user=>{
            console.log('demo user',user);
            localStorage.setItem('token',user.jwt);
            return user;
        })
}
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://vietapi1612810.herokuapp.com/me`, requestOptions).then(handleResponse);
}
/* eslint-disable */
export const userService ={
    login,
    logout,
    getAll
}
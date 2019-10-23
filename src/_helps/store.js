import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore,applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';


const loggerMiddleware = createLogger();

export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("token user",user.token)
    if (user && user.token) {
        return { 'Authorization': `Bearer +  ${user.token}`};
    } 
    
    return {};
    
}
export const store = createStore(reducer,applyMiddleware(thunk,loggerMiddleware));
export const history = createBrowserHistory();
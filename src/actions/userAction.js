import { userConstants } from '../_constrants';
import  {userService}  from '../_services/services';
import {alertActions} from './index';
import {history} from '../_helps';

function login(username,password){
    function request(user) { return { type: userConstants.LOGIN_REQUEST, payload:user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload:user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE,payload:error } }
    
    return dispatch => {
        dispatch(request({username}));
        userService.login(username,password)
            .then(
                user=>{
                    dispatch(success(user))
                    history.push('/');
                },
                err => {
                    dispatch(failure(err))
                    dispatch(alertActions.error(err))
                }
            )
    }
}
function logout(){
    userService.logout();
    return {type:userConstants.LOGOUT}
}
function getAll(){
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }

    return dispatch => {
        dispatch(request())
        userService.getAll()
            .then(
                users => dispatch(success(users)),
                err => dispatch(failure(err))
            )
    }
}
export const userActions = {
    login,
    logout,
    getAll
}

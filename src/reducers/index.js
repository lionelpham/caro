import { combineReducers } from 'redux';
import gameSetting from './gameSetting';
import history from './history';
import isDes from './isDes';
import step from './step';
import xIsNext from './xIsNext';
import { authentication } from './authenReducer';
import { users } from './userReducer';
import { alert } from './alertReducer';

const caroGame = combineReducers({
    gameSetting,
    history,
    isDes,
    step,
    xIsNext,
    authentication,
    users,
    alert
})

export default caroGame;
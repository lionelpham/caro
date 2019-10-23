import { alertContants } from '../_constrants';


export const setting = (width, height) => ({
  type: 'SETTING',
  width, height
})

export const toggleXIsNext = () => ({
  type: 'TOGGLE_X_IS_NEXT',
})

export const changeStep = (step) => ({
  type: 'CHANGE_STEP',
  step
})

export const addHistory = (i, j) => ({
  type: 'CLICK_SQUARE',
  i, j
})

export const clickSquare = (history) => ({
  type: 'CLICK_SQUARE',
  history
})

export const sortMoves = (isDescending) => ({
  type: 'SORT_MOVES',
  isDescending
})

export const signUpHandleChange = (event) => ({
  type: 'HANDLE_CHANGE',
  event
})

export const signUpSubmitForm = (event) => ({
  type: 'SUBMIT_FORM',
  event
})


function success(message) {
  return { type: alertContants.SUCCESS, message };
}

function error(message) {
  return { type: alertContants.ERROR, message };
}

function clear() {
  return { type: alertContants.CLEAR };
}
export const alertActions = {
  success,
  error,
  clear
};
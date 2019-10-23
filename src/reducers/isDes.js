const isDes = (state = true,action) =>{
    switch(action.type){
        case 'SORT_MOVES':
            return action.isDes;
        default:
            return state;
    }
}

export default isDes;
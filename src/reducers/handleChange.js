const handleChange = (state = true,action) => {
    switch(action.type){
        case 'HANDLE_CHANGE':
            return action.event.target.value;
        default: 
            return state;
    }
}

export const initialVal = {
    Count: 0
};

export const reduserFun = (state, action) => {
    switch (action.type) {
        case 'Incriment':
            return { Count: state.Count + 1 }

        case 'Reset':
            return { Count: 0 }
        
        case 'Decriment':
            return {Count : state.Count - 1}
        default:
            return state;
        
    }
}
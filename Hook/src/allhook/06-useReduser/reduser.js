import { ClearList, RemoveItem, ResetItem } from './action';
import { people, data } from '../../../data';

const reduser = (state, action) => {
    if (action.type === ClearList) {
        return { ...state, people: [] }
    }
    if (action.type === RemoveItem) {
        let newPeople = state.people
    }
};


export default reduser;
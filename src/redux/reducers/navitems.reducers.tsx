import { navsActions } from '../navitems.actions';
import {NavItem} from '../../interfaces/NavItem';

const initState = {}

export const navsReducer = (state = initState, action: {type: string, payload: NavItem}) => {
    switch (action.type) {
        case navsActions.LOAD_NAVS_DONE:
            return { ...state, ...action.payload }
        default:
            return {...state}
    }
}

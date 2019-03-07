import { navsActions } from '../navitems.actions';
import {NavItem} from '../../interfaces/NavItem';

const initState : Array<NavItem> = []

export const navsReducer = (state = initState, action: {type: string, payload: Array<NavItem>}) => {
    switch (action.type) {
        case navsActions.LOAD_NAVS_DONE:
            return { ...state, ...action.payload }
        default:
            return {...state}
    }
}

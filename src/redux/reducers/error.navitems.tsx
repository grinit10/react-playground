import { navsActions } from '../navitems.actions';
import { Error } from '../../interfaces/Error';

const initState = {}

export const navsErrorReducer = (state = initState, action: { type: string, payload: Error }) => {
    switch (action.type) {
        case navsActions.LOAD_NAVS_ERROR:
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}

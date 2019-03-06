import {navsActions} from '../navitems.actions';
import {NavItem} from '../../interfaces/NavItem';
import {Error} from '../../interfaces/Error';


export const loadnavs = () => ({ type: navsActions.LOAD_NAVS})
export const loadnavsSuccess = (response: Array<NavItem>) => ({ type: navsActions.LOAD_NAVS_DONE, payload: response })
export const loadnavsError = (error: Error) => ({ type: navsActions.LOAD_NAVS_ERROR, payload: error })

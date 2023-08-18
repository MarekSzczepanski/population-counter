import { SET_BUTTONS_LOCK } from '../actionTypes/actionTypes';

const setButtonsLock = (
    settings: boolean[],
): {
    type: string;
    payload: boolean[];
} => {
    return {
        type: SET_BUTTONS_LOCK,
        payload: settings,
    };
};

export { setButtonsLock };

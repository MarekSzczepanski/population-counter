import { SET_DROPDOWN_ITEMS } from '../actionTypes/actionTypes';
import { countriesWithRegions } from '../modules/countriesWithRegions';

interface IActionSetDropdownItems {
    type: 'SET_DROPDOWN_ITEMS';
    payload: IItem[];
}

interface IItem {
    country: string;
    regions: IRegion[];
    isSelected: boolean;
}

interface IRegion {
    name: string;
    isSelected: boolean;
}

type Action = IActionSetDropdownItems;

interface State {
    value: IItem[];
}

const initialState: State = {
    value: countriesWithRegions(),
};

const buttonsLock = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_DROPDOWN_ITEMS:
            return {
                value: action.payload,
            };
        default:
            return state;
    }
};

export default buttonsLock;

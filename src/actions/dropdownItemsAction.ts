import { SET_DROPDOWN_ITEMS } from '../actionTypes/actionTypes';

interface IItem {
  country: string;
  regions: IRegion[];
  isSelected: boolean;
}

interface IRegion {
  name: string;
  isSelected: boolean;
}

const setDropdownItems = (
  items: IItem[],
): {
  type: string;
  payload: IItem[];
} => {
  return {
    type: SET_DROPDOWN_ITEMS,
    payload: items,
  };
};

export { setDropdownItems };

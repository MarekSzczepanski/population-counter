import { SET_LOCATIONS_DATA } from '../actionTypes/actionTypes';
import { locations } from '../modules/locations';

interface IActionSetLocationsData {
  type: 'SET_LOCATIONS_DATA';
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
  sliderValue: number[];
}

type Action = IActionSetLocationsData;

interface State {
  value: IItem[];
}

const initialState: State = {
  value: locations(),
};

const locationsData = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_LOCATIONS_DATA:
      return {
        value: action.payload,
      };
    default:
      return state;
  }
};

export default locationsData;

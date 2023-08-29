import { SET_LOCATIONS_DATA } from '../actionTypes/actionTypes';
import { initialLocationsData } from '../modules/initialLocationsData';

interface IActionSetLocations {
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
  population: IPopulation[];
  isSelected: boolean;
  sliderValue: number[];
}

interface IPopulation {
  decade: number;
  value: number;
}

type Action = IActionSetLocations;

interface State {
  value: IItem[];
}

const initialState: State = {
  value: initialLocationsData(),
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

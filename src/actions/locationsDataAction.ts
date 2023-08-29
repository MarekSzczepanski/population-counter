import { SET_LOCATIONS_DATA } from '../actionTypes/actionTypes';

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

const setLocationsData = (
  items: IItem[],
): {
  type: string;
  payload: IItem[];
} => {
  return {
    type: SET_LOCATIONS_DATA,
    payload: items,
  };
};

export { setLocationsData };

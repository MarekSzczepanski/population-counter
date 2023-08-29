import {
  ADD_RESULT,
  EDIT_RESULT,
  DELETE_RESULT,
} from '../actionTypes/actionTypes';

interface IPayload {
  id: number;
  data?: ICountry[];
  totalValue?: number;
}

interface ICountry {
  country: string;
  regions: IRegion[];
  totalValue: number;
}

interface IRegion {
  name: string;
  population: number;
}

const addResult = (
  items: IPayload,
): {
  type: string;
  payload: IPayload;
} => {
  return {
    type: ADD_RESULT,
    payload: items,
  };
};

const editResult = (
  items: IPayload,
): {
  type: string;
  payload: IPayload;
} => {
  return {
    type: EDIT_RESULT,
    payload: items,
  };
};

const deleteResult = (
  items: IPayload,
): {
  type: string;
  payload: IPayload;
} => {
  return {
    type: DELETE_RESULT,
    payload: items,
  };
};

export { addResult, editResult, deleteResult };

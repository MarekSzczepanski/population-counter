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

interface IActionAddResult {
  type: 'ADD_RESULT';
  payload: IPayload;
}

interface IActionEditResult {
  type: 'EDIT_RESULT';
  payload: IPayload;
}

interface IActionDeleteResult {
  type: 'DELETE_RESULT';
  payload: IPayload;
}

type Action = IActionAddResult | IActionEditResult | IActionDeleteResult;

interface ICountry {
  country: string;
  regions: IRegion[];
  totalValue: number;
}

interface IRegion {
  name: string;
  population: number;
  sliderValue: number[];
}

interface State {
  value: IPayload[];
}

const initialState: State = {
  value: [],
};

const results = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_RESULT:
      return {
        value: [...state.value, action.payload],
      };
    case EDIT_RESULT:
      return {
        value: state.value.map((x) => {
          const { id, data, totalValue } = action.payload;
          if (x.id === id) {
            return {
              id: id * -1,
              data: data ? data : x.data,
              totalValue: totalValue ? totalValue : x.totalValue,
            };
          }
          return x;
        }),
      };
    case DELETE_RESULT:
      return {
        value: state.value
          .filter((x) => x.id !== action.payload.id)
          .map((x) => ({ id: x.id, data: x.data, totalValue: x.totalValue })),
      };
    default:
      return state;
  }
};

export default results;

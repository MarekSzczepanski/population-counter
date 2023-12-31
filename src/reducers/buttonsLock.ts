import { SET_BUTTONS_LOCK } from '../actionTypes';

interface IActionSetButtonsLock {
  type: 'SET_BUTTONS_LOCK';
  payload: boolean[];
}

type Action = IActionSetButtonsLock;

interface State {
  value: boolean[];
}

const initialState: State = {
  value: [true, false, true],
};

const buttonsLock = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_BUTTONS_LOCK:
      return {
        value: action.payload.map((x, i) =>
          x === undefined ? state.value[i] : x,
        ),
      };
    default:
      return state;
  }
};

export default buttonsLock;

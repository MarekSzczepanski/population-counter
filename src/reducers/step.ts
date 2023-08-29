import { NEXT_STEP, PREVIOUS_STEP } from '../actionTypes/actionTypes';

interface IActionNextStep {
  type: 'NEXT_STEP';
}

interface IActionPreviousStep {
  type: 'PREVIOUS_STEP';
}

type Action = IActionNextStep | IActionPreviousStep;

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

const step = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        value: state.value + 1,
      };
    case PREVIOUS_STEP:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default step;

import { CHANGE_STEP } from '../actionTypes/actionTypes';

const changeStep = (
  step: number,
): {
  type: string;
  payload: number;
} => {
  return {
    type: CHANGE_STEP,
    payload: step,
  };
};

export { changeStep };

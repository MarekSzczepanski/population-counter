import { NEXT_STEP, PREVIOUS_STEP } from '../actionTypes/actionTypes';

const nextStep = () => {
  return {
    type: NEXT_STEP,
  };
};

const previousStep = () => {
  return {
    type: PREVIOUS_STEP,
  };
};

export { nextStep, previousStep };

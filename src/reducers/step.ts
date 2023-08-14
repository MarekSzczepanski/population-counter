import { NEXT_STEP, PREVIOUS_STEP } from '../actionTypes/actionTypes';

interface IsActionNextStep {
    type: 'NEXT_STEP';
}

interface IsActionPreviousStep {
    type: 'PREVIOUS_STEP';
}

type Action = IsActionNextStep | IsActionPreviousStep;

const initialState = {
    value: 0,
};

const step = (state = initialState, action: Action) => {
    switch (action.type) {
        case NEXT_STEP:
            return {
                ...state,
                value: state.value + 1,
            };
        case PREVIOUS_STEP:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};

export default step;

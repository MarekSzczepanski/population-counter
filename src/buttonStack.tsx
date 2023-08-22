import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { nextStep, previousStep } from './actions/stepAction';
import { setButtonsLock } from './actions/buttonsLockAction';
import { Stack, Button, Box } from '@mui/material';

function ButtonStack(): JSX.Element {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setButtonsLock([!state.step.value, undefined, undefined]));
    }, [state.step.value]);

    const goNextStep = (): void => {
        dispatch(nextStep());
    };

    const goPreviousStep = (): void => {
        dispatch(previousStep());
    };

    return (
        <Stack
            spacing={2}
            direction="row"
            sx={{
                m: '80px auto',
                width: 320,
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Button
                onClick={goPreviousStep}
                disabled={state.buttonsLock.value[0]}
                variant="outlined"
            >
                Back
            </Button>
            <Box>
                <Button
                    onClick={goNextStep}
                    disabled={state.buttonsLock.value[1]}
                    variant="text"
                >
                    Skip
                </Button>
                <Button
                    onClick={goNextStep}
                    disabled={state.buttonsLock.value[2]}
                    variant="contained"
                >
                    Next
                </Button>
            </Box>
        </Stack>
    );
}

export default ButtonStack;

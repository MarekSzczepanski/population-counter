import { useSelector } from 'react-redux';
import { RootState } from './store';
import Stepper from './stepper';
import Dropdown from './dropdown';
import ButtonStack from './buttonStack';

function App(): JSX.Element {
    const state = useSelector((state: RootState) => state);

    const componentByStep = (): JSX.Element | null => {
        if (state.step.value < 2) return <Dropdown />;
        return null;
    };

    return (
        <div className="App">
            <>
                <Stepper activeStep={state.step.value} />
                {componentByStep()}
                <ButtonStack />
            </>
        </div>
    );
}

export default App;

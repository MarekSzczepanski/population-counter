import { useState, useEffect } from 'react';
import Stepper from './stepper';

function App() {
    const [activeStep, setActiveStep] = useState<number>(0);

    useEffect(() => {
        setActiveStep(0);
    }, []);

    return (
        <div className="App">
            <>
                <Stepper activeStep={activeStep} />
            </>
        </div>
    );
}

export default App;

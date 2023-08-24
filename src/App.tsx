import { useSelector } from 'react-redux';
import { RootState } from './store';
import Stepper from './stepper';
import ButtonStack from './buttonStack';
import Dropdown from './dropdown';
import Sliders from './sliders';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1677FF',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
});

function App(): JSX.Element {
  const state = useSelector((state: RootState) => state);
  const componentByStep = (): JSX.Element | null => {
    if (state.step.value < 2) return <Dropdown />;
    else if (state.step.value < 3) return <Sliders />;
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stepper activeStep={state.step.value} />
        {componentByStep()}
        <ButtonStack />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useSelector } from 'react-redux';
import { RootState } from './store';
import Stepper from './stepper';
import ButtonStack from './buttonStack';
import Dropdown from './dropdown';
import Sliders from './sliders';
import Results from './results';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import logo from './assets/logo.png';

const Img = styled('img')`
  display: block;
  margin: 0 auto 20px;
`;

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
  const componentByStep = (): JSX.Element => {
    if (state.step.value < 2) return <Dropdown />;
    else if (state.step.value < 3) return <Sliders />;
    return <Results />;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Img src={logo} alt="logo" width={100} height={100}/>
        <Stepper activeStep={state.step.value} />
        {componentByStep()}
        <ButtonStack />
      </div>
    </ThemeProvider>
  );
}

export const defaultSliderValue = [1960, 2000];

export default App;

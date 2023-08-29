import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { changeStep } from './actions/stepAction';
import { addResult } from './actions/resultsAction';
import { setLocationsData } from './actions/locationsDataAction';
import { initialLocationsData } from './modules/initialLocationsData';
import { Stack, Button, Box } from '@mui/material';

function ButtonStack(): JSX.Element {
  const state = useSelector((state: RootState) => state);
  const { step, buttonsLock, locationsData, results } = state;
  const dispatch = useDispatch();

  const goNextStep = (): void => {
    dispatch(changeStep(step.value + 1));

    if (step.value === 2) {
      // add or edit a result card
      const chosenCountries = locationsData.value.filter((x) => x.isSelected);
      interface IResult {
        id: number;
        data: ICountry[];
        totalValue: number;
      }

      interface ICountry {
        country: string;
        regions: IRegion[];
        totalValue: number;
      }

      interface IRegion {
        name: string;
        population: number;
      }

      const getAverageValue = (arr: number[]) => {
        return Math.floor(arr.reduce((x, y) => x + y) / arr.length);
      };

      const resultData: ICountry[] = [];
      const averageCountryLevelPopulations: number[] = [];

      for (let i = 0; i < chosenCountries.length; i++) {
        const regions: IRegion[] = [];
        const averageRegionPopulations: number[] = [];

        const country = chosenCountries[i];
        for (let j = 0; j < country.regions.length; j++) {
          const region = country.regions[j];
          if (region.isSelected) {
            const chosenDecadesPopulations = region.population.reduce(
              (result, x) => {
                const d = x.decade;
                const v = region.sliderValue;

                if (d >= v[0] && d <= v[1]) result.push(x.value);
                return result;
              },
              [],
            );

            const averageRegionPopulation: number = getAverageValue(
              chosenDecadesPopulations,
            );

            regions.push({
              name: region.name,
              population: averageRegionPopulation,
            });
            averageRegionPopulations.push(averageRegionPopulation);
          }
        }

        const averagePopulation: number = getAverageValue(
          averageRegionPopulations,
        );
        averageCountryLevelPopulations.push(averagePopulation);

        resultData.push({
          country: country.country,
          regions,
          totalValue: averagePopulation,
        });
      }

      const newResult: IResult = {
        id: results.value.length,
        data: resultData,
        totalValue: getAverageValue(averageCountryLevelPopulations),
      };

      dispatch(addResult(newResult));
    }
  };

  const goPreviousStep = (): void => {
    dispatch(changeStep(step.value - 1));
  };

  const addNewCard = (): void => {
    dispatch(changeStep(0));
    dispatch(setLocationsData(initialLocationsData()));
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        m: '80px auto',
        width: 320,
        display: 'flex',
        justifyContent: `${buttonsLock.value[0] === null
          ? 'center' : 'space-between'}`,
      }}
    >
      <Button
        onClick={goPreviousStep}
        disabled={buttonsLock.value[0]}
        variant="outlined"
        sx={{display: `${buttonsLock.value[0] === null
          ? 'none' : 'inline-block'}`}}
      >
        Back
      </Button>
      <Box className='no-margin'>
        <Button
          onClick={goNextStep}
          disabled={buttonsLock.value[1]}
          variant="text"
          sx={{display: `${buttonsLock.value[1] === null
            ? 'none' : 'inline-block'}`}}
        >
          Skip
        </Button>
        <Button
          onClick={step.value === 3 ? addNewCard : goNextStep}
          disabled={buttonsLock.value[2]}
          variant="contained"
        >
          {step.value === 3 ? 'Add new card' : 'Next'}
        </Button>
      </Box>
    </Stack>
  );
}

export default ButtonStack;

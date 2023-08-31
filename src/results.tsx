import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setButtonsLock } from './actions/buttonsLockAction';
import { editResult, deleteResult } from './actions/resultsAction';
import { changeStep } from './actions/stepAction';
import { setLocationsData } from './actions/locationsDataAction';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { defaultSliderValue } from './App';

const Span = styled('span')`
  font-weight: 600;
`;
const FatSpan = styled('span')`
  font-weight: 800;
`;

const shadowParts: string[] = [
  '0px 2px 3px -1px rgba(0,0,0,0.2),',
  '0px 0px 2px 0px rgba(0,0,0,0.2),',
  '0px 1px 3px 0px rgba(0,0,0,0.12)',
];

const shadow = shadowParts.join('');

const Results = (): JSX.Element => {
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
    sliderValue: number[];
    population: number;
  }

  const state = useSelector((state: RootState) => state);
  const { results, locationsData } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setButtonsLock([null, null, false]));
  }, []);

  useEffect(() => {
    const resultToEdit = results.value.find((x) => x.id < 0);
    if (!resultToEdit) return; // delete a card
    // edit a card:
    // locations to show in dropdown:

    interface regionWithSliderValue {
      name: string;
      value: number[];
    }

    const countries: string[] = [];
    const regions: regionWithSliderValue[] = [];

    resultToEdit.data.map((x) => {
      countries.push(x.country);
      x.regions.map((r) => {
        regions.push({ name: r.name, value: r.sliderValue });
      });
    });

    dispatch(
      setLocationsData(
        locationsData.value.map((x) => {
          return {
            country: x.country,
            isSelected: countries.includes(x.country),
            regions: x.regions.map((r) => {
              const included = regions.find((reg) => reg.name === r.name);
              return {
                name: r.name,
                isSelected: Boolean(included),
                population: r.population,
                sliderValue: included ? included.value : defaultSliderValue,
              };
            }),
          };
        }),
      ),
    );
    dispatch(changeStep(0));
  }, [results]);

  useEffect(() => {
    if (!results.value.some((x) => x.id < 0)) return;
  }, [locationsData]);

  const editCard = (cardId: number) => {
    dispatch(editResult({ id: cardId }));
  };

  const deleteCard = (id: number) => {
    dispatch(deleteResult({ id }));
  };

  return (
    <>
      <Typography
        variant="h2"
        mt={5}
        mb={5}
        textAlign="center"
        fontSize={36}
        color="text.primary"
      >
        Average Population Values
      </Typography>
      <Box className="cards-box" sx={{ display: 'flex' }}>
        {results.value.map((card: IResult, i: number) => {
          return (
            <Card
              sx={{
                alignSelf: 'start',
                width: '100%',
                mb: 2,
                boxShadow: shadow,
              }}
              key={i}
            >
              <CardContent sx={{ position: 'relative' }}>
                <Typography
                  sx={{
                    position: 'absolute',
                    right: '0',
                    transform: 'translateX(-50%)',
                    fontSize: 12,
                    color: 'text.secondary',
                  }}
                >
                  Result {i + 1}
                </Typography>
                {card.data.map((country: ICountry, i: number) => {
                  return (
                    <Box key={i}>
                      <Typography mb={1} fontSize={14} color="text.secondary">
                        {country.country}:
                      </Typography>
                      {country.regions.map((r, i) => {
                        return (
                          <Box sx={{ display: 'flex' }} key={i}>
                            <Typography
                              variant="h3"
                              fontSize={16}
                              color="text.primary"
                              sx={{ lineHeight: '1.5' }}
                            >
                              {r.name}: <Span>{r.population}</Span>
                            </Typography>
                          </Box>
                        );
                      })}
                      <Divider sx={{ width: '60%', marginTop: '6px' }} />
                      <Box sx={{ display: 'flex' }}>
                        <Typography
                          variant="h3"
                          mt={1}
                          mb={3}
                          fontSize={16}
                          fontWeight={600}
                          sx={{ lineHeight: '1.5' }}
                        >
                          Regions Average: {country.totalValue}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
                <Typography mt={1} fontWeight={600}>
                  Total average: <FatSpan>{card.totalValue}</FatSpan>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => editCard(i + 1)}
                  size="small"
                  sx={{ fontWeight: 600 }}
                >
                  EDIT CARD
                </Button>
                <Button
                  onClick={() => deleteCard(i + 1)}
                  size="small"
                  sx={{ color: '#D13135', fontWeight: 600 }}
                  className="deleteButton"
                >
                  DELETE CARD
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Results;

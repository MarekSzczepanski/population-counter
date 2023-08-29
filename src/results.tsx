import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setButtonsLock } from './actions/buttonsLockAction';
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

const Span = styled('span')`
  font-weight: 600;
`;
const FatSpan = styled('span')`
  font-weight: 800;
`;

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
    population: number;
  }

  const state = useSelector((state: RootState) => state);
  const { results } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(results);
    dispatch(setButtonsLock([true, true, false]));
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        m={5}
        textAlign="center"
        fontSize={30}
        color="text.primary"
      >
        Average Population Values
      </Typography>
      <Box className="grid-box" sx={{ display: 'flex' }}>
        {results.value.map((card: IResult, i: number) => {
          return (
            <Card key={i}>
              <CardContent>
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
                <Button size="small" sx={{ fontWeight: 600 }}>
                  EDIT SEGMENT
                </Button>
                <Button size="small" sx={{ color: '#D13135', fontWeight: 600 }}>
                  DELETE
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

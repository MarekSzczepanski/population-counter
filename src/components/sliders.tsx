import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setButtonsLock } from '../actions/buttonsLockAction';
import { setLocationsData } from '../actions/locationsDataAction';
import { Box, Slider, InputLabel, Typography } from '@mui/material';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { defaultSliderValue } from './App';

const Input = styled(MuiInput)`
  width: 42px;
`;

const Sliders = (): JSX.Element => {
  interface IRegion {
    name: string;
    isSelected?: boolean;
    sliderValue: number[];
  }

  const state = useSelector((state: RootState) => state);
  const { locationsData } = state;
  const dispatch = useDispatch();
  const [globalVal, setGlobalVal] = useState<number[]>(defaultSliderValue);

  useEffect(() => {
    dispatch(setButtonsLock([undefined, false, true]));
  }, []);

  const handleChange = (e) => {
    const t = e.target;

    if (!t.name) setGlobalVal(t.value);

    const getSliderVal = (region: IRegion) => {
      if (!t.name || t.name === region.name) return t.value;
      return region.sliderValue;
    };

    dispatch(
      setLocationsData(
        locationsData.value.map((x) => ({
          country: x.country,
          regions: x.regions.map((r) => ({
            name: r.name,
            population: r.population,
            isSelected: r.isSelected,
            sliderValue: getSliderVal(r),
          })),
          isSelected: x.isSelected,
        })),
      ),
    );
    dispatch(setButtonsLock([undefined, true, false]));
  };

  const renderSlider = (i: number, region?: IRegion) => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '24px 0 48px',
        }}
        key={i}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {region ? (
            <InputLabel htmlFor={`input${i}-0`}>{region.name}</InputLabel>
          ) : null}
          <Input
            value={region ? region.sliderValue[0] : globalVal[0]}
            id={`input${i}-0`}
          />
        </Box>
        <Slider
          onChange={(e) => handleChange(e)}
          value={region ? region.sliderValue : globalVal}
          name={region ? region.name : null}
          min={1900}
          max={2020}
          step={10}
          getAriaLabel={() => 'Age range'}
          valueLabelDisplay="auto"
          sx={{ width: '50%' }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {region ? (
            <InputLabel htmlFor={`input${i}-1`}>{region.name}</InputLabel>
          ) : null}
          <Input
            value={region ? region.sliderValue[1] : globalVal[1]}
            id={`input${i}-1`}
          />
        </Box>
      </Box>
    );
  };

  const renderSliders = () => {
    interface IDisplayItems {
      country: string;
      regions: IRegion[];
    }
    const selectedItems = state.locationsData.value.filter((x) => x.isSelected);
    const displayItems: IDisplayItems[] = [];

    const length = selectedItems.length;
    for (let i = 0; i < length; i++) {
      const item = selectedItems[i];

      displayItems.push({ country: item.country, regions: [] });

      const length2 = item.regions.length;
      for (let j = 0; j < length2; j++) {
        if (item.regions[j].isSelected) {
          displayItems[i].regions.push(item.regions[j]);
        }
      }
    }

    return (
      <>
        {displayItems.map((x, i) => {
          return (
            <Box sx={{ width: 320, margin: '0 auto' }} key={i}>
              <Typography
                variant="h2"
                mt={10}
                mb={5}
                textAlign="center"
                fontSize={24}
              >
                {x.country}
              </Typography>
              {x.regions.map((y, i) => renderSlider(i, y))}
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Box sx={{ width: 320, margin: '0 auto' }}>
        <Typography variant="h2" mt={5} mb={5} textAlign="center" fontSize={36}>
          Select decades
        </Typography>
        {renderSlider(-1)}
      </Box>
      {renderSliders()}
    </>
  );
};

export default Sliders;

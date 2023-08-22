import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setButtonsLock } from './actions/buttonsLockAction';
import { Box, Slider, InputLabel, Typography } from '@mui/material';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';

const Input = styled(MuiInput)`
  width: 42px;
`;

const Sliders = (): JSX.Element => {
    const state = useSelector((state: RootState) => state);
    const { step, dropdownItems } = state;
    const dispatch = useDispatch();

    console.log(useState, useEffect, setButtonsLock, step, dropdownItems,
        dispatch);

    const renderSlider = (i: number, region?: string) => {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 3,
                mb: 6,
            }}
            key={i}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    {region ? <InputLabel
                        htmlFor="input-with-icon-adornment"
                        shrink={true}
                    >
                        {region}
                    </InputLabel> : null}
                    <Input />
                  </Box>
                  <Slider
                    value={[12, 54]}
                    getAriaLabel={() => 'Age range'}
                    valueLabelDisplay="auto"
                    sx={{ width: '50%' }}
                  />
                 <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    {region ? <InputLabel
                        htmlFor="input-with-icon-adornment"
                        shrink={true}
                    >
                        {region}
                    </InputLabel> : null}
                    <Input />
                  </Box>
            </Box>
        );
    };

    const renderSliders = () => {
        interface IDisplayItems {
            country: string;
            regions: string[];
        }
        const selectedItems = state.dropdownItems.value.filter(
            (x) => x.isSelected,
        );
        const displayItems: IDisplayItems[] = [];

        for (let i = 0; i < selectedItems.length; i++) {
            const x = selectedItems[i];

            displayItems.push({ country: x.country, regions: [] });

            for (let j = 0; j < x.regions.length; j++) {
                if (x.regions[j].isSelected) {
                    displayItems[i].regions.push(x.regions[j].name);
                }
            }
        }

        return <>
            {displayItems.map((x, i) => {
                return <Box sx={{ width: 320, margin: '0 auto' }} key={i}>
                    <Typography mt={10} mb={5} variant="h6" textAlign="center">
                        {x.country}
                    </Typography>
                    {x.regions.map((y, i) => renderSlider(i, y))}
                </Box>;
            })}
        </>;
    };

    return (
        <>
            <Box sx={{ width: 320, margin: '0 auto' }}>
                <Typography mt={5} mb={5} variant="h6" textAlign="center">
                    Select decades
                </Typography>
                {renderSlider(-1)}
            </Box>
            {renderSliders()}
        </>
    );
};

export default Sliders;

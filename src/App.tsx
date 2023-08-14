import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { nextStep, previousStep } from './actions/stepAction';
import { Stack, Button, Box } from '@mui/material';
import Stepper from './stepper';
import Dropdown from './dropdown';

interface Country {
    country: string;
    regions: string[];
    isSelected: boolean;
}

const countriesAndTheirRegions: Country[] = [
    {
        country: 'United States of America',
        regions: [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ],
        isSelected: false,
    },
    {
        country: 'Canada',
        regions: [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Northwest Territories',
            'Nova Scotia',
            'Nunavut',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Yukon',
        ],
        isSelected: false,
    },
    {
        country: 'Australia',
        regions: [
            'Capital Territory',
            'New South Wales',
            'Northern Territory',
            'Queensland',
            'South Australia',
            'Tasmania',
            'Victoria',
            'Western Australia',
        ],
        isSelected: false,
    },
];

function App() {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const [selectedCountriesAndRegions, setSelectedCountriesAndRegions] =
        useState<Country[]>(
            countriesAndTheirRegions.map((x) => ({
                country: x.country,
                regions: [],
                isSelected: x.isSelected,
            })),
        );

    const goNextStep = () => {
        dispatch(nextStep());
    };

    const goPreviousStep = () => {
        dispatch(previousStep());
    };

    const componentByStep = () => {
        if (!state.step.value) {
            return (
                <Dropdown
                    activeStep={state.step.value}
                    selectedCountriesAndRegions={selectedCountriesAndRegions}
                    setSelectedCountriesAndRegions={
                        setSelectedCountriesAndRegions
                    }
                />
            );
        }
    };

    return (
        <div className="App">
            <>
                <Stepper activeStep={state.step.value} />
                {componentByStep()}
                <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                        m: 10,
                        width: 300,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button onClick={goPreviousStep} variant="outlined">
                        Back
                    </Button>
                    <Box>
                        <Button onClick={goNextStep} variant="text">
                            Skip
                        </Button>
                        <Button onClick={goNextStep} variant="contained">
                            Next
                        </Button>
                    </Box>
                </Stack>
            </>
        </div>
    );
}

export default App;

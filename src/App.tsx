import { useState, useEffect } from 'react';
import Stepper from './stepper';
import Dropdown from './dropdown';

const countriesAndTheirRegions = [
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
    const [activeStep, setActiveStep] = useState<number>(0);

    const [selectedCountriesAndRegions, setSelectedCountriesAndRegions] =
        useState<object[]>(
            countriesAndTheirRegions.map((x) => ({
                country: x.country,
                regions: [],
                isSelected: x.isSelected,
            })),
        );

    useEffect(() => {
        setActiveStep(0);
    }, []);

    const componentByStep = () => {
        if (!activeStep) {
            return (
                <Dropdown
                    activeStep={activeStep}
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
                <Stepper activeStep={activeStep} />
                {componentByStep()}
            </>
        </div>
    );
}

export default App;

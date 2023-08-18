interface ICountryWithRegions {
    country: string;
    regions: string[];
}

interface ICountryWithRegionsWithIsSelectedProperty {
    country: string;
    regions: IRegionWithIsSelectedProperty[];
    isSelected: boolean;
}

interface IRegionWithIsSelectedProperty {
    name: string;
    isSelected: boolean;
}

const countriesWithRegions: ICountryWithRegions[] = [
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
    },
];

export const addIsSelectedProperties =
    (): ICountryWithRegionsWithIsSelectedProperty[] => {
        return countriesWithRegions.map((c) => ({
            country: c.country,
            regions: c.regions.map((r) => ({
                name: r,
                isSelected: false,
            })),
            isSelected: false,
        }));
    };

export { addIsSelectedProperties as countriesWithRegions };

interface ICountryWithRegions {
    country: string;
    regions: IRegion[];
}

interface IRegion {
    name: string;
    population: IPopulation[];
}

interface IPopulation {
    decade: number;
    value: number;
}

interface ICountryWithRegionsWithIsSelectedProperty {
    country: string;
    regions: IRegionWithIsSelectedProperty[];
    isSelected: boolean;
}

interface IRegionWithIsSelectedProperty {
    name: string;
    population: IPopulation[];
    isSelected: boolean;
}

const countriesWithRegions: ICountryWithRegions[] = [
    {
        country: 'United States of America',
        regions: [
            {
                name: 'Alabama',
                population: [
                    {
                        decade: 1900,
                        value: 1828697,
                    },
                    {
                        decade: 1910,
                        value: 2138093,
                    },
                    {
                        decade: 1920,
                        value: 2348174,
                    },
                    {
                        decade: 1930,
                        value: 2646248,
                    },
                    {
                        decade: 1940,
                        value: 2832961,
                    },
                    {
                        decade: 1950,
                        value: 3061743,
                    },
                    {
                        decade: 1960,
                        value: 3266740,
                    },
                    {
                        decade: 1970,
                        value: 3444165,
                    },
                    {
                        decade: 1980,
                        value: 3893888,
                    },
                    {
                        decade: 1990,
                        value: 4040587,
                    },
                    {
                        decade: 2000,
                        value: 4447100,
                    },
                    {
                        decade: 2010,
                        value: 4779736,
                    },
                    {
                        decade: 2020,
                        value: 5024279,
                    },
                ],
            },
        ],
    },
    {
        country: 'Canada',
        regions: [
            {
                name: 'Alberta',
                population: [
                    {
                        decade: 1900,
                        value: 1,
                    },
                ],
            },
        ],
    },
    {
        country: 'Australia',
        regions: [
            {
                name: 'Capital Territory',
                population: [
                    {
                        decade: 1900,
                        value: 1,
                    },
                ],
            },
        ],
    },
];

export const addIsSelectedProperties =
    (): ICountryWithRegionsWithIsSelectedProperty[] => {
        return countriesWithRegions.map((c) => ({
            country: c.country,
            regions: c.regions.map((r) => ({
                name: r.name,
                population: r.population,
                isSelected: false,
            })),
            isSelected: false,
        }));
    };

export { addIsSelectedProperties as countriesWithRegions };

import { defaultSliderValue } from '../components/App';

interface ILocation {
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

interface ILocationWithIsSelectedProperty {
  country: string;
  regions: IRegionWithIsSelectedProperty[];
  isSelected: boolean;
}

interface IRegionWithIsSelectedProperty {
  name: string;
  population: IPopulation[];
  isSelected: boolean;
  sliderValue: number[];
}

const locations: ILocation[] = [
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
      {
        name: 'Alaska',
        population: [
          {
            decade: 1900,
            value: 63592,
          },
          {
            decade: 1910,
            value: 64356,
          },
          {
            decade: 1920,
            value: 55036,
          },
          {
            decade: 1930,
            value: 59278,
          },
          {
            decade: 1940,
            value: 72524,
          },
          {
            decade: 1950,
            value: 128643,
          },
          {
            decade: 1960,
            value: 226167,
          },
          {
            decade: 1970,
            value: 300382,
          },
          {
            decade: 1980,
            value: 401851,
          },
          {
            decade: 1990,
            value: 550043,
          },
          {
            decade: 2000,
            value: 626932,
          },
          {
            decade: 2010,
            value: 710231,
          },
          {
            decade: 2020,
            value: 733391,
          },
        ],
      },
      {
        name: 'Arizona',
        population: [
          {
            decade: 1900,
            value: 122931,
          },
          {
            decade: 1910,
            value: 204354,
          },
          {
            decade: 1920,
            value: 334162,
          },
          {
            decade: 1930,
            value: 435573,
          },
          {
            decade: 1940,
            value: 499261,
          },
          {
            decade: 1950,
            value: 749587,
          },
          {
            decade: 1960,
            value: 1302161,
          },
          {
            decade: 1970,
            value: 1770900,
          },
          {
            decade: 1980,
            value: 2718215,
          },
          {
            decade: 1990,
            value: 3665228,
          },
          {
            decade: 2000,
            value: 5130632,
          },
          {
            decade: 2010,
            value: 6392017,
          },
          {
            decade: 2020,
            value: 7151502,
          },
        ],
      },
      {
        name: 'Arkansas',
        population: [
          {
            decade: 1900,
            value: 1311564,
          },
          {
            decade: 1910,
            value: 1574449,
          },
          {
            decade: 1920,
            value: 1752204,
          },
          {
            decade: 1930,
            value: 1854482,
          },
          {
            decade: 1940,
            value: 1949387,
          },
          {
            decade: 1950,
            value: 1909511,
          },
          {
            decade: 1960,
            value: 1786272,
          },
          {
            decade: 1970,
            value: 1923295,
          },
          {
            decade: 1980,
            value: 2286435,
          },
          {
            decade: 1990,
            value: 2350725,
          },
          {
            decade: 2000,
            value: 2673400,
          },
          {
            decade: 2010,
            value: 2915918,
          },
          {
            decade: 2020,
            value: 3011524,
          },
        ],
      },
      {
        name: 'California',
        population: [
          {
            decade: 1900,
            value: 1485053,
          },
          {
            decade: 1910,
            value: 2377549,
          },
          {
            decade: 1920,
            value: 3426861,
          },
          {
            decade: 1930,
            value: 5677251,
          },
          {
            decade: 1940,
            value: 6907387,
          },
          {
            decade: 1950,
            value: 10586223,
          },
          {
            decade: 1960,
            value: 15717204,
          },
          {
            decade: 1970,
            value: 19953134,
          },
          {
            decade: 1980,
            value: 23667902,
          },
          {
            decade: 1990,
            value: 29760021,
          },
          {
            decade: 2000,
            value: 33871648,
          },
          {
            decade: 2010,
            value: 37253956,
          },
          {
            decade: 2020,
            value: 39538223,
          },
        ],
      },
      {
        name: 'Colorado',
        population: [
          {
            decade: 1900,
            value: 539700,
          },
          {
            decade: 1910,
            value: 799024,
          },
          {
            decade: 1920,
            value: 939629,
          },
          {
            decade: 1930,
            value: 1035791,
          },
          {
            decade: 1940,
            value: 1123296,
          },
          {
            decade: 1950,
            value: 1325089,
          },
          {
            decade: 1960,
            value: 1753947,
          },
          {
            decade: 1970,
            value: 2207259,
          },
          {
            decade: 1980,
            value: 2889964,
          },
          {
            decade: 1990,
            value: 3294394,
          },
          {
            decade: 2000,
            value: 4301261,
          },
          {
            decade: 2010,
            value: 5029196,
          },
          {
            decade: 2020,
            value: 5773714,
          },
        ],
      },
      {
        name: 'Connecticut',
        population: [
          {
            decade: 1900,
            value: 908420,
          },
          {
            decade: 1910,
            value: 1114756,
          },
          {
            decade: 1920,
            value: 1380631,
          },
          {
            decade: 1930,
            value: 1606903,
          },
          {
            decade: 1940,
            value: 1709242,
          },
          {
            decade: 1950,
            value: 2007280,
          },
          {
            decade: 1960,
            value: 2535234,
          },
          {
            decade: 1970,
            value: 3031709,
          },
          {
            decade: 1980,
            value: 3107576,
          },
          {
            decade: 1990,
            value: 3287116,
          },
          {
            decade: 2000,
            value: 3405565,
          },
          {
            decade: 2010,
            value: 3574097,
          },
          {
            decade: 2020,
            value: 3608298,
          },
        ],
      },
      {
        name: 'Delaware',
        population: [
          {
            decade: 1900,
            value: 184735,
          },
          {
            decade: 1910,
            value: 202322,
          },
          {
            decade: 1920,
            value: 223003,
          },
          {
            decade: 1930,
            value: 238380,
          },
          {
            decade: 1940,
            value: 266505,
          },
          {
            decade: 1950,
            value: 318085,
          },
          {
            decade: 1960,
            value: 446292,
          },
          {
            decade: 1970,
            value: 548104,
          },
          {
            decade: 1980,
            value: 594338,
          },
          {
            decade: 1990,
            value: 666168,
          },
          {
            decade: 2000,
            value: 783600,
          },
          {
            decade: 2010,
            value: 897934,
          },
          {
            decade: 2020,
            value: 989948,
          },
        ],
      },
      {
        name: 'Florida',
        population: [
          {
            decade: 1900,
            value: 528542,
          },
          {
            decade: 1910,
            value: 752619,
          },
          {
            decade: 1920,
            value: 968470,
          },
          {
            decade: 1930,
            value: 1468211,
          },
          {
            decade: 1940,
            value: 1897414,
          },
          {
            decade: 1950,
            value: 2771305,
          },
          {
            decade: 1960,
            value: 4951560,
          },
          {
            decade: 1970,
            value: 6789443,
          },
          {
            decade: 1980,
            value: 9746324,
          },
          {
            decade: 1990,
            value: 12937926,
          },
          {
            decade: 2000,
            value: 15982378,
          },
          {
            decade: 2010,
            value: 18801310,
          },
          {
            decade: 2020,
            value: 21538187,
          },
        ],
      },
      {
        name: 'Georgia',
        population: [
          {
            decade: 1900,
            value: 2216331,
          },
          {
            decade: 1910,
            value: 2609121,
          },
          {
            decade: 1920,
            value: 2895832,
          },
          {
            decade: 1930,
            value: 2908506,
          },
          {
            decade: 1940,
            value: 3123723,
          },
          {
            decade: 1950,
            value: 3444578,
          },
          {
            decade: 1960,
            value: 3943116,
          },
          {
            decade: 1970,
            value: 4589575,
          },
          {
            decade: 1980,
            value: 5463105,
          },
          {
            decade: 1990,
            value: 6478216,
          },
          {
            decade: 2000,
            value: 8186453,
          },
          {
            decade: 2010,
            value: 9687653,
          },
          {
            decade: 2020,
            value: 10711908,
          },
        ],
      },
      {
        name: 'Hawaii',
        population: [
          {
            decade: 1900,
            value: 154001,
          },
          {
            decade: 1910,
            value: 191874,
          },
          {
            decade: 1920,
            value: 255881,
          },
          {
            decade: 1930,
            value: 368300,
          },
          {
            decade: 1940,
            value: 422738,
          },
          {
            decade: 1950,
            value: 499794,
          },
          {
            decade: 1960,
            value: 632772,
          },
          {
            decade: 1970,
            value: 768561,
          },
          {
            decade: 1980,
            value: 964691,
          },
          {
            decade: 1990,
            value: 1108229,
          },
          {
            decade: 2000,
            value: 1211537,
          },
          {
            decade: 2010,
            value: 1360301,
          },
          {
            decade: 2020,
            value: 1455271,
          },
        ],
      },
      {
        name: 'Idaho',
        population: [
          {
            decade: 1900,
            value: 161772,
          },
          {
            decade: 1910,
            value: 325594,
          },
          {
            decade: 1920,
            value: 431866,
          },
          {
            decade: 1930,
            value: 445032,
          },
          {
            decade: 1940,
            value: 524873,
          },
          {
            decade: 1950,
            value: 588637,
          },
          {
            decade: 1960,
            value: 667191,
          },
          {
            decade: 1970,
            value: 712567,
          },
          {
            decade: 1980,
            value: 943935,
          },
          {
            decade: 1990,
            value: 1006749,
          },
          {
            decade: 2000,
            value: 1293953,
          },
          {
            decade: 2010,
            value: 1567582,
          },
          {
            decade: 2020,
            value: 1839106,
          },
        ],
      },
      {
        name: 'Illinois',
        population: [
          {
            decade: 1900,
            value: 4821550,
          },
          {
            decade: 1910,
            value: 5638591,
          },
          {
            decade: 1920,
            value: 6485280,
          },
          {
            decade: 1930,
            value: 7630654,
          },
          {
            decade: 1940,
            value: 7897241,
          },
          {
            decade: 1950,
            value: 8712176,
          },
          {
            decade: 1960,
            value: 10081158,
          },
          {
            decade: 1970,
            value: 11113976,
          },
          {
            decade: 1980,
            value: 11426518,
          },
          {
            decade: 1990,
            value: 11430602,
          },
          {
            decade: 2000,
            value: 12419293,
          },
          {
            decade: 2010,
            value: 12830632,
          },
          {
            decade: 2020,
            value: 12812508,
          },
        ],
      },
      {
        name: 'Indiana',
        population: [
          {
            decade: 1900,
            value: 2516462,
          },
          {
            decade: 1910,
            value: 2700876,
          },
          {
            decade: 1920,
            value: 2930390,
          },
          {
            decade: 1930,
            value: 3238503,
          },
          {
            decade: 1940,
            value: 3427796,
          },
          {
            decade: 1950,
            value: 3934224,
          },
          {
            decade: 1960,
            value: 4662498,
          },
          {
            decade: 1970,
            value: 5193669,
          },
          {
            decade: 1980,
            value: 5490224,
          },
          {
            decade: 1990,
            value: 5544159,
          },
          {
            decade: 2000,
            value: 6080485,
          },
          {
            decade: 2010,
            value: 6483802,
          },
          {
            decade: 2020,
            value: 6785528,
          },
        ],
      },
      {
        name: 'Iowa',
        population: [
          {
            decade: 1900,
            value: 2231853,
          },
          {
            decade: 1910,
            value: 2224771,
          },
          {
            decade: 1920,
            value: 2404021,
          },
          {
            decade: 1930,
            value: 2470939,
          },
          {
            decade: 1940,
            value: 2538268,
          },
          {
            decade: 1950,
            value: 2621073,
          },
          {
            decade: 1960,
            value: 2757537,
          },
          {
            decade: 1970,
            value: 2824376,
          },
          {
            decade: 1980,
            value: 2913808,
          },
          {
            decade: 1990,
            value: 2776755,
          },
          {
            decade: 2000,
            value: 2926324,
          },
          {
            decade: 2010,
            value: 3046355,
          },
          {
            decade: 2020,
            value: 3190369,
          },
        ],
      },
      {
        name: 'Kansas',
        population: [
          {
            decade: 1900,
            value: 1470495,
          },
          {
            decade: 1910,
            value: 1690949,
          },
          {
            decade: 1920,
            value: 1769257,
          },
          {
            decade: 1930,
            value: 1880999,
          },
          {
            decade: 1940,
            value: 1801028,
          },
          {
            decade: 1950,
            value: 1905299,
          },
          {
            decade: 1960,
            value: 2178611,
          },
          {
            decade: 1970,
            value: 2246578,
          },
          {
            decade: 1980,
            value: 2363679,
          },
          {
            decade: 1990,
            value: 2477574,
          },
          {
            decade: 2000,
            value: 2688418,
          },
          {
            decade: 2010,
            value: 2853118,
          },
          {
            decade: 2020,
            value: 2937880,
          },
        ],
      },
      {
        name: 'Kentucky',
        population: [
          {
            decade: 1900,
            value: 2147174,
          },
          {
            decade: 1910,
            value: 2289905,
          },
          {
            decade: 1920,
            value: 2416630,
          },
          {
            decade: 1930,
            value: 2614589,
          },
          {
            decade: 1940,
            value: 2845627,
          },
          {
            decade: 1950,
            value: 2944806,
          },
          {
            decade: 1960,
            value: 3038156,
          },
          {
            decade: 1970,
            value: 3218706,
          },
          {
            decade: 1980,
            value: 3660777,
          },
          {
            decade: 1990,
            value: 3685296,
          },
          {
            decade: 2000,
            value: 4041769,
          },
          {
            decade: 2010,
            value: 4339367,
          },
          {
            decade: 2020,
            value: 4505836,
          },
        ],
      },
      {
        name: 'Louisiana',
        population: [
          {
            decade: 1900,
            value: 1381625,
          },
          {
            decade: 1910,
            value: 1656388,
          },
          {
            decade: 1920,
            value: 1798509,
          },
          {
            decade: 1930,
            value: 2101593,
          },
          {
            decade: 1940,
            value: 2363880,
          },
          {
            decade: 1950,
            value: 2683516,
          },
          {
            decade: 1960,
            value: 3257022,
          },
          {
            decade: 1970,
            value: 3641306,
          },
          {
            decade: 1980,
            value: 4205900,
          },
          {
            decade: 1990,
            value: 4219973,
          },
          {
            decade: 2000,
            value: 4468976,
          },
          {
            decade: 2010,
            value: 4533372,
          },
          {
            decade: 2020,
            value: 4657757,
          },
        ],
      },
      {
        name: 'Maine',
        population: [
          {
            decade: 1900,
            value: 694466,
          },
          {
            decade: 1910,
            value: 742371,
          },
          {
            decade: 1920,
            value: 768014,
          },
          {
            decade: 1930,
            value: 797423,
          },
          {
            decade: 1940,
            value: 847226,
          },
          {
            decade: 1950,
            value: 913774,
          },
          {
            decade: 1960,
            value: 969265,
          },
          {
            decade: 1970,
            value: 992048,
          },
          {
            decade: 1980,
            value: 1124660,
          },
          {
            decade: 1990,
            value: 1227928,
          },
          {
            decade: 2000,
            value: 1274923,
          },
          {
            decade: 2010,
            value: 1328361,
          },
          {
            decade: 2020,
            value: 1362359,
          },
        ],
      },
      {
        name: 'Maryland',
        population: [
          {
            decade: 1900,
            value: 1188044,
          },
          {
            decade: 1910,
            value: 1295346,
          },
          {
            decade: 1920,
            value: 144966,
          },
          {
            decade: 1930,
            value: 1631526,
          },
          {
            decade: 1940,
            value: 1821244,
          },
          {
            decade: 1950,
            value: 2343001,
          },
          {
            decade: 1960,
            value: 3100689,
          },
          {
            decade: 1970,
            value: 3922399,
          },
          {
            decade: 1980,
            value: 4216975,
          },
          {
            decade: 1990,
            value: 4781468,
          },
          {
            decade: 2000,
            value: 5296486,
          },
          {
            decade: 2010,
            value: 5773552,
          },
          {
            decade: 2020,
            value: 6177224,
          },
        ],
      },
      {
        name: 'Massachusetts',
        population: [
          {
            decade: 1900,
            value: 2805346,
          },
          {
            decade: 1910,
            value: 3366416,
          },
          {
            decade: 1920,
            value: 3852356,
          },
          {
            decade: 1930,
            value: 4249614,
          },
          {
            decade: 1940,
            value: 4316721,
          },
          {
            decade: 1950,
            value: 4690514,
          },
          {
            decade: 1960,
            value: 5148578,
          },
          {
            decade: 1970,
            value: 5689170,
          },
          {
            decade: 1980,
            value: 5737037,
          },
          {
            decade: 1990,
            value: 6016425,
          },
          {
            decade: 2000,
            value: 6349097,
          },
          {
            decade: 2010,
            value: 6547629,
          },
          {
            decade: 2020,
            value: 7029917,
          },
        ],
      },
      {
        name: 'Michigan',
        population: [
          {
            decade: 1900,
            value: 2420982,
          },
          {
            decade: 1910,
            value: 2810173,
          },
          {
            decade: 1920,
            value: 3668412,
          },
          {
            decade: 1930,
            value: 4842325,
          },
          {
            decade: 1940,
            value: 5256106,
          },
          {
            decade: 1950,
            value: 6371766,
          },
          {
            decade: 1960,
            value: 7823194,
          },
          {
            decade: 1970,
            value: 8875083,
          },
          {
            decade: 1980,
            value: 9262078,
          },
          {
            decade: 1990,
            value: 9295297,
          },
          {
            decade: 2000,
            value: 9938444,
          },
          {
            decade: 2010,
            value: 9883640,
          },
          {
            decade: 2020,
            value: 10077331,
          },
        ],
      },
      {
        name: 'Minnesota',
        population: [
          {
            decade: 1900,
            value: 1751394,
          },
          {
            decade: 1910,
            value: 2075708,
          },
          {
            decade: 1920,
            value: 2387125,
          },
          {
            decade: 1930,
            value: 2563953,
          },
          {
            decade: 1940,
            value: 2792300,
          },
          {
            decade: 1950,
            value: 2982483,
          },
          {
            decade: 1960,
            value: 3413864,
          },
          {
            decade: 1970,
            value: 3804971,
          },
          {
            decade: 1980,
            value: 4075970,
          },
          {
            decade: 1990,
            value: 4375099,
          },
          {
            decade: 2000,
            value: 4919479,
          },
          {
            decade: 2010,
            value: 5303925,
          },
          {
            decade: 2020,
            value: 5706494,
          },
        ],
      },
      {
        name: 'Mississippi',
        population: [
          {
            decade: 1900,
            value: 1551270,
          },
          {
            decade: 1910,
            value: 1797114,
          },
          {
            decade: 1920,
            value: 1790618,
          },
          {
            decade: 1930,
            value: 2009821,
          },
          {
            decade: 1940,
            value: 2183796,
          },
          {
            decade: 1950,
            value: 2178914,
          },
          {
            decade: 1960,
            value: 2178141,
          },
          {
            decade: 1970,
            value: 2216912,
          },
          {
            decade: 1980,
            value: 2520638,
          },
          {
            decade: 1990,
            value: 2573216,
          },
          {
            decade: 2000,
            value: 2844658,
          },
          {
            decade: 2010,
            value: 2967297,
          },
          {
            decade: 2020,
            value: 2961279,
          },
        ],
      },
      {
        name: 'Missouri',
        population: [
          {
            decade: 1900,
            value: 3106665,
          },
          {
            decade: 1910,
            value: 3293335,
          },
          {
            decade: 1920,
            value: 3404055,
          },
          {
            decade: 1930,
            value: 3629367,
          },
          {
            decade: 1940,
            value: 3784664,
          },
          {
            decade: 1950,
            value: 3954653,
          },
          {
            decade: 1960,
            value: 4319813,
          },
          {
            decade: 1970,
            value: 4676501,
          },
          {
            decade: 1980,
            value: 4916686,
          },
          {
            decade: 1990,
            value: 5117073,
          },
          {
            decade: 2000,
            value: 5595211,
          },
          {
            decade: 2010,
            value: 5988927,
          },
          {
            decade: 2020,
            value: 6154913,
          },
        ],
      },
      {
        name: 'Montana',
        population: [
          {
            decade: 1900,
            value: 243329,
          },
          {
            decade: 1910,
            value: 376053,
          },
          {
            decade: 1920,
            value: 548889,
          },
          {
            decade: 1930,
            value: 537606,
          },
          {
            decade: 1940,
            value: 559456,
          },
          {
            decade: 1950,
            value: 591024,
          },
          {
            decade: 1960,
            value: 674767,
          },
          {
            decade: 1970,
            value: 694409,
          },
          {
            decade: 1980,
            value: 786690,
          },
          {
            decade: 1990,
            value: 799065,
          },
          {
            decade: 2000,
            value: 902195,
          },
          {
            decade: 2010,
            value: 989415,
          },
          {
            decade: 2020,
            value: 1084225,
          },
        ],
      },
      {
        name: 'Nebraska',
        population: [
          {
            decade: 1900,
            value: 1066300,
          },
          {
            decade: 1910,
            value: 1192214,
          },
          {
            decade: 1920,
            value: 1296372,
          },
          {
            decade: 1930,
            value: 1377963,
          },
          {
            decade: 1940,
            value: 1315834,
          },
          {
            decade: 1950,
            value: 1325510,
          },
          {
            decade: 1960,
            value: 1411330,
          },
          {
            decade: 1970,
            value: 1483493,
          },
          {
            decade: 1980,
            value: 1569825,
          },
          {
            decade: 1990,
            value: 1578385,
          },
          {
            decade: 2000,
            value: 1711263,
          },
          {
            decade: 2010,
            value: 1826341,
          },
          {
            decade: 2020,
            value: 1961504,
          },
        ],
      },
      {
        name: 'Nevada',
        population: [
          {
            decade: 1900,
            value: 42335,
          },
          {
            decade: 1910,
            value: 81875,
          },
          {
            decade: 1920,
            value: 77407,
          },
          {
            decade: 1930,
            value: 91058,
          },
          {
            decade: 1940,
            value: 110247,
          },
          {
            decade: 1950,
            value: 160083,
          },
          {
            decade: 1960,
            value: 285278,
          },
          {
            decade: 1970,
            value: 488738,
          },
          {
            decade: 1980,
            value: 800493,
          },
          {
            decade: 1990,
            value: 1201833,
          },
          {
            decade: 2000,
            value: 1998257,
          },
          {
            decade: 2010,
            value: 2700551,
          },
          {
            decade: 2020,
            value: 3104614,
          },
        ],
      },
      {
        name: 'New Hampshire',
        population: [
          {
            decade: 1900,
            value: 411588,
          },
          {
            decade: 1910,
            value: 430572,
          },
          {
            decade: 1920,
            value: 443083,
          },
          {
            decade: 1930,
            value: 465293,
          },
          {
            decade: 1940,
            value: 491524,
          },
          {
            decade: 1950,
            value: 533242,
          },
          {
            decade: 1960,
            value: 606921,
          },
          {
            decade: 1970,
            value: 737681,
          },
          {
            decade: 1980,
            value: 920610,
          },
          {
            decade: 1990,
            value: 1109252,
          },
          {
            decade: 2000,
            value: 1235786,
          },
          {
            decade: 2010,
            value: 1316470,
          },
          {
            decade: 2020,
            value: 1377529,
          },
        ],
      },
      {
        name: 'New Jersey',
        population: [
          {
            decade: 1900,
            value: 1883669,
          },
          {
            decade: 1910,
            value: 2537167,
          },
          {
            decade: 1920,
            value: 3155900,
          },
          {
            decade: 1930,
            value: 4041334,
          },
          {
            decade: 1940,
            value: 4160165,
          },
          {
            decade: 1950,
            value: 4835329,
          },
          {
            decade: 1960,
            value: 6066782,
          },
          {
            decade: 1970,
            value: 7168164,
          },
          {
            decade: 1980,
            value: 7364823,
          },
          {
            decade: 1990,
            value: 7730188,
          },
          {
            decade: 2000,
            value: 8414350,
          },
          {
            decade: 2010,
            value: 8791894,
          },
          {
            decade: 2020,
            value: 9288994,
          },
        ],
      },
      {
        name: 'New Mexico',
        population: [
          {
            decade: 1900,
            value: 195310,
          },
          {
            decade: 1910,
            value: 327301,
          },
          {
            decade: 1920,
            value: 360350,
          },
          {
            decade: 1930,
            value: 423317,
          },
          {
            decade: 1940,
            value: 531818,
          },
          {
            decade: 1950,
            value: 681187,
          },
          {
            decade: 1960,
            value: 951023,
          },
          {
            decade: 1970,
            value: 1016000,
          },
          {
            decade: 1980,
            value: 1302894,
          },
          {
            decade: 1990,
            value: 1515069,
          },
          {
            decade: 2000,
            value: 1819046,
          },
          {
            decade: 2010,
            value: 2059179,
          },
          {
            decade: 2020,
            value: 2117522,
          },
        ],
      },
      {
        name: 'New York',
        population: [
          {
            decade: 1900,
            value: 7268894,
          },
          {
            decade: 1910,
            value: 9113614,
          },
          {
            decade: 1920,
            value: 10385227,
          },
          {
            decade: 1930,
            value: 12588066,
          },
          {
            decade: 1940,
            value: 13479142,
          },
          {
            decade: 1950,
            value: 14830192,
          },
          {
            decade: 1960,
            value: 16782304,
          },
          {
            decade: 1970,
            value: 18236967,
          },
          {
            decade: 1980,
            value: 17558072,
          },
          {
            decade: 1990,
            value: 17990455,
          },
          {
            decade: 2000,
            value: 18976457,
          },
          {
            decade: 2010,
            value: 19378102,
          },
          {
            decade: 2020,
            value: 20201249,
          },
        ],
      },
      {
        name: 'North Carolina',
        population: [
          {
            decade: 1900,
            value: 1893810,
          },
          {
            decade: 1910,
            value: 2206287,
          },
          {
            decade: 1920,
            value: 2559123,
          },
          {
            decade: 1930,
            value: 3170276,
          },
          {
            decade: 1940,
            value: 3571623,
          },
          {
            decade: 1950,
            value: 4061929,
          },
          {
            decade: 1960,
            value: 4556155,
          },
          {
            decade: 1970,
            value: 5082059,
          },
          {
            decade: 1980,
            value: 5881766,
          },
          {
            decade: 1990,
            value: 6628637,
          },
          {
            decade: 2000,
            value: 8049313,
          },
          {
            decade: 2010,
            value: 9535483,
          },
          {
            decade: 2020,
            value: 10439388,
          },
        ],
      },
      {
        name: 'North Dakota',
        population: [
          {
            decade: 1900,
            value: 319146,
          },
          {
            decade: 1910,
            value: 577056,
          },
          {
            decade: 1920,
            value: 646872,
          },
          {
            decade: 1930,
            value: 680845,
          },
          {
            decade: 1940,
            value: 641935,
          },
          {
            decade: 1950,
            value: 619636,
          },
          {
            decade: 1960,
            value: 632446,
          },
          {
            decade: 1970,
            value: 617761,
          },
          {
            decade: 1980,
            value: 652717,
          },
          {
            decade: 1990,
            value: 638800,
          },
          {
            decade: 2000,
            value: 642200,
          },
          {
            decade: 2010,
            value: 672591,
          },
          {
            decade: 2020,
            value: 779094,
          },
        ],
      },
      {
        name: 'Ohio',
        population: [
          {
            decade: 1900,
            value: 4157545,
          },
          {
            decade: 1910,
            value: 4767121,
          },
          {
            decade: 1920,
            value: 5759394,
          },
          {
            decade: 1930,
            value: 6646697,
          },
          {
            decade: 1940,
            value: 6907612,
          },
          {
            decade: 1950,
            value: 7946627,
          },
          {
            decade: 1960,
            value: 9706397,
          },
          {
            decade: 1970,
            value: 10652017,
          },
          {
            decade: 1980,
            value: 10797630,
          },
          {
            decade: 1990,
            value: 10847115,
          },
          {
            decade: 2000,
            value: 11353140,
          },
          {
            decade: 2010,
            value: 11536504,
          },
          {
            decade: 2020,
            value: 11799448,
          },
        ],
      },
      {
        name: 'Oklahoma',
        population: [
          {
            decade: 1900,
            value: 790391,
          },
          {
            decade: 1910,
            value: 1657155,
          },
          {
            decade: 1920,
            value: 2028283,
          },
          {
            decade: 1930,
            value: 2396040,
          },
          {
            decade: 1940,
            value: 2336434,
          },
          {
            decade: 1950,
            value: 2233351,
          },
          {
            decade: 1960,
            value: 2328284,
          },
          {
            decade: 1970,
            value: 2559229,
          },
          {
            decade: 1980,
            value: 3025290,
          },
          {
            decade: 1990,
            value: 3145585,
          },
          {
            decade: 2000,
            value: 3450654,
          },
          {
            decade: 2010,
            value: 3751351,
          },
          {
            decade: 2020,
            value: 3959353,
          },
        ],
      },
      {
        name: 'Oregon',
        population: [
          {
            decade: 1900,
            value: 413536,
          },
          {
            decade: 1910,
            value: 672765,
          },
          {
            decade: 1920,
            value: 783389,
          },
          {
            decade: 1930,
            value: 953786,
          },
          {
            decade: 1940,
            value: 1089684,
          },
          {
            decade: 1950,
            value: 1521341,
          },
          {
            decade: 1960,
            value: 1768687,
          },
          {
            decade: 1970,
            value: 2091385,
          },
          {
            decade: 1980,
            value: 2633105,
          },
          {
            decade: 1990,
            value: 2842321,
          },
          {
            decade: 2000,
            value: 3421399,
          },
          {
            decade: 2010,
            value: 3831074,
          },
          {
            decade: 2020,
            value: 4237256,
          },
        ],
      },
      {
        name: 'Pennsylvania',
        population: [
          {
            decade: 1900,
            value: 6302115,
          },
          {
            decade: 1910,
            value: 7665111,
          },
          {
            decade: 1920,
            value: 8720017,
          },
          {
            decade: 1930,
            value: 9631350,
          },
          {
            decade: 1940,
            value: 9900180,
          },
          {
            decade: 1950,
            value: 10498012,
          },
          {
            decade: 1960,
            value: 11319366,
          },
          {
            decade: 1970,
            value: 11793909,
          },
          {
            decade: 1980,
            value: 11863895,
          },
          {
            decade: 1990,
            value: 11881643,
          },
          {
            decade: 2000,
            value: 12281054,
          },
          {
            decade: 2010,
            value: 12702379,
          },
          {
            decade: 2020,
            value: 13002700,
          },
        ],
      },
      {
        name: 'Rhode Island',
        population: [
          {
            decade: 1900,
            value: 428556,
          },
          {
            decade: 1910,
            value: 542610,
          },
          {
            decade: 1920,
            value: 604397,
          },
          {
            decade: 1930,
            value: 687497,
          },
          {
            decade: 1940,
            value: 713346,
          },
          {
            decade: 1950,
            value: 791896,
          },
          {
            decade: 1960,
            value: 859488,
          },
          {
            decade: 1970,
            value: 946725,
          },
          {
            decade: 1980,
            value: 947154,
          },
          {
            decade: 1990,
            value: 1003464,
          },
          {
            decade: 2000,
            value: 1048319,
          },
          {
            decade: 2010,
            value: 1052567,
          },
          {
            decade: 2020,
            value: 1097379,
          },
        ],
      },
      {
        name: 'South Carolina',
        population: [
          {
            decade: 1900,
            value: 1340316,
          },
          {
            decade: 1910,
            value: 1515400,
          },
          {
            decade: 1920,
            value: 1683724,
          },
          {
            decade: 1930,
            value: 1738765,
          },
          {
            decade: 1940,
            value: 1899804,
          },
          {
            decade: 1950,
            value: 2117027,
          },
          {
            decade: 1960,
            value: 2382594,
          },
          {
            decade: 1970,
            value: 2590516,
          },
          {
            decade: 1980,
            value: 3121820,
          },
          {
            decade: 1990,
            value: 3486703,
          },
          {
            decade: 2000,
            value: 4012012,
          },
          {
            decade: 2010,
            value: 4625364,
          },
          {
            decade: 2020,
            value: 5118425,
          },
        ],
      },
      {
        name: 'South Dakota',
        population: [
          {
            decade: 1900,
            value: 401570,
          },
          {
            decade: 1910,
            value: 583888,
          },
          {
            decade: 1920,
            value: 636547,
          },
          {
            decade: 1930,
            value: 692849,
          },
          {
            decade: 1940,
            value: 642961,
          },
          {
            decade: 1950,
            value: 652740,
          },
          {
            decade: 1960,
            value: 680514,
          },
          {
            decade: 1970,
            value: 665507,
          },
          {
            decade: 1980,
            value: 690768,
          },
          {
            decade: 1990,
            value: 696004,
          },
          {
            decade: 2000,
            value: 754844,
          },
          {
            decade: 2010,
            value: 814180,
          },
          {
            decade: 2020,
            value: 886667,
          },
        ],
      },
      {
        name: 'Tennessee',
        population: [
          {
            decade: 1900,
            value: 2020616,
          },
          {
            decade: 1910,
            value: 2184789,
          },
          {
            decade: 1920,
            value: 2337885,
          },
          {
            decade: 1930,
            value: 2616556,
          },
          {
            decade: 1940,
            value: 2915841,
          },
          {
            decade: 1950,
            value: 3291718,
          },
          {
            decade: 1960,
            value: 3567089,
          },
          {
            decade: 1970,
            value: 3923687,
          },
          {
            decade: 1980,
            value: 4591120,
          },
          {
            decade: 1990,
            value: 4877185,
          },
          {
            decade: 2000,
            value: 5689283,
          },
          {
            decade: 2010,
            value: 6346105,
          },
          {
            decade: 2020,
            value: 6910840,
          },
        ],
      },
      {
        name: 'Texas',
        population: [
          {
            decade: 1900,
            value: 3048710,
          },
          {
            decade: 1910,
            value: 3896542,
          },
          {
            decade: 1920,
            value: 4663228,
          },
          {
            decade: 1930,
            value: 5824715,
          },
          {
            decade: 1940,
            value: 6414824,
          },
          {
            decade: 1950,
            value: 7711194,
          },
          {
            decade: 1960,
            value: 9579677,
          },
          {
            decade: 1970,
            value: 11196730,
          },
          {
            decade: 1980,
            value: 14229191,
          },
          {
            decade: 1990,
            value: 16986510,
          },
          {
            decade: 2000,
            value: 20851820,
          },
          {
            decade: 2010,
            value: 25145561,
          },
          {
            decade: 2020,
            value: 29145505,
          },
        ],
      },
      {
        name: 'Utah',
        population: [
          {
            decade: 1900,
            value: 276749,
          },
          {
            decade: 1910,
            value: 373351,
          },
          {
            decade: 1920,
            value: 449396,
          },
          {
            decade: 1930,
            value: 507847,
          },
          {
            decade: 1940,
            value: 550310,
          },
          {
            decade: 1950,
            value: 688862,
          },
          {
            decade: 1960,
            value: 890627,
          },
          {
            decade: 1970,
            value: 1059273,
          },
          {
            decade: 1980,
            value: 1461037,
          },
          {
            decade: 1990,
            value: 1722850,
          },
          {
            decade: 2000,
            value: 2233169,
          },
          {
            decade: 2010,
            value: 2763885,
          },
          {
            decade: 2020,
            value: 3271616,
          },
        ],
      },
      {
        name: 'Vermont',
        population: [
          {
            decade: 1900,
            value: 343641,
          },
          {
            decade: 1910,
            value: 355956,
          },
          {
            decade: 1920,
            value: 352428,
          },
          {
            decade: 1930,
            value: 359611,
          },
          {
            decade: 1940,
            value: 359231,
          },
          {
            decade: 1950,
            value: 377747,
          },
          {
            decade: 1960,
            value: 389881,
          },
          {
            decade: 1970,
            value: 444330,
          },
          {
            decade: 1980,
            value: 511456,
          },
          {
            decade: 1990,
            value: 562758,
          },
          {
            decade: 2000,
            value: 608827,
          },
          {
            decade: 2010,
            value: 625741,
          },
          {
            decade: 2020,
            value: 643077,
          },
        ],
      },
      {
        name: 'Virginia',
        population: [
          {
            decade: 1900,
            value: 1854184,
          },
          {
            decade: 1910,
            value: 2061612,
          },
          {
            decade: 1920,
            value: 2309187,
          },
          {
            decade: 1930,
            value: 2421851,
          },
          {
            decade: 1940,
            value: 2677773,
          },
          {
            decade: 1950,
            value: 3318680,
          },
          {
            decade: 1960,
            value: 3966949,
          },
          {
            decade: 1970,
            value: 4648494,
          },
          {
            decade: 1980,
            value: 5346818,
          },
          {
            decade: 1990,
            value: 6187358,
          },
          {
            decade: 2000,
            value: 7078515,
          },
          {
            decade: 2010,
            value: 8001024,
          },
          {
            decade: 2020,
            value: 8631393,
          },
        ],
      },
      {
        name: 'Washington',
        population: [
          {
            decade: 1900,
            value: 518103,
          },
          {
            decade: 1910,
            value: 1141990,
          },
          {
            decade: 1920,
            value: 1356621,
          },
          {
            decade: 1930,
            value: 1563396,
          },
          {
            decade: 1940,
            value: 1736191,
          },
          {
            decade: 1950,
            value: 2378963,
          },
          {
            decade: 1960,
            value: 2853214,
          },
          {
            decade: 1970,
            value: 3409169,
          },
          {
            decade: 1980,
            value: 4132156,
          },
          {
            decade: 1990,
            value: 4866692,
          },
          {
            decade: 2000,
            value: 5894121,
          },
          {
            decade: 2010,
            value: 6724540,
          },
          {
            decade: 2020,
            value: 7705281,
          },
        ],
      },
      {
        name: 'West Virginia',
        population: [
          {
            decade: 1900,
            value: 958800,
          },
          {
            decade: 1910,
            value: 1221119,
          },
          {
            decade: 1920,
            value: 1463701,
          },
          {
            decade: 1930,
            value: 1729205,
          },
          {
            decade: 1940,
            value: 1901974,
          },
          {
            decade: 1950,
            value: 2005552,
          },
          {
            decade: 1960,
            value: 1860421,
          },
          {
            decade: 1970,
            value: 1744237,
          },
          {
            decade: 1980,
            value: 1949644,
          },
          {
            decade: 1990,
            value: 1793477,
          },
          {
            decade: 2000,
            value: 1808344,
          },
          {
            decade: 2010,
            value: 1852994,
          },
          {
            decade: 2020,
            value: 1793716,
          },
        ],
      },
      {
        name: 'Wisconsin',
        population: [
          {
            decade: 1900,
            value: 2069042,
          },
          {
            decade: 1910,
            value: 2333860,
          },
          {
            decade: 1920,
            value: 2632067,
          },
          {
            decade: 1930,
            value: 2939006,
          },
          {
            decade: 1940,
            value: 3137587,
          },
          {
            decade: 1950,
            value: 3434575,
          },
          {
            decade: 1960,
            value: 3951777,
          },
          {
            decade: 1970,
            value: 4417731,
          },
          {
            decade: 1980,
            value: 4705767,
          },
          {
            decade: 1990,
            value: 4891769,
          },
          {
            decade: 2000,
            value: 5363675,
          },
          {
            decade: 2010,
            value: 5686986,
          },
          {
            decade: 2020,
            value: 5893718,
          },
        ],
      },
      {
        name: 'Wyoming',
        population: [
          {
            decade: 1900,
            value: 92531,
          },
          {
            decade: 1910,
            value: 145965,
          },
          {
            decade: 1920,
            value: 194402,
          },
          {
            decade: 1930,
            value: 225565,
          },
          {
            decade: 1940,
            value: 250742,
          },
          {
            decade: 1950,
            value: 290529,
          },
          {
            decade: 1960,
            value: 330066,
          },
          {
            decade: 1970,
            value: 332416,
          },
          {
            decade: 1980,
            value: 469557,
          },
          {
            decade: 1990,
            value: 453588,
          },
          {
            decade: 2000,
            value: 493782,
          },
          {
            decade: 2010,
            value: 563626,
          },
          {
            decade: 2020,
            value: 576851,
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
            value: 73022,
          },
          {
            decade: 1910,
            value: 374295,
          },
          {
            decade: 1920,
            value: 588454,
          },
          {
            decade: 1930,
            value: 731605,
          },
          {
            decade: 1940,
            value: 796169,
          },
          {
            decade: 1950,
            value: 939501,
          },
          {
            decade: 1960,
            value: 1331944,
          },
          {
            decade: 1970,
            value: 1627874,
          },
          {
            decade: 1980,
            value: 2213650,
          },
          {
            decade: 1990,
            value: 2545553,
          },
          {
            decade: 2000,
            value: 2974807,
          },
          {
            decade: 2010,
            value: 3645257,
          },
          {
            decade: 2020,
            value: 4262635,
          },
        ],
      },
      {
        name: 'British Columbia',
        population: [
          {
            decade: 1900,
            value: 178657,
          },
          {
            decade: 1910,
            value: 392480,
          },
          {
            decade: 1920,
            value: 524582,
          },
          {
            decade: 1930,
            value: 694263,
          },
          {
            decade: 1940,
            value: 817861,
          },
          {
            decade: 1950,
            value: 1165210,
          },
          {
            decade: 1960,
            value: 1629082,
          },
          {
            decade: 1970,
            value: 2184621,
          },
          {
            decade: 1980,
            value: 2713615,
          },
          {
            decade: 1990,
            value: 3282061,
          },
          {
            decade: 2000,
            value: 3907738,
          },
          {
            decade: 2010,
            value: 4400057,
          },
          {
            decade: 2020,
            value: 5000879,
          },
        ],
      },
      {
        name: 'Manitoba',
        population: [
          {
            decade: 1900,
            value: 255211,
          },
          {
            decade: 1910,
            value: 461394,
          },
          {
            decade: 1920,
            value: 610118,
          },
          {
            decade: 1930,
            value: 700139,
          },
          {
            decade: 1940,
            value: 729744,
          },
          {
            decade: 1950,
            value: 776541,
          },
          {
            decade: 1960,
            value: 921686,
          },
          {
            decade: 1970,
            value: 988247,
          },
          {
            decade: 1980,
            value: 1013705,
          },
          {
            decade: 1990,
            value: 1091942,
          },
          {
            decade: 2000,
            value: 1119583,
          },
          {
            decade: 2010,
            value: 1208268,
          },
          {
            decade: 2020,
            value: 1342153,
          },
        ],
      },
      {
        name: 'New Brunswick',
        population: [
          {
            decade: 1900,
            value: 331120,
          },
          {
            decade: 1910,
            value: 351889,
          },
          {
            decade: 1920,
            value: 387876,
          },
          {
            decade: 1930,
            value: 408219,
          },
          {
            decade: 1940,
            value: 457401,
          },
          {
            decade: 1950,
            value: 515697,
          },
          {
            decade: 1960,
            value: 597936,
          },
          {
            decade: 1970,
            value: 634557,
          },
          {
            decade: 1980,
            value: 689375,
          },
          {
            decade: 1990,
            value: 723900,
          },
          {
            decade: 2000,
            value: 729498,
          },
          {
            decade: 2010,
            value: 751171,
          },
          {
            decade: 2020,
            value: 775610,
          },
        ],
      },
      {
        name: 'Newfoundland and Labrador',
        population: [
          {
            decade: 1900,
            value: 220984,
          },
          {
            decade: 1910,
            value: 242619,
          },
          {
            decade: 1920,
            value: 263033,
          },
          {
            decade: 1930,
            value: 289588,
          },
          {
            decade: 1940,
            value: 316294,
          },
          {
            decade: 1950,
            value: 361416,
          },
          {
            decade: 1960,
            value: 457853,
          },
          {
            decade: 1970,
            value: 522104,
          },
          {
            decade: 1980,
            value: 563750,
          },
          {
            decade: 1990,
            value: 568474,
          },
          {
            decade: 2000,
            value: 512930,
          },
          {
            decade: 2010,
            value: 514536,
          },
          {
            decade: 2020,
            value: 510550,
          },
        ],
      },
      {
        name: 'Northwest Territories',
        population: [
          {
            decade: 1900,
            value: 20129,
          },
          {
            decade: 1910,
            value: 6507,
          },
          {
            decade: 1920,
            value: 8143,
          },
          {
            decade: 1930,
            value: 9316,
          },
          {
            decade: 1940,
            value: 12028,
          },
          {
            decade: 1950,
            value: 16004,
          },
          {
            decade: 1960,
            value: 22998,
          },
          {
            decade: 1970,
            value: 34807,
          },
          {
            decade: 1980,
            value: 45540,
          },
          {
            decade: 1990,
            value: 57649,
          },
          {
            decade: 2000,
            value: 37360,
          },
          {
            decade: 2010,
            value: 41462,
          },
          {
            decade: 2020,
            value: 41070,
          },
        ],
      },
      {
        name: 'Nova Scotia',
        population: [
          {
            decade: 1900,
            value: 459574,
          },
          {
            decade: 1910,
            value: 492338,
          },
          {
            decade: 1920,
            value: 523837,
          },
          {
            decade: 1930,
            value: 512846,
          },
          {
            decade: 1940,
            value: 577962,
          },
          {
            decade: 1950,
            value: 642584,
          },
          {
            decade: 1960,
            value: 737007,
          },
          {
            decade: 1970,
            value: 788960,
          },
          {
            decade: 1980,
            value: 839805,
          },
          {
            decade: 1990,
            value: 899942,
          },
          {
            decade: 2000,
            value: 908007,
          },
          {
            decade: 2010,
            value: 921727,
          },
          {
            decade: 2020,
            value: 969383,
          },
        ],
      },
      {
        name: 'Ontario',
        population: [
          {
            decade: 1900,
            value: 2182947,
          },
          {
            decade: 1910,
            value: 2527292,
          },
          {
            decade: 1920,
            value: 2933662,
          },
          {
            decade: 1930,
            value: 3431683,
          },
          {
            decade: 1940,
            value: 3787655,
          },
          {
            decade: 1950,
            value: 4597542,
          },
          {
            decade: 1960,
            value: 6236092,
          },
          {
            decade: 1970,
            value: 7703106,
          },
          {
            decade: 1980,
            value: 8534265,
          },
          {
            decade: 1990,
            value: 10084885,
          },
          {
            decade: 2000,
            value: 11410046,
          },
          {
            decade: 2010,
            value: 12851821,
          },
          {
            decade: 2020,
            value: 14223942,
          },
        ],
      },
      {
        name: 'Prince Edward Island',
        population: [
          {
            decade: 1900,
            value: 103259,
          },
          {
            decade: 1910,
            value: 93728,
          },
          {
            decade: 1920,
            value: 88615,
          },
          {
            decade: 1930,
            value: 88038,
          },
          {
            decade: 1940,
            value: 95047,
          },
          {
            decade: 1950,
            value: 98429,
          },
          {
            decade: 1960,
            value: 104629,
          },
          {
            decade: 1970,
            value: 111641,
          },
          {
            decade: 1980,
            value: 121225,
          },
          {
            decade: 1990,
            value: 129765,
          },
          {
            decade: 2000,
            value: 135294,
          },
          {
            decade: 2010,
            value: 140204,
          },
          {
            decade: 2020,
            value: 154331,
          },
        ],
      },
      {
        name: 'Quebec',
        population: [
          {
            decade: 1900,
            value: 1648898,
          },
          {
            decade: 1910,
            value: 2005776,
          },
          {
            decade: 1920,
            value: 2360510,
          },
          {
            decade: 1930,
            value: 2874662,
          },
          {
            decade: 1940,
            value: 3331882,
          },
          {
            decade: 1950,
            value: 4055681,
          },
          {
            decade: 1960,
            value: 5259211,
          },
          {
            decade: 1970,
            value: 6027764,
          },
          {
            decade: 1980,
            value: 6369065,
          },
          {
            decade: 1990,
            value: 6895963,
          },
          {
            decade: 2000,
            value: 7237479,
          },
          {
            decade: 2010,
            value: 7903001,
          },
          {
            decade: 2020,
            value: 8501833,
          },
        ],
      },
      {
        name: 'Saskatchewan',
        population: [
          {
            decade: 1900,
            value: 91279,
          },
          {
            decade: 1910,
            value: 492432,
          },
          {
            decade: 1920,
            value: 757510,
          },
          {
            decade: 1930,
            value: 921785,
          },
          {
            decade: 1940,
            value: 895992,
          },
          {
            decade: 1950,
            value: 831728,
          },
          {
            decade: 1960,
            value: 925181,
          },
          {
            decade: 1970,
            value: 926242,
          },
          {
            decade: 1980,
            value: 956440,
          },
          {
            decade: 1990,
            value: 988928,
          },
          {
            decade: 2000,
            value: 978933,
          },
          {
            decade: 2010,
            value: 1033381,
          },
          {
            decade: 2020,
            value: 1132505,
          },
        ],
      },
      {
        name: 'Yukon',
        population: [
          {
            decade: 1900,
            value: 27219,
          },
          {
            decade: 1910,
            value: 8512,
          },
          {
            decade: 1920,
            value: 4157,
          },
          {
            decade: 1930,
            value: 4230,
          },
          {
            decade: 1940,
            value: 4914,
          },
          {
            decade: 1950,
            value: 9096,
          },
          {
            decade: 1960,
            value: 14628,
          },
          {
            decade: 1970,
            value: 18388,
          },
          {
            decade: 1980,
            value: 23075,
          },
          {
            decade: 1990,
            value: 27797,
          },
          {
            decade: 2000,
            value: 28674,
          },
          {
            decade: 2010,
            value: 33897,
          },
          {
            decade: 2020,
            value: 40232,
          },
        ],
      },
    ],
  },
  {
    country: 'Australia',
    regions: [
      {
        name: 'New South Wales',
        population: [
          {
            decade: 1900,
            value: 1375455,
          },
          {
            decade: 1910,
            value: 1699376,
          },
          {
            decade: 1920,
            value: 2091722,
          },
          {
            decade: 1930,
            value: 2546353,
          },
          {
            decade: 1940,
            value: 2790948,
          },
          {
            decade: 1950,
            value: 3241057,
          },
          {
            decade: 1960,
            value: 3832453,
          },
          {
            decade: 1970,
            value: 4522330,
          },
          {
            decade: 1980,
            value: 5171527,
          },
          {
            decade: 1990,
            value: 5834021,
          },
          {
            decade: 2000,
            value: 6446558,
          },
          {
            decade: 2010,
            value: 7144292,
          },
          {
            decade: 2020,
            value: 8130115,
          },
        ],
      },
      {
        name: 'Victoria',
        population: [
          {
            decade: 1900,
            value: 1209900,
          },
          {
            decade: 1910,
            value: 1339893,
          },
          {
            decade: 1920,
            value: 1527909,
          },
          {
            decade: 1930,
            value: 1792605,
          },
          {
            decade: 1940,
            value: 1914918,
          },
          {
            decade: 1950,
            value: 2237182,
          },
          {
            decade: 1960,
            value: 2857389,
          },
          {
            decade: 1970,
            value: 3444936,
          },
          {
            decade: 1980,
            value: 3914303,
          },
          {
            decade: 1990,
            value: 4378592,
          },
          {
            decade: 2000,
            value: 4704065,
          },
          {
            decade: 2010,
            value: 5461101,
          },
          {
            decade: 2020,
            value: 6704300,
          },
        ],
      },
      {
        name: 'Queensland',
        population: [
          {
            decade: 1900,
            value: 506721,
          },
          {
            decade: 1910,
            value: 623123,
          },
          {
            decade: 1920,
            value: 750624,
          },
          {
            decade: 1930,
            value: 916736,
          },
          {
            decade: 1940,
            value: 1031452,
          },
          {
            decade: 1950,
            value: 1205418,
          },
          {
            decade: 1960,
            value: 1495927,
          },
          {
            decade: 1970,
            value: 1792743,
          },
          {
            decade: 1980,
            value: 2265935,
          },
          {
            decade: 1990,
            value: 2899283,
          },
          {
            decade: 2000,
            value: 3509458,
          },
          {
            decade: 2010,
            value: 4404744,
          },
          {
            decade: 2020,
            value: 5052827,
          },
        ],
      },
      {
        name: 'South Australia',
        population: [
          {
            decade: 1900,
            value: 364003,
          },
          {
            decade: 1910,
            value: 419392,
          },
          {
            decade: 1920,
            value: 491006,
          },
          {
            decade: 1930,
            value: 574467,
          },
          {
            decade: 1940,
            value: 599056,
          },
          {
            decade: 1950,
            value: 722843,
          },
          {
            decade: 1960,
            value: 945320,
          },
          {
            decade: 1970,
            value: 1157987,
          },
          {
            decade: 1980,
            value: 1308397,
          },
          {
            decade: 1990,
            value: 1432056,
          },
          {
            decade: 2000,
            value: 1497503,
          },
          {
            decade: 2010,
            value: 1627322,
          },
          {
            decade: 2020,
            value: 1815485,
          },
        ],
      },
      {
        name: 'Western Australia',
        population: [
          {
            decade: 1900,
            value: 193601,
          },
          {
            decade: 1910,
            value: 293923,
          },
          {
            decade: 1920,
            value: 331323,
          },
          {
            decade: 1930,
            value: 431610,
          },
          {
            decade: 1940,
            value: 474076,
          },
          {
            decade: 1950,
            value: 572649,
          },
          {
            decade: 1960,
            value: 722080,
          },
          {
            decade: 1970,
            value: 991354,
          },
          {
            decade: 1980,
            value: 1269068,
          },
          {
            decade: 1990,
            value: 1613049,
          },
          {
            decade: 2000,
            value: 1879093,
          },
          {
            decade: 2010,
            value: 2290845,
          },
          {
            decade: 2020,
            value: 2805000,
          },
        ],
      },
      {
        name: 'Tasmania',
        population: [
          {
            decade: 1900,
            value: 175233,
          },
          {
            decade: 1910,
            value: 192925,
          },
          {
            decade: 1920,
            value: 212752,
          },
          {
            decade: 1930,
            value: 225297,
          },
          {
            decade: 1940,
            value: 244002,
          },
          {
            decade: 1950,
            value: 275902,
          },
          {
            decade: 1960,
            value: 343910,
          },
          {
            decade: 1970,
            value: 387720,
          },
          {
            decade: 1980,
            value: 423590,
          },
          {
            decade: 1990,
            value: 462188,
          },
          {
            decade: 2000,
            value: 473123,
          },
          {
            decade: 2010,
            value: 508847,
          },
          {
            decade: 2020,
            value: 478400,
          },
        ],
      },
      {
        name: 'Northern Territory',
        population: [
          {
            decade: 1900,
            value: 2700,
          },
          {
            decade: 1910,
            value: 3233,
          },
          {
            decade: 1920,
            value: 3989,
          },
          {
            decade: 1930,
            value: 4964,
          },
          {
            decade: 1940,
            value: 8974,
          },
          {
            decade: 1950,
            value: 14420,
          },
          {
            decade: 1960,
            value: 25573,
          },
          {
            decade: 1970,
            value: 78811,
          },
          {
            decade: 1980,
            value: 118245,
          },
          {
            decade: 1990,
            value: 163728,
          },
          {
            decade: 2000,
            value: 199149,
          },
          {
            decade: 2010,
            value: 229778,
          },
          {
            decade: 2020,
            value: 249345,
          },
        ],
      },
      {
        name: 'Australian Capital Territory',
        population: [
          {
            decade: 1900,
            value: 1300,
          },
          {
            decade: 1910,
            value: 1777,
          },
          {
            decade: 1920,
            value: 2222,
          },
          {
            decade: 1930,
            value: 9013,
          },
          {
            decade: 1940,
            value: 13753,
          },
          {
            decade: 1950,
            value: 23824,
          },
          {
            decade: 1960,
            value: 52368,
          },
          {
            decade: 1970,
            value: 131468,
          },
          {
            decade: 1980,
            value: 224291,
          },
          {
            decade: 1990,
            value: 282211,
          },
          {
            decade: 2000,
            value: 317235,
          },
          {
            decade: 2010,
            value: 361766,
          },
          {
            decade: 2020,
            value: 455869,
          },
        ],
      },
    ],
  },
];

export const addIsSelectedProperties =
  (): ILocationWithIsSelectedProperty[] => {
    return locations.map((c) => ({
      country: c.country,
      regions: c.regions.map((r) => ({
        name: r.name,
        population: r.population,
        isSelected: false,
        sliderValue: defaultSliderValue,
      })),
      isSelected: false,
    }));
  };

export { addIsSelectedProperties as initialLocationsData };

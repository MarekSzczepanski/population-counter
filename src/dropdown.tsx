import { useState } from 'react';
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const selectLabels: string[] = ['Select countries', 'Select regions'];
const selectLabelsShort: string[] = ['Country', 'Region'];

const Dropdown = (props: {
    activeStep: number;
    selectedCountriesAndRegions: object[];
    setSelectedCountriesAndRegions: (items: object[]) => void;
}) => {
    const [isSelectFocused, setSelectFocus] = useState<boolean>(false);

    const handleFocus = () => {
        setSelectFocus(true);
    };

    const handleBlur = () => {
        setSelectFocus(false);
    };

    const handleChange = (e: SelectChangeEvent<string[]>) => {
        if (!props.activeStep) {
            props.setSelectedCountriesAndRegions(
                props.selectedCountriesAndRegions.map(
                    (x: {
                        country: string;
                        regions: string[];
                        isSelected: boolean;
                    }) => ({
                        country: x.country,
                        regions: x.regions,
                        isSelected: e.target.value.includes(x.country),
                    }),
                ),
            );
        }
    };

    const renderMenuItems = () => {
        const items = [];

        props.selectedCountriesAndRegions.map(
            (x: {
                country: string;
                regions: string[];
                isSelected: boolean;
            }) => {
                items.push(
                    <MenuItem
                        disabled={Boolean(x.regions.length)}
                        value={x.country}
                        data-country={true}
                        key={x.country}
                        selected={true}
                    >
                        <span>{x.country}</span>
                    </MenuItem>,
                );

                for (let i = 0; i < x.regions.length; i++) {
                    items.push(
                        <MenuItem value={x.regions[i]} key={x.regions[i]}>
                            <span>{x.regions[i]}</span>
                        </MenuItem>,
                    );
                }
            },
        );

        return items;
    };

    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel
                id="demo-multiple-name-label"
                size="small"
                sx={{ '&.MuiInputLabel-root': { lineHeight: 'unset' } }}
            >
                {isSelectFocused
                    ? selectLabelsShort[props.activeStep]
                    : selectLabels[props.activeStep]}
            </InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={props.selectedCountriesAndRegions.map(
                    (x: {
                        country: string;
                        regions: string[];
                        isSelected: boolean;
                    }) => {
                        return x.isSelected ? x.country : null;
                    },
                )}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                multiple
                input={<OutlinedInput />}
            >
                <MenuItem disabled value="" selected={true}>
                    <em>{selectLabels[props.activeStep]}</em>
                </MenuItem>
                {renderMenuItems()}
            </Select>
        </FormControl>
    );
};

export default Dropdown;

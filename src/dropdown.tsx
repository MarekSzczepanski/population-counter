import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setLocationsData } from './actions/locationsDataAction';
import { setButtonsLock } from './actions/buttonsLockAction';
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const selectLabels: string[] = ['Select countries', 'Select regions'];
const selectLabelsShort: string[] = ['Countries', 'Regions'];

const Dropdown = (): JSX.Element => {
  const state = useSelector((state: RootState) => state);
  const { step, locationsData } = state;
  const dispatch = useDispatch();
  const [isSelectFocused, setSelectFocus] = useState<boolean>(false);

  useEffect(() => {
    const isCountrySelected = locationsData.value.some((x) => x.isSelected);
    const isRegionSelected = locationsData.value.some((x) =>
      x.regions.some((r) => r.isSelected),
    );
    const lockNextButton = step.value ? !isRegionSelected : !isCountrySelected;

    dispatch(
      setButtonsLock([Boolean(!step.value), !lockNextButton, lockNextButton]),
    );
  }, [locationsData, step.value]);

  const handleFocus = (): void => {
    setSelectFocus(true);
  };

  const handleBlur = (): void => {
    setSelectFocus(false);
  };

  const handleChange = (e: SelectChangeEvent<string[]>): void => {
    const selectVal: string | string[] = e.target.value;

    dispatch(
      setLocationsData(
        locationsData.value.map((x) => ({
          country: x.country,
          regions: x.regions.map((r) => ({
            name: r.name,
            population: r.population,
            isSelected: selectVal.includes(r.name),
            sliderValue: r.sliderValue,
          })),
          isSelected: step.value ? x.isSelected : selectVal.includes(x.country),
        })),
      ),
    );
  };

  const renderSelectValue = (): string[] => {
    const itemsToRender: string[] = [];

    for (const item of locationsData.value) {
      if (item.isSelected) {
        if (step.value) {
          for (const r of item.regions) {
            if (r.isSelected) itemsToRender.push(r.name);
          }
        } else itemsToRender.push(item.country);
      }
    }

    return itemsToRender;
  };

  const renderMenuItems = (): JSX.Element[] => {
    const itemsToRender: JSX.Element[] = [];

    for (const item of locationsData.value) {
      if (step.value && item.isSelected) {
        itemsToRender.push(renderMenuItem(item.country, item.country, true));

        for (const region of item.regions) {
          itemsToRender.push(renderMenuItem(region.name, region.name));
        }
      } else if (!step.value) {
        itemsToRender.push(renderMenuItem(item.country, item.country));
      }
    }

    return itemsToRender;
  };

  const renderMenuItem = (
    val: string,
    key?: string,
    disabled?: boolean,
    sel?: boolean,
    isEm?: boolean,
  ): JSX.Element => {
    return (
      <MenuItem value={val} key={key} disabled={disabled} selected={sel}>
        {isEm ? <em>{val}</em> : <span>{val}</span>}
      </MenuItem>
    );
  };

  return (
    <>
      <Typography variant="h1" mt={7.5} textAlign="center" fontSize={36}>
        Average Population Counter
      </Typography>
      <FormControl
        sx={{ width: 320, m: '48px auto 0 50%', transform: 'translateX(-50%)' }}
      >
        <InputLabel>
          {isSelectFocused
            ? selectLabelsShort[step.value]
            : selectLabels[step.value]}
        </InputLabel>
        <Select
          value={renderSelectValue()}
          multiple
          input={<OutlinedInput />}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {renderMenuItem(selectLabels[step.value], null, true, true, true)}
          {renderMenuItems()}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;

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
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const selectLabels: string[] = ['Select countries', 'Select regions'];
const selectLabelsShort: string[] = ['Country', 'Region'];

const Dropdown = (): JSX.Element => {
  const state = useSelector((state: RootState) => state);
  const { step, locations } = state;
  const dispatch = useDispatch();
  const [isSelectFocused, setSelectFocus] = useState<boolean>(false);

  useEffect(() => {
    const isCountrySelected = locations.value.some((x) => x.isSelected);
    const isRegionSelected = locations.value.some((x) =>
      x.regions.some((r) => r.isSelected),
    );
    const lockNextButton = step.value ? !isRegionSelected : !isCountrySelected;

    dispatch(setButtonsLock([undefined, !lockNextButton, lockNextButton]));
  }, [locations, step.value]);

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
        locations.value.map((x) => ({
          country: x.country,
          regions: x.regions.map((r) => ({
            name: r.name,
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

    if (step.value) {
      for (let i = 0; i < locations.value.length; i++) {
        const item = locations.value[i];

        if (item.isSelected) {
          for (let j = 0; j < item.regions.length; j++) {
            const r = item.regions[j];
            if (r.isSelected) itemsToRender.push(r.name);
          }
        }
      }
    } else {
      for (let i = 0; i < locations.value.length; i++) {
        const item = locations.value[i];
        if (item.isSelected) itemsToRender.push(item.country);
      }
    }

    return itemsToRender;
  };

  const renderMenuItems = (): JSX.Element[] => {
    const itemsToRender: JSX.Element[] = [];

    for (let i = 0; i < locations.value.length; i++) {
      const item = locations.value[i];

      if (step.value && item.isSelected) {
        itemsToRender.push(renderMenuItem(item.country, item.country, true));

        for (let j = 0; j < item.regions.length; j++) {
          const region = item.regions[j].name;

          itemsToRender.push(renderMenuItem(region, region));
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
    <FormControl sx={{ m: 1, width: 300 }}>
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
  );
};

export default Dropdown;

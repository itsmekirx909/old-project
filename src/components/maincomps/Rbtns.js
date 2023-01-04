import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Rbtns(props) {
    const [value, setValue] = React.useState('female');
    let values = props.vals

    const handleChange = (event) => {
      setValue(event.target.value);
      props.func(event)
    };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.ph}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleChange}
      >

{values?
values.map((e, i)=>
<FormControlLabel key={i} value={e} control={<Radio />} label={e} />
)

:
null}

      </RadioGroup>
    </FormControl>
  );
}
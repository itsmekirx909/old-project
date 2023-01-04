import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";


export default function Selectfield(props){
    const [value, setvalue] = useState('');
    
    let arrdata = props.selval

    const handleChange = (event) => {
      setvalue(event.target.value);
      props.func(event)
    };

    return(
<Box sx={{
        width: props.wid?props.wid: '200px',
        padding: props.pd?props.pd: '10px',
        margin: props.mg?props.mg: '20px'
        }}>
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> {props.ph} </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={props.ph}
          onChange={handleChange}
        >

            {arrdata?
            arrdata.map( (e, i) =>

          <MenuItem key={i} value={e}> {e} </MenuItem>

                )
            :
            null}

        </Select>
      </FormControl>
          </Box>

    )
}
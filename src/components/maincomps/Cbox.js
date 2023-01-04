import { Checkbox, FormControlLabel } from "@mui/material";

export default function Cbox(props){
    return(
        <>
      <FormControlLabel control={<Checkbox defaultChecked={props.defcheck? true: false} onChange={(e)=>{props.func(e)}}/>} label={props.ph} />
        </>
    )
}
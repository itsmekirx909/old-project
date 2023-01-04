import { FormControlLabel, Switch } from "@mui/material"

export default function Sbtn(props){
    return(
        <FormControlLabel control={<Switch defaultChecked={props.defcheck? true: false} onChange={(e)=>{props.func(e)}}/>} label={props.ph} />
    )
}
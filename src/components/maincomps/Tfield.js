import { TextField } from "@mui/material";


export default function Tfield(props){
return(
    <TextField sx={{
        width: props.wid?props.wid: '200px',
        margin:props.mg?props.mg: '5px'
        }}
         label={props.ph} onChange={(e)=>{props.func(e)}} color={props.col? props.col :'primary'} variant={props.var? props.var :'standard'} />
)
}
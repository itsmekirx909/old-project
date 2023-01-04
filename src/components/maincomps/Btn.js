import { Button } from "@mui/material";


export default function Btn(props){
return(
    <Button sx={{
        width: props.wid?props.wid: '100px',
        padding: props.pd?props.pd: '10px',
        margin: props.mg?props.mg: '20px'
        }} onClick={(e)=>{props.func(e)}} color={props.col? props.col :'primary'} variant={props.var? props.var :'standard'} >
{props.ph}
    </Button>
)
}
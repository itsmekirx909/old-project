import { Typography } from "@mui/material";

export default function Headertype(props){
    return(
        <Typography variant="h4" sx={{fontWeight: 'bolder', margin: '20px auto', width: 'fit-content', color: 'rgba(0, 128, 0, 1)'}}>
        {props.ph}
    </Typography>
    )
}
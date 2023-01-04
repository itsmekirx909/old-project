import { Typography } from "@mui/material";
import { useState } from "react";

export default function Errormsg(props){

    return(
        <div>
        <Typography sx={{pointerEvents: 'none'}} variant="p" fontSize='15px' color='error'>{props.invalid}</Typography>
        </div>
    )
}

// function

// let [msg, setmsg] = useState()

// function ch(e){
//     setmsg('aafdkjfhsjhf')
//     setTimeout(()=>{
//         setmsg('')
//     },3000)
// }
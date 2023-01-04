import { Snackbar } from "@mui/material";

export default function Successbar(props){
let opener = props.check

    return(
        <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={opener}
        message={props.msg}
      />
    )
}


// function

// function ch(e){
//     seta(true)
//     setTimeout(()=>{
//         seta(false)
//     },3000)
// }
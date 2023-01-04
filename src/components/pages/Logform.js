import { Box } from "@mui/system";
import { useState } from "react";
import Login from "./logform/Login";
import Signup from "./logform/Signup";

export default function Logform(){
let [lschecker, setlschecker] = useState(true)


    return(

        <div className="reg">

<Box sx={{}}>

{lschecker ?

<Login/>

:

<Signup/>

}

</Box>

        </div>

    )
}
import { useState } from "react";
import Fullscreenloader from "../maincomps/Fullscreenloader";


export default function Homepage(){
    let [check, setcheck]= useState(true)


    return(
        <div className="reg">

{check?

<Fullscreenloader/>

:
<>
<h1>Welcome</h1>
</>
}

        </div>
    )
}
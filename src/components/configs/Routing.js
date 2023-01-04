import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Adminpanel from "../pages/Adminpanel";
import Error from "../pages/Error";
import Homepage from "../pages/Homepage";
import Logform from "../pages/Logform";

export default function Routing(){
    return(
        <Router>

        <Routes>

<Route path="/" element={<Homepage/>}/>
<Route path="/login" element={<Logform/>}/>
<Route path="/adminpanel/*" element={<Adminpanel/>}/>
<Route path="*" element={<Error/>}/>


        </Routes>

        </Router>
    )
}
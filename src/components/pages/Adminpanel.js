import { Route, Routes } from "react-router-dom";
import Adminpage1 from './adminpages/Adminpage1'
import Adminpage2 from './adminpages/Adminpage2'
import Adminpage3 from './adminpages/Adminpage3'

export default function Adminpanel(){
    return(
        <div className="reg">

        <h1>Admin</h1>

        <Routes>

            <Route path="/pg1" element={<Adminpage1/>} />
            <Route path="/pg2" element={<Adminpage2/>} />
            <Route path="/pg3" element={<Adminpage3/>} />

        </Routes>

        </div>
    )
}
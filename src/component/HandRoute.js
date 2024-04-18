import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignIn from '../Component2/SignIn';
import SignUp from '../Component2/SignUp'

const HandleRoute = () => {
    return ( <>
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="signup" element={<SignUp/>}/>
    </Routes>
    </> );
}
 
export default HandleRoute;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../LayOut/Layout';
import Home from '../component/Home';
import About from '../component/About';
import SignIn from '../Component2/SignIn';
import SignUp from '../Component2/SignUp';


const HandleRoute = () => {
    return ( <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Route>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Routes>


    </> );
}
 
export default HandleRoute;
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Layout from '../LayOut/Layout';
import Home from '../component/Home';
import About from '../component/About';
import SignIn from '../Component2/SignIn';
import SignUp from '../Component2/SignUp';
import Books from '../component/Books';
import Blog from '../component/blog';


const HandleRoute = () => {
    return ( <>
    
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/books' element={<Books />} />
                    <Route path='/blog' element={<Blog />} />

                </Route>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Routes>

    </> );
}
 
export default HandleRoute;
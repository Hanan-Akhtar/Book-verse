import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import "./loginPages.css"

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signInError, setSignInError] = useState('');
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignIn = async (event) => {
        event.preventDefault();

        setEmailError('');
        setPasswordError('');
        setSignInError('');

        let newEmailError = '';
        let newPasswordError = '';

        if (!email) {
            newEmailError = 'Email is required.';
        }

        if (!password) {
            newPasswordError = 'Password is required.';
        }

        setEmailError(newEmailError);
        setPasswordError(newPasswordError);

        if (newEmailError || newPasswordError) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${apiUrl}api/app_api/login`, {
                email: email,
                password: password,
                type: 0
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);
                console.log('Sign-in successful:', response.data);
                navigate('/dashboard');
            } else {
                console.error('Error fetching data:', response.statusText);
                setSignInError('Invalid email or password.');
            }
        } catch (error) {
            console.error('Sign-in error:', error.response);
            if (error.response.status === 400) {
                setSignInError('Invalid email or password.');
            } else {
                setSignInError('Sign-in failed. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3">Sign in to your BookVerse account</h1>
                        <p>Don't have an account yet? <Link style={{textDecoration:"none",color:"#8E43F0"}} to="/signup">Sign up</Link></p>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <TextField
                            fullWidth
                            className="mb-3"
                            error={!!emailError}
                            helperText={emailError}
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
                        />
                        <FormControl fullWidth variant="outlined" error={!!passwordError}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError('');
                                }}
                            />
                        </FormControl>
                        <Link to="/forgot" style={{textDecoration:"none",color:"#8E43F0"}} className="d-block text-end mb-3">Forgot your password?</Link>
                        {signInError && <p className="error-message mb-3">{signInError}</p>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

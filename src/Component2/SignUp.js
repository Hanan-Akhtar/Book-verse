import * as React from 'react';
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import "./loginPages.css"
import img from '../images/banner.jpeg'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        length: false,
    });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (event) => {
        handleInputChange(event)
        const password = event.target.value;
        const lowercaseRegex = /[a-z]/g;
        setPasswordValidation((prev) => ({ ...prev, lowercase: password.match(lowercaseRegex) !== null }));
        const uppercaseRegex = /[A-Z]/g;
        setPasswordValidation((prev) => ({ ...prev, uppercase: password.match(uppercaseRegex) !== null }));
        const numberRegex = /[0-9]/g;
        setPasswordValidation((prev) => ({ ...prev, number: password.match(numberRegex) !== null }));
        setPasswordValidation((prev) => ({ ...prev, length: password.length >= 8 }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        setLoading(true); 
        const { firstName, lastName, email, password } = formData;
        const newErrors = { firstName: '', lastName: '', email: '', password: '' };

        if (!firstName) {
            newErrors.firstName = 'First Name is required.';
        }

        if (!lastName) {
            newErrors.lastName = 'Last Name is required.';
        }

        if (!email) {
            newErrors.email = 'Email is required.';
        }

        if (!password) {
            newErrors.password = 'Password is required.';
        }

        if (Object.values(newErrors).some((error) => error !== '')) {
            setErrors(newErrors);
            setLoading(false); 
            return;
        }

        const reqObj = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            status: true
        };

        const headers = { "Content-Type": "application/json" };

        try {
            const response = await axios.post(`${apiUrl}api/admin/signup_admin`, reqObj, { headers });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                setSuccessMessage('Account created successfully!');
                navigate('/signIn');
            } else {
                console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('SignUp error:', error.response);

            if (error.response && error.response.data && error.response.data.errors) {
                const apiErrors = error.response.data.errors;
                Object.keys(apiErrors).forEach((key) => {
                    if (key in newErrors) {
                        newErrors[key] = apiErrors[key];
                    }
                });
                setErrors(newErrors);
            } else if (error.response && error.response.data && error.response.data.message) {
                setErrors({ ...newErrors, general: error.response.data.message });
            } else {
                setErrors({ ...newErrors, general: 'An unexpected error occurred. Please try again later.' });
            }
        } finally {
            setLoading(false);
        }
    };




    return (
        <div className='container'>
              <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
                <div>
                    <h3>Book verse</h3>
                    <div className="sign-up" >
                        <div>
                            <div className='heading'>
                                <h2>Get Started with a Forever Free plan</h2>
                                <p>Sign up in a seconds. no credit card required.</p>
                            </div>
                            <form onSubmit={handleSignUp}>
                                <div className="input-container">
                                    <TextField
                                        fullWidth
                                        className="first-name"
                                        sx={{
                                            maxWidth: '100%',
                                            '& label.Mui-focused': {
                                                color: '#00A95A',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00A95A',
                                                },
                                            },
                                        }}
                                        id="outlined-basic"
                                        label="First Name"
                                        type="text"
                                        variant="outlined"
                                        name="firstName"
                                        onChange={handleInputChange}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                        required
                                    />
                                </div>
                                <div className="input-container">
                                    <TextField
                                        fullWidth
                                        className="last-name"
                                        sx={{
                                            maxWidth: '100%',
                                            '& label.Mui-focused': {
                                                color: '#00A95A',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00A95A',
                                                },
                                            },
                                        }}
                                        id="outlined-basic"
                                        label="Last Name"
                                        type="text"
                                        variant="outlined"
                                        name="lastName"
                                        onChange={handleInputChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                        required
                                    />
                                </div>
                                <div className="input-container">
                                    <TextField fullWidth className="email" sx={{
                                        maxWidth: '100%',
                                        '& label.Mui-focused': {
                                            color: '#00A95A',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#00A95A',
                                            },
                                        },
                                    }} id="outlined-basic" label="Email" type="email" variant="outlined" name="email"
                                        onChange={handleInputChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        required />
                                </div>
                                <div className="input-container">
                                    <FormControl fullWidth
                                        className="password"
                                        sx={{
                                            maxWidth: '100%',
                                            '& label.Mui-focused': {
                                                color: '#00A95A',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#00A95A',
                                                },
                                            },
                                        }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
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
                                            onChange={handlePasswordChange}
                                            error={!passwordValidation.lowercase || !passwordValidation.uppercase || !passwordValidation.number || !passwordValidation.length}
                                            helperText={
                                                (!passwordValidation.lowercase && "At least one lowercase character is required") +
                                                (!passwordValidation.uppercase && " At least one uppercase character is required") +
                                                (!passwordValidation.number && " At least one number is required") +
                                                (!passwordValidation.length && " Password must be at least 8 characters long")
                                            }
                                        />

                                    </FormControl>
                                </div>
                                <div className='container te-xt'>
                                    <div className='right'>
                                        <ul>
                                            <li>
                                                <CircleIcon style={{ color: passwordValidation.lowercase ? 'green' : 'grey', fontSize: 'small', marginRight: '10px' }} />
                                                <p>One Lowercase Character</p>
                                            </li>
                                            <li>
                                                <CircleIcon style={{ color: passwordValidation.uppercase ? 'green' : 'grey', fontSize: 'small', marginRight: '10px' }} />
                                                <p>One Uppercase Character</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='left'>
                                        <ul>
                                            <li>
                                                <CircleIcon style={{ color: passwordValidation.number ? 'green' : 'grey', fontSize: 'small', marginRight: '10px' }} />
                                                <p>One Number </p>
                                            </li>
                                            <li>
                                                <CircleIcon style={{ color: passwordValidation.length ? 'green' : 'grey', fontSize: 'small', marginRight: '10px' }} />
                                                <p>8 minimum Character</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>By clicking, you agree to Terms of use, Privacy policy and Anti-spam policy</p>
                                {Object.values(errors).some(error => error !== '') && (
                                    <Alert severity="error">
                                        {Object.values(errors).map((error, index) => (
                                            <div key={index}>{error}</div>
                                        ))}
                                    </Alert>
                                )}
                                {successMessage && (
                                    <Alert severity="success">
                                        <AlertTitle>successfully create account</AlertTitle>
                                        {successMessage}
                                    </Alert>
                                )}

                                {loading ? (
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: "#8E43F0",
                                            marginTop: "20px",
                                            '&:hover': {
                                                backgroundColor: "#8E43F0",
                                            },
                                        }}
                                    >
                                        Sign in
                                    </Button>
                                )}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5  d-flex d-none d-lg-flex">
                <img src={img} alt='img'/>
            </div>

        </div>
        </div>

      
    );
}

export default SignUp;

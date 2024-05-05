import './Style.css';
import { Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-light'>
            <div className="container" style={{ marginTop: "0px" }}>
                <div className="contact">
                    <div className="p-100">
                        <div className="row top-row">
                            <div className="col-12 col-sm-8 top-text">
                                <h1>Contact</h1>
                                <p>Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-100 contact-info">
                    <div className="row">
                        <div className="col-12 col-lg-3 top-text">
                            <div className="left-content">
                                <div className="left-icon d-flex align-item-center" style={{color:'#8E43F0'}}>
                                    <MailIcon />
                                    <p>Mail Me</p>
                                </div>
                                <div className="left-info">
                                    <p>dummyemail1@example.com</p>
                                    <p>dummyemail2@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 send-messege">
                            <h1>Send a Message</h1>
                            <p>Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.</p>
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <Button variant="outlined" style={{ borderColor: '#8E43F0', color: "#8E43F0" }}>Send Message</Button>
                            </form>
                        </div>
                        <div className="col-12 col-lg-3 d-flex justify-content-between social-icons" style={{paddingBottom:"30px"}}>
                            <Link className="social-icon" style={{height: '27px',color:'#8E43F0'}}>
                                <FacebookIcon />
                            </Link>
                            <Link className="social-icon" style={{height: '27px',color:'#8E43F0'}}>
                                <InstagramIcon />
                            </Link>
                            <Link className="social-icon" style={{height: '27px',color:'#8E43F0'}}>
                                <TwitterIcon />
                            </Link>
                            <Link className="social-icon" style={{height: '27px',color:'#8E43F0'}}>
                                <YouTubeIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

import React from 'react'
import '../../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../../images/logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
        <footer>
            <section className='footer-section'>
                <div className='footer-logo'>
                    <img src={Logo} alt='logo'/>
                </div>
            </section>

            <section className='footer-section'>
                <ul className='footer-menu'>
                    <li><Typography variant='body2'>Home</Typography></li>
                    <li><Typography variant='body2'>About us</Typography></li>
                    <li><Typography variant='body2'>Services</Typography></li>
                    <li><Typography variant='body2'>Contact us</Typography></li>
                    <li><Typography variant='body2'>Login</Typography></li>
                </ul>
            </section>

            <section className='footer-section'>
                                   
                <ul className='footer-social-list'>
                    {/* <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <Typography variant='body2'>Siguenos</Typography>
                        </div>
                        <div className='footer-social-row-icon'>
                        </div>
                    </li> */}
                    <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <FacebookIcon/>
                        </div>
                        <div className='footer-social-row-title'>
                            <Typography variant='body2'>Facebook</Typography>
                        </div>
                    </li>
                    <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <InstagramIcon/>
                        </div>
                        <div className='footer-social-row-title'>
                            <Typography variant='body2'>Instagram</Typography>
                        </div>
                    </li >
                    <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <YouTubeIcon/>
                        </div>
                        <div className='footer-social-row-title'>
                            YouTube
                        </div>
                    </li>
                    <li className='footer-social-row'   >
                        <div className='footer-social-row-icon'>
                            <LinkedInIcon/>
                        </div>
                        <div className='footer-social-row-title'>
                            Linkedin
                        </div>
                    </li>
                </ul>
            </section>

            <section className='footer-section'>
                <ul className='footer-social-list'>
                    <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <LocationOnIcon/> 
                        </div>
                        <div className='footer-social-row-title'>
                            <Typography variant='body2'>Av. Ignacio Mariategui 234</Typography>
                        </div>
                    </li>
                    <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <PhoneIcon/>
                        </div>
                        <div className='footer-social-row-title'>
                        <Typography variant='body2'>92265163</Typography>
                        </div>
                    </li >
                    <li className='footer-social-row'>
                        <div className='footer-social-row-icon'>
                            <MailIcon/>
                        </div>
                        <div className='footer-social-row-title'>
                        <Typography variant='body2'>smartlab@smartlab.pe</Typography>
                        </div>
                    </li>
                   
                </ul>
            </section>

        </footer>
    </div>
  )
}

export default Footer
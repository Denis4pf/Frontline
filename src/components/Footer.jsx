import React from 'react'
import '../components/Footer.css'

export default function Footer({handleClick}) {
    return (
        <div className="footer">
            <div className="footer-details">
                <div>
                    <h2>About Us</h2>

                    <p>Frontline Research Offers reliable & <br></br>affordable call center services of <br></br> superior quality to companies in and <br></br>out of Nairobi.</p>

                    <button className='btn1'>
                        Get in touch
                    </button>
        
                </div>
                <div>
                    <h2>Features</h2>
                    <p>Company</p>
                    <p> <a href="blogs" onClick={handleClick}>Blog</a></p>
                    <p> <a href="contact" onClick={handleClick}>Contact Us</a></p>
                    
                </div>
            </div>
            <div className="copyright">
                <p><span><i className="fa-regular fa-copyright"></i>  </span>2023 Frontline</p>
            </div>
        </div>
    )
}
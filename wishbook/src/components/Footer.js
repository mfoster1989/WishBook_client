import React from "react"
import "../css/Footer.css"
class Footer extends React.Component {
    state = {}
    render() { 
        return ( 
            <div className="footer">
                <small>Copyright 2018 Malcolm Foster</small>
                <div className="contact">
                    <a className="github" href="https://github.com/mfoster1989" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./github.png" alt="icon" /></a>
                    <a className="linked-in" href="https://linkedin.com/in/mfoster1989" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./LinkedIn.png" alt="icon" /></a>
                    <a href="mailto:mf@malcolmfoster.net"><img className="email" className="social-icon" src="http://www.newdesignfile.com/postpic/2013/05/white-email-icon_90796.png" alt=""/></a>
                </div>
            </div>
         )
    }
}
 
export default Footer;
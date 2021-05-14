import './contact.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Typical from 'react-typical';





const Contact = () => {
    return (
        <div className="contact">
            <h2>Lorem ipsum ✨</h2>
            <p>        
                You can reach me at 
                <br/>
                <a className="mail" href="mailto:carolinamaffia.m@gmail.com">
                    <Typical
                        steps={['carolinamaffia.m@gmail.com', 1000]}
                        loop={Infinity}
                        wrapper="b"
                    /> 
                </a> 
            </p>
            <p>or you can find me in my social media</p>

             <div className="icons-container">
                 <div className="links">
                    <a className="icons" href="https://github.com/CarolinaMaffia" >
                        <FaGithub className="icon" alt="github icon"/>
                    </a>
                    <a className="icons" href="https://www.linkedin.com/in/carolina-maffia/" >
                        <FaLinkedinIn className="icon" alt="linkedin icon"/>
                    </a>
                    <a className="icons" href="https://codepen.io/Caru">
                        <FaCodepen className="icon" alt="codepen icon"/>
                    </a>
                    <a className="icons" href="https://www.instagram.com/burningxhearts/">
                        <FaInstagram className="icon" alt="instagram icon"/>
                    </a>
                </div>
            </div> 
        </div>
    );
}

export default Contact;
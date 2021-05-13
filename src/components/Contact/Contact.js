import './contact.scss';
import instagram from '../assets/instagramicon.png';
import github from '../assets/github.png';
import codepen from '../assets/codepen.png';
import linkedin from '../assets/linkedin.png';




const Contact = () => {
    return (
        <div className="contact">
            <h2>Lorem ipsum ✨</h2>
            <p>        
                You can reach me at <a href="mailto:carolinamaffia.m@gmail.com">carolinamaffia.m@gmail.com</a> or you can find me in
            </p>
             <div className="icons-container">
                 <a className="icons" href="https://github.com/CarolinaMaffia" >
                    <img src={github} className="icon" alt="github icon"/>
                </a>
                <a className="icons" href="https://www.linkedin.com/in/carolina-maffia/" >
                    <img src={linkedin} className="icon" alt="linkedin icon"/>
                </a>
                <a className="icons" href="https://codepen.io/Caru">
                    <img src={codepen} className="icon" alt="codepen icon"/>
                </a>
                <a className="icons" href="https://www.instagram.com/burningxhearts/">
                    <img src={instagram} className="icon" alt="instagram icon"/>
                </a>
            </div> 
        </div>
    );
}

export default Contact;
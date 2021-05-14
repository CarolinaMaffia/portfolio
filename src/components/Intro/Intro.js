import profile from '../assets/profile.jpg';
import './intro.scss';
import Typical from 'react-typical'

const Intro = () => {
    return (
        <div className="intro">
            <div className="image-container">
                <img src={profile} alt="profile" />
            </div>

            <div className="welcome">
                <h3> 
                    <Typical
                        steps={['Hi there 👋', 3000, 'Welcome to my portfolio!', 3000]}
                        loop={Infinity}
                        wrapper="b"
                    />    
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

        </div>
    )
}

export default Intro;
import profile from '../assets/profile.jpg';
import './intro.scss';

const Intro = () => {
    return (
        <div className="intro">
            <div className="image-container">
                <img src={profile} alt="profile" />
            </div>

            <div className="welcome">
                <h3> Hi there 👋 </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

        </div>
    )
}

export default Intro;
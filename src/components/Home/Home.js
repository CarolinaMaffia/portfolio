import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Intro /> 
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;
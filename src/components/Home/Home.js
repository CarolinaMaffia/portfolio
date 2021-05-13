import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Intro /> 
            <Projects />
        </div>
    )
}

export default Home;
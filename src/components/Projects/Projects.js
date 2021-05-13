import './projects.scss';
import project from '../assets/instagram.png';

const Projects = () => {
    return (
        <div className="projects">
            <div className="title-container">
                <h2> Lorem ipsum dolor sit amet 🦄</h2>
            </div>

            <div className="show-projects">
                <div className="project">
                    <a target="_blank" href="https://cminstagram.netlify.app/" rel="noreferrer">
                        <img src={project} className="aca" alt="project presentation" />
                    </a>
                    <h3>Lorem ipsum</h3>
                    <p>Instagram clone created with ReactJS ⚛️ </p>
                </div>

                <div className="project">
                    <a target="_blank" href="https://cminstagram.netlify.app/" rel="noreferrer">
                        <img src={project} className="aca" alt="project presentation" />
                    </a>
                    <h3>Lorem ipsum</h3>
                    <p>Instagram clone created with ReactJS ⚛️ </p>
                </div>

                <div className="project">
                    <a target="_blank" href="https://cminstagram.netlify.app/" rel="noreferrer">
                        <img src={project} className="aca" alt="project presentation" />
                    </a>
                    <h3>Lorem ipsum</h3>
                    <p>Instagram clone created with ReactJS ⚛️ </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;
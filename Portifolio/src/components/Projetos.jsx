import './Main.css';
import { useState, useEffect } from 'react';
import texts from './json/texts.json';
import FrontEnd from './src/front.png';
import BackEnd from './src/BackEnd.png';
import FullStack from './src/FullStack.png';

const Projetos = () => {
    const [selectedProject, setSelectedProject] = useState('');
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        if (selectedProject) {
            setFadeIn(true);
        }
    }, [selectedProject]);

    const showProjects = (projectType) => {
        setFadeIn(false);
        setTimeout(() => {
            setSelectedProject(prevProject => prevProject === projectType ? '' : projectType);
        }, 500); // tempo suficiente para o fade-out
    }

    const renderImage = () => {
        switch (selectedProject) {
            case texts.projects.fullStack:
                return <img src={FullStack} alt={texts.projects.fullStack} className={`fade-in ${fadeIn ? 'show' : ''}`} />;
            case texts.projects.frontEnd:
                return <img src={FrontEnd} alt={texts.projects.frontEnd} className={`fade-in ${fadeIn ? 'show' : ''}`} />;
            case texts.projects.backEnd:
                return <img src={BackEnd} alt={texts.projects.backEnd} className={`fade-in ${fadeIn ? 'show' : ''}`} />;
            default:
                return null;
        }
    }

    const Description = () => {
        switch (selectedProject) {
            case texts.projects.fullStack:
                return(
                    <div className={`descriptionArea fade-in ${fadeIn ? 'show' : ''}`}>
                        <div className="titleDesc">
                                <h1>{texts.projetoFullStack.titulo}</h1>
                        </div>
                        <div className='Description'>{texts.projetoFullStack.description}</div>
                    </div>
                );
            case texts.projects.frontEnd:
                return(
                    <div className={`descriptionArea fade-in ${fadeIn ? 'show' : ''}`}>
                        <div className="titleDesc">
                                <h1>{texts.projetoFrontEnd.titulo}</h1>
                        </div>
                        <div className='Description'>{texts.projetoFrontEnd.description}</div>
                    </div>
                );
            case texts.projects.backEnd:
                return(
                    <div className={`descriptionArea fade-in ${fadeIn ? 'show' : ''}`}>
                        <div className="titleDesc">
                                <h1>{texts.projetoBackEnd.titulo}</h1>
                        </div>
                        <div className='Description'>{texts.projetoBackEnd.description}</div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div>
            <div className='TituloHab' id='ability'>
                <h1>{texts.title}</h1>
                <h2>{texts.subtitle}</h2>
            </div>
            <div className="fullarea">
                <div className="rightHab">
                    <ul>
                        <li onClick={() => showProjects(texts.projects.frontEnd)}>{texts.projects.frontEnd}</li>
                        <li onClick={() => showProjects(texts.projects.backEnd)}>{texts.projects.backEnd}</li>
                        <li onClick={() => showProjects(texts.projects.fullStack)}>{texts.projects.fullStack}</li>
                    </ul>
                </div>
                <div className="leftHab">
                    {renderImage()}
                </div>
                {Description()}
            </div>
        </div>
    );
}

export default Projetos;

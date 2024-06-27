import './Main.css';
import { useState } from 'react';
import texts from './json/texts.json';
import FrontEnd from './src/front.png';
import BackEnd from './src/BackEnd.png';
import FullStack from './src/FullStack.png';

const Projetos = () => {
    const [selectedProject, setSelectedProject] = useState('');

    const showProjects = (projectType) => {
        setSelectedProject(prevProject => prevProject === projectType ? '' : projectType);
    }
    const renderImage = () => {
        switch (selectedProject) {
            case texts.projects.fullStack:
                return <img src={FullStack} alt={texts.projects.fullStack} />;
            case texts.projects.frontEnd:
                return <img src={FrontEnd} alt={texts.projects.frontEnd} />;
            case texts.projects.backEnd:
                return <img src={BackEnd} alt={texts.projects.backEnd} />;
            default:
                return null;
        }
    }
    const Description = () => {
        switch (selectedProject) {
            case texts.projects.fullStack:
                return(
                    <div className="descriptionArea">
                        <div className="titleDesc">
                                <h1>{texts.projetoFullStack.titulo}</h1>
                        </div>
                        <div className='Description'>{texts.projetoFullStack.description}</div>
                    </div>
                );
            case texts.projects.frontEnd:
                return(
                    <div className="descriptionArea">
                        <div className="titleDesc">
                                <h1>{texts.projetoFrontEnd.titulo}</h1>
                        </div>
                        <div className='Description'>{texts.projetoFrontEnd.description}</div>
                    </div>
                );
            case texts.projects.backEnd:
                return(
                    <div className="descriptionArea">
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
            <div className='TituloHab'>
                <h1>{texts.title}</h1>
                <h2>{texts.subtitle}</h2>
            </div>
            <div className="fullarea">
                <div className="rightHab">
                    <ul>
                        <li onClick={() => showProjects(texts.projects.frontEnd)}><a onClick={() => showProjects(texts.projects.frontEnd)}>{texts.projects.frontEnd}</a></li>
                        <li onClick={() => showProjects(texts.projects.backEnd)}><a onClick={() => showProjects(texts.projects.backEnd)}>{texts.projects.backEnd}</a></li>
                        <li onClick={() => showProjects(texts.projects.fullStack)}><a onClick={() => showProjects(texts.projects.fullStack)}>{texts.projects.fullStack}</a></li>
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

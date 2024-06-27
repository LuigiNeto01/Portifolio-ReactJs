import './Main.css'
import texts from './json/texts.json'


const AboutMe = () => {

    return (
        <div className='ContainerAboutMe' id='about'>
            <div className="aboutMe">
                <div className="headerAbout">
                    <h1>{texts.aboutMe.title}</h1>
                </div>
                <h2>{texts.aboutMe.descricao}</h2>
            </div>
        </div>
    )
}

export default AboutMe
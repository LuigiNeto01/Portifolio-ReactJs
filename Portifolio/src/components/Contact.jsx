import './Main.css';
import email from './src/email.png';
import whatsapp from './src/whatsapp.png';
import github from './src/github.png';
import linkedin from './src/linkedin.png';


const ContactForm = () => {
    
    return(
        <div className='areaContato' id='contact'>
            <h1>Contato</h1>
            <div className="ContactFull">
                <div className="card">
                <a href='https://github.com/LuigiNeto01/LuigiNeto01' target="_blank" rel="noopener noreferrer"><div className="imagemDisplay">
                        <img src={github}/>
                    </div>
                    <div className="nameDisplay">
                        <h1>GitHub</h1>
                    </div>
                    <div className="descriptionDisplay">
                        <ul>
                            <li>Followers:</li>
                            <li>Repos:</li>
                        </ul>
                    </div>
                    </a>
                </div>

                <div className="card">
                <a href='https://www.linkedin.com/in/luiginetoo/' target="_blank" rel="noopener noreferrer"><div className="imagemDisplay">
                        <img src={linkedin}/>
                    </div>
                    <div className="nameDisplay">
                        <h1>LinkedIn</h1>
                    </div>
                    <div className="descriptionDisplay">
                        <ul>
                            <li>Connections:</li>
                            <li>Posts:</li>
                        </ul>
                    </div>
                    </a>
                </div>
                <div className="card">
                <a href='https://wa.me/+5516993917888' target="_blank" rel="noopener noreferrer"><div className="imagemDisplay">
                        <img src={whatsapp}/>
                    </div>
                    <div className="nameDisplay">
                        <h1>WhatsApp</h1>
                    </div>
                    <div className="descriptionDisplay">
                        <h2>For more direct contact</h2>
                    </div></a>
                </div>

                <div className="card">
                <a href='mailto:luigicode01@gmail.com' target="_blank" rel="noopener noreferrer"><div className="imagemDisplay">
                        <img src={email}/>
                    </div>
                    <div className="nameDisplay">
                        <h1>Email</h1>
                    </div>
                    <div className="descriptionDisplay">
                       <h2>For more professional contacts</h2>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
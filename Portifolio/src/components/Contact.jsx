import './Main.css';
import email from './src/email.png';
import whatsapp from './src/whatsapp.png';
import github from './src/github.png';
import linkedin from './src/linkedin.png';
import text from './json/texts.json';

const ContactForm = () => {
    return (
        <div className='areaContato' id='contact'>
            <h1>{text.contact.title}</h1>
            <div className="ContactFull">
                {text.contact.cards.map((card, index) => (
                    <div className="card" key={index}>
                        <a href={card.url} target="_blank" rel="noopener noreferrer">
                            <div className="imagemDisplay">
                                <img src={
                                    card.name === "GitHub" ? github :
                                    card.name === "LinkedIn" ? linkedin :
                                    card.name === "WhatsApp" ? whatsapp :
                                    email
                                } alt={card.name} />
                            </div>
                            <div className="nameDisplay">
                                <h1>{card.name}</h1>
                            </div>
                            <div className="descriptionDisplay">
                                {typeof card.description === 'string' ? (
                                    <h2>{card.description}</h2>
                                ) : (
                                    <ul>
                                        {Object.keys(card.description).map((key, i) => (
                                            <li key={i}>{card.description[key]}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactForm;

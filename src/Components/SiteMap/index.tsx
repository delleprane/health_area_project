import { useState } from 'react';
import './SiteMap.css';
import { FaSearch, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

type MenuItem = 'Home' | 'Procedimentos' | 'Sobre' | 'Abordagem' | 'Contato';

export function SiteMap() {
    const whatsappMessage ="Olá, vim pelo site e gostaria de fazer um agendamento"

    const [activeItem, setActiveItem] = useState<MenuItem | ''>('');

    
    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item);

        const section = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="contato" className="sitemap">
            <div className="sitemap-container">
                <h2>Nossas redes sociais</h2>
                <div className="social">
                    <div className="social-midia"><ul>
                        <li><a href="https://www.instagram.com/dra_anacarolina" target="_blank" rel="noopener noreferrer"><FaInstagram /> @dra_anacarolina</a></li>
                        <li> <a href="https://www.instagram.com/dra_anacarolina" target="_blank" rel="noopener noreferrer"><FaInstagram /> @clinica_anacarolina</a></li>
                    </ul>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.068236759147!2d-46.50884045477563!3d-23.56599262429215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce676edd286c5f%3A0x4b56801d4922f046!2sShopping%20Aricanduva!5e0!3m2!1spt-BR!2sbr!4v1724957261392!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className="utils">
                    <div className="contact-number">
                        <h3>Contato</h3>
                        <ul>
                            <li><a href={`https://wa.me/559529673204?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> (11) 000-0000</a> </li>
                            <li><a href="mailto:teste@teste.com" ><FaEnvelope /> teste@teste.com</a> </li>
                        </ul>
                    </div>
                    <div className="service">
                        <h3>Atendimento</h3>
                        <p>
                            <span className='bold'>
                                Segunda – Sexta
                            </span>
                        </p>
                        <p>
                            <span>
                                09:00 – 19:00
                            </span>
                        </p>
                        <p>
                            <span className='bold'>
                                Sábado e Domingo – Fechado
                            </span>
                        </p>
                    </div>
                    <div className="links">
                        <h3>Links</h3>
                        <ul>
                            <li onClick={() => handleItemClick('Home')}>Home</li>
                            <li onClick={() => handleItemClick('Procedimentos')}>Procedimentos</li>
                            <li onClick={() => handleItemClick('Sobre')}>Sobre</li>
                            <li onClick={() => handleItemClick('Abordagem')}>Nossa abordagem</li>
                            <li onClick={() => handleItemClick('Contato')}>Contato</li>
                        </ul>
                    </div>
                    <div className="location">
                        <h3>Localização</h3>
                        <a href="https://www.google.com/maps/search/?api=1&query=Av.%20Teixeira%20de%20Leon-900,%20São%20Paulo/SP" target="_blank" rel="noopener noreferrer">
                            Av. Teixeira de Leon-900, São Paulo/SP
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

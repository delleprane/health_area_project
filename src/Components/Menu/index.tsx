import './Menu.css';
import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

type MenuItem = 'Home' | 'Procedimentos' | 'Sobre' | 'Abordagem' | 'Contato' ;
type MenuProps = { menuItem?: boolean }

function Menu({ menuItem }: MenuProps) {
    const [activeItem, setActiveItem] = useState<MenuItem | ''>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item);
        setIsMenuOpen(false);

        const section = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const whatsappMessage = "Olá, vim pelo site e gostaria de fazer um agendamento!"

    return (
        <div id='home' className="menu">
            <div className="items-menu">
                <img src="/images/logo.png" alt="menu icon" onClick={() => handleItemClick('Home')} />
                {menuItem ?
                    <div className={`nav-itens ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li
                                className={activeItem === 'Home' ? 'active' : ''}
                                onClick={() => handleItemClick('Home')}
                            >
                                Home
                            </li>
                            <li
                                className={activeItem === 'Procedimentos' ? 'active' : ''}
                                onClick={() => handleItemClick('Procedimentos')}
                            >
                                Procedimentos
                            </li>
                            <li
                                className={activeItem === 'Sobre' ? 'active' : ''}
                                onClick={() => handleItemClick('Sobre')}
                            >
                                Sobre
                            </li>
                            <li
                                className={activeItem === 'Abordagem' ? 'active' : ''}
                                onClick={() => handleItemClick('Abordagem')}
                            >
                                Nossa abordagem
                            </li>
                            <li
                                className={activeItem === 'Contato' ? 'active' : ''}
                                onClick={() => handleItemClick('Contato')}
                            >
                                Contato
                            </li>
                        </ul>
                    </div> : null
                }
                <div className="contact">
                <a href={`https://wa.me/559529673204?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="whatsapp-icon" /> <p>Agende uma consulta</p>
                    </a>
                </div>
                {menuItem ?

                    <div className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes className='exit' /> : <FaBars className='hamburguer' />}
                    </div> : null
                }
            </div>
        </div>
    );
}

export { Menu };

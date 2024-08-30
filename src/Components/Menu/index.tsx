import './Menu.css';
import { useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

type MenuItem = 'Home' | 'Procedimentos' | 'Sobre' | 'Nossa abordagem' | 'Contato';
type MenuProps = { menuItem?: boolean }

function Menu({ menuItem }: MenuProps) {
    const [activeItem, setActiveItem] = useState<MenuItem | ''>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu">
            <div className="items-menu">
                <img src="/images/logo.png" alt="menu icon" />
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
                                className={activeItem === 'Nossa abordagem' ? 'active' : ''}
                                onClick={() => handleItemClick('Nossa abordagem')}
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
                    <FaWhatsapp className="whatsapp-icon" /> <p>Agende uma consulta</p>
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

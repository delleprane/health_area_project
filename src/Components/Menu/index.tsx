import './Menu.css';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

type MenuItem = 'Home' | 'Procedimentos' | 'Sobre' | 'Abordagem' | 'Contato';
type MenuProps = { menuItem?: boolean }

function Menu({ menuItem }: MenuProps) {
    const [activeItem, setActiveItem] = useState<MenuItem | ''>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    const handleItemClick = (item: MenuItem) => {
        setActiveItem(item);
        setIsMenuOpen(false);
    
        if (item === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scroll para baixo, esconder menu
                setIsVisible(false);
            } else {
                // Scroll para cima, mostrar menu
                setIsVisible(true);
            }

            // Verifica se está no topo da página
            if (currentScrollY > 60) {
                setIsAtTop(false);
            } else {
                setIsAtTop(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    const whatsappMessage = "Olá, vim pelo site e gostaria de fazer um agendamento!"

    return (
        <div className={`menu ${isVisible ? 'visible' : 'hidden'} ${isAtTop ? 'isTop' : ''} ${menuItem ? 'top' : 'footer'}`}>
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

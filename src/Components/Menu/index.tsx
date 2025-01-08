import './Menu.css';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import data from "../../data.json";

type MenuProps = { menuItem?: boolean };

function Menu({ menuItem }: MenuProps) {
    const [activeItem, setActiveItem] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    const handleItemClick = (item: string) => {
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

            setIsVisible(currentScrollY <= lastScrollY);
            setIsAtTop(currentScrollY <= 60);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const whatsappMessage = "Olá, vim pelo site e gostaria de fazer um agendamento!";

    return (
        <nav
            className={`menu ${isVisible ? 'visible' : 'hidden'} ${isAtTop ? 'isTop' : ''} ${menuItem ? 'top' : 'footer'}`}
        >
            <div className="items-menu">
                <img
                    src="/images/logo/logo.png"
                    alt="Logo da empresa"
                    loading="lazy"
                    onClick={() => handleItemClick('Home')}
                />
                {menuItem && (
                    <div className={`nav-itens ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            {data.Menu.map((item) => (
                                <li
                                    key={item}
                                    className={activeItem === item ? 'active' : ''}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleItemClick(item);
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {!menuItem &&(
                   <a href="https://dellepranestudio.com.br" target='_blank'> <img src="/images/logo/logo-full-white.webp" alt="logo Delleprane Studio" /></a>
                )}
                <div className="contact">
                    <a
                        href={`https://wa.me/559529673204?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp className="whatsapp-icon" /> <p>Agende uma consulta</p>
                    </a>
                </div>
                {menuItem && (
                    <div
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        {isMenuOpen ? <FaTimes className="exit" /> : <FaBars className="hamburguer" />}
                    </div>
                )}
            </div>
        </nav>
    );
}

export { Menu };

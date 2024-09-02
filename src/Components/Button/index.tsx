import './Button.css';
import { FaSearch, FaWhatsapp } from 'react-icons/fa';

interface ButtonProps {
    content: string;
    onClick?: () => void;
    className: string;
    icon?: 'whatsapp' | 'search';
    message?: string; 
}

export function Button({ content, onClick, className, icon, message }: ButtonProps) {
    const renderIcon = () => {
        switch (icon) {
            case 'whatsapp':
                return <FaWhatsapp />;
            case 'search':
                return <FaSearch />;
            default:
                return null;
        }
    };

    const handleButtonClick = () => {
        if ( icon === 'whatsapp') {
            const url = `https://wa.me/559529673204?text=${encodeURIComponent(message || '')}`;
            window.open(url, '_blank');
        } else {
            if (onClick) onClick();
        }
    };

    return (
        <div className={`button ${className ? className : ''}`}>
            <button onClick={handleButtonClick}>
                {renderIcon()} {content}
            </button>
        </div>
    );
}

import './Button.css'
import { FaSearch, FaWhatsapp } from 'react-icons/fa';

interface ButtonProps {
    content: string;
    onClick?: () => void;
    className: string;
    icon?: 'whatsapp' | 'search';
}



export function Button({ content, onClick, className, icon }: ButtonProps) {

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

    return (
        <div className={`button ${className ? className : ''}`}>
            <button onClick={onClick}>
                {renderIcon()} {content}
            </button>
        </div>
    )
}

import './Button.css'
import { FaWhatsapp } from 'react-icons/fa';

export function Button() {
    return (
        <div className='button'>
            <button>
                <FaWhatsapp className='whatsapp' /> Agende uma consulta
            </button>
        </div>
    )
}
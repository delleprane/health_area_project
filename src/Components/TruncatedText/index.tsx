import React, { useState } from 'react';
import { Button } from '../Button';
import './TruncatedText.css';

const TruncatedText: React.FC<{ content: string }> = ({ content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Limite de caracteres antes de truncar
    const CHARACTER_LIMIT = 451;

    // Verifica se o texto deve ser truncado
    const shouldTruncate = content.length > CHARACTER_LIMIT;

    // Função para alternar entre mostrar mais ou menos texto
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <p className="carousel-content">
                {isExpanded || !shouldTruncate ? content : `${content.substring(0, CHARACTER_LIMIT)}...`}
            </p>
            {shouldTruncate && (
                <Button 
                    content={isExpanded ? 'Ver Menos' : 'Ver Mais'} 
                    onClick={toggleText} 
                    className="read-more-btn"
                    icon='search'
                />
            )}
        </div>
    );
};

export default TruncatedText;

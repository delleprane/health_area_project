// Atualizando TruncatedText para aceitar as propriedades corretas
import React, { useState } from 'react';
import './TruncatedText.css';
import { Button } from '../Button';

interface TruncatedTextProps {
    content: string;
    list?: string[];
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ content, list }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Limite de caracteres antes de truncar
    const CHARACTER_LIMIT = 150;

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

            {/* Renderiza a lista (ul e li) se houver itens */}
            {list && list.length > 0 && (
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}


            {shouldTruncate && (
                <div className="button read-more-btn button" onClick={toggleText}>
                    <p>{isExpanded ? 'Ver Menos' : 'Ver Mais'}</p>
                </div>
            )}
        </div>
    );
};

export default TruncatedText;

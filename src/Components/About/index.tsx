import './About.css';
import data from '../../data.json';
import { Button } from '../Button';

export function About() {
    const { title, subTitle, content, video, button } = data.About;

    return (
        <section id="sobre" className="about">
            <div className="about-container">
                <div className="infos">
                    <div className="video">
                        <iframe
                            width="400"
                            height="500"
                            src={video}
                            title="About video" // Para melhorar a acessibilidade
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen // Permite tela cheia
                            frameBorder="0"
                        ></iframe>
                    </div>
                    <div className="text">
                        <h2>{title}</h2>
                        <h3>{subTitle}</h3>
                        <p>{content}</p>
                    </div>

                </div>
                
                <Button
                            content={button.content}
                            className=""
                            icon="whatsapp"
                            message={button.message}
                        />
            </div>
        </section>
    );
}

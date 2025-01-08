import { Button } from '../Button';
import './Banner.css';

import data from "../../data.json";

export function Banner() {
    const banner = data.Banner;

    return (
        <section className="banner">
            <div className="information">
                <div className="text">
                    <h1>{banner.title}</h1>
                    <h2>{banner.subTitle}</h2>
                    <p>{banner.content}</p>
                    <div className="button-container">
                        <Button
                            content={banner.button.content}
                            className=""
                            icon="whatsapp"
                            message={banner.button.message}
                        />
                    </div>
                </div>
                <div className="image">
                    <img
                        src={banner.image}
                        alt="Imagem do banner"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

import './Approach.css';
import data from '../../data.json';

export function Approach() {
    const { title, content } = data.Approach;

    return (
        <section id="abordagem" className="approach">
            <div className="approach-container">
                <div className="title">
                    <img
                        src="/images/backgroud-title.png"
                        alt="Decorative background for the title"
                        className="background-title"
                    />
                    <h2 className="strikethrough">{title}</h2>
                </div>
                <div className="about-information">
                    <p>{content}</p>
                </div>
            </div>
        </section>
    );
}

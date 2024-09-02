import './About.css'




export function About() {
    return (
        <div id="sobre" className='about'>
            <div className="about-container">
                <div className='infos'>
                    <div className='video'>
                        <iframe
                            width="400"
                            height="500"
                            src="https://www.youtube.com/embed/zJVbrIDuTEU?loop=1&playlist=zJVbrIDuTEU&controls=0&showinfo=0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                        ></iframe>


                    </div>
                    <div className='text'>
                        <h2>Dra. Ana Carolina</h2>
                        <h3>crm ST | 000.000
                        </h3>
                        <p>Motivada pela paixão de cuidar e impactar positivamente a vida das pessoas, acredito na beleza inerente a cada indivíduo. Desde o início da minha trajetória, tenho me dedicado à medicina estética e à medicina funcional integrativa, buscando constantemente aprimorar meus conhecimentos. Participo de cursos e congressos nacionais e internacionais para oferecer o melhor aos meus pacientes.
                            Formei-me em medicina pela Universidade Nove de Julho em São Paulo em 2012, e concluí a pós-graduação em Dermatologia pelo Instituto BWS, além de realizar uma atualização em Laser e Estética pela Harvard Medical School. Sou membro da Academia Brasileira de Medicina Funcional Integrativa.
                            “Dedico minha carreira àqueles que almejam uma vida saudável e uma autoestima elevada, valorizando a beleza externa e interna. A todos que buscam esse equilíbrio, eu dedico minha vida e meu trabalho.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

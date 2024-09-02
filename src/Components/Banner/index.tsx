import { Button } from '../Button'
import './Banner.css'

export function Banner() {
    return (
        <div className='banner'>
            <div className='information'>
                <div className='text'>
                    <h1>Dra. Ana Carolina</h1>
                    <h2>Beleza é sentir-se bem na própria pele. </h2>
                    <p>
                        Combinando ciência, ética e cuidado personalizado, nossa missão é elevar sua autoestima e promover um
                        envelhecimento saudável. Cada tratamento é pensado para valorizar os detalhes que fazem de você uma pessoa
                        única, garantindo que você se sinta confiante e confortável em sua própria pele. Estamos aqui para cuidar
                        de você com a dedicação e o respeito que você merece, sempre comprometidos com resultados que refletem sua
                        beleza natural.
                    </p>
                    <div className='button-container'>
                        <Button content={'agende uma consulta'}
                        className='' 
                        icon='whatsapp'
                        message="Olá, vim pelo site e gostaria de fazer um agendamento"
                        />
                    </div>
                </div>
                <div className='image'>
                    <img src='/images/professional_initial_photo.png' />
                </div>
            </div >
        </div>
    )
}
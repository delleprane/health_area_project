
import Carousel from '../Carousel'
import './Products.css'

export function Products() {
    const slides = [
        {
            image: 'https://via.placeholder.com/400x200?text=Slide+1',
            title: 'Toxina Butolinica (BOTOX)',
            content: 'Soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado...',
        },
        {
            image: 'https://via.placeholder.com/400x200?text=Slide+2',
            title: 'Tratamento com ultrassom',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },    {
            image: 'https://via.placeholder.com/400x200?text=Slide+1',
            title: 'Preenchedor com Ácido Hialurônico',
            content: 'Soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado...',
        },
        {
            image: 'https://via.placeholder.com/400x200?text=Slide+2',
            title: 'Tratamento com ultrassom',
            content: 'Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal...',
        },    {
            image: 'https://via.placeholder.com/400x200?text=Slide+1',
            title: 'Toxina Butolinica (BOTOX)',
            content: 'Soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado...',
        },
        {
            image: 'https://via.placeholder.com/400x200?text=Slide+2',
            title: 'Tratamento com ultrassom',
            content: 'Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal...',
        },    {
            image: 'https://via.placeholder.com/400x200?text=Slide+1',
            title: 'Toxina Butolinica (BOTOX)',
            content: 'Soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado...',
        },
        {
            image: 'https://via.placeholder.com/400x200?text=Slide+2',
            title: 'Tratamento com ultrassom',
            content: 'Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal...',
        },
        
    ];

    return (
        <div className='products' >
            <h4>Procedimentos</h4>
            <Carousel slides={slides}/>
        </div>
    )
}

import Carousel from '../Carousel'
import './Products.css'

export function Products() {
    const slides = [
        {
            image: '/images/1.png',
            title: 'Toxina Butolinica (BOTOX)',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
        {
            image: '/images/2.png',
            title: 'Tratamento com ultrassom',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },    {
            image: '/images/3.png',
            title: 'Ácido Hialurônico',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },
        {
            image: '/images/4.png',
            title: 'Tratamento com ultrassom',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },    {
            image: '/images/5.png',
            title: 'Toxina Butolinica (BOTOX)',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },
        {
            image: '/images/6.png',
            title: 'Tratamento com ultrassom',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },    {
            image: '/images/7.png',
            title: 'Toxina Butolinica (BOTOX)',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },
        {
            image: '/images/8.png',
            title: 'Tratamento com ultrassom',
            content: 'soluções para os problemas capilares como queda de cabelo, dermatite, psoríase, cabelo oleoso e ressecado Tratamento com ultrassom micro e macro focado não invasivo, de alta precisão para lifting facial e contorno corporal. Estimula a produção de colágeno e produzem uma espécie de malha no rosto, que previne e ameniza os sinais do envelhecimento facial.Esvaziadores de gordura, atuam na redução da gordura localizada, tanto corporal, quanto facial.Técnicas médicas utilizadas com objetivo de melhora estética e funcional da área íntima. Tratamento que estimula a produção de novas fibras de colágeno. Minimizando rugas e atenuando a flacidez facial e corporal.procedimento estético que consiste na aplicação de uma solução com fenol, promovendo a renovação da pele.substância química que atua impedindo a contração dos músculos. Recurso estético para a redução de rugas e linhas de expressão.',
        },
        
    ];

    return (
        <div id="procedimentos" className='products' >
            <h2>Procedimentos</h2>
            <div className='product-container'>
            <Carousel slides={slides}/>
            </div>
        </div>
    )
}
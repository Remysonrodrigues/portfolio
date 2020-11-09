import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <h3>Perfil</h3>

            <p>Interesses nas áreas de desenvolvimento backend, modelagem de software e arquitetura de software;</p>
            <p>Profissional dinâmico, apaixonado por tecnologias, criativo e com espírito de equipe;</p>
            <p>Forte base de engenharia de software, princípios, boas práticas, padrões arquiteturais e metodologias ágeis;</p>            
            <p>Prática e habilidades em algoritmos e estrutura de dados.</p>    

            <h3>Formações Acadêmicas</h3>

            <p>Bacharel em Tecnologia da Informação pela Universidade Federal Rural do Semi-Árido – UFERSA (2019/01);</p>
            <p>Atualmente é graduando em Engenharia de Software pela Universidade Federal Rural do Semi-Árido - UFERSA (2019/02 – 2021/01).</p>
                
            <h3>Publicações Bibliográficas</h3>

            <p>Costa, R. R. and Rolim, R. (2020). O Uso de Tutores de Programação Inteligentes na Produção de Feedback para Estudantes em Tarefas de Programação: Uma Revisão Sistemática da Literatura. Brazilian Journal of Development, 6(5): 29481-29496.</p>

            </Content>
        </div>
    );

}

export default AboutPage;
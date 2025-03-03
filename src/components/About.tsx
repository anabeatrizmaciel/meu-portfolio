import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 20px;
  min-height: 100vh;
  text-align: left;
  opacity: 0;
  animation: fadeIn 1s forwards;
  background-color: #1a1a1d;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
  }
`;

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center; 
  }
`;

const AboutText = styled.div`
  background-color: #2a2d34;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
  max-width: 700px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 15px;
  }
`;

const AboutImage = styled.img`
  border-radius: 10px;
  margin-left: 80px;
  margin-top: 40px;
  max-width: 100%;
  height: auto;
  width: 400px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    width: 80%; 
  }
`;

const AboutTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
  margin-top: 30px;
  color: #a889fd;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 10px;
  }
`;

const About = () => {
  return (
    <SectionContainer id="about">
      <AboutImage src="/ana.jpg" alt="Minha foto" />
      <AboutTextWrapper>
        <AboutTitle>Sobre Mim</AboutTitle>
        <AboutText>
          <p>
            Sou Ana Beatriz Maciel Nunes, estudante do 5º período de Sistemas de Informação na UEA, com paixão por tecnologia e desenvolvimento de soluções web,
            tanto no front-end quanto no back-end, além de ter interesse em Web Design. Estou sempre em busca de novos desafios e oportunidades para crescer, aprendendo constantemente ao longo do caminho.
          </p>
          <p>
            Atualmente, sou bolsista de P&D e atuo como desenvolvedora full-stack e Product Owner na Academia Callidus, trabalhando em um projeto de manutenção preditiva com IA, aplicando machine learning e análise de dados para otimizar processos e evitar falhas.
          </p>
        </AboutText>
      </AboutTextWrapper>
    </SectionContainer>
  );
};

export default About;

import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const HomeContainer = styled.section`
  padding: 80px 20px;
  text-align: center;
  min-height: 100vh;
  background-color: #2a2d34;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 1s forwards;

  @media (max-width: 768px) {
    padding: 40px 20px; /* Ajuste o padding em telas menores */
    text-align: center;
  }
`;

const HomeTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: rgb(168, 137, 253);
  margin-top: 140px;
  margin-bottom: 20px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem; 
    margin-top: 80px;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

const SocialLinks = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const LinkButton = styled.a`
  color: rgb(168, 137, 253);
  text-decoration: none;
  font-size: 2rem;
  margin: 0 15px;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeTitle>Olá, Eu sou a Ana Beatriz!</HomeTitle>
      <Subtitle>Graduanda de Sistemas de Informação na UEA | Desenvolvedora Full-Stack | Web Designer</Subtitle>
      <SocialLinks>
        <LinkButton href="https://github.com/anabeatrizmaciel" target="_blank">
          <FaGithub />
        </LinkButton>
        <LinkButton href="https://www.linkedin.com/in/ana-beatriz-maciel-nunes" target="_blank">
          <FaLinkedin />
        </LinkButton>
        <LinkButton href="mailto:ana.bia.maciel04@gmail.com">
          <FaEnvelope />
        </LinkButton>
      </SocialLinks>
    </HomeContainer>
  );
};

export default Home;

import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 80px 20px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
  background-color: #1a1a1d;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContactTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: rgb(168, 137, 253);
  margin-top: 140px;
  margin-bottom: 20px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const LinkButton = styled.a`
  color: rgb(168, 137, 253);
  text-decoration: none;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Entre em Contato!</ContactTitle>
      <Subtitle>Estou sempre aberta a novas oportunidades e colaborações.</Subtitle>
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
    </ContactContainer>
  );
};

export default Contact;

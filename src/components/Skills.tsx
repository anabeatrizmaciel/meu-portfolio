import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 80px 20px;
  min-height: 100vh;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
  background-color: #2a2d34;

  h2 {
    color: rgb(168, 137, 253);
  }

  @media (max-width: 768px) {
    padding: 60px 20px; 
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px; 
  }
`;

const SkillColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: none; 
    margin-top: 20px;
  }
`;

const SkillRow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-around; 
  }
`;

const ExperienceColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    flex: none; 
    margin-top: 20px;
  }
`;

const SkillCard = styled.div`
  background-color: #1a1a1d;
  padding: 15px;
  border-radius: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 60px; 
    height: 60px;
  }
`;

const SkillLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ExperienceTitle = styled.h3`
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ExperienceItem = styled.div`
  background-color: #1a1a1d;
  padding: 12px;
  border-radius: 10px;
  margin: 8px 0;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%; 
  }
`;

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <h2>Habilidades e Experiências Profissionais</h2>
      <ContentWrapper>
        <SkillColumn>
          <h3>Habilidades</h3>
          <SkillRow>
            <SkillCard>
              <SkillLogo src="/React-icon.svg" alt="React" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="JavaScript-logo.png" alt="JavaScript" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/MySQL_textlogo.svg.png" alt="MySQL" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/Node.js_logo.svg" alt="Node.js" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/Typescript_logo.svg" alt="TypeScript" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/styled-com.png" alt="Styled Components" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/Python_logo.png" alt="Python" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/Git_icon.svg" alt="Git" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/Figma-logo.png" alt="Figma" />
            </SkillCard>
            <SkillCard>
              <SkillLogo src="/docker.png" alt="Docker" />
            </SkillCard>
          </SkillRow>
        </SkillColumn>

        <ExperienceColumn>
          <ExperienceTitle>Experiências Profissionais</ExperienceTitle>
          <ExperienceItem>
            <h4>Academia Callidus - Bolsista P&D (2024-2025)</h4>
            <ul>
              <li>Desenvolvimento de Software de manutenção preditiva com IA</li>
              <br />
              <li>Atuação em equipe multidisciplinar como Desenvolvedora Full-Stack e Product Owner</li>
              <br />
              <li>Uso de Python, JavaScript e React</li>
              <br />
              <li>Entregas em sprints de 3 semanas</li>
            </ul>
          </ExperienceItem>
        </ExperienceColumn>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Skills;

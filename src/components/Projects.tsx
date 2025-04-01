import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
  background-color: #1a1a1d;

  h2 {
    color: rgb(168, 137, 253);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const ProjectCard = styled.div`
  background-color: #2a2d34;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    height: 120px; 
  }
`;

const ProjectLink = styled.a`
  margin-top: 10px;
  color: #8a9ba8;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <h2>Projetos</h2>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage src="/tarefas.png" alt="Minhas tarefas" />
          <h3>Minhas tarefas</h3>
          <p>É um app simples de lista de tarefas onde você pode adicionar, marcar como concluída e excluir tarefas.</p>
          <p>Tecnologias: React + Vite, TypeScript, Styled Components, NodeJS, MySQL, Docker</p>
          <ProjectLink href="https://github.com/anabeatrizmaciel/minhas-tarefas" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/skycast.png" alt="Skycast" />
          <h3>SkyCast</h3>
          <p>É um app para consultar o clima de qualquer cidade, consumindo a API pública da OpenWeather.</p>
          <p>Tecnologias: React + Vite, TypeScript, Styled Components, OpenWeather API</p>
          <ProjectLink href="https://github.com/anabeatrizmaciel/App-de-clima" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/inventorize.png" alt="Inventorize" />
          <h3>Inventorize: Sistema de Cadastro de Estoque</h3>
          <p>Um sistema de Cadastro de Estoque para a disciplina de Modelagem de Projeto de Sistemas</p>
          <p>Tecnologias: React, Javascript, NodeJs, MySQL</p>
          <ProjectLink href="https://github.com/anabeatrizmaciel/inventorize" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/hileia_am.png" alt="Hiléia Amazônica" />
          <h3>Hiléia Amazônica</h3>
          <p>Protótipo do App Hiléia Amazônica, exposto no SbGames 2024 no espaço da Escola do Futuro da UEA-ENS</p>
          <p>Tecnologias: Figma</p>
          <ProjectLink href="https://www.figma.com/proto/iI24tOunc4SdFJn8nVe8XC/Hil%C3%A9ia-Amaz%C3%B4nica---Aplicativo?node-id=4-179&starting-point-node-id=4%3A179" target="_blank" rel="noopener noreferrer">
            Ver no Figma
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/beauty-on.png" alt="Beauty On" />
          <h3>BeautyOn</h3>
          <p>Protótipo do app BeautyOn, um aplicativo que reúne estabelecimentos de serviços de beleza femininos, para a disciplina de Empreendedorismo Digital I</p>
          <p>Tecnologias: Figma</p>
          <ProjectLink href="https://www.figma.com/proto/01wpZZbcpuYvPSzE26jePZ/BeautyOn---Empreedorismo-Digital-I?node-id=302-10110&starting-point-node-id=302%3A10110" target="_blank" rel="noopener noreferrer">
            Ver no Figma
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/senior.png" alt="Senior+" />
          <h3>Senior+</h3>
          <p>Protótipo do app Senior+, um aplicativo focado na entrega de medicamentos para idosos, para a disciplina de Empreendedorismo Digital I</p>
          <p>Tecnologias: Figma</p>
          <ProjectLink href="https://www.figma.com/proto/CjWogzoOJgfwp469o66uJs/Senior%2B---Empreendorismo-Digital-I?node-id=1-4&p=f&t=7StUPKCAVuZ2N1nC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
            Ver no Figma
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/tank.png" alt="Tank" />
          <h3>Remake do Jogo Tank</h3>
          <p>Releitura do jogo Tank em Pygame para a disciplina de Laboratório de Programação de Computadores I</p>
          <p>Tecnologias: Python</p>
          <ProjectLink href="https://github.com/anabeatrizmaciel/tank_pygame" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/chick-hunger.png" alt="Chick Hunger" />
          <h3>Chick Hunger</h3>
          <p>Jogo desenvolvido em Pygame para a disciplina de Laboratório de Programação de Computadores I</p>
          <p>Tecnologias: Python</p>
          <ProjectLink href="https://github.com/JoaoLucasCastroUEA/Chick-Hunger" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/breakout.png" alt="Breakout" />
          <h3>Remake do Jogo Breakout</h3>
          <p>Releitura do jogo clássico Breakout em Pygame para a disciplina de Laboratório de Programação de Computadores I</p>
          <p>Tecnologias: Python</p>
          <ProjectLink href="https://github.com/RyanDaSilvaMarinho/breakout_pygame-" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </ProjectLink>
        </ProjectCard>
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default Projects;

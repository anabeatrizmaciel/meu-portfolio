/** Conteúdo editável do portfólio. Revise as descrições antes de publicar. */
export const profile = {
  name: 'Ana Beatriz',
  fullName: 'Ana Beatriz Maciel Nunes',
  location: 'Manaus, Amazonas',
  email: 'ana.bia.maciel04@gmail.com',
  github: 'https://github.com/anabeatrizmaciel',
  linkedin: 'https://www.linkedin.com/in/ana-beatriz-maciel-nunes',
  resume: '', // Adicione um PDF público, se desejar.
}

const originalImage = (filename: string) =>
  `https://raw.githubusercontent.com/anabeatrizmaciel/meu-portfolio/main/public/${filename}`

export type ProjectCategory = 'ux' | 'ai' | 'software'
export type Project = {
  id: string
  title: string
  kicker: string
  summary: string
  type: ProjectCategory
  year: string
  image?: string
  tags: string[]
  url?: string
  urlLabel?: string
  featured?: boolean
  note?: string
}

export const projects: Project[] = [
  {
    id: 'hileia', title: 'Hiléia Amazônica', kicker: 'UX/UI · Educação & Amazônia', year: '2024',
    summary: 'Protótipo de aplicativo sobre espaços não formais de educação em Manaus. Criei as interfaces e a navegação no Figma. O projeto foi apresentado no SBGames 2024, no espaço da Escola do Futuro da UEA.',
    type: 'ux', image: originalImage('hileia_am.png'),
    tags: ['Figma', 'UI Design', 'Prototipação', 'Educação'], featured: true,
    url: 'https://www.figma.com/proto/iI24tOunc4SdFJn8nVe8XC/Hil%C3%A9ia-Amaz%C3%B4nica---Aplicativo?node-id=4-179&starting-point-node-id=4%3A179', urlLabel: 'Explorar protótipo',
    note: 'Projeto acadêmico · protótipo criado por mim',
  },
  {
    id: 'semish', title: 'O custo emocional do erro', kicker: 'UX Research · IHC · IA responsável', year: '2026',
    summary: 'Avaliação human-centered de sistemas de recomendação do Spotify e Duolingo, com RE4HCAI e mapas de empatia. Investigação de transparência, autonomia, explicabilidade e impactos das recomendações inadequadas.',
    type: 'ux', tags: ['UX Research', 'RE4HCAI', 'Mapas de empatia', 'IHC'], featured: true,
    note: 'Artigo completo apresentado no SEMISH 2026 · selecionado para convite à edição especial da JBCS',
  },
  {
    id: 'medsimpli', title: 'MedSimpli', kicker: 'IA · Acessibilidade da informação', year: '2026',
    summary: 'Projeto de IA generativa voltado à simplificação de informações de saúde, com RAG, seleção de fontes e mecanismos de validação de contexto e respostas.',
    type: 'ai', tags: ['Python', 'RAG', 'FAISS', 'LLM', 'Avaliação'], featured: true,
    url: 'https://github.com/anabeatrizmaciel/medsimpli', urlLabel: 'Ver repositório',
    note: 'Projeto acadêmico em equipe',
  },
  {
    id: 'senior', title: 'Senior+', kicker: 'UX/UI · Serviços para idosos', year: '2024',
    summary: 'Protótipo de aplicativo para entrega de medicamentos a pessoas idosas, desenvolvido no Figma em atividade de Empreendedorismo Digital I.',
    type: 'ux', image: originalImage('senior.png'), tags: ['Figma', 'Prototipação', 'UI Design'],
    url: 'https://www.figma.com/proto/CjWogzoOJgfwp469o66uJs/Senior%2B---Empreendorismo-Digital-I?node-id=1-4&p=f&t=7StUPKCAVuZ2N1nC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1', urlLabel: 'Explorar protótipo',
  },
  {
    id: 'beautyon', title: 'BeautyOn', kicker: 'UX/UI · Serviços de beleza', year: '2024',
    summary: 'Protótipo de aplicativo para reunir estabelecimentos e serviços de beleza, desenvolvido no Figma em atividade de Empreendedorismo Digital I.',
    type: 'ux', image: originalImage('beauty-on.png'), tags: ['Figma', 'Prototipação', 'UI Design'],
    url: 'https://www.figma.com/proto/01wpZZbcpuYvPSzE26jePZ/BeautyOn---Empreedorismo-Digital-I?node-id=302-10110&starting-point-node-id=302%3A10110', urlLabel: 'Explorar protótipo',
  },
  {
    id: 'previa', title: 'PrevIA', kicker: 'P&D · Manutenção preditiva', year: '2024–2025',
    summary: 'Software de manutenção preditiva com IA desenvolvido na Academia Callidus. Atuei como bolsista de P&D, com participação em desenvolvimento full-stack e organização do produto.',
    type: 'ai', tags: ['P&D', 'Python', 'React', 'IA', 'Produto'],
    note: 'Experiência de equipe · detalhes públicos limitados',
  },
  {
    id: 'tarefas', title: 'Minhas Tarefas', kicker: 'Software · Produtividade', year: '2025',
    summary: 'Aplicativo de tarefas com criação, conclusão e exclusão de itens, desenvolvido com React e TypeScript.',
    type: 'software', image: originalImage('tarefas.png'), tags: ['React', 'TypeScript', 'Node.js'],
    url: 'https://github.com/anabeatrizmaciel/minhas-tarefas', urlLabel: 'Ver código',
  },
  {
    id: 'skycast', title: 'SkyCast', kicker: 'Software · Clima', year: '2025',
    summary: 'Aplicativo para consultar o clima de cidades usando a API pública OpenWeather.',
    type: 'software', image: originalImage('skycast.png'), tags: ['React', 'TypeScript', 'API'],
    url: 'https://github.com/anabeatrizmaciel/App-de-clima', urlLabel: 'Ver código',
  },
  {
    id: 'inventorize', title: 'Inventorize', kicker: 'Software · Gestão de estoque', year: '2024',
    summary: 'Sistema de cadastro e gerenciamento de estoque criado para a disciplina de Modelagem de Projeto de Sistemas.',
    type: 'software', image: originalImage('inventorize.png'), tags: ['React', 'Node.js', 'MySQL'],
    url: 'https://github.com/anabeatrizmaciel/inventorize', urlLabel: 'Ver código',
  },
  {
    id: 'tank', title: 'Tank', kicker: 'Jogo · Python', year: '2023',
    summary: 'Releitura do jogo Tank feita com Pygame para Laboratório de Programação.',
    type: 'software', image: originalImage('tank.png'), tags: ['Python', 'Pygame'],
    url: 'https://github.com/anabeatrizmaciel/tank_pygame', urlLabel: 'Ver código',
  },
  {
    id: 'chick', title: 'Chick Hunger', kicker: 'Jogo · Python', year: '2023',
    summary: 'Jogo desenvolvido em equipe com Pygame em atividade de laboratório de programação.',
    type: 'software', image: originalImage('chick-hunger.png'), tags: ['Python', 'Pygame'],
    url: 'https://github.com/JoaoLucasCastroUEA/Chick-Hunger', urlLabel: 'Ver código',
  },
  {
    id: 'breakout', title: 'Breakout', kicker: 'Jogo · Python', year: '2023',
    summary: 'Releitura do clássico Breakout com Pygame, em projeto acadêmico de programação.',
    type: 'software', image: originalImage('breakout.png'), tags: ['Python', 'Pygame'],
    url: 'https://github.com/RyanDaSilvaMarinho/breakout_pygame-', urlLabel: 'Ver código',
  },
]

export const experiences = [
  {
    period: '2025 — atual', role: 'Estagiária · Qualidade de Imagem / Android', organization: 'Instituto de Pesquisas Eldorado · Manaus',
    details: 'Testes em dispositivos Android, investigação de defeitos, leitura de logs com ADB, retestes, acompanhamento de issues no Jira e comunicação com equipe internacional em inglês.',
    chips: ['QA', 'Android', 'ADB', 'Jira', 'Inglês'],
  },
  {
    period: '2024 — 2025', role: 'Bolsista de Pesquisa & Desenvolvimento', organization: 'Academia Callidus · UEA',
    details: 'Atuação no PrevIA, software de manutenção preditiva com IA, com atividades de desenvolvimento full-stack e Product Owner em equipe multidisciplinar e sprints.',
    chips: ['P&D', 'Produto', 'React', 'Python', 'IA'],
  },
]

export const skillGroups = [
  { title: 'Pesquisa & Produto', items: ['UX Research', 'IHC', 'Engenharia de Requisitos', 'Mapas de empatia', 'RE4HCAI', 'Jira', 'Scrum', 'Figma'] },
  { title: 'Engenharia & Dados', items: ['Python', 'SQL / MySQL', 'Java', 'JavaScript', 'Git/GitHub', 'QA e testes', 'Android/ADB', 'Power BI', 'React', 'TypeScript', 'Node.js', 'Docker', 'Styled Components'] },
  { title: 'IA & Pesquisa Aplicada', items: ['LLMs', 'RAG', 'FAISS', 'IA human-centered', 'Avaliação de respostas', 'Pesquisa acadêmica', 'Documentação técnica'] },
]

export const certificates = [
  { title: 'Curso de Capacitação — Projeto Callidus', issuer: 'Universidade do Estado do Amazonas', image: originalImage('callidus.jpg') },
  { title: 'Análise de dados com Power BI', issuer: 'Fundação Bradesco', image: originalImage('powerbi.jpg') },
  { title: 'Implementando Banco de Dados', issuer: 'Fundação Bradesco', image: originalImage('banco.jpg') },
  { title: 'Projeto com Interface Gráfica em Python', issuer: 'Fundação Bradesco', image: originalImage('python.jpg') },
  { title: 'Frontend Web com ReactJS', issuer: 'Samsung Ocean', image: originalImage('frontend.png') },
  { title: 'Backend com NodeJS e Express', issuer: 'Samsung Ocean', image: originalImage('backend.png') },
]

import { useState } from 'react'
import type { ReactNode, SyntheticEvent } from 'react'
import {
  FiArrowDown, FiArrowUpRight, FiBookOpen, FiCheckCircle,
  FiChevronRight, FiCode, FiExternalLink, FiFileText, FiGithub, FiGlobe,
  FiLayers, FiLinkedin, FiMail, FiMapPin, FiMenu, FiSearch, FiX
} from 'react-icons/fi'
import { certificates, experiences, profile, projects, skillGroups } from './data'
import type { Project, ProjectCategory } from './data'

const navLinks = [
  { id: 'sobre', label: 'Sobre' }, { id: 'projetos', label: 'Projetos' },
  { id: 'pesquisa', label: 'Pesquisa' }, { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
]

type ProjectFilter = 'all' | ProjectCategory
const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'Todos os projetos' },
  { id: 'ux', label: 'UX & Design' },
  { id: 'ai', label: 'IA & Pesquisa' },
  { id: 'software', label: 'Desenvolvimento' },
]

function MediaImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const fallback = '/fallback-project.svg'
  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    const element = e.currentTarget
    if (!element.src.endsWith(fallback)) element.src = fallback
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={onError} />
}

function Eyebrow({ n, children }: { n?: string; children: ReactNode }) {
  return <div className="eyebrow">{n && <span className="eyebrow-number">{n}</span>}<span>{children}</span></div>
}

function SectionHeading({ n, eyebrow, title, children }: { n: string; eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return <div className="section-heading">
    <div><Eyebrow n={n}>{eyebrow}</Eyebrow><h2>{title}</h2></div>
    {children && <p className="section-subtitle">{children}</p>}
  </div>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <a className="skip-link" href="#main">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#inicio" className="brand" aria-label="Ana Beatriz, voltar ao início"><span className="brand-mark">a<span>.</span>b</span><span className="brand-caption">portfolio / 2026</span></a>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navLinks.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-nav-contact" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>Escreva para mim <FiArrowUpRight /></a>
        </nav>
        <a href={`mailto:${profile.email}`} className="nav-cta">Vamos conversar <FiArrowUpRight size={16} /></a>
        <button className="mobile-menu-toggle" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <FiX size={22}/> : <FiMenu size={22}/>}</button>
      </div>
    </header>
  </>
}

function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-noise" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="hero-status"><span className="pulse"/> Manaus, AM <span className="status-separator">/</span> Tecnologia & pesquisa</div>
        <p className="hero-intro">Olá, eu sou a Ana Beatriz <span aria-hidden="true">✳</span></p>
        <h1 id="hero-title">Tecnologia com <em>olhar humano.</em></h1>
        <p className="hero-description">Pesquiso como as pessoas vivem a tecnologia — e construo soluções que aproximam <strong>experiência do usuário, engenharia de requisitos e inteligência artificial.</strong></p>
        <div className="hero-actions">
          <a className="btn btn-lime" href="#projetos">Explorar projetos <FiArrowUpRight /></a>
          <a className="btn btn-ghost-light" href="#sobre">Mais sobre mim <FiArrowDown /></a>
        </div>
        <div className="hero-links"><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a></div>
      </div>
      <div className="hero-art" aria-label="Composição visual com temas de pesquisa e design">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="hero-flower flower-one">✳</div><div className="hero-flower flower-two">✳</div>
        <div className="hero-art-main">
          <span className="art-index">01 / fields of interest</span>
          <span className="art-oversized">UX<span>&</span>AI</span>
          <div className="art-rule"/>
          <span className="art-tagline">understanding people<br/>through technology</span>
          <div className="art-bottom"><span>Human-centered<br/>by design.</span><span className="art-sparkle">✳</span></div>
        </div>
        <div className="hero-art-sticker sticker-top"><FiSearch size={16}/> UX research <span>↗</span></div>
        <div className="hero-art-sticker sticker-bottom"><FiCode size={16}/> building with purpose</div>
      </div>
    </div>
    <div className="hero-ticker" aria-label="Áreas de interesse"><div className="ticker-inner"><span>UX RESEARCH</span><i>✳</i><span>HUMAN-CENTERED AI</span><i>✳</i><span>ENGENHARIA DE REQUISITOS</span><i>✳</i><span>QUALIDADE DE SOFTWARE</span><i>✳</i><span>UX RESEARCH</span><i>✳</i></div></div>
  </section>
}

function About() {
  return <section className="section section-cream about-section" id="sobre">
    <div className="container">
      <SectionHeading n="01" eyebrow="Quem sou" title={<>Curiosidade, método <br/>e <em>intenção.</em></>}>Gosto de entender problemas antes de desenhar soluções — do comportamento humano ao funcionamento de sistemas.</SectionHeading>
      <div className="about-layout">
        <div className="about-visual">
          <div className="portrait-frame"><MediaImage src="https://raw.githubusercontent.com/anabeatrizmaciel/meu-portfolio/main/public/ana.jpg" alt="Retrato de Ana Beatriz" className="portrait"/></div>
          <span className="portrait-annotation">olá, prazer! <span>↗</span></span>
          <div className="about-location"><FiMapPin/> Manaus, Amazonas · Brasil</div>
        </div>
        <div className="about-text">
          <p className="lead">Sou estudante de <strong>Sistemas de Informação na Universidade do Estado do Amazonas</strong>, em fase de conclusão da graduação, e atuo na interseção entre software, pessoas e pesquisa.</p>
          <p>Minha trajetória reúne experiência em <strong>qualidade de imagem e testes Android</strong>, participação em pesquisa e desenvolvimento de soluções com IA e projetos acadêmicos de design de interfaces.</p>
          <p>Na pesquisa, investigo sistemas de recomendação baseados em IA a partir de uma perspectiva human-centered: como transparência, autonomia e erros de recomendação afetam a experiência de quem utiliza esses sistemas.</p>
          <div className="about-facts">
            <div><span>Formação</span><strong>Sistemas de Informação · UEA</strong><small>Conclusão acadêmica prevista: dez/2026</small></div>
            <div><span>Interesses</span><strong>UX Research · Requisitos · IA</strong><small>Do problema à solução</small></div>
            <div><span>Idiomas</span><strong>Português & inglês profissional</strong><small>Uso de inglês no trabalho</small></div>
          </div>
          <a className="inline-link" href="#experiencia">Conheça minha trajetória <FiArrowUpRight /></a>
        </div>
      </div>
    </div>
  </section>
}

function ResearchArtwork() {
  return <div className="research-art" aria-label="Diagrama ilustrativo sobre pessoas, sistemas e recomendações">
    <div className="research-art-top"><span>RESEARCH NOTES / 2026</span><span>↗ 001</span></div>
    <div className="research-diagram">
      <div className="research-node node-a"><FiGlobe/><span>Sistemas</span></div>
      <div className="research-path path-a"/><div className="research-path path-b"/>
      <div className="research-node node-b"><span className="node-star">✳</span><span>Pessoas</span></div>
      <div className="research-node node-c"><FiLayers/><span>Recomendações</span></div>
    </div>
    <div className="research-art-bottom"><span>Explorar a experiência<br/>por trás dos algoritmos.</span><span className="research-art-icon">✳</span></div>
  </div>
}

function WorkCard({ project, size = 'normal' }: { project: Project; size?: 'featured' | 'normal' }) {
  const media = project.image
    ? <MediaImage src={project.image} alt={`Captura do projeto ${project.title}`} className="work-image" />
    : <div className={`work-placeholder work-placeholder-${project.type}`}><span className="placeholder-small">{project.kicker}</span><div className="placeholder-big">{project.id === 'semish' ? <>human<br/><i>first.</i></> : project.id === 'medsimpli' ? <>Med<br/><i>Simpli.</i></> : <>Prev<br/><i>IA.</i></>}</div><div className="placeholder-symbol">✳</div></div>
  return <article className={`work-card ${size === 'featured' ? 'work-card-featured' : ''}`}>
    <div className="work-media">{media}<span className="work-year">{project.year}</span></div>
    <div className="work-meta">{project.kicker}<span> / {project.id.toUpperCase()}</span></div>
    <div className="work-title-row"><h3>{project.title}</h3>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="work-icon-link" aria-label={`Abrir ${project.title} em nova guia`}><FiArrowUpRight/></a>}</div>
    <p className="work-description">{project.summary}</p>
    <div className="project-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
    {project.note && <p className="project-note">{project.note}</p>}
    {project.url && <a className="work-text-link" href={project.url} target="_blank" rel="noreferrer">{project.urlLabel ?? 'Ver projeto'} <FiArrowUpRight/></a>}
  </article>
}

function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const featured = projects.filter(p => p.featured)
  const visible = filter === 'all' ? projects.filter(p => !p.featured) : projects.filter(p => p.type === filter)
  return <section className="section section-work" id="projetos">
    <div className="container">
      <SectionHeading n="02" eyebrow="Projetos selecionados" title={<>Ideias que viraram <em>experiências.</em></>}>Da prototipação no Figma a sistemas com IA: uma seleção de trabalhos acadêmicos, pesquisa aplicada e projetos de software.</SectionHeading>
      <div className="featured-topline"><span>Em destaque</span><span>01 — 03</span></div>
      <div className="featured-grid">{featured.map(p => <WorkCard key={p.id} project={p} size="featured" />)}</div>
      <div className="case-study-strip">
        <div className="case-study-heading"><span className="mono-label">CASE STUDY 01 / HILÉIA AMAZÔNICA</span><h3>Do contexto ao <em>protótipo.</em></h3><p>Um olhar sobre o processo por trás do meu projeto de UI/UX favorito.</p></div>
        <div className="case-study-steps">
          <div><span>01 / Contexto</span><p>Espaços não formais de educação em Manaus como tema de uma experiência digital.</p></div>
          <div><span>02 / Meu papel</span><p>Criação do protótipo e das telas no Figma, organizando a experiência de navegação.</p></div>
          <div><span>03 / Entrega</span><p>Protótipo interativo apresentado no SBGames 2024, no espaço da Escola do Futuro da UEA.</p></div>
        </div>
        <a href="https://www.figma.com/proto/iI24tOunc4SdFJn8nVe8XC/Hil%C3%A9ia-Amaz%C3%B4nica---Aplicativo?node-id=4-179&starting-point-node-id=4%3A179" target="_blank" rel="noreferrer" className="case-study-link">Abrir o protótipo completo <FiArrowUpRight /></a>
      </div>
      <div className="project-browser-header"><div><h3>Explore mais projetos</h3><p>Design, inteligência artificial e desenvolvimento.</p></div><div className="project-counter">{String(visible.length).padStart(2, '0')} trabalhos</div></div>
      <div className="project-filters" role="group" aria-label="Filtrar projetos">{filters.map(f => <button key={f.id} type="button" aria-pressed={filter === f.id} className={`filter ${filter === f.id ? 'active' : ''}`} onClick={() => setFilter(f.id)}>{f.label} {filter === f.id && <FiCheckCircle size={15}/>}</button>)}</div>
      <div className="work-grid" aria-live="polite">{visible.map(p => <WorkCard key={p.id} project={p} />)}</div>
    </div>
  </section>
}

function Research() {
  return <section className="section research-section" id="pesquisa">
    <div className="container research-layout">
      <ResearchArtwork/>
      <div className="research-copy"><Eyebrow n="03">Pesquisa & publicações</Eyebrow><h2>O lado humano <em>dos algoritmos.</em></h2>
        <p className="research-lead">O que acontece quando um sistema de recomendação interpreta uma pessoa de forma equivocada?</p>
        <p>Essa pergunta orienta minha pesquisa em Interação Humano-Computador. Em um estudo comparativo de Spotify e Duolingo, explorei a experiência com sistemas de recomendação baseados em IA, utilizando o framework RE4HCAI e mapas de empatia.</p>
        <div className="paper-card"><span className="paper-icon"><FiBookOpen/></span><div><span className="paper-tag">SEMISH 2026 · ARTIGO COMPLETO</span><h3>Avaliação Human-Centered de Sistemas de Recomendação Baseados em IA: Uma Análise Comparativa entre Domínios</h3><p>Apresentado no CSBC 2026, em Gramado. Selecionado entre os artigos convidados para preparação de versão estendida destinada à edição especial da JBCS.</p></div></div>
        <div className="research-methods"><span>Metodologias & temas</span><div><span>RE4HCAI</span><span>Mapas de empatia</span><span>Explicabilidade</span><span>Autonomia</span><span>Transparência</span></div></div>
      </div>
    </div>
  </section>
}

function Experience() {
  return <section className="section section-cream experience-section" id="experiencia"><div className="container">
    <SectionHeading n="04" eyebrow="Minha trajetória" title={<>Prática, pesquisa <br/>e <em>aprendizado contínuo.</em></>}>Experiências que conectam problemas reais, colaboração e pensamento analítico.</SectionHeading>
    <div className="experience-layout">
      <div className="experience-timeline">{experiences.map(exp => <article className="timeline-item" key={exp.role}><div className="timeline-dot"/><span className="timeline-period">{exp.period}</span><h3>{exp.role}</h3><div className="timeline-organization">{exp.organization}</div><p>{exp.details}</p><div className="project-tags">{exp.chips.map(c => <span key={c}>{c}</span>)}</div></article>)}</div>
      <div className="skills-panel"><div className="skills-panel-top"><FiLayers size={25}/><span>Conhecimentos em construção</span></div><h3>Ferramentas para investigar, construir e melhorar.</h3>{skillGroups.map(group => <div className="skill-group" key={group.title}><h4>{group.title}</h4><div className="skill-pills">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
    </div>
  </div></section>
}

function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? certificates : certificates.slice(0, 3)
  return <section className="section certificates-section" id="formacao"><div className="container">
    <SectionHeading n="05" eyebrow="Formação complementar" title={<>Sempre <em>aprendendo.</em></>}>Cursos e experiências de formação que complementam minha trajetória.</SectionHeading>
    <div className="certificate-grid">{visible.map((certificate, idx) => <article className="certificate-card" key={certificate.title}>
      <div className="certificate-index">{String(idx + 1).padStart(2, '0')} <FiFileText /></div><h3>{certificate.title}</h3><p>{certificate.issuer}</p><a href={certificate.image} target="_blank" rel="noreferrer">Visualizar certificado <FiExternalLink/></a>
    </article>)}</div>
    <button type="button" className="more-certificates" onClick={() => setShowAll(!showAll)}>{showAll ? 'Mostrar menos' : 'Ver todos os certificados'} <FiChevronRight/></button>
  </div></section>
}

function Contact() {
  return <section className="contact-section" id="contato"><div className="container contact-layout">
    <div><Eyebrow n="06">Vamos conversar?</Eyebrow><h2>Boas ideias começam <em>com uma conversa.</em></h2><p>Estou aberta a oportunidades, projetos e conversas sobre UX Research, IA, engenharia de requisitos e tecnologia com propósito.</p><a className="btn btn-lime" href={`mailto:${profile.email}`}>Enviar um e-mail <FiArrowUpRight/></a></div>
    <div className="contact-card"><div className="contact-card-symbol">✳</div><p>Encontre-me por aqui.</p><a href={`mailto:${profile.email}`}><FiMail/> E-mail <FiArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn <FiArrowUpRight/></a><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub/> GitHub <FiArrowUpRight/></a><span className="contact-location"><FiMapPin/> {profile.location}</span></div>
  </div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><a className="footer-logo" href="#inicio">a<span>.</span>b</a><p>Feito com curiosidade e um pouco de café. © {new Date().getFullYear()} {profile.name}.</p><a href="#inicio">Voltar ao topo ↑</a></div></footer>
}

function App() {
  return <><Header/><main id="main"><Hero/><About/><Projects/><Research/><Experience/><Certificates/><Contact/></main><Footer/></>
}

export default App

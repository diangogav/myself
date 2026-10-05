import './Projects.css';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    links: {
        website?: string;
        github?: { label: string; url: string }[];
    };
    image?: string;
    gallery?: string[];
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: 'Evolution Duel',
        description: 'Cliente web de Yu-Gi-Oh! para jugar duelos desde el navegador, publicado en su versión estable 1.1.0. Habla el protocolo binario de EDOPro sobre WebSocket y sigue una arquitectura hexagonal. Incluye ranking Elo, emparejamiento rápido, duelos contra IA, modo espectador, repeticiones y constructor de mazos. Más de 640 archivos de pruebas con Vitest y CI con límites de tamaño del bundle.',
        technologies: ['Svelte 5', 'TypeScript', 'Vite', 'GSAP', 'WebSocket', 'Vitest', 'PWA', 'Arq. Hexagonal'],
        links: {
            website: 'https://evoduel.com/'
        },
        image: '/projects/evoduel-duel.png',
        gallery: ['/projects/evoduel-home.png', '/projects/evoduel-deck-builder.png'],
        featured: true
    },
    {
        title: 'Evolution YGO',
        description: 'Servidor open source en tiempo real para Yu-Gi-Oh!, compatible con los clientes EDOPro, Koishi y YGO Mobile. Soporta TCP y WebSocket, gestión de salas, emparejamiento, reconexión a partidas en curso y ranking Elo automático. Está diseñado con Arquitectura Hexagonal / Clean Architecture y DDD, y se complementa con una API de usuarios, autenticación, ranking y estadísticas (Bun, Elysia y PostgreSQL). Alimenta el sitio de la comunidad, con ranking, torneos y temporadas.',
        technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'TypeORM', 'Redis', 'Docker', 'Clean Arch', 'DDD'],
        links: {
            website: 'https://evolutionygo.com/',
            github: [
                { label: 'Server', url: 'https://github.com/diangogav/EDOpro-server-ts' }
            ]
        },
        image: '/projects/evolutionygo-home.png'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Proyectos Destacados</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card glass-card ${project.featured ? 'featured' : ''}`}>
                            {project.image && (
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    {project.featured && <div className="featured-overlay">Destacado</div>}
                                </div>
                            )}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                {project.gallery && (
                                    <div className="project-gallery">
                                        {project.gallery.map((src) => (
                                            <a key={src} href={src} target="_blank" rel="noopener noreferrer">
                                                <img src={src} alt={`${project.title} captura`} loading="lazy" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                                <div className="project-links">
                                    {project.links.website && (
                                        <a
                                            href={project.links.website}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="2" y1="12" x2="22" y2="12" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                            Sitio Web
                                        </a>
                                    )}
                                    {project.links.github && project.links.github.map((repo) => (
                                        <a
                                            key={repo.url}
                                            href={repo.url}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            {repo.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

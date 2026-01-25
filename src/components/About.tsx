import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content">
                    <div className="about-card glass-card">
                        <div className="about-text">
                            <p className="about-description">
                                Ingeniero de Sistemas con experiencia en desarrollo backend y DevOps.
                                Me especializo en arquitectura de software, escalabilidad y diseño de sistemas robustos
                                utilizando patrones como arquitectura hexagonal y principios de código limpio.
                            </p>
                            <p className="about-description">
                                Mi enfoque está en construir productos de alta calidad aplicando las mejores prácticas
                                de desarrollo, desde la planificación arquitectónica hasta el despliegue en producción.
                                Disfruto trabajando con tecnologías modernas y enfrentando desafíos técnicos complejos.
                            </p>
                        </div>
                        {/* <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Años de Experiencia</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Proyectos Completados</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Tecnologías</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

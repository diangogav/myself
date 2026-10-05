import { useState } from 'react';
import './Experience.css';

interface ExperienceItem {
    title: string;
    company: string;
    date: string;
    description: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: 'Líder de Proyecto / Full Stack / DevOps',
        company: 'Evolution (Open Source)',
        date: 'May 2023 - Presente',
        description: [
            'Lidero una plataforma para jugar Yu-Gi-Oh! en línea, con servidor open source, reconexión a duelos en curso y ranking automático.',
            'Cliente web (evoduel.com) con Svelte 5 y TypeScript, arquitectura hexagonal y protocolo binario de EDOPro sobre WebSocket; versión 1.1.0 publicada.',
            'Servidor en tiempo real (Node.js, TCP y WebSocket) con salas, emparejamiento, reconexión y ranking Elo, compatible con los clientes EDOPro, Koishi y YGO Mobile.',
            'API para el manejo de usuarios, autenticación, ranking y estadísticas con Bun, Elysia y PostgreSQL.',
        ],
        technologies: ['TypeScript', 'Node.js', 'Svelte', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets']
    },
    {
        title: 'Desarrollador Backend',
        company: 'The Bridge - Banco Popular Dominicano',
        date: 'Jul 2023 - Presente',
        description: [
            'Primer banco digital en República Dominicana, ofreciendo servicios financieros innovadores a través de una plataforma 100% digital.',
            'Desarrollo y hago mantenimiento continuo de funcionalidades en el equipo de cuentas bancarias.',
        ],
        technologies: ['Nest.js', 'PostgreSQL', 'TypeScript', 'Kafka', 'Redis', 'AWS']
    },
    {
        title: 'Desarrollador Backend',
        company: 'Aument',
        date: 'Ago 2021 - May 2023',
        description: [
            'Sistema de análisis de datos de compras para e-commerce en Latinoamérica con el fin de brindar herramientas de Marketing digital a los negocios digitales.',
            'Desarrollé un sistema ETL para extraer datos de Shopify, Mercado Libre y Tienda Nube con Node.js (streams) para posteriormente hacer la carga en MongoDB y PostgreSQL.',
            'Realicé la migración del proyecto Node.js de JavaScript a TypeScript aplicando Arquitectura Hexagonal.',
        ],
        technologies: ['Node.js', 'JavaScript', 'MongoDB', 'TypeScript', 'PostgreSQL']
    },
    {
        title: 'DevOps',
        company: 'VenPunto',
        date: 'Ago 2020 - Jul 2022',
        description: [
            'Gateway bancario certificado con Credicard para procesar pagos en línea en Venezuela.',
            'Instalé un clúster Kubernetes conformado por un Nodo maestro y 2 esclavos en servidores físicos con el sistema operativo CentOs.',
            'Creé un pipeline CI/CD con Docker, Jenkins y Cloud Build.',
            'Realicé la orquestación de microservicios (Node.js/Java) con MongoDB y Apache Kafka.',
        ],
        technologies: ['Kubernetes', 'CentOs', 'Node.js', 'Java', 'PostgreSQL']
    },
    {
        title: 'Desarrollador Backend',
        company: 'Shasta',
        date: 'Ago 2020 - Ago 2021',
        description: [
            'Solución bancaria que permite a los usuarios manejar sus finanzas personales y realizar pagos en línea de manera segura.',
            'Realicé la migración de un código Node.js de JavaScript a TypeScript aplicando Arquitectura Hexagonal.',
            'Mejoré el stack de pruebas unitarias e integración a través de una estructura de dominio más clara.'
        ],
        technologies: ['Node.js', 'TypeScript', 'JavaScript']
    },
    {
        title: 'Desarrollador Backend - DevOps',
        company: 'Sitio Uno C.A',
        date: 'Jul 2018 - Ago 2020',
        description: [
            'Empresa especializada en soluciones fintech y software de puntos de venta para Venezuela, enfocada en ofrecer servicios financieros digitales innovadores.',
            'Desarrollé aplicaciones para manejar grandes volúmenes de datos en tiempo real con Node.js, React, MongoDB, Docker y Kubernetes en GCP.',
            'Realicé procesamiento de datos con gráficas en tiempo real; orquestación con Docker, GKE y Cloud Build (CI/CD).'
        ],
        technologies: ['Node.js', 'React', 'MongoDB', 'TypeScript', 'GCP', 'Docker', 'Kubernetes']
    }
];

const Experience = () => {
    // State to track the currently expanded item index
    // Initialize with 0 (Evolution) expanded by default
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experiencia Profesional</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div
                                className={`timeline-content glass-card ${expandedIndex === index ? 'expanded' : ''}`}
                                onClick={() => toggleItem(index)}
                            >
                                <div className="timeline-header">
                                    <div className="timeline-header-info">
                                        <h3 className="timeline-title">{exp.title}</h3>
                                        <p className="timeline-company">{exp.company}</p>
                                    </div>
                                    <div className="timeline-header-meta">
                                        <span className="timeline-date">{exp.date}</span>
                                        <div className="timeline-chevron">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-body">
                                    <ul className="timeline-description">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                    <div className="tech-tags">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

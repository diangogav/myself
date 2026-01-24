import './Skills.css';

interface SkillCategory {
    title: string;
    icon: JSX.Element;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Backend',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka']
    },
    {
        title: 'Frontend',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        skills: ['React', 'Svelte', 'JavaScript', 'HTML/CSS']
    },
    {
        title: 'DevOps',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        ),
        skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Lambda', 'ECS']
    },
    {
        title: 'Otros',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        skills: ['Git', 'Nest.js', 'Lua', 'Godot']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Habilidades Técnicas</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <div className="skill-icon">
                                {category.icon}
                            </div>
                            <h3 className="skill-title">{category.title}</h3>
                            <div className="skill-items">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

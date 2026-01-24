import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
    activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    DG
                </a>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateCV() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Modern CV Template HTML
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
          --primary: #00d9ff;
          --secondary: #9333ea;
          --text: #1f2937;
          --text-light: #6b7280;
          --bg-accent: #f3f4f6;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', sans-serif;
          color: var(--text);
          line-height: 1.4;
          font-size: 11px; /* Reduced for single page fit */
          background: white;
          width: 210mm;
          margin: 0 auto;
          -webkit-print-color-adjust: exact;
        }

        /* Header */
        .header {
          background: #0a0e1a; /* Solid background backup */
          background-image: linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 100%);
          color: white;
          padding: 1.5rem 2.5rem; /* Reduced padding */
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .header-content h1 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
          color: #00d9ff; /* Fallback color */
        }

        .header-content h2 {
          font-size: 1rem;
          font-weight: 500;
          color: #d1d5db;
          letter-spacing: 0.5px;
        }

        .contact-info {
          text-align: right;
          font-size: 0.85rem;
        }

        .contact-item {
          display: block;
          margin-bottom: 0.2rem;
          color: #e5e7eb;
          text-decoration: none;
        }

        /* Main Content */
        .container {
          padding: 0 2.5rem;
          display: grid;
          grid-template-columns: 65% 30%; /* Adjusted column ratio */
          gap: 5%;
        }

        /* Prevent page breaks */
        section, .experience-item, .skill-category, .project-item {
          page-break-inside: avoid;
          break-inside: avoid;
        }

        /* Section Styling */
        section {
          margin-bottom: 1.2rem;
        }

        .section-title {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--secondary);
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.3rem;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        /* Experience Item */
        .experience-item {
          margin-bottom: 1rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.2rem;
          align-items: baseline;
        }

        .exp-role {
          font-weight: 700;
          font-size: 0.95rem;
          color: #111827;
        }

        .exp-company {
          color: var(--secondary);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .exp-date {
          font-size: 0.8rem;
          color: var(--text-light);
          text-align: right;
          white-space: nowrap;
        }

        .exp-desc {
          list-style: none;
        }

        .exp-desc li {
          position: relative;
          padding-left: 0.8rem;
          margin-bottom: 0.15rem;
          color: #4b5563;
          font-size: 0.85rem;
        }

        .exp-desc li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
          top: -1px;
        }

        /* Skills (Sidebar) */
        .skill-category {
          margin-bottom: 1rem;
        }

        .skill-cat-title {
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #374151;
          font-size: 0.9rem;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .skill-tag {
          background: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          color: #4b5563;
          font-weight: 500;
        }

        /* Projects */
        .project-item {
          margin-bottom: 0.6rem;
          background: #f9fafb;
          padding: 0.6rem 0.8rem;
          border-radius: 6px;
          border-left: 3px solid var(--primary);
        }

        .project-item:last-child {
          margin-bottom: 0;
        }

        section:last-child {
          margin-bottom: 0;
        }

        .proj-title {
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.2rem;
          font-size: 0.95rem;
        }

        .proj-desc {
          font-size: 0.85rem;
          color: #4b5563;
          margin-bottom: 0;
          line-height: 1.4;
        }

        .proj-links {
          font-size: 0.75rem;
          overflow-wrap: anywhere;
          margin-top: 0.2rem;
          color: var(--text-light);
        }

        .proj-links a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 500;
        }

        .summary-text {
          color: #4b5563;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }

      </style>
    </head>
    <body>
      <div class="header">
        <div class="header-content">
          <h1>Diango Gavidia</h1>
          <h2>Ingeniero de Sistemas</h2>
        </div>
        <div class="contact-info">
          <a href="mailto:diangogavidia@gmail.com" class="contact-item">diangogavidia@gmail.com</a>
          <span class="contact-item">+58 412-4302456</span>
          <a href="https://github.com/diangogav" class="contact-item">github.com/diangogav</a>
          <span class="contact-item">Venezuela</span>
        </div>
      </div>

      <div class="container">
        
        <!-- Left Column (Main) -->
        <div class="main-col">
          
          <section>
            <h3 class="section-title">Sobre Mí</h3>
            <p class="summary-text">
              Ingeniero en Sistemas con experiencia en desarrollo backend y DevOps. 
              Me especializo en arquitectura de software, escalabilidad y diseño de sistemas robustos 
              utilizando patrones como arquitectura hexagonal y principios de código limpio.
            </p>
          </section>

          <section>
            <h3 class="section-title">Experiencia Profesional</h3>
            
            <div class="experience-item">
              <div class="exp-header">
                <div>
                  <div class="exp-role">Desarrollador Backend</div>
                  <div class="exp-company">The Bridge - Banco Popular</div>
                </div>
                <div class="exp-date">Jul 2023 - Presente</div>
              </div>
              <ul class="exp-desc">
                <li>Primer banco digital en República Dominicana, plataforma 100% digital.</li>
                <li>Desarrollo y mantenimiento continuo en el equipo de cuentas bancarias.</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="exp-header">
                <div>
                  <div class="exp-role">Líder de Proyecto / Full Stack / DevOps</div>
                  <div class="exp-company">Evolution (Open Source)</div>
                </div>
                <div class="exp-date">May 2023 - Presente</div>
              </div>
              <ul class="exp-desc">
                <li>Lidero una plataforma para jugar Yu-Gi-Oh! en línea, con servidor open source.</li>
                <li>Cliente web (Svelte 5, TypeScript) con arquitectura hexagonal; v1.1.0 publicada.</li>
                <li>Servidor en tiempo real (Node.js) con salas, reconexión y ranking Elo.</li>
                <li>API de usuarios, autenticación y ranking (Bun, Elysia, PostgreSQL).</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="exp-header">
                <div>
                  <div class="exp-role">Desarrollador Backend</div>
                  <div class="exp-company">Aument</div>
                </div>
                <div class="exp-date">Ago 2021 - May 2023</div>
              </div>
              <ul class="exp-desc">
                <li>Sistema ETL para extraer datos de Shopify y ML (Node.js streams).</li>
                <li>Migración de JS a TypeScript con Arquitectura Hexagonal.</li>
              </ul>
            </div>

             <div class="experience-item">
              <div class="exp-header">
                <div>
                  <div class="exp-role">DevOps</div>
                  <div class="exp-company">VenPunto</div>
                </div>
                <div class="exp-date">Ago 2020 - Jul 2022</div>
              </div>
              <ul class="exp-desc">
                <li>Gateway bancario certificado. Orquestación con Kubernetes.</li>
                <li>Microservicios Node.js/Java con MongoDB y Kafka.</li>
              </ul>
            </div>

            <div class="experience-item">
              <div class="exp-header">
                <div>
                  <div class="exp-role">Backend / DevOps</div>
                  <div class="exp-company">Sitio Uno C.A</div>
                </div>
                <div class="exp-date">Jul 2018 - Ago 2020</div>
              </div>
              <ul class="exp-desc">
                <li>Desarrollo de apps Fintech con Node.js, React y Kubernetes en GCP.</li>
                <li>Procesamiento de datos realtime y orquestación con Docker y CI/CD.</li>
              </ul>
            </div>

          </section>


        </div>

        <!-- Right Column (Sidebar) -->
        <div class="sidebar">
          
          <section>
            <h3 class="section-title">Habilidades</h3>
            
            <div class="skill-category">
              <div class="skill-cat-title">Backend</div>
              <div class="skill-tags">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Redis</span>
                <span class="skill-tag">Kafka</span>
              </div>
            </div>

            <div class="skill-category">
              <div class="skill-cat-title">DevOps</div>
              <div class="skill-tags">
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">Kubernetes</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">CI/CD</span>
                <span class="skill-tag">Linux</span>
              </div>
            </div>

            <div class="skill-category">
              <div class="skill-cat-title">Frontend</div>
              <div class="skill-tags">
                <span class="skill-tag">React</span>
                <span class="skill-tag">Svelte</span>
                <span class="skill-tag">HTML/CSS</span>
              </div>
            </div>

            <div class="skill-category">
              <div class="skill-cat-title">Otros</div>
              <div class="skill-tags">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Nest.js</span>
                <span class="skill-tag">Godot</span>
                <span class="skill-tag">Clean Arch</span>
              </div>
            </div>
          </section>

          <section>
            <h3 class="section-title">Educación</h3>
             <div class="experience-item">
                <div class="exp-role" style="font-size: 0.95rem">Ingeniería en Sistemas</div>
                <div class="exp-company" style="font-size: 0.9rem; font-weight: 400">UNEXPO 2013 - 2019</div>
             </div>
          </section>

          <section>
            <h3 class="section-title">Proyectos Destacados</h3>
            <div class="project-item">
              <div class="proj-title">Evolution Duel</div>
              <p class="proj-desc">
                Cliente web de duelos con ranking Elo, modo espectador y constructor de mazos.
                Tech: Svelte 5, TypeScript, Vite, WebSocket.
              </p>
              <p class="proj-links"><a href="https://evoduel.com/">evoduel.com</a></p>
            </div>
            <div class="project-item">
              <div class="proj-title">Evolution YGO</div>
              <p class="proj-desc">
                Servidor open source en tiempo real con salas, reconexión y ranking Elo.
                Tech: Node.js, TypeScript, PostgreSQL, Redis, Docker.
              </p>
              <p class="proj-links">
                <a href="https://evolutionygo.com/">evolutionygo.com</a><br>
                <a href="https://github.com/diangogav/EDOpro-server-ts">github.com/diangogav/EDOpro-server-ts</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);

  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  await page.pdf({
    path: path.join(publicDir, 'cv-diango-gavidia.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  await browser.close();
  console.log('CV PDF generated successfully!');
}

generateCV();

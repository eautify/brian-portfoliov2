import { ArrowUpRight, BriefcaseBusiness, Code2, Cpu, Mail, Terminal } from "lucide-react";
import { AboutModalTrigger, CopyEmailButton, ThemeToggle } from "./ui";

const projects = [
  {
    number: "01",
    title: "JokeFM",
    url: "https://joke-fm.vercel.app/",
    repository: "https://github.com/eautify/JokeFM",
    label: "COMEDY RADIO & JOKE DISCOVERY",
    description:
      "A browser-based comedy radio and joke discovery app with a queue player, speech synthesis, favorites, games, and an API playground.",
    stack: ["React", "TypeScript", "Vite", "JokeAPI"],
    icon: Terminal,
  },
  {
    number: "02",
    title: "Vendora",
    url: "https://project-vendora.vercel.app",
    label: "FULL-STACK POS",
    description:
      "A store inventory and point-of-sale system with device-camera barcode scanning for faster, simpler checkout workflows.",
    stack: ["Vue 3", "TypeScript", "Supabase", "PostgreSQL"],
    icon: Terminal,
  },
  {
    number: "03",
    title: "IoT Smart Incubator",
    url: "https://eggincubator.online",
    label: "UNDERGRADUATE THESIS",
    description:
      "An automated poultry incubation system that combines environmental controls with an R-CNN vision model for embryo tracking.",
    stack: ["Python", "Arduino C++", "Computer Vision"],
    icon: Cpu,
  },
];

const skillGroups = [
  { label: "SOFTWARE", skills: ["Python", "JavaScript / TypeScript", "Vue.js", "FastAPI"] },
  { label: "HARDWARE & IoT", skills: ["ESP32 / ESP8266", "Arduino", "Circuit Prototyping"] },
  { label: "DATA & INFRA", skills: ["PostgreSQL", "Docker", "Git", "Computer Vision"] },
];

function BrandLogo({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect className="brand-logo-tile" x="1" y="1" width="62" height="62" rx="17" />
      <path className="brand-logo-mark" fillRule="evenodd" d="M14 14h8v14c2.3-2 5.2-3 9-3 8 0 13 5.4 13 13.3 0 8-5 13.4-13 13.4-4 0-7-1.3-9.3-3.9L21 51h-7V14Zm17 18c-4.5 0-7 2.3-7 6.3s2.5 6.5 7 6.5 7-2.4 7-6.5-2.4-6.3-7-6.3Z" />
      <circle className="brand-logo-mark" cx="50" cy="47" r="4.5" />
    </svg>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <h2>{children}</h2>
      <span className="section-rule" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Brian Balili home">
          <BrandLogo className="wordmark-mark" />
          <span>BRIAN BALILI</span>
        </a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#work">WORK</a>
          <a href="#about">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a className="availability" href="#contact"><span /> OPEN TO OPPORTUNITIES</a>
        <ThemeToggle />
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="prompt">~/</span> HELLO, WORLD <span className="eyebrow-dash">—</span> I&apos;M BRIAN</p>
          <h1>Building at the<br />intersection of <span>code</span><br />&amp; circuits<span className="hero-period">.</span></h1>
          <p className="hero-description">
            I&apos;m a Computer Engineering graduate who builds at the meeting point of software and hardware: full-stack apps, connected devices, and practical tools.
          </p>
          <div className="hero-actions">
            <AboutModalTrigger />
          </div>
        </div>
        <div className="hero-aside" aria-label="Developer profile">
          <div className="terminal-card">
            <div className="terminal-bar"><div className="traffic-lights"><i /><i /><i /></div><span>profile.ts</span><span className="terminal-menu">···</span></div>
            <div className="terminal-code">
              <div><span className="line-no">01</span><span className="code-muted">const</span> <span className="code-name">brian</span> = &#123;</div>
              <div><span className="line-no">02</span><span className="code-key">role</span>: <span className="code-string">&quot;full-stack dev&quot;</span>,</div>
              <div><span className="line-no">03</span><span className="code-key">focus</span>: <span className="code-string">&quot;software + IoT&quot;</span>,</div>
              <div><span className="line-no">04</span><span className="code-key">based</span>: <span className="code-string">&quot;Philippines&quot;</span>,</div>
              <div><span className="line-no">05</span><span className="code-key">status</span>: <span className="code-bool">available</span>,</div>
              <div><span className="line-no">06</span>&#125;;</div>
              <div className="code-cursor"><span className="line-no">07</span><span>▍</span></div>
            </div>
            <div className="terminal-footer"><span><span className="live-dot" /> SYSTEM ONLINE</span><span>14° 35&apos; N / 121° 00&apos; E</span></div>
          </div>
          <div className="aside-note"><span className="note-line" /> GOOD IDEAS<br />START WITH<br /><span>A LITTLE CURIOSITY.</span></div>
          <span className="orbit orbit-one" /><span className="orbit orbit-two" />
        </div>
        <div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <section className="section work-section" id="work">
        <SectionLabel number="01">SELECTED WORK</SectionLabel>
        <div className="section-intro"><p>A few things I&apos;ve been building<br />and thinking about.</p><span>2023 — 2025</span></div>
        <div className="project-list">
          {projects.map(({ number, title, url, repository, label, description, stack, icon: Icon }) => (
            <article className="project-card" key={title}>
              <div className="project-index">/{number}</div>
              <div className="project-icon"><Icon size={21} strokeWidth={1.5} /></div>
              <div className="project-content">
                <p className="project-label">{label}</p>
                <h3><a href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${title} deployment (opens in a new tab)`}>{title}</a></h3>
                <p className="project-description">{description}</p>
                <ul className="tag-list" aria-label={`${title} technologies`}>{stack.map((item) => <li key={item}>{item}</li>)}</ul>
                {repository && <a className="project-repository" href={repository} target="_blank" rel="noreferrer">SOURCE CODE ↗</a>}
              </div>
              <a className="project-arrow" href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${title} deployment (opens in a new tab)`}><ArrowUpRight size={18} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <SectionLabel number="02">EXPERIENCE</SectionLabel>
        <div className="experience-timeline" aria-label="Experience timeline">
          <article className="timeline-entry">
            <div className="timeline-date">JAN - MAY 2025</div>
            <span className="timeline-node" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-meta"><span>JFE TECHNO MANILA, INC.</span><span>PHILIPPINES</span></div>
              <h3>Software Developer Intern</h3>
              <p>Built full-stack time and attendance features for 400+ employees, with role-based access control using Vue.js, FastAPI, and PostgreSQL.</p>
              <span className="timeline-department">ICT DEPARTMENT</span>
            </div>
          </article>
          <article className="timeline-entry timeline-current">
            <div className="timeline-date">PRESENT</div>
            <span className="timeline-node" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-meta"><span>OPEN TO OPPORTUNITIES</span><span className="timeline-status"><i /> AVAILABLE</span></div>
              <h3>Ready for what&apos;s next</h3>
              <p>Looking for an opportunity to contribute, keep learning, and build useful software and connected systems.</p>
            </div>
          </article>
        </div>
        <div className="skills-block">
          <SectionLabel number="03">MY TOOLKIT</SectionLabel>
          <div className="toolkit-terminal">
            <div className="toolkit-bar"><div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div><span>toolkit.config</span><span className="toolkit-count">03 MODULES</span></div>
            <div className="toolkit-command"><span>brian@portfolio</span><span className="toolkit-path">:~/about</span><span className="toolkit-dollar">$</span><span>list-toolkit</span></div>
            <div className="skill-groups">{skillGroups.map(({ label, skills }, index) => <div className="skill-group" key={label}><div className="skill-group-head"><span>{String(index + 1).padStart(2, "0")}</span><p>{label}</p></div><div className="skill-group-items">{skills.map((skill) => <code key={skill}><span aria-hidden="true">›</span>{skill}</code>)}</div></div>)}</div>
            <div className="toolkit-footer"><span><i /> TOOLKIT INDEXED</span><span>END OF LIST</span></div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-cta"><p className="eyebrow"><span className="prompt">~/</span> NEXT UP</p><h2>Have a good one<br />in mind<span>?</span></h2><p>Let&apos;s make something useful, thoughtful, and a little unexpected.</p><a href="mailto:brian.balili3@gmail.com" className="button button-primary">START A CONVERSATION <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom">
          <div className="footer-brand"><BrandLogo className="wordmark-mark" /><span>BUILT WITH CURIOSITY <span className="accent">✳</span></span></div>
          <div className="social-links"><a href="https://github.com/eautify" target="_blank" rel="noreferrer"><Code2 size={15} /> GITHUB <ArrowUpRight size={11} /></a><a href="https://www.linkedin.com/in/brian-balili" target="_blank" rel="noreferrer"><BriefcaseBusiness size={15} /> LINKEDIN <ArrowUpRight size={11} /></a><CopyEmailButton email="brian.balili3@gmail.com" icon={<Mail size={15} />} /></div>
          <span className="copyright">© 2025 BRIAN BALILI</span>
        </div>
      </footer>
    </main>
  );
}

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, ShieldCheck,
  Database, BarChart3, ChevronDown
} from "lucide-react";
import "./styles.css";
import smritiPhoto from "./assets/my image.jpeg";

const projects = [
  {
    number: "01",
    title: "Karyathalo",
    description:
      "A Nepal-focused job portal built with Django, Python and MySQL, featuring job discovery, resume tools and an admin workflow.",
    tags: ["Django", "Python", "MySQL"],
    link: "https://github.com/"
  },
  {
    number: "02",
    title: "PlantVerse",
    description:
      "A responsive plant e-commerce experience created with WordPress, WooCommerce and Elementor, including product categories and checkout.",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    link: "#"
  },
  {
    number: "03",
    title: "RetroCalc",
    description:
      "A polished interactive calculator with a retro-futuristic interface, keyboard support, responsive layout and theme controls.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://github.com/"
  }
];

const skills = [
  { icon: Code2, title: "Development", text: "React, JavaScript, Python, Django, HTML & CSS" },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Burp Suite, Postman, Kali Linux & web security fundamentals" },
  { icon: Database, title: "Data & Backend", text: "MySQL, REST APIs, Git & database fundamentals" },
  { icon: BarChart3, title: "Analytics", text: "Power BI, data visualization & reporting" }
];

function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="nav">
        <button className="logo" onClick={() => go("home")}>SS<span>.</span></button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("skills")}>Skills</button>
          <button onClick={() => go("projects")}>Projects</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>

        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☼" : "☾"}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={21}/> : <Menu size={21}/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot"></span> BIM Student · Developer · Tech Enthusiast</p>
            <h1>Building things<br /><em>worth clicking.</em></h1>
            <p className="hero-text">
              Hi, I'm <strong>Smriti Sigdel</strong>. I enjoy turning ideas into useful,
              clean interfaces while exploring cybersecurity, software and data.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>View my work <ArrowUpRight size={18}/></button>
              <button className="secondary" onClick={() => go("contact")}>Let's connect</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top"><span>currently</span><span className="pulse">●</span></div>
           <div className="profile-section"></div>
           <img 
            src={smritiPhoto} 
             alt="Smriti Sigdel" 
             className="profile-image"
             />
              
            <div className="terminal">
              <p className="success">Open For Opportunities<span className="cursor">_</span></p>
            </div>
          </div>
          <button className="scroll" onClick={() => go("about")}><ChevronDown size={18}/> scroll to explore</button>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-content">
            <h2>Curious by nature,<br /><span>technical by choice.</span></h2>
            <div>
              <p className="lead">
                I'm a final-year BIM student who likes understanding how technology works
                from both sides — the software people see and the systems underneath it.
              </p>
              <p>
                I've worked across web interfaces, Python/Django applications, databases,
                WordPress e-commerce and beginner cybersecurity tooling. Right now I'm
                sharpening my practical skills and building projects that give me something
                real to talk about.
              </p>
              <p>
                I care about learning fast, making things look good, and — most importantly —
                making sure they actually work.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-label">02 / SKILLS</div>
          <div className="skills-heading">
            <h2>A toolkit that's<br /><span>still growing.</span></h2>
            <p>I don't believe in putting myself in one box. These are the areas I'm actively building depth in.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({icon: Icon, title, text}) => (
              <article className="skill-card" key={title}>
                <div className="icon-box"><Icon size={22}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="projects-head">
            <h2>Things I've<br /><span>built.</span></h2>
            <p>Projects are where I turn “I wonder if I can…” into “okay, it works.”</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link" aria-label={`Open ${project.title}`}>
                  <ArrowUpRight size={22}/>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <div className="section-label">04 / CONTACT</div>
            <h2>Have an idea?<br /><em>Let's talk.</em></h2>
            <p>I'm always interested in interesting projects, internships, collaborations and conversations about technology.</p>
            <a className="contact-mail" href="mailto:smritisigdel.work@gmail.com">
              <Mail size={19}/> smritisigdel.work@gmail.com <ArrowUpRight size={18}/>
            </a>
            <div className="socials">
              <a href="https://github.com/smritisigdellaab" target="_blank" rel="noreferrer">
              <Github size={18}/> GitHub
             </a>

             <a href="https://www.linkedin.com/in/smriti-sigdel-195529421" target="_blank" rel="noreferrer">
              <Linkedin size={18}/> LinkedIn
             </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Smriti Sigdel</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

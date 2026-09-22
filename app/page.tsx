import Image from "next/image";

const projects = [
  { n:"01", title:"UCM Smash Website", type:"NEXT.JS / CLUB WEBSITE", desc:"Website for UC Merced Smash with tournament info, rankings, club details, and links for the local competitive scene.", href:"https://ucmsmash.com/", image:"/projects/ucm-smash.png" },
  { n:"02", title:"Paint Panther", type:"C++ / DESKTOP APP", desc:"MS Paint style drawing app with shapes, RGB controls, layers, selection, resizing, and object editing.", href:"https://github.com/Hu-Maxwell/Paint-Panther", image:"/projects/paint-panther.png" },
  { n:"03", title:"Wordle Clone", type:"C++ / GAME", desc:"Object oriented Wordle game with randomized words, input validation, reusable game logic, and player stats.", href:"https://github.com/AryanHaroon11/WordleGame", image:"/projects/wordle.png" },
  { n:"04", title:"SUPERMAJOR", type:"NEXT.JS / ESPORTS", desc:"Competitive gaming analytics site built with React and Next.js, structured data, and responsive UI work.", href:"https://supermajorgg.vercel.app", image:"/projects/supermajor.png" },
];

const experience = [
  ["SEP 2026 / NOW", "DoorDash", "Ambassador & Intern", "Technical projects, testing, debugging, and campus events."],
  ["APR 2026 / NOW", "UC Merced AFI", "Marketing Intern", "Website updates, accessibility fixes, SEO, Siteimprove audits, and event promotion."],
  ["NOV 2025 / NOW", "Handshake AI", "AI Model Evaluator", "LLM evaluation, hallucination and logic checks, data annotation, and prompt testing."],
  ["JAN 2026 / NOW", "Handshake AI", "AI Evaluation Contributor", "Multimodal data collection and review for vision language model training."],
];

const skills = [
  ["LANGUAGES", "C++", "Java", "Python", "SQL", "HTML/CSS"],
  ["WEB", "React", "Next.js", "Git"],
  ["AI / ML", "LLM Evaluation", "Dataset Annotation", "Multimodal Data", "Prompt Testing"],
  ["OTHER", "Project Management", "Esports Events", "SAP Exposure"],
];

export default function Home() {
  return (
    <main id="top">
      <div className="noise" aria-hidden="true" />
      <nav className="nav">
        <a href="#top" className="logo"><b>A</b><span>H</span></a>
        <div className="navItems">
          <a href="#about"><i>01</i> ABOUT</a><a href="#projects"><i>02</i> PROJECTS</a><a href="#experience"><i>03</i> EXPERIENCE</a><a href="#skills"><i>04</i> SKILLS</a>
        </div>
        <a className="contact" href="mailto:aryanharoon6@gmail.com">CONTACT</a>
      </nav>

      <section className="hero">
        <div className="slash slash1"/><div className="slash slash2"/><div className="dotfield"/>
        <div className="heroInner">
          <p className="tinyTop">UC MERCED // COMPUTER SCIENCE &amp; ENGINEERING</p>
          <div className="nameWrap">
            <span className="nameBack">ARYAN</span>
            <h1>ARYAN<br/><b>HAROON</b></h1>
            <span className="sticker">SOFTWARE<br/>ENGINEER</span>
          </div>
          <div className="heroPortrait" aria-label="Aryan Haroon">
            <div className="portraitBurst" />
            <Image src="/aryan-hero.png" alt="Aryan Haroon in a rocky passage carrying a fantasy sword" fill priority sizes="(max-width: 650px) 65vw, 390px" />
            <span className="portraitTag">PLAYER 01</span>
          </div>
          <p className="intro">I build software, web apps, and AI projects.<br/>Currently studying CSE at UC Merced.</p>
          <div className="heroButtons">
            <a href="#projects" className="p5button">VIEW MY WORK <b>→</b></a>
            <a href="/resume.pdf" target="_blank" className="p5button white">RESUME <b>↗</b></a>
          </div>
          <div className="socials"><a href="https://github.com/AryanHaroon11" target="_blank">GITHUB ↗</a><a href="https://linkedin.com/in/aryanharoon/" target="_blank">LINKEDIN ↗</a></div>
        </div>
        <div className="heroSide"><span>BUILD</span><span>COMPETE</span><span>CREATE</span></div>
        <div className="scroll">SCROLL <b>↓</b></div>
      </section>

      <section className="paper" id="about">
        <div className="paperCut topCut"/>
        <div className="sectionInner aboutGrid">
          <div className="sectionTitle blackTitle"><span>01.</span><h2>ABOUT<br/><b>ME</b></h2></div>
          <div className="aboutCopy">
            <p className="lead">I&apos;m a Computer Science and Engineering student at UC Merced. I like building things that are useful, fast, and fun to use.</p>
            <p>I work with C++, Java, Python, SQL, React, and Next.js. I also do AI model evaluation, dataset annotation, and multimodal data collection.</p>
            <div className="quickStats"><div><b>3.85</b><span>GPA</span></div><div><b>2028</b><span>GRAD</span></div><div><b>CA</b><span>BASED</span></div></div>
          </div>
          <aside className="note"><b>RIGHT NOW</b><p>Building projects.<br/>Looking for SWE + AI/ML opportunities.</p></aside>
        </div>
      </section>

      <section className="darkSection" id="projects">
        <div className="sectionInner">
          <div className="sectionTitle redTitle"><span>02.</span><h2>SELECTED<br/><b>WORK</b></h2></div>
          <div className="projectStack">
            {projects.map((p, i) => <a className={`projectCard card${i+1}`} href={p.href || "#projects"} target="_blank" rel="noreferrer" key={p.title}>
              <div className="projectNum">{p.n}</div>
              <div className="projectImage"><Image src={p.image} alt="" fill sizes="(max-width: 800px) 90vw, 420px" /></div>
              <div className="projectText"><small>{p.type}</small><h3>{p.title}</h3><p>{p.desc}</p><strong>OPEN PROJECT ↗</strong></div>
            </a>)}
          </div>
        </div>
      </section>

      <section className="redSection" id="experience">
        <div className="sectionInner">
          <div className="sectionTitle whiteTitle"><span>03.</span><h2>WHERE I&apos;VE<br/><b>WORKED</b></h2></div>
          <div className="expList">
            {experience.map(([date, company, role, copy], i) => <article className="exp" key={company+role}>
              <div className="expNo">0{i+1}</div><time>{date}</time><div><h3>{company}</h3><h4>{role}</h4></div><p>{copy}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="paper skillsSection" id="skills">
        <div className="sectionInner">
          <div className="sectionTitle blackTitle"><span>04.</span><h2>WHAT I<br/><b>USE</b></h2></div>
          <div className="skillList">{skills.map((s,i)=><div className="skillRow" key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><div>{s.slice(1).map(x=><b key={x}>{x}</b>)}</div></div>)}</div>
        </div>
      </section>

      <section className="beyond">
        <div className="sectionInner beyondGrid">
          <div className="sectionTitle redTitle"><span>05.</span><h2>BEYOND<br/><b>CODE</b></h2></div>
          <div className="beyondMain"><h3>SOCCER.<br/>SMASH.<br/><b>COMPETITION.</b></h3><p>I&apos;ve played competitive soccer for years, including varsity and club soccer. I&apos;m also president of UC Merced Smash, where I&apos;ve helped foster a club of over 100 members and run competitive tournaments on campus.</p></div>
          <div className="beyondTags"><span>SOCCER</span><span>SUPER SMASH BROS.</span><span>EVENTS</span><span>FIGHTING GAMES</span><span>ESPORTS</span></div>
        </div>
      </section>

      <footer>
        <div className="sectionInner footerInner"><div><small>06 // CONTACT</small><h2>LET&apos;S<br/><b>TALK.</b></h2></div><div className="footerLinks"><a href="mailto:aryanharoon6@gmail.com">EMAIL ↗</a><a href="https://github.com/AryanHaroon11" target="_blank">GITHUB ↗</a><a href="https://linkedin.com/in/aryanharoon/" target="_blank">LINKEDIN ↗</a><a href="/resume.pdf" target="_blank">RESUME ↗</a></div></div>
        <div className="copyright">© 2026 ARYAN HAROON <a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}

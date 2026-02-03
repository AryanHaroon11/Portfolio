import Image from "next/image";

const projects = [
  {
    title: "Paint Panther",
    desc: "MS Paint–style drawing application built in C++ with shape tools, layering, and object manipulation.",
    href: "https://github.com/Hu-Maxwell/Paint-Panther",
    tag: "C++",
    image: "/projects/paint-panther.png",
  },
  {
    title: "Wordle Clone",
    desc: "Object-oriented Wordle-style game with input validation, randomized word selection, and user statistics.",
    href: "https://github.com/AryanHaroon11/WordleGame",
    tag: "C++",
    image: "/projects/wordle.png",
  },
  {
    title: "SUPERMAJOR",
    desc: "React / Next.js esports analytics platform with structured data integrations and UI improvements.",
    href: "https://supermajorgg.vercel.app",
    tag: "Next.js",
    image: "/projects/supermajor.png",
  },
];

const skills = [
  {
    label: "Languages",
    items: ["C++", "Java", "Python", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks / Tools",
    items: ["React", "Next.js", "Git"],
  },
  {
    label: "AI/ML",
    items: [
      "LLM evaluation",
      "Dataset annotation",
      "Multimodal data collection",
      "Prompt testing",
    ],
  },
  {
    label: "Other",
    items: ["SAP (exposure)", "Project management", "Esports event coordination", "Soccer Player"],
  },
];


function ProjectCard({
  title,
  desc,
  href,
  tag,
  image,
}: {
  title: string;
  desc: string;
  href: string;
  tag: string;
  image: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition
                 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg
                 dark:border-zinc-800 dark:bg-black
                 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900/40
                 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
    >
      {/* Image */}
      <div className="relative h-40 w-full bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 transition group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
            {tag}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {desc}
        </p>

        <p className="mt-5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          View{" "}
          <span className="text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
            →
          </span>
        </p>
      </div>
    </a>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight">Aryan Haroon</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Computer Science &amp; Engineering · UC Merced
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/AryanHaroon11"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aryanharoon/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              Resume
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>
          <p className="leading-7 text-zinc-700 dark:text-zinc-300">
            I’m a Computer Science and Engineering sophomore at UC Merced (GPA
            3.85). I build systems in C++ and full-stack web applications using
            React and Next.js. I also work on AI model evaluation and multimodal
            data collection through Handshake AI projects.
          </p>
        </section>

        {/* Skills */}
<section className="mb-16">
  <h2 className="mb-6 text-2xl font-semibold">Skills</h2>

  <div className="grid gap-6 sm:grid-cols-2">
    {skills.map((group) => (
      <div
        key={group.label}
        className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black"
      >
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {group.label}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 transition
              hover:border-zinc-400 hover:text-zinc-900
              dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"   
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Projects */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}


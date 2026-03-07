import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const skillGroups = [
  { title: "Languages", items: ["C#", "Dart", "TypeScript"] },
  { title: "Back-end", items: ["ASP.NET Core", "RESTful APIs"] },
  { title: "Database", items: ["SQL Server", "SQLite"] },
  { title: "Front-end", items: ["Flutter", "React Native", "Vue.js"] },
  { title: "Other", items: ["JWT", "SOLID", "Docker", "LINQ", "Azure", "Quartz", "OneSignal"] },
];

const experiences = [
  {
    role: "Intern Back-end Developer",
    company: "Nam Phuong Technology",
    period: "11/2025 – 02/2026",
    details: [
      "Developed and maintained enterprise systems including eOffice, logistics, and inventory.",
      "Implemented authorization and access control for internal and external users.",
      "Built inventory modules (inbound/outbound/stock) and employee scheduling features.",
      "Supported deployment and improved system stability on Azure.",
    ],
  },
];

const projects = [
  {
    name: "E-Office",
    period: "12/2025 – 02/2026",
    description: "An internal eOffice platform for document management, approval workflows, internal chat, and digital authorization processes.",
    team: "Team size: 6",
    stack: ["ASP.NET Core Web API", "SQL Server", "SOLID", "LINQ", "Azure", "OneSignal"],
  },
  {
    name: "Aircraft Catering Delivery",
    period: "01/2026 – 02/2026",
    description: "A catering delivery management system for airline meals, inventory control, and employee scheduling.",
    team: "Team size: 6",
    stack: ["ASP.NET Core Web API", "SQL Server", "Quartz", "SOLID", "LINQ", "Azure"],
  },
  {
    name: "Chrome Operation Management System",
    period: "06/2025 – 08/2025",
    description: "A system to optimize inventory and production workflows, improving tracking, decision-making, and cost efficiency.",
    team: "Team size: 2",
    stack: ["C# WPF", "Flutter", "ASP.NET Core Web API", "SQL Server", "JWT", "DI"],
    github: "https://github.com/lntb1712/Chrome.git",
  },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {
  return (
    <div className="portfolio-bg relative min-h-screen overflow-x-clip text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="portfolio-glow absolute left-[-10rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full" />
        <div className="portfolio-glow-secondary absolute bottom-[12%] right-[-8rem] h-[24rem] w-[24rem] rounded-full" />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/30 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-primary-foreground/95">
            LNTB
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" variant="secondary" className="md:inline-flex">
            <a href="/LeNguyenThanhBinh_Backend.pdf" download>
              Download CV
            </a>
          </Button>
        </nav>
      </header>

      <main id="home" className="container space-y-20 py-12 md:space-y-28 md:py-16">
        <section className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 md:space-y-8">
            <Badge className="rounded-full border-border/60 bg-secondary/40 px-4 py-1 text-[11px] tracking-[0.16em] text-secondary-foreground">
              BACK-END DEVELOPER
            </Badge>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
              I build robust APIs
              <span className="block text-muted-foreground">and scalable backend systems.</span>
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Hi, I'm <span className="text-foreground">Lê Nguyễn Thanh Bình</span> — focused on ASP.NET Core, RESTful API design,
              and database optimization to deliver production-ready software.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <Card className="portfolio-panel border-border/50">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 border border-border/60">
                <AvatarFallback className="bg-primary/15 text-lg font-semibold text-primary-foreground">LB</AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">Lê Nguyễn Thanh Bình</CardTitle>
              <CardDescription>Intern Back-end Developer @ Nam Phuong Technology</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Education:</strong> Saigon Technology University (2021–2025)
              </p>
              <p>
                <strong className="text-foreground">GPA:</strong> 3.1 / 4.0
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <h2 className="text-3xl font-semibold">About</h2>
          <Card className="portfolio-panel border-border/50">
            <CardContent className="p-6 leading-relaxed text-muted-foreground">
              A developer experienced with C#, Flutter, Vue.js, React Native, and SQL Server, focused on high-performance APIs,
              maintainable architecture, and reliable deployment workflows for enterprise products.
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <Card key={group.title} className="portfolio-panel border-border/50 transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="rounded-full border-border/60 bg-secondary/25 px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          {experiences.map((exp) => (
            <Card key={exp.role} className="portfolio-panel border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{exp.role}</CardTitle>
                <CardDescription>
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 border-l border-primary/40 pl-5 text-muted-foreground">
                  {exp.details.map((detail) => (
                    <li key={detail} className="relative">
                      <span className="absolute -left-[1.45rem] top-2 h-2 w-2 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.name} className="portfolio-panel flex h-full flex-col border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_hsl(var(--primary)/0.22)]">
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-sm text-muted-foreground">{project.team}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full bg-secondary/40 px-3 py-1 text-secondary-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.github ? (
                    <Button asChild variant="outline" className="mt-auto w-fit border-primary/50 bg-background/30 hover:bg-accent/50">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        View Source Code
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-10">
          <Card className="portfolio-panel border-border/50 bg-gradient-to-r from-card/70 to-accent/30">
            <CardContent className="grid gap-5 p-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-8">
              <div>
                <h2 className="text-3xl font-semibold">Contact</h2>
                <p className="mt-2 text-muted-foreground">Open to Back-end Developer opportunities and real-world product projects.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button asChild>
                  <a href="mailto:your-email@example.com">Email (update)</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-border/40 py-6">
        <div className="container text-sm text-muted-foreground">© {new Date().getFullYear()} Lê Nguyễn Thanh Bình • Portfolio</div>
      </footer>
    </div>
  );
};

export default Index;

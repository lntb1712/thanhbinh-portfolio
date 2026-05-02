import cvPdf from "@/assets/LeNguyenThanhBinh_Backend.pdf";
import profileAvatar from "@/assets/profile-avatar.jpg";
import NetworkSpeedTool from "@/components/NetworkSpeedTool";
import ScrollReveal from "@/components/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Github, 
  Mail, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Layers,
  Briefcase,
  Code2,
  ChevronRight,
  Download,
  Sparkles,
  Users
} from "lucide-react";

const skillGroups = [
  { title: "Languages", icon: <Terminal className="mb-3 h-5 w-5 text-primary" />, items: ["C#", "Dart", "TypeScript"] },
  { title: "Back-end", icon: <Cpu className="mb-3 h-5 w-5 text-primary" />, items: ["ASP.NET Core", "RESTful APIs"] },
  { title: "Database", icon: <Database className="mb-3 h-5 w-5 text-primary" />, items: ["SQL Server", "SQLite"] },
  { title: "Front-end", icon: <Layout className="mb-3 h-5 w-5 text-primary" />, items: ["Flutter", "React Native", "Vue.js"] },
  { title: "Other", icon: <Layers className="mb-3 h-5 w-5 text-primary" />, items: ["JWT", "SOLID", "Docker", "LINQ", "Azure", "Quartz", "OneSignal"] },
];

const experiences = [
  {
    role: "Backend Developer",
    company: "Nam Phuong Technology",
    period: "11/2025 – Present",
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
    description:
      "An internal eOffice platform for document management, approval workflows, internal chat, and digital authorization processes.",
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
    <div className="portfolio-bg relative min-h-screen overflow-x-clip text-foreground selection:bg-primary/30">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="portfolio-glow animate-float-slow absolute left-[-12rem] top-[-8rem] h-72 w-72 rounded-full md:left-[-10rem] md:top-[-6rem] md:h-[28rem] md:w-[28rem]" />
        <div className="portfolio-glow-secondary animate-float-slow absolute bottom-[10%] right-[-10rem] h-64 w-64 rounded-full md:bottom-[12%] md:right-[-8rem] md:h-[24rem] md:w-[24rem]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] left-[10%] h-2 w-2 rounded-full bg-primary/40 animate-pulse-slow blur-[1px]"></div>
        <div className="absolute top-[60%] right-[15%] h-3 w-3 rounded-full bg-[#d946ef]/40 animate-pulse-slow blur-[1px]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[80%] left-[20%] h-1.5 w-1.5 rounded-full bg-primary/50 animate-pulse-slow blur-[1px]" style={{ animationDelay: '3s' }}></div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-background/50 backdrop-blur-2xl">
        <nav className="container flex h-16 items-center justify-between gap-3 md:h-20">
          <a href="#home" className="text-sm font-bold tracking-[0.2em] text-foreground transition-colors hover:text-primary">
            <span className="text-primary">LNT</span>B
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-all hover:scale-105 hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="h-9 gap-2 rounded-full px-5 text-xs shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 md:h-10 md:text-sm">
            <a href={cvPdf} download="LeNguyenThanhBinh_Backend.pdf">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </nav>
      </header>

      <main id="home" className="container space-y-24 py-12 md:space-y-32 md:py-20 lg:space-y-40 lg:py-24">
        <ScrollReveal direction="up">
          <section className="grid items-center gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <Badge className="inline-flex items-center gap-1.5 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-medium tracking-widest text-primary md:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                BACK-END DEVELOPER
              </Badge>

              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                I build <span className="animate-gradient-x bg-gradient-to-r from-primary via-[#d946ef] to-primary bg-clip-text text-transparent bg-[length:200%_auto]">robust APIs</span>
                <br />
                <span className="text-foreground/90">and scalable systems.</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                Hi, I'm <strong className="font-semibold text-foreground">Lê Nguyễn Thanh Bình</strong>. Focused on ASP.NET Core, RESTful API design,
                and database optimization to deliver production-ready software.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button asChild className="h-11 gap-2 rounded-full px-6 text-base shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40">
                  <a href="#contact">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-11 gap-2 rounded-full border-white/10 bg-white/5 px-6 text-base backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/10">
                  <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[320px] md:mx-0 md:max-w-none">
              <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-primary/30 to-portfolio-glow-secondary/30 blur-2xl transition-all duration-500"></div>
              <Card className="portfolio-panel group relative border-white/10 bg-black/40 p-2 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <CardHeader className="items-center pb-6 pt-10 text-center">
                  <div className="relative mb-4 group/avatar">
                    <div className="absolute -inset-2 animate-pulse-slow rounded-full bg-gradient-to-br from-primary via-[#d946ef] to-primary opacity-70 blur-md transition-all duration-700 group-hover/avatar:-inset-4 group-hover/avatar:opacity-100"></div>
                    <Avatar className="relative h-28 w-28 border-[3px] border-background shadow-2xl transition-transform duration-500 md:h-32 md:w-32 group-hover/avatar:scale-105">
                      <AvatarImage src={profileAvatar} alt="Portrait of Lê Nguyễn Thanh Bình" className="object-cover" />
                      <AvatarFallback className="bg-primary/20 text-2xl font-bold text-primary">LB</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Lê Nguyễn Thanh Bình</CardTitle>
                  <p className="mt-1 text-sm font-medium text-primary">Software Engineer</p>
                </CardHeader>
                <CardContent className="space-y-3 px-6 pb-8 text-center text-sm text-muted-foreground">
                  <div className="rounded-lg border border-white/5 bg-white/5 p-3 backdrop-blur-sm">
                    <p className="mb-1 font-medium text-foreground">Saigon Technology University</p>
                    <p className="text-xs">2021 – 2025</p>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 p-3 backdrop-blur-sm">
                    <span className="font-medium text-foreground">GPA</span>
                    <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">3.1 / 4.0</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <section id="about" className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
            <Card className="portfolio-panel relative overflow-hidden border-white/10 bg-black/20 p-8 shadow-xl md:p-10">
              <div className="absolute right-0 top-0 -z-10 rounded-full bg-primary/5 p-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -z-10 rounded-full bg-portfolio-glow-secondary/5 p-32 blur-3xl"></div>
              <CardContent className="p-0 text-base leading-relaxed text-muted-foreground/90 md:text-xl md:leading-loose">
                A dedicated developer experienced with <strong className="font-semibold text-foreground">C#, Flutter, Vue.js, React Native, and SQL Server</strong>. 
                I am deeply focused on building high-performance APIs, establishing maintainable architectures, 
                and implementing reliable deployment workflows for enterprise-grade products. 
                I thrive in environments that challenge me to solve complex problems and deliver impactful software solutions.
              </CardContent>
            </Card>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <section id="skills" className="space-y-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Technical <span className="text-primary">Arsenal</span></h2>
              <p className="max-w-2xl text-muted-foreground">The tools, languages, and frameworks I use to bring ideas to life.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <Card key={group.title} className="portfolio-panel group border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/30">
                  <CardHeader className="pb-4">
                    {group.icon}
                    <CardTitle className="text-lg font-semibold">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline" className="rounded-md border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <section id="experience" className="space-y-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Professional <span className="text-primary">Journey</span></h2>
            </div>
            
            <div className="relative mx-auto max-w-4xl px-4 md:px-8">
              {/* Vertical Line */}
              <div className="absolute bottom-0 left-[35px] top-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-[59px]"></div>
              
              {experiences.map((exp, index) => (
                <div key={exp.role} className="group relative mb-12 flex gap-6 md:gap-10">
                  
                  {/* Timeline Dot & Icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 group-hover:scale-110 group-hover:border-[3px] group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] md:h-14 md:w-14">
                    <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-pulse-slow"></div>
                    <Briefcase className="h-4 w-4 text-primary md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 pb-4 pt-1 md:pt-2">
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground md:text-2xl transition-colors group-hover:text-primary">{exp.role}</h3>
                        <p className="mt-1 text-sm font-medium text-muted-foreground md:text-base">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit rounded-full border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-primary backdrop-blur-sm md:text-xs">
                        {exp.period}
                      </Badge>
                    </div>

                    <Card className="portfolio-panel relative overflow-hidden border-white/10 bg-white/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_10px_40px_hsl(var(--primary)/0.15)] group-hover:bg-white/[0.07]">
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-[#d946ef] opacity-40 transition-opacity duration-500 group-hover:opacity-100"></div>
                      <CardContent className="p-5 md:p-7">
                        <ul className="space-y-3.5 text-sm text-muted-foreground md:text-base">
                          {exp.details.map((detail) => (
                            <li key={detail} className="flex gap-3.5">
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <section id="projects" className="space-y-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured <span className="text-primary">Projects</span></h2>
              <p className="max-w-2xl text-muted-foreground">Some of the key systems and applications I've built.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  className="portfolio-panel group flex h-full flex-col overflow-hidden border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="relative flex h-32 w-full items-center justify-center overflow-hidden border-b border-white/5 bg-gradient-to-br from-primary/10 to-portfolio-glow-secondary/10 transition-colors duration-500 group-hover:from-primary/20 group-hover:to-portfolio-glow-secondary/20">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <Code2 className="h-12 w-12 text-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/70" />
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4">
                      <div className="mb-2 flex items-start justify-between">
                        <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs font-medium text-primary">{project.period}</p>
                    </div>
                    
                    <div className="flex flex-1 flex-col gap-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                      
                      <div className="mt-auto space-y-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Users className="h-3.5 w-3.5" />
                          {project.team}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] text-foreground/80 hover:bg-white/10 hover:text-foreground">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <section id="contact" className="pb-12 md:pb-20">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-portfolio-glow-secondary/10 to-primary/20 opacity-50 blur-xl"></div>
              <Card className="portfolio-panel relative border-none bg-black/60 backdrop-blur-xl">
                <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
                  <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold md:text-4xl">Let's Work <span className="text-primary">Together</span></h2>
                    <p className="max-w-lg text-base text-muted-foreground md:text-lg">
                      Currently open to Back-end Developer opportunities and exciting new projects. Let's build something great.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:flex-col lg:flex-row">
                    <Button asChild className="relative overflow-hidden group h-12 w-full gap-2 rounded-full px-8 text-base shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] sm:w-auto hover:-translate-y-1">
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lntb2003@gmail.com" target="_blank" rel="noreferrer">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#d946ef] to-primary opacity-0 group-hover:opacity-100 animate-gradient-x bg-[length:200%_auto] transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center gap-2">
                          <Mail className="h-5 w-5" />
                          Email Me
                        </span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-12 w-full gap-2 rounded-full border-white/10 bg-white/5 px-8 text-base transition-all hover:bg-white/10 sm:w-auto hover:-translate-y-1">
                      <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <NetworkSpeedTool />

      <footer className="border-t border-white/5 bg-background/50 py-8 backdrop-blur-lg">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-medium text-foreground">Lê Nguyễn Thanh Bình</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lntb2003@gmail.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


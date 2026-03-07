import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const skillGroups = [
  {
    title: "Ngôn ngữ",
    items: ["C#", "Dart", "TypeScript"],
  },
  {
    title: "Back-end",
    items: ["ASP.NET Core", "RESTful APIs"],
  },
  {
    title: "Database",
    items: ["SQL Server", "SQLite"],
  },
  {
    title: "Front-end",
    items: ["Flutter", "React Native", "Vue.js"],
  },
  {
    title: "Khác",
    items: ["JWT", "SOLID", "Docker", "LINQ", "Azure", "Quartz", "OneSignal"],
  },
];

const experiences = [
  {
    role: "Intern Back-end Developer",
    company: "Nam Phuong Technology",
    period: "11/2025 – 02/2026",
    details: [
      "Phát triển và bảo trì hệ thống doanh nghiệp: eOffice, logistics, inventory.",
      "Triển khai phân quyền người dùng nội bộ và bên ngoài.",
      "Xây dựng module tồn kho (nhập/xuất/tồn) và lịch làm việc.",
      "Hỗ trợ triển khai và cải thiện độ ổn định hệ thống trên Azure.",
    ],
  },
];

const projects = [
  {
    name: "E-Office",
    period: "12/2025 – 02/2026",
    description:
      "Hệ thống eOffice nội bộ quản lý tài liệu, quy trình phê duyệt, chat nội bộ và luồng ủy quyền số.",
    team: "Team size: 6",
    stack: ["ASP.NET Core Web API", "SQL Server", "SOLID", "LINQ", "Azure", "OneSignal"],
  },
  {
    name: "Aircraft Catering Delivery",
    period: "01/2026 – 02/2026",
    description:
      "Hệ thống quản lý giao suất ăn hàng không: điều phối giao hàng, kiểm soát kho, và lập lịch nhân sự.",
    team: "Team size: 6",
    stack: ["ASP.NET Core Web API", "SQL Server", "Quartz", "SOLID", "LINQ", "Azure"],
  },
  {
    name: "Chrome Operation Management System",
    period: "06/2025 – 08/2025",
    description:
      "Hệ thống tối ưu quy trình tồn kho và sản xuất, nâng cao khả năng theo dõi, ra quyết định và giảm chi phí.",
    team: "Team size: 2",
    stack: ["C# WPF", "Flutter", "ASP.NET Core Web API", "SQL Server", "JWT", "DI"],
    github: "https://github.com/lntb1712/Chrome.git",
  },
];

const navItems = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#projects", label: "Dự án" },
  { href: "#contact", label: "Liên hệ" },
];

const highlights = [
  { label: "Kinh nghiệm thực chiến", value: "3+ dự án" },
  { label: "GPA", value: "3.1 / 4.0" },
  { label: "Core stack", value: "ASP.NET Core" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen scroll-smooth overflow-x-clip bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-15%] top-[-8rem] h-72 w-72 rounded-full bg-primary/15 blur-3xl md:h-96 md:w-96" />
        <div className="absolute right-[-12%] top-[22rem] h-80 w-80 rounded-full bg-accent/40 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-72 w-72 rounded-full bg-secondary/70 blur-3xl md:h-96 md:w-96" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-[0.2em]">
            LNTB
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="/LeNguyenThanhBinh_Backend.pdf" download>
              Tải CV
            </a>
          </Button>
        </nav>
      </header>

      <main id="home" className="container space-y-20 py-10 md:space-y-24 md:py-16">
        <section className="grid items-start gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div className="relative space-y-6 md:space-y-8">
            <Badge variant="secondary" className="w-fit rounded-full px-4 py-1 text-xs tracking-wide">
              BACK-END DEVELOPER
            </Badge>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
              Lê Nguyễn Thanh Bình —
              <span className="block text-muted-foreground">Build backend systems that scale cleanly.</span>
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Mình tập trung vào <strong className="text-foreground">ASP.NET Core</strong>, API design và database optimization để tạo ra sản
              phẩm ổn định, dễ mở rộng và dễ maintain cho doanh nghiệp.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">Liên hệ ngay</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer">
                  Xem GitHub
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/LeNguyenThanhBinh_Backend.pdf" download>
                  Tải CV
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.label} className="border-border/70 bg-card/80 backdrop-blur">
                  <CardContent className="p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:pt-6">
            <Card className="border-border/70 bg-card/80 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <CardHeader className="items-center text-center">
                <Avatar className="h-24 w-24 border border-border/70">
                  <AvatarFallback className="text-xl font-semibold">LB</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">Lê Nguyễn Thanh Bình</CardTitle>
                <CardDescription>Intern Back-end Developer @ Nam Phuong Technology</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Học vấn:</strong> Saigon Technology University (2021–2025)
                </p>
                <p>
                  <strong className="text-foreground">Mục tiêu:</strong> Trở thành Back-end Developer tạo ra hệ thống bền vững, dễ mở rộng.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <h2 className="text-2xl font-semibold md:text-3xl">Giới thiệu</h2>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="p-6 text-muted-foreground">
              Developer có kinh nghiệm với C#, Vue.js, React Native, Flutter và SQL Server; tập trung xây dựng API và hệ thống backend
              hiệu quả. Mình ưu tiên clean architecture, SOLID và chất lượng triển khai production.
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Kỹ năng</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <Card key={group.title} className="border-border/70 bg-card/75 transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline" className="rounded-full px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Kinh nghiệm</h2>
          {experiences.map((exp) => (
            <Card key={exp.role} className="border-border/70 bg-card/75">
              <CardHeader>
                <CardTitle className="text-xl">{exp.role}</CardTitle>
                <CardDescription>
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 border-l border-border pl-5 text-muted-foreground">
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
          <h2 className="text-2xl font-semibold md:text-3xl">Dự án nổi bật</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="flex h-full flex-col border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-sm text-muted-foreground">{project.team}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.github ? (
                    <Button asChild variant="outline" className="mt-auto w-fit">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Xem source code
                      </a>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-10">
          <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-card via-card to-accent/30">
            <CardContent className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold md:text-3xl">Sẵn sàng cho cơ hội mới</h2>
                <p className="text-muted-foreground">
                  Mình đang tìm kiếm vị trí Back-end Developer để đóng góp vào sản phẩm thực tế với tư duy hệ thống và chất lượng code.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button asChild>
                  <a href="mailto:your-email@example.com">Email (cập nhật)</a>
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

      <footer className="border-t border-border/60 py-6">
        <div className="container text-sm text-muted-foreground">© {new Date().getFullYear()} Lê Nguyễn Thanh Bình • Portfolio</div>
      </footer>
    </div>
  );
};

export default Index;

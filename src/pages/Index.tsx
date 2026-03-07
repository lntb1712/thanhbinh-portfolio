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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-wide">
            LÊ NGUYỄN THANH BÌNH
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="home" className="container space-y-20 py-12 md:py-16">
        <section className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              Back-end Developer
            </Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Xây dựng hệ thống API scalable, maintainable và sẵn sàng production
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Xin chào, mình là <strong>Lê Nguyễn Thanh Bình</strong>. Mình tập trung vào ASP.NET Core, thiết kế RESTful APIs,
              tối ưu database và triển khai giải pháp ổn định cho sản phẩm doanh nghiệp.
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
          </div>

          <Card className="border-border/60">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-xl font-semibold">LB</AvatarFallback>
              </Avatar>
              <CardTitle>Lê Nguyễn Thanh Bình</CardTitle>
              <CardDescription>Intern Back-end Developer @ Nam Phuong Technology</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Học vấn:</strong> Saigon Technology University (2021–2025)
              </p>
              <p>
                <strong className="text-foreground">GPA:</strong> 3.1 / 4.0
              </p>
              <p>
                <strong className="text-foreground">Mục tiêu:</strong> Trở thành Back-end Developer tạo ra hệ thống bền vững,
                dễ mở rộng và dễ bảo trì.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Giới thiệu</h2>
          <p className="max-w-4xl text-muted-foreground">
            Developer có kinh nghiệm với C#, Vue.js, React Native, Flutter và SQL Server; tập trung xây dựng API và hệ thống
            backend hiệu quả. Mình ưu tiên clean architecture, SOLID, và trải nghiệm vận hành ổn định khi triển khai thực tế.
          </p>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Kỹ năng</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
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
            <Card key={exp.role}>
              <CardHeader>
                <CardTitle className="text-xl">{exp.role}</CardTitle>
                <CardDescription>
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {exp.details.map((detail) => (
                    <li key={detail}>{detail}</li>
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
              <Card key={project.name} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-sm text-muted-foreground">{project.team}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
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

        <section id="contact" className="space-y-5 pb-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Liên hệ</h2>
          <Card>
            <CardContent className="space-y-4 pt-6 text-muted-foreground">
              <p>
                Mình sẵn sàng cho cơ hội <strong className="text-foreground">Back-end Developer</strong> hoặc vị trí thực tập nâng cao.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:your-email@example.com">Email (cập nhật)</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/lntb1712" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
              <p className="text-sm">Bạn có thể cập nhật email/số điện thoại thật ngay trong mục này để gửi nhà tuyển dụng.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container text-sm text-muted-foreground">© {new Date().getFullYear()} Lê Nguyễn Thanh Bình • Portfolio</div>
      </footer>
    </div>
  );
};

export default Index;


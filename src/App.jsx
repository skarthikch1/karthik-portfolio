import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Brain,
  Bot,
  Database,
  Cpu,
  Phone,
  ExternalLink,
  BadgeCheck,
  Download,
  ChevronRight,
  Orbit,
  Workflow,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "LLM APIs",
  "AI Automation",
  "PyTorch",
  "TensorFlow",
  "YOLOv8",
  "AWS",
  "REST APIs",
  "Pandas",
  "scikit-learn",
];

const stats = [
  {
    value: "60%",
    label: "Manual work reduced",
    note: "through AI automation workflows",
  },
  {
    value: "5",
    label: "Flagship projects",
    note: "across AI, ML, CV, and security",
  },
  {
    value: "MS",
    label: "Computer Science",
    note: "graduated Dec 2025",
  },
];

const highlights = [
  {
    icon: Workflow,
    title: "AI Automation Systems",
    description:
      "Built LLM-powered workflows that transform raw, unstructured inputs into structured outputs, reports, and downstream-ready data.",
  },
  {
    icon: Brain,
    title: "LLM Evaluation",
    description:
      "Designed automated evaluation pipelines to analyze model responses, detect hallucinations, and reduce manual review effort.",
  },
  {
    icon: Cpu,
    title: "Applied Machine Learning",
    description:
      "Developed practical ML systems across computer vision, predictive maintenance, and security-focused simulations.",
  },
];

const projects = [
  {
    icon: Bot,
    title: "AI Automation System",
    impact: "Reduced manual data processing effort by 60%",
    tech: ["Python", "LLM APIs", "Automation Workflows", "Structured Outputs"],
    problem:
      "Teams were spending too much time manually processing and summarizing unstructured data.",
    solution:
      "Built an AI-powered automation pipeline using Python and LLM APIs to extract, summarize, and convert raw inputs into structured outputs and reports.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
  {
    icon: ChartNoAxesCombined,
    title: "LLM Response Evaluation System",
    impact: "Improved evaluation efficiency through automated response analysis",
    tech: ["Python", "PyTorch", "NLP", "Transformers"],
    problem:
      "Manual review of model responses was slow, inconsistent, and difficult to scale.",
    solution:
      "Created a system that processes prompts, evaluates responses, flags hallucinations, and generates structured reports for faster analysis.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
  {
    icon: Orbit,
    title: "Underwater Species Detection",
    impact:
      "Achieved 76.86% mAP@0.5 with YOLOv8-based detection and segmentation",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    problem:
      "Marine monitoring is difficult in noisy, low-visibility underwater environments.",
    solution:
      "Built a real-time detection and segmentation system with robust preprocessing, augmentation, and transfer learning for underwater species classification.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
  {
    icon: Database,
    title: "Predictive Maintenance System",
    impact:
      "Enabled proactive vehicle fault detection using automotive sensor data",
    tech: ["Python", "Pandas", "scikit-learn", "Anomaly Detection"],
    problem:
      "Vehicle faults often go undetected until they become expensive or dangerous.",
    solution:
      "Developed a machine learning pipeline to analyze RPM, speed, and engine temperature data to identify abnormal patterns and predict failures early.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
  {
    icon: ShieldCheck,
    title: "Drone Delivery Security Framework",
    impact: "Achieved 100% simulated attack prevention with low latency overhead",
    tech: ["Python", "Flask", "AES-256", "SHA-256"],
    problem:
      "Drone-based delivery systems face security risks across communication, delivery, and customer verification.",
    solution:
      "Designed a three-layer security framework with encryption, hashing, OTP verification, and performance logging across simulated attack scenarios.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
];

const experience = [
  {
    role: "Web Designing Intern",
    company: "SRM University AP",
    period: "May 2022 – May 2023",
    points: [
      "Built a website for the International Relations department and improved access to key resources.",
      "Applied data analysis to improve user interaction insights and optimize content delivery.",
      "Worked in Agile sprints and collaborated on responsive web features for student accessibility.",
    ],
  },
  {
    role: "AI & ML Intern",
    company: "Tevatron Technologies Pvt. Ltd. (Hexnbit)",
    period: "Jun 2021 – Jul 2021",
    points: [
      "Worked on AI and machine learning concepts, workflows, and applied projects.",
      "Developed a wine quality detection project involving preprocessing, model training, and evaluation.",
      "Built hands-on experience with classification pipelines and analytical problem solving.",
    ],
  },
];

const differentiators = [
  "I build end-to-end AI workflows, not isolated notebooks.",
  "I translate raw data into structured, usable outputs.",
  "I focus on automation, efficiency, and real-world practicality.",
  "I combine machine learning knowledge with implementation discipline.",
];

const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
        {description}
      </p>
    ) : null}
  </div>
);

export default function PortfolioWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-2xl"
            : "border-slate-200/60 bg-white/60 backdrop-blur-xl"
        }`}
      >
        <motion.div
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3 group"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 text-sm font-bold text-white shadow-xl shadow-slate-400/40 ring-1 ring-white/10 overflow-hidden">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                <span className="relative z-10 tracking-wider">KC</span>
                <div className="absolute inset-0 animate-pulse opacity-20 bg-white blur-xl" />
              </div>

              <div>
                <p className="text-base font-semibold text-slate-900 tracking-tight">
                  Karthik Chalamalasetty
                </p>
                <p className="text-xs text-slate-500 tracking-wider">
                  AI Automation Engineer
                </p>
              </div>
            </motion.div>
          </motion.div>

          <nav
            className={`hidden items-center gap-2 rounded-full border px-2 py-2 shadow-sm backdrop-blur md:flex transition-all duration-300 ${
              scrolled
                ? "border-slate-200 bg-white/85"
                : "border-slate-200/80 bg-white/70"
            }`}
          >
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.35 }}
                whileHover={{ y: -1 }}
                className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-slate-200 bg-white/80 px-5 md:inline-flex"
            >
              <a href="#contact">Let’s Talk</a>
            </Button>
          </motion.div>
        </motion.div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="absolute top-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-slate-300/30 blur-3xl" />
            <div className="absolute bottom-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
                I build{" "}
                <span className="bg-gradient-to-r from-slate-950 to-slate-500 bg-clip-text text-transparent">
                  intelligent systems
                </span>{" "}
                that make complex work feel effortless.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                Master’s graduate in Computer Science focused on AI automation,
                machine learning, LLM workflows, and production-minded problem
                solving. I design systems that reduce manual effort, improve
                decision-making, and turn raw information into usable outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-slate-950 px-6 py-6 text-base text-white shadow-lg shadow-slate-400/30 transition-all duration-300 hover:scale-[1.03]"
                >
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border border-slate-200 bg-white/80 px-6 py-6 text-base backdrop-blur transition-all duration-300 hover:bg-slate-50"
                >
                  <a href="#contact">Contact Me</a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-6 py-6 text-base"
                >
                  <a href="/Karthik_Resume.pdf" target="_blank" rel="noreferrer">
                    Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-3xl font-bold text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4" /> Python • SQL • ML
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4" /> LLM APIs • Automation
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" /> AWS • Computer Vision
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center"
            >
              <Card className="w-full rounded-[2rem] border border-slate-200 bg-white/85 shadow-2xl shadow-slate-200/70 backdrop-blur">
                <CardContent className="p-8">
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="absolute right-0 top-0 hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 md:block">
                      Available for full-time roles
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                        Featured Impact
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950">
                        AI Automation System
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                      60% less manual work
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="grid gap-4 text-sm text-slate-700">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <span className="font-semibold text-slate-950">
                          Input:
                        </span>{" "}
                        Unstructured data, documents, raw text
                      </div>
                      <div className="flex justify-center text-slate-400">↓</div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <span className="font-semibold text-slate-950">
                          Engine:
                        </span>{" "}
                        Python + LLM APIs + prompt workflows
                      </div>
                      <div className="flex justify-center text-slate-400">↓</div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <span className="font-semibold text-slate-950">
                          Output:
                        </span>{" "}
                        Structured reports, summaries, downstream-ready data
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <BadgeCheck className="h-4 w-4 text-slate-900" /> Built to
                    communicate technical depth and business value at the same time
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Focus</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        Automation + AI
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Positioning</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        Builder mindset
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <motion.section
          id="about"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <SectionTitle
              eyebrow="About"
              title="More than a student profile — this is a high-upside engineering brand."
              description="I’m Karthik, a Computer Science graduate focused on AI automation, machine learning, and real-world systems. My work combines data, engineering, and intelligent workflows to solve practical problems across automation, evaluation, computer vision, and predictive systems."
            />

            <div className="grid gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Card className="rounded-3xl border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl bg-slate-100 p-3">
                            <Icon className="h-6 w-6 text-slate-900" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-950">
                              {item.title}
                            </h3>
                            <p className="mt-2 leading-7 text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
              eyebrow="Core Stack"
              title="A focused stack for shipping AI systems with clarity"
              description="I keep the stack centered on tools that help me build, automate, deploy, and evaluate intelligent applications with speed and discipline."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects presented as impact stories"
            description="Instead of listing coursework, I focus on what each system solved, how it was built, and why it matters."
          />

          <div className="mt-12 grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Card className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white lg:border-b-0 lg:border-r">
                          <div className="flex h-full flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                                  Case Study {String(index + 1).padStart(2, "0")}
                                </p>
                              </div>
                              <h3 className="mt-5 text-3xl font-bold">
                                {project.title}
                              </h3>
                              <p className="mt-6 text-lg leading-8 text-slate-300">
                                {project.impact}
                              </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2">
                              {project.tech.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-8">
                          <div className="grid gap-6">
                            <div>
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Problem
                              </p>
                              <p className="mt-2 leading-7 text-slate-700">
                                {project.problem}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Solution
                              </p>
                              <p className="mt-2 leading-7 text-slate-700">
                                {project.solution}
                              </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 pt-1">
                              <a
                                href={project.demo}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                              >
                                Live Demo <ChevronRight className="h-4 w-4" />
                              </a>
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                              >
                                <Github className="h-4 w-4" /> View Code
                              </a>
                              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                                <BadgeCheck className="h-4 w-4" /> Recruiter-ready presentation
                              </div>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5">
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Why it stands out
                              </p>
                              <p className="mt-2 leading-7 text-slate-700">
                                This project shows practical engineering, applied problem solving, and the ability to turn technical ideas into measurable outcomes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="border-y border-slate-200 bg-slate-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionTitle
              eyebrow="Experience"
              title="Foundation built through internships and hands-on work"
              description="My experience combines web development, user-focused thinking, machine learning fundamentals, and practical delivery in collaborative environments."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {experience.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="h-full rounded-[2rem] border border-slate-200 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <CardContent className="p-8">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        {item.period}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-950">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-600">
                        {item.company}
                      </p>
                      <div className="mt-6 space-y-3">
                        {item.points.map((point) => (
                          <div key={point} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
                            <p className="text-slate-700">{point}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <SectionTitle
                eyebrow="Why Me"
                title="What makes me valuable to a team"
                description="I bring a builder mindset: I don’t just experiment with models — I create systems that people can use, workflows that teams can trust, and solutions that create measurable impact."
              />

              <div className="mt-8 grid gap-4">
                {differentiators.map((line) => (
                  <div
                    key={line}
                    className="rounded-3xl border border-slate-200 p-5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-200/50">
              <CardContent className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Currently Exploring
                </p>
                <h3 className="mt-4 text-3xl font-bold">
                  The next layer of intelligent automation
                </h3>
                <div className="mt-8 space-y-4 text-slate-300">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    Claude and OpenAI-based workflow automation
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    LLM evaluation and response quality analysis
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    Applied ML systems for predictive and real-time decision support
                  </div>
                </div>
                <div className="mt-8 rounded-3xl bg-white/10 p-5 text-sm leading-7 text-slate-300">
                  I’m especially interested in roles across AI automation,
                  machine learning, data science, and applied intelligent systems engineering.
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="border-t border-slate-200 bg-slate-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Let’s build something valuable.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  I’m open to opportunities in AI automation, machine learning,
                  data science, and intelligent systems engineering.
                </p>
              </div>

              <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-8">
                  <div className="space-y-5">
                    <a
                      href="mailto:chtakur1@gmail.com"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                    >
                      <Mail className="h-5 w-5 text-slate-700" />
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-medium text-slate-900">chtakur1@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:+17347767941"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                    >
                      <Phone className="h-5 w-5 text-slate-700" />
                      <div>
                        <p className="text-sm text-slate-500">Phone</p>
                        <p className="font-medium text-slate-900">+1 (734) 776-7941</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/karthik-chalamalasetty"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                    >
                      <Linkedin className="h-5 w-5 text-slate-700" />
                      <div>
                        <p className="text-sm text-slate-500">LinkedIn</p>
                        <p className="font-medium text-slate-900">karthik-chalamalasetty</p>
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-400" />
                    </a>

                    <a
                      href="https://github.com/takur2001"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                    >
                      <Github className="h-5 w-5 text-slate-700" />
                      <div>
                        <p className="text-sm text-slate-500">GitHub</p>
                        <p className="font-medium text-slate-900">github.com/takur2001</p>
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-400" />
                    </a>
                  </div>

                  <Button className="mt-8 w-full rounded-2xl py-6 text-base shadow-lg shadow-slate-200/60">
                    Available for opportunities
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2025 Takur Sai Karthik Chalamalasetty</p>
        </div>
      </footer>
    </div>
  );
}

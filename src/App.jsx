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
  "Scala",
  "Spark",
  "PySpark",
  "Databricks",
  "Kafka",
  "Snowflake",
  "BigQuery",
  "TensorFlow",
  "PyTorch",
  "XGBoost",
  "LightGBM",
  "LLMs",
  "RAG",
  "Semantic Search",
  "Hugging Face",
  "MLflow",
  "Docker",
  "Kubernetes",
  "Vertex AI",
  "FastAPI",
];

const stats = [
  {
    value: "18%",
    label: "Fraud Detection Precision Gain",
    note: "LLM + RAG-based classification systems",
  },
  {
    value: "22%",
    label: "Manual Review Reduced",
    note: "Generative AI dispute summarization",
  },
  {
    value: "16%",
    label: "Latency Improvement",
    note: "Real-time risk scoring pipelines",
  },
];

const highlights = [
  {
    icon: Workflow,
    title: "LLM and RAG Systems",
    description:
      "Built production-grade LLM workflows, Retrieval-Augmented Generation pipelines, and embedding-based semantic search systems for fintech use cases.",
  },
  {
    icon: Brain,
    title: "Scalable ML Engineering",
    description:
      "Developed forecasting, anomaly detection, and predictive systems using Spark, Kafka, Databricks, LightGBM, and cloud-native ML platforms.",
  },
  {
    icon: Cpu,
    title: "MLOps and Deployment",
    description:
      "Deployed and monitored models using Kubernetes, MLflow, Vertex AI, Docker, and cloud services with focus on reliability, latency, and operational efficiency.",
  },
];

const projects = [
  {
    icon: Bot,
    title: "Autonomous Risk & Decision Intelligence System",
    impact:
      "Built an end-to-end AI system that automates fraud risk analysis, reducing manual decision effort and enabling scalable real-time workflows",
    tech: ["FastAPI", "Streamlit", "SQLite", "JWT", "LLM APIs"],
    problem:
      "Fraud and risk investigation workflows often rely on manual review of unstructured case descriptions, slowing down decisions and reducing consistency.",
    solution:
      "Engineered a full-stack AI system that processes unstructured case descriptions, extracts entities, assigns rule-based risk scores, and generates automated decision outputs through secure FastAPI APIs and a Streamlit dashboard.",
    standout:
      "Demonstrates end-to-end AI system design using LLMs, APIs, and real-time decision workflows for practical fraud risk analysis.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
  {
    icon: Orbit,
    title: "Automated Detection and Classification of Underwater Species",
    impact:
      "Achieved 80.82% precision and 76.86% mAP@0.5 on complex underwater datasets",
    tech: ["Python", "YOLOv8", "Deep Learning", "OpenCV"],
    problem:
      "Underwater environments create major visibility, lighting, and noise challenges that make species identification difficult and unreliable.",
    solution:
      "Built a real-time underwater object detection and segmentation system using YOLOv8, with preprocessing, augmentation, transfer learning, and feature engineering to improve robustness across difficult marine conditions.",
    standout:
      "Highlights strong computer vision expertise by solving real-world challenges like low visibility, noise, and complex underwater environments.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
  {
    icon: ShieldCheck,
    title: "Secure Drone Delivery System (Encryption & Threat Simulation)",
    impact: "Achieved 100% attack prevention with under 50 ms encryption latency",
    tech: ["Python", "Flask", "Cryptography", "Simulation", "Data Analysis"],
    problem:
      "Drone delivery systems need secure communication, delivery validation, and user authentication while maintaining performance in distributed operations.",
    solution:
      "Designed a multi-layer security framework using AES-256 encryption, SHA-256 hashing, OTP-based verification, and simulated attack analysis to protect communication and strengthen resilience.",
    standout:
      "Showcases secure system design using encryption, authentication, and attack simulation to ensure reliability in distributed systems.",
    repo: "https://github.com/takur2001",
    demo: "#contact",
  },
];

const experience = [
  {
    role: "AI/ML Engineer",
    company: "Glean",
    period: "Jun 2025 – Present | Remote, USA",
    points: [
      "Built LLM-based fraud risk classification workflows using Retrieval-Augmented Generation and prompt tuning, improving suspicious transaction detection precision by 18%.",
      "Developed transformer-based generative pipelines using Hugging Face to automate dispute summarization, reducing manual review workload by 22%.",
      "Implemented embedding-driven semantic search using FAISS vector indexing, enabling faster contextual retrieval across financial logs exceeding 2 million records monthly.",
      "Deployed scalable inference services using Kubernetes orchestration to support near real-time fraud monitoring across distributed cloud-hosted applications.",
      "Built experimentation workflows with MLflow and supported structured A/B testing of LLM outputs to improve reliability of AI-generated insights.",
      "Developed real-time credit risk scoring pipelines using Google Vertex AI, improving risk evaluation latency by 16%.",
    ],
  },
  {
    role: "ML Engineer",
    company: "ServiceNow",
    period: "Jan 2021 – Dec 2023 | Remote, India",
    points: [
      "Developed demand forecasting models using PySpark and LightGBM, improving weekly inventory planning accuracy by 20%.",
      "Built ETL pipelines using Azure Data Factory and Databricks, processing over 25 million transactional records for downstream model training.",
      "Implemented anomaly detection models using Scikit-learn, reducing order fulfillment disruptions by 15%.",
      "Designed batch and streaming pipelines using Apache Spark and Kafka for predictive analytics and operational decision workflows.",
      "Built analytical data models using BigQuery, improving reporting efficiency for planning and decision-making teams by 18%.",
      "Deployed ML models using Docker and Azure Machine Learning services, improving consistency across production forecasting and analytics use cases.",
    ],
  },
];

const differentiators = [
  "I build production-grade AI and ML systems, not just demo projects.",
  "I combine LLM workflows, RAG, and semantic search with scalable backend engineering.",
  "I work across the full lifecycle: data pipelines, model development, deployment, and monitoring.",
  "I focus on measurable business outcomes like precision, latency, efficiency, and operational impact.",
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
                  AI/ML Engineer
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
                AI/ML Engineer building{" "}
                <span className="bg-gradient-to-r from-slate-950 to-slate-500 bg-clip-text text-transparent">
                  production-grade ML, LLM, and RAG systems at scale
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                AI/ML Engineer with 4+ years of experience building
                production-grade machine learning and generative AI systems
                across fintech and retail supply chain domains. I specialize in
                LLM-powered applications, Retrieval-Augmented Generation(RAG),
                semantic search, scalable pipelines, and real-time inference systems,
                focusing on delivering measurable improvements in accuracy, latency, 
                and operational efficiency.
              </p>
              
              <p className="mt-4 text-sm text-slate-500">
                Focused on building real-world, production-ready AI systems with measurable impact across applications.
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
                  <Database className="h-4 w-4" /> Python • SQL • Spark
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4" /> LLMs • RAG • Semantic Search
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" /> Kubernetes • MLflow • Vertex AI
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
                        AI/ML Engineer
                      </h3>
                    </div>
                    <div className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                      4+ years experience
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="grid gap-4 text-sm text-slate-700">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <span className="font-semibold text-slate-950">
                          Domain:
                        </span>{" "}
                        Fintech and retail supply chain
                      </div>
                      <div className="flex justify-center text-slate-400">↓</div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <span className="font-semibold text-slate-950">
                          Systems:
                        </span>{" "}
                        LLM apps, RAG, forecasting, anomaly detection
                      </div>
                      <div className="flex justify-center text-slate-400">↓</div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <span className="font-semibold text-slate-950">
                          Platform:
                        </span>{" "}
                        Spark, Kafka, Kubernetes, MLflow, Vertex AI
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <BadgeCheck className="h-4 w-4 text-slate-900" /> Built to
                    communicate production impact and technical depth together
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Specialization</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        ML + GenAI
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm text-slate-500">Approach</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">
                        Production-first
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
              title="Built for real-world AI/ML engineering"
              description="Master of Science in Computer Science from Lawrence Technological University, focused on AI automation, machine learning, generative AI, and scalable production systems."
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
              title="A focused stack for shipping AI systems at scale"
              description="My toolkit spans data engineering, machine learning, generative AI, MLOps, and cloud deployment for production-grade systems."
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
            description="These projects reflect my focus on AI automation, fraud decisioning, computer vision, and security-driven engineering."
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
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                              >
                                <Github className="h-4 w-4" /> View Code
                              </a>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5">
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                Why it stands out
                              </p>
                              <p className="mt-2 leading-7 text-slate-700">
                                {project.standout}
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
              title="Production work across fintech and supply chain"
              description="My experience spans fraud intelligence, generative AI, semantic retrieval, forecasting, anomaly detection, and scalable ML delivery."
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
                description="I bring a production-first mindset and focus on building AI systems that are scalable, measurable, and operationally reliable."
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
                  Current Focus
                </p>
                <h3 className="mt-4 text-3xl font-bold">
                  Building reliable AI systems for production environments
                </h3>
                <div className="mt-8 space-y-4 text-slate-300">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    LLM-powered fraud risk workflows and intelligent decision systems
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    Embedding-driven semantic search and Retrieval-Augmented Generation
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    Scalable ML pipelines with Spark, Kafka, Kubernetes, and MLflow
                  </div>
                </div>
                <div className="mt-8 rounded-3xl bg-white/10 p-5 text-sm leading-7 text-slate-300">
                  I’m especially interested in AI/ML Engineer, Applied AI,
                  Machine Learning Engineer, and GenAI-focused roles where I can
                  build systems that deliver measurable business impact.
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
                  I’m open to opportunities in AI/ML engineering, generative AI,
                  machine learning systems, and production-scale intelligent platforms.
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
                        <p className="font-medium text-slate-900">
                          karthik@myjobsmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+17347767941"
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                    >
                      <Phone className="h-5 w-5 text-slate-700" />
                      <div>
                        <p className="text-sm text-slate-500">Phone</p>
                        <p className="font-medium text-slate-900">
                          +1 (734) 776-7941
                        </p>
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
                        <p className="font-medium text-slate-900">
                          karthik-chalamalasetty
                        </p>
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
                        <p className="font-medium text-slate-900">
                          github.com/takur2001
                        </p>
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

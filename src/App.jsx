import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const CONTACT = {
  email: "skarthikch1@gmail.com",
  phone: "+1 (248) 780-9904",
  phoneHref: "tel:+12487809904",
  linkedin: "https://www.linkedin.com/in/karthik-chalamalasetty",
  github: "https://github.com/takur2001",
  resume: "/Karthik_Resume.pdf",
};

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#systems", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { value: "9+", label: "Years in AI, ML & Data" },
  { value: "5", label: "Enterprise roles" },
  { value: "End-to-End", label: "Model lifecycle ownership" },
];

const EXPERTISE = [
  {
    icon: Sparkles,
    title: "Generative AI & RAG",
    description:
      "Production-oriented retrieval, grounding, prompt orchestration, embeddings, semantic search, and evaluation for enterprise AI applications.",
    tech: ["RAG", "LangChain", "FAISS", "Hugging Face", "Embeddings"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Feature engineering, model training, tuning, validation, explainability, packaging, deployment, and production support.",
    tech: ["Scikit-learn", "XGBoost", "LightGBM", "PyTorch", "TensorFlow"],
  },
  {
    icon: Network,
    title: "NLP & Document Intelligence",
    description:
      "Transformer-powered workflows for classification, sentiment analysis, semantic retrieval, document understanding, and multilingual text processing.",
    tech: ["BERT", "spaCy", "NLTK", "Transformers", "Semantic Search"],
  },
  {
    icon: Workflow,
    title: "MLOps & Deployment",
    description:
      "Reproducible model development with experiment tracking, CI/CD, containerization, orchestration, serving, monitoring, and controlled releases.",
    tech: ["MLflow", "DVC", "Docker", "Kubernetes", "Airflow"],
  },
  {
    icon: Cloud,
    title: "Cloud AI Platforms",
    description:
      "Cloud-native AI/ML engineering across AWS and Azure for training, serving, data workflows, observability, and production operations.",
    tech: ["AWS SageMaker", "Azure ML", "EC2", "S3", "Azure Monitor"],
  },
  {
    icon: ShieldCheck,
    title: "Explainable & Responsible AI",
    description:
      "Interpretability, risk-aware review, privacy-conscious handling, error analysis, model transparency, and human oversight for sensitive use cases.",
    tech: ["SHAP", "LIME", "Error Analysis", "Model Transparency"],
  },
];

const EXPERIENCE = [
  {
    company: "Elevance Health",
    location: "San Mateo, California, US",
    role: "AI/ML Engineer",
    period: "Dec 2025 — Present",
    project: "Enterprise Healthcare AI & Document Intelligence Platform",
    summary:
      "Designing and supporting production-oriented healthcare AI workflows spanning document ingestion, retrieval, grounded generation, evaluation, API integration, deployment, and observability.",
    points: [
      "Built RAG workflows with transformer and embedding models, FAISS semantic retrieval, and LangChain orchestration.",
      "Developed Python and FastAPI services with Pydantic request/response contracts for model and retrieval inference.",
      "Implemented checks for retrieval relevance, answer grounding, consistency, and failure modes.",
      "Supported Docker and Kubernetes deployment patterns, CI/CD checks, Azure Monitor telemetry, and production diagnostics.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "FAISS",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Azure ML",
      "MLflow",
    ],
  },
  {
    company: "TransUnion",
    location: "Illinois, United States",
    role: "ML Engineer",
    period: "Jul 2024 — Nov 2025",
    project: "Credit Risk & Fraud Decisioning ML Platform",
    summary:
      "Built production ML workflows for credit-risk scoring, fraud analysis, and predictive decisioning with reusable feature pipelines, explainability, experiment tracking, serving, and monitoring.",
    points: [
      "Built reusable Python, SQL, and PySpark feature pipelines for repeatable training and inference.",
      "Trained and compared classification models using Scikit-learn, XGBoost, and deep-learning frameworks.",
      "Applied SHAP and LIME to explain predictions and investigate influential risk factors.",
      "Managed experiments with MLflow/DVC and supported Docker/Kubernetes serving plus Prometheus/Grafana monitoring.",
    ],
    stack: [
      "Python",
      "PySpark",
      "Scikit-learn",
      "XGBoost",
      "MLflow",
      "DVC",
      "Docker",
      "Kubernetes",
      "AWS",
      "SHAP",
    ],
  },
  {
    company: "Vanguard",
    location: "Valley Forge, PA",
    role: "Data Scientist (ML)",
    period: "May 2022 — Jun 2024",
    project: "Financial Research NLP & Quantitative ML Analytics",
    summary:
      "Developed NLP and machine-learning workflows for financial research data, combining text processing, point-in-time datasets, predictive modeling, interpretability, and cloud-based execution.",
    points: [
      "Built pipelines for normalization, tokenization, embeddings, sentiment analysis, topic extraction, and document classification.",
      "Developed predictive models with cross-validation, walk-forward/backtesting, error analysis, and stability checks.",
      "Tracked experiments and artifacts with MLflow/DVC and automated workflows with Airflow and AWS Step Functions.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "MLflow",
      "Airflow",
      "SageMaker",
      "S3",
      "SHAP",
      "LIME",
    ],
  },
  {
    company: "Cognizant",
    location: "Bengaluru, India",
    role: "Data Scientist",
    period: "Sep 2018 — Dec 2021",
    project: "Customer Interaction NLP & Intelligent Service Analytics",
    summary:
      "Built NLP and predictive-analytics components for banking and insurance service workflows, progressing from classical text features to later transformer/BERT prototypes.",
    points: [
      "Prepared labeled customer-interaction datasets and reusable preprocessing workflows.",
      "Built intent-classification and sentiment models using Scikit-learn, XGBoost/LightGBM, spaCy, and NLTK.",
      "Exposed validated ML components through Flask APIs and supported AWS-based analytical workloads.",
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "spaCy", "NLTK", "Flask", "AWS"],
  },
  {
    company: "Luxoft India Pvt. Ltd.",
    location: "Bangalore, India",
    role: "Associate Data Scientist",
    period: "Apr 2017 — Aug 2018",
    project: "Customer Behavior, Churn & Experimentation Analytics",
    summary:
      "Supported structured data analysis, baseline ML modeling, experimentation, dashboarding, reusable Python modules, and reproducible analytical documentation.",
    points: [
      "Prepared datasets with Python and SQL and performed exploratory analysis and data-quality checks.",
      "Built baseline churn and customer-behavior models using classical classification techniques.",
      "Supported A/B testing and behavioral experimentation with cohort and comparison-metric analysis.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "AWS S3", "MySQL", "PostgreSQL"],
  },
];

const SYSTEMS = [
  {
    number: "01",
    icon: Layers3,
    eyebrow: "Healthcare AI",
    title: "Enterprise Document Intelligence",
    description:
      "A production-oriented AI workflow for document ingestion, parsing, normalization, metadata extraction, chunking, embeddings, semantic retrieval, grounded generation, evaluation, and application integration.",
    outcomes: [
      "Source-grounded retrieval",
      "Evaluation-driven refinement",
      "API-first integration",
      "Production observability",
    ],
    stack: ["PyTorch", "Hugging Face", "LangChain", "FAISS", "FastAPI", "Azure ML"],
  },
  {
    number: "02",
    icon: ShieldCheck,
    eyebrow: "Financial Services",
    title: "Credit Risk & Fraud Decisioning",
    description:
      "A repeatable ML platform pattern for feature generation, classification modeling, explainability, experiment tracking, model serving, workflow automation, and operational monitoring.",
    outcomes: [
      "Reusable feature pipelines",
      "Explainable decisioning",
      "Controlled model promotion",
      "Scalable serving",
    ],
    stack: ["Python", "PySpark", "XGBoost", "MLflow", "Docker", "Kubernetes"],
  },
  {
    number: "03",
    icon: Cpu,
    eyebrow: "Financial Research",
    title: "NLP & Quantitative ML Analytics",
    description:
      "NLP and predictive analytics workflows for research reports, market information, earnings transcripts, and portfolio-oriented datasets with reproducible experimentation and cloud execution.",
    outcomes: [
      "Text intelligence pipelines",
      "Point-in-time datasets",
      "Backtesting workflows",
      "Interpretable ML",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "Airflow", "SageMaker", "SHAP"],
  },
];

const SKILL_GROUPS = [
  {
    title: "Programming & Data",
    icon: Code2,
    items: ["Python", "SQL", "Pandas", "NumPy", "PySpark", "Apache Spark"],
  },
  {
    title: "ML & Deep Learning",
    icon: Brain,
    items: ["Scikit-learn", "XGBoost", "LightGBM", "PyTorch", "TensorFlow"],
  },
  {
    title: "GenAI & NLP",
    icon: Sparkles,
    items: ["RAG", "LangChain", "FAISS", "Hugging Face", "BERT", "spaCy", "NLTK"],
  },
  {
    title: "MLOps & Serving",
    icon: Workflow,
    items: ["MLflow", "DVC", "Airflow", "FastAPI", "Flask", "Docker", "Kubernetes"],
  },
  {
    title: "Cloud & Platforms",
    icon: Cloud,
    items: ["AWS SageMaker", "EC2", "S3", "Azure ML", "Azure Monitor", "Databricks", "Delta Lake"],
  },
  {
    title: "DevOps & Observability",
    icon: Database,
    items: ["GitHub Actions", "Jenkins", "Terraform", "Prometheus", "Grafana", "Model Monitoring"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TechChip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
      {children}
    </span>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const activeRole = EXPERIENCE[activeExperience];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070A12] text-slate-100 selection:bg-violet-400/30 selection:text-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#070A12]/85 shadow-2xl shadow-black/10 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Home">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-xl shadow-violet-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 via-cyan-400/10 to-transparent opacity-80" />
              <span className="relative text-sm font-bold tracking-[0.08em] text-white">KC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-white">
                Sai Karthik Chalamalasetty
              </p>
              <p className="mt-0.5 text-xs text-slate-500">Senior AI/ML Engineer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1.5 backdrop-blur-xl md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={CONTACT.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:border-violet-300/50 hover:bg-violet-400/15"
            >
              Resume <Download className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-200 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#070A12]/95 backdrop-blur-2xl md:hidden"
            >
              <div className="space-y-1 px-5 py-5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
                >
                  View Resume <Download className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden pt-28">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.16),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.10),transparent_28%),linear-gradient(180deg,#070A12_0%,#090D17_70%,#070A12_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="pointer-events-none absolute left-1/2 top-[-18rem] -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

          <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-5 pb-24 pt-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-20">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-2 text-xs font-semibold text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.9)]" />
                Open to senior AI/ML opportunities
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                Senior AI/ML Engineer · GenAI · RAG · NLP · MLOps
              </p>

              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                Building intelligent systems that{" "}
                <span className="bg-gradient-to-r from-violet-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  move from research to production.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                I design and deliver enterprise AI/ML systems across healthcare and
                financial services — combining machine learning, NLP, retrieval-augmented
                generation, cloud platforms, APIs, MLOps, explainability, and production
                observability.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Explore my experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  View resume <Download className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-violet-300" /> Python · PyTorch · FastAPI
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-300" /> RAG · LangChain · FAISS
                </span>
                <span className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-blue-300" /> AWS · Azure · Kubernetes
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-violet-600/10 to-cyan-400/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    AI System Blueprint
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: Database,
                      label: "Enterprise Data",
                      detail: "Documents · Transactions · Signals",
                    },
                    {
                      icon: Brain,
                      label: "Intelligence Layer",
                      detail: "ML · NLP · Embeddings · RAG",
                    },
                    {
                      icon: Rocket,
                      label: "Production Serving",
                      detail: "FastAPI · Docker · Kubernetes",
                    },
                    {
                      icon: BadgeCheck,
                      label: "Trust & Operations",
                      detail: "Evaluation · Explainability · Monitoring",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label}>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="group rounded-2xl border border-white/10 bg-[#0D1220]/80 p-4 transition hover:border-violet-400/25 hover:bg-white/[0.06]"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                              <Icon className="h-5 w-5 text-violet-200" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-white">{item.label}</p>
                              <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                            </div>
                            <ChevronRight className="ml-auto h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-violet-300" />
                          </div>
                        </motion.div>
                        {index < 3 ? (
                          <div className="mx-auto h-4 w-px bg-gradient-to-b from-violet-400/40 to-white/10" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Primary focus
                    </p>
                    <p className="mt-2 font-semibold text-white">Production AI</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Delivery model
                    </p>
                    <p className="mt-2 font-semibold text-white">End-to-end</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] sm:grid-cols-3">
              {METRICS.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`p-6 sm:p-7 ${
                    index < METRICS.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1.5 text-sm text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <SectionHeading
                eyebrow="About"
                title="Engineering AI with production depth."
                description="My work sits at the intersection of machine learning, enterprise software, cloud infrastructure, and applied AI. I focus on systems that are technically strong, explainable, observable, and practical to operate."
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Enterprise delivery",
                  text: "Experience across healthcare, credit risk, fraud, financial research, banking, insurance, and customer analytics.",
                },
                {
                  icon: Layers3,
                  title: "Full lifecycle",
                  text: "From data preparation and modeling to APIs, containerization, CI/CD, observability, and production support.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust built in",
                  text: "Explainability, privacy-aware handling, evaluation, robustness checks, and responsible-AI review for sensitive workflows.",
                },
                {
                  icon: Workflow,
                  title: "Cross-functional execution",
                  text: "Partnering with engineering, analytics, product, research, risk, compliance, and business stakeholders.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-[#0B0F1A] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.045]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-violet-200" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="Core Expertise"
              title="A focused stack for enterprise AI."
              description="The portfolio is intentionally organized around the capabilities senior AI/ML hiring teams look for: applied ML, GenAI, NLP, MLOps, cloud, explainability, and production engineering."
            />
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/25 hover:bg-white/[0.045]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                    <Icon className="h-5 w-5 text-violet-200" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <TechChip key={tech}>{tech}</TechChip>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="border-y border-white/10 bg-[#090D17]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <SectionHeading
                eyebrow="Experience"
                title="A career built from analytics to production AI."
                description="Select a role to see the work, systems, and technologies behind each stage of my experience."
              />
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
              <div className="space-y-2">
                {EXPERIENCE.map((item, index) => (
                  <button
                    key={`${item.company}-${item.period}`}
                    type="button"
                    onClick={() => setActiveExperience(index)}
                    className={`w-full rounded-2xl border p-5 text-left transition ${
                      activeExperience === index
                        ? "border-violet-400/30 bg-violet-400/[0.08]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            activeExperience === index ? "text-violet-200" : "text-white"
                          }`}
                        >
                          {item.company}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                      </div>
                      <ChevronRight
                        className={`mt-0.5 h-4 w-4 shrink-0 transition ${
                          activeExperience === index
                            ? "translate-x-1 text-violet-300"
                            : "text-slate-600"
                        }`}
                      />
                    </div>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-slate-600">
                      {item.period}
                    </p>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.article
                  key={activeExperience}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                        {activeRole.period}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                        {activeRole.role}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-300">
                        {activeRole.company}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{activeRole.location}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-400">
                      Enterprise AI / ML
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Project
                    </p>
                    <h4 className="mt-2 text-xl font-semibold text-white">
                      {activeRole.project}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {activeRole.summary}
                    </p>
                  </div>

                  <div className="mt-7 space-y-4">
                    {activeRole.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <div className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                        </div>
                        <p className="text-sm leading-7 text-slate-400">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {activeRole.stack.map((tech) => (
                      <TechChip key={tech}>{tech}</TechChip>
                    ))}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="systems" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="Selected Enterprise Work"
              title="Complex systems, presented clearly."
              description="Instead of generic project cards, this section highlights the kind of real enterprise AI/ML systems I have worked on and the engineering depth behind them."
            />
          </motion.div>

          <div className="mt-12 space-y-6">
            {SYSTEMS.map((system, index) => {
              const Icon = system.icon;
              return (
                <motion.article
                  key={system.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
                >
                  <div className="grid lg:grid-cols-[0.4fr_0.6fr]">
                    <div className="relative border-b border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.025] to-transparent p-7 lg:border-b-0 lg:border-r sm:p-8">
                      <div className="absolute right-6 top-5 text-6xl font-semibold tracking-tighter text-white/[0.035]">
                        {system.number}
                      </div>
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                          <Icon className="h-5 w-5 text-violet-200" />
                        </div>
                        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                          {system.eyebrow}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {system.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-7 sm:p-8">
                      <p className="text-sm leading-7 text-slate-400">{system.description}</p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {system.outcomes.map((outcome) => (
                          <div
                            key={outcome}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                          >
                            <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-300" />
                            {outcome}
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {system.stack.map((tech) => (
                          <TechChip key={tech}>{tech}</TechChip>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <SectionHeading
                eyebrow="Technical Stack"
                title="Tools I use to ship reliable AI."
                description="Grouped by engineering function so recruiters and technical reviewers can scan the stack quickly."
              />
            </motion.div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SKILL_GROUPS.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="rounded-3xl border border-white/10 bg-[#0B0F1A] p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                        <Icon className="h-4 w-4 text-violet-200" />
                      </div>
                      <h3 className="font-semibold text-white">{group.title}</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <TechChip key={item}>{item}</TechChip>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_38%)]" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04]">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-violet-300">
                    Contact
                  </p>
                  <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    Looking for an AI/ML engineer who can own the full system?
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                    I’m open to senior AI/ML, Machine Learning, Applied AI, GenAI, NLP,
                    and MLOps-focused opportunities where production quality and measurable
                    business value matter.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Start a conversation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href={CONTACT.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      Resume <Download className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#0B0F1A]/80 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <div className="space-y-3">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                        <Mail className="h-4 w-4 text-violet-200" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-600">Email</p>
                        <p className="truncate text-sm font-medium text-slate-200">
                          {CONTACT.email}
                        </p>
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-700 group-hover:text-violet-300" />
                    </a>

                    <a
                      href={CONTACT.phoneHref}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                        <Phone className="h-4 w-4 text-violet-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">Phone</p>
                        <p className="text-sm font-medium text-slate-200">{CONTACT.phone}</p>
                      </div>
                    </a>

                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                        <Linkedin className="h-4 w-4 text-violet-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">LinkedIn</p>
                        <p className="text-sm font-medium text-slate-200">
                          karthik-chalamalasetty
                        </p>
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-700 group-hover:text-violet-300" />
                    </a>

                    <a
                      href={CONTACT.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-violet-400/20 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                        <Github className="h-4 w-4 text-violet-200" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">GitHub</p>
                        <p className="text-sm font-medium text-slate-200">github.com/takur2001</p>
                      </div>
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-700 group-hover:text-violet-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Sai Karthik Chalamalasetty. Built for production-minded AI.</p>
          <div className="flex items-center gap-4">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="transition hover:text-slate-300">
              GitHub
            </a>
            <a href={`mailto:${CONTACT.email}`} className="transition hover:text-slate-300">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

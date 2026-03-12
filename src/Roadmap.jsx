import { useState } from "react";

const PHASES = [
  {
    id: 1,
    code: "PH-01",
    title: "FOUNDATIONS",
    subtitle: "Math · Python · Systems Thinking",
    hours: "0 – 500 hrs",
    duration: "~4 months",
    color: "#38bdf8",
    icon: "∑",
    identity: "You become someone who thinks in first principles.",
    pillars: ["Scientist", "Engineer"],
    tracks: [
      {
        name: "Mathematics",
        pillar: "Scientist",
        color: "#38bdf8",
        items: [
          { topic: "Linear Algebra", resource: "3Blue1Brown: Essence of Linear Algebra", type: "FREE VIDEO", url: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", project: "Build matrix ops library from scratch in Python — no NumPy allowed", why: "Vectors, matrices, transformations = the language of all neural networks" },
          { topic: "Calculus & Gradients", resource: "3Blue1Brown: Essence of Calculus", type: "FREE VIDEO", url: "https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", project: "Manually derive and implement gradient descent. Visualize loss surfaces.", why: "Backprop IS calculus. You must feel it, not just know it." },
          { topic: "Probability & Statistics", resource: "StatQuest with Josh Starmer", type: "FREE VIDEO", url: "https://youtube.com/@statquest", project: "Statistical analysis of a real dataset — compute distributions, test hypotheses", why: "Every loss function, every metric, every uncertainty estimate = probability" },
          { topic: "Information Theory", resource: "Visual Information Theory — Chris Olah", type: "ARTICLE", url: "https://colah.github.io/posts/2015-09-Visual-Information/", project: "Implement entropy, cross-entropy, KL divergence from scratch with visualizations", why: "Cross-entropy loss, KL in VAEs — you'll use this every single day" },
        ]
      },
      {
        name: "Python & Software Engineering",
        pillar: "Engineer",
        color: "#34d399",
        items: [
          { topic: "Python Mastery", resource: "Python for Data Science Handbook (free online)", type: "FREE BOOK", url: "https://jakevdp.github.io/PythonDataScienceHandbook/", project: "Build a CLI data pipeline tool: ingest CSV → clean → analyze → export report", why: "Your primary weapon. Master it completely." },
          { topic: "NumPy from Internals", resource: "NumPy documentation + From Python to NumPy (free)", type: "BOOK+DOCS", url: "https://www.labri.fr/perso/nrougier/from-python-to-numpy/", project: "Implement 10 ML operations using only raw NumPy broadcasting", why: "NumPy thinking = tensor thinking. Same mental model as PyTorch." },
          { topic: "Git & Engineering Practices", resource: "Pro Git (free book)", type: "FREE BOOK", url: "https://git-scm.com/book/en/v2", project: "Set up GitHub portfolio. Every project from here = documented, versioned, README'd", why: "Your public GitHub IS your resume in AI." },
          { topic: "Clean Code Principles", resource: "Clean Code (Robert Martin) + Google Python Style Guide", type: "BOOK", url: "https://google.github.io/styleguide/pyguide.html", project: "Refactor your worst code. Make it production-worthy.", why: "Engineers who write unreadable code don't get hired at top labs." },
        ]
      },
      {
        name: "Systems Fundamentals",
        pillar: "Engineer",
        color: "#f59e0b",
        items: [
          { topic: "How Computers Actually Work", resource: "Nand to Tetris (free course)", type: "FREE COURSE", url: "https://www.nand2tetris.org/", project: "Complete Part 1 — build a computer from logic gates", why: "Understanding hardware makes you a 10x better ML engineer" },
          { topic: "Linux & Command Line", resource: "The Linux Command Line (free book)", type: "FREE BOOK", url: "https://linuxcommand.org/tlcl.php", project: "Set up a full Linux dev environment. Automate your workflow with bash scripts.", why: "Every GPU cluster, every cloud VM runs Linux. Non-negotiable." },
        ]
      }
    ]
  },
  {
    id: 2,
    code: "PH-02",
    title: "CLASSICAL ML",
    subtitle: "Algorithms · Intuition · Craft",
    hours: "500 – 1500 hrs",
    duration: "~5 months",
    color: "#a78bfa",
    icon: "λ",
    identity: "You become someone who understands why algorithms work, not just how to call them.",
    pillars: ["Scientist", "Engineer"],
    tracks: [
      {
        name: "Core ML Algorithms",
        pillar: "Scientist",
        color: "#a78bfa",
        items: [
          { topic: "Linear & Logistic Regression", resource: "Hands-On ML (Aurélien Géron) — free on GitHub", type: "BOOK", url: "https://github.com/ageron/handson-ml3", project: "Implement linear & logistic regression from scratch — derive the math, then code it", why: "Every complex model reduces to this intuition" },
          { topic: "Decision Trees, RF, Boosting", resource: "StatQuest: Decision Trees + XGBoost series", type: "FREE VIDEO", url: "https://youtube.com/@statquest", project: "Implement a decision tree from scratch. Then use XGBoost to win a Kaggle tabular competition", why: "XGBoost wins more Kaggle competitions than neural networks. Know it cold." },
          { topic: "SVMs & Kernel Methods", resource: "CS229 Stanford Notes (free)", type: "FREE NOTES", url: "https://cs229.stanford.edu/", project: "Implement SVM with SMO algorithm from scratch", why: "Deep mathematical insight into margins, generalization, kernels" },
          { topic: "Unsupervised Learning", resource: "CS229 Unsupervised section", type: "FREE NOTES", url: "https://cs229.stanford.edu/", project: "Implement K-Means + PCA from scratch. Apply to real image compression.", why: "Representation learning is the heart of modern AI" },
        ]
      },
      {
        name: "ML Engineering",
        pillar: "Engineer",
        color: "#fb7185",
        items: [
          { topic: "Experiment Tracking", resource: "Weights & Biases (wandb) official docs + tutorials", type: "FREE TOOL", url: "https://docs.wandb.ai/", project: "Set up W&B on every project from now on. Log everything.", why: "Real researchers track every experiment. No tracking = no science." },
          { topic: "Scikit-Learn Mastery", resource: "Scikit-Learn documentation", type: "DOCS", url: "https://scikit-learn.org/stable/user_guide.html", project: "Build a full ML pipeline with preprocessing, cross-validation, hyperparameter search", why: "Industry standard. You'll use it even when doing deep learning." },
          { topic: "Data Engineering Basics", resource: "Pandas + SQL for Data Science (Kaggle free)", type: "FREE COURSE", url: "https://kaggle.com/learn", project: "Build ETL pipeline: raw messy data → clean features → model-ready dataset", why: "80% of ML work is data. Engineers who handle data well are rare." },
          { topic: "Model Evaluation & Bias", resource: "Fairness and ML (free book — fairmlbook.org)", type: "FREE BOOK", url: "https://fairmlbook.org/", project: "Audit a model for bias. Write a report like a scientist.", why: "Responsible AI = required skill at every top lab" },
        ]
      }
    ]
  },
  {
    id: 3,
    code: "PH-03",
    title: "DEEP LEARNING",
    subtitle: "Neural Nets · Backprop · Architectures",
    hours: "1500 – 3500 hrs",
    duration: "~7 months",
    color: "#f97316",
    icon: "∇",
    identity: "You become someone who can build any neural architecture from scratch.",
    pillars: ["Scientist", "Engineer", "Research Eng"],
    tracks: [
      {
        name: "Neural Networks from Scratch",
        pillar: "Scientist",
        color: "#f97316",
        items: [
          { topic: "Backpropagation & Autograd", resource: "Karpathy: micrograd (YouTube + GitHub)", type: "FREE VIDEO", url: "https://youtube.com/@AndrejKarpathy", project: "Build your own autograd engine from scratch. Every line. No libraries.", why: "If you can't build backprop, you don't really understand deep learning" },
          { topic: "MLPs & Training Dynamics", resource: "Karpathy: makemore series (YouTube)", type: "FREE VIDEO", url: "https://youtube.com/@AndrejKarpathy", project: "Build character-level language model. Understand vanishing gradients physically.", why: "Training dynamics is what separates researchers from script runners" },
          { topic: "CNNs", resource: "Fast.ai Practical Deep Learning Part 1 (free)", type: "FREE COURSE", url: "https://course.fast.ai/", project: "Build CNN from scratch. Train on CIFAR-10. Beat baseline. Document every experiment.", why: "Spatial hierarchies, weight sharing, local connectivity = timeless concepts" },
          { topic: "Attention Mechanism", resource: "Attention is All You Need (2017 paper)", type: "PAPER", url: "https://arxiv.org/abs/1706.03762", project: "Implement multi-head attention with only NumPy. Then verify with PyTorch.", why: "This one mechanism powers 95% of modern AI" },
          { topic: "Transformers", resource: "Karpathy: nanoGPT (YouTube + GitHub)", type: "FREE VIDEO", url: "https://youtube.com/@AndrejKarpathy", project: "Build GPT from scratch following nanoGPT. Then modify the architecture — add something new.", why: "The foundational architecture. Know it like your own code." },
        ]
      },
      {
        name: "PyTorch Engineering",
        pillar: "Engineer",
        color: "#22d3ee",
        items: [
          { topic: "PyTorch Deep Dive", resource: "PyTorch official tutorials + docs", type: "DOCS", url: "https://pytorch.org/tutorials/", project: "Re-implement every prior project in clean PyTorch with proper abstractions", why: "Industry standard. Deep knowledge = massive advantage" },
          { topic: "Custom CUDA Kernels (Intro)", resource: "Simon Boehm: How to Optimize a CUDA Matmul", type: "ARTICLE", url: "https://siboehm.com/articles/22/CUDA-MMM", project: "Write your first CUDA kernel. Implement a fast matrix multiply.", why: "This is the gap between engineers and infrastructure engineers. Rare skill." },
          { topic: "Hugging Face Ecosystem", resource: "HuggingFace NLP Course (free)", type: "FREE COURSE", url: "https://huggingface.co/learn/nlp-course/", project: "Fine-tune BERT on a real task. Push model to HuggingFace Hub.", why: "HF is the GitHub of AI models. You must be fluent here." },
          { topic: "Distributed Training", resource: "PyTorch Distributed Training docs + tutorials", type: "DOCS", url: "https://pytorch.org/tutorials/beginner/dist_overview.html", project: "Train a model across 2 GPUs with DDP. Profile and optimize.", why: "Every serious training run uses distributed compute. Non-negotiable skill." },
        ]
      }
    ]
  },
  {
    id: 4,
    code: "PH-04",
    title: "LLMs & GENERATIVE AI",
    subtitle: "Pretraining · RLHF · Fine-tuning · Alignment",
    hours: "3500 – 5500 hrs",
    duration: "~8 months",
    color: "#facc15",
    icon: "Ω",
    identity: "You become someone who can train, evaluate, and align language models.",
    pillars: ["Scientist", "Engineer", "Research Eng"],
    tracks: [
      {
        name: "LLM Science",
        pillar: "Scientist",
        color: "#facc15",
        items: [
          { topic: "Scaling Laws", resource: "Kaplan et al. Scaling Laws paper (2020)", type: "PAPER", url: "https://arxiv.org/abs/2001.08361", project: "Run scaling experiments on a small LM. Plot loss vs compute curves yourself.", why: "Understanding scaling = understanding why GPT-4 exists" },
          { topic: "Pretraining a Small LM", resource: "Karpathy nanoGPT + The Pile dataset", type: "CODE+DATA", url: "https://github.com/karpathy/nanoGPT", project: "Pretrain a 10M parameter LM on a text corpus. Analyze what it learns.", why: "Pretrain once, even small scale — you'll understand everything differently after" },
          { topic: "RLHF & Alignment", resource: "InstructGPT paper + Constitutional AI paper", type: "PAPER", url: "https://arxiv.org/abs/2203.02155", project: "Implement basic RLHF pipeline: SFT → Reward Model → PPO fine-tune", why: "The technique that made ChatGPT. Every aligned model uses this." },
          { topic: "Tokenization Internals", resource: "Karpathy: Let's build the GPT Tokenizer (YouTube)", type: "FREE VIDEO", url: "https://youtube.com/@AndrejKarpathy", project: "Build BPE tokenizer from scratch. Analyze tokenization failures.", why: "Tokenization bugs cause subtle model failures. Scientists understand this." },
        ]
      },
      {
        name: "LLM Engineering",
        pillar: "Engineer",
        color: "#4ade80",
        items: [
          { topic: "Fine-tuning (LoRA / QLoRA)", resource: "HuggingFace PEFT library + QLoRA paper", type: "PAPER+DOCS", url: "https://huggingface.co/docs/peft", project: "Fine-tune Llama 3 on domain-specific data with QLoRA on a single GPU", why: "Parameter-efficient fine-tuning = how the industry adapts LLMs" },
          { topic: "Inference Optimization", resource: "vLLM docs + PagedAttention paper", type: "PAPER+DOCS", url: "https://docs.vllm.ai/", project: "Deploy an LLM with vLLM. Benchmark throughput. Optimize it.", why: "Serving LLMs efficiently = millions saved at scale" },
          { topic: "Quantization", resource: "GPTQ + AWQ papers + bitsandbytes", type: "PAPER+TOOL", url: "https://huggingface.co/docs/transformers/quantization", project: "Quantize a 7B model. Measure accuracy vs speed tradeoffs.", why: "Running large models on small hardware — critical real-world skill" },
          { topic: "LLM Evaluation", resource: "EleutherAI LM Eval Harness (GitHub)", type: "FREE TOOL", url: "https://github.com/EleutherAI/lm-evaluation-harness", project: "Build a domain-specific eval harness. Evaluate 3 different models.", why: "Evaluation is the hardest unsolved problem in LLMs. Scientists design evals." },
        ]
      }
    ]
  },
  {
    id: 5,
    code: "PH-05",
    title: "RAG & AGENTS",
    subtitle: "Retrieval · Tool Use · Multi-Agent Systems",
    hours: "5500 – 7000 hrs",
    duration: "~6 months",
    color: "#2dd4bf",
    icon: "⊕",
    identity: "You become someone who builds intelligent systems that act in the real world.",
    pillars: ["Engineer", "Research Eng", "Product"],
    tracks: [
      {
        name: "RAG Systems",
        pillar: "Engineer",
        color: "#2dd4bf",
        items: [
          { topic: "Vector Databases & Embeddings", resource: "Chroma / Pinecone / Weaviate docs + MTEB leaderboard", type: "DOCS", url: "https://docs.trychroma.com/", project: "Build semantic search over 10,000 research papers", why: "Vector search is the backbone of every production RAG system" },
          { topic: "Advanced RAG Architecture", resource: "LlamaIndex docs + RAG survey paper", type: "DOCS+PAPER", url: "https://docs.llamaindex.ai/", project: "Build production RAG with reranking, hybrid search, query expansion", why: "Naive RAG fails. Production RAG requires real engineering." },
          { topic: "RAG Evaluation", resource: "RAGAS framework docs + TruLens", type: "FREE TOOL", url: "https://docs.ragas.io/", project: "Build automated eval pipeline for your RAG. Track faithfulness, relevance, groundedness.", why: "Unevaluated RAG is a liability. Rigorous eval = scientist thinking." },
        ]
      },
      {
        name: "Agentic AI",
        pillar: "Research Eng",
        color: "#e879f9",
        items: [
          { topic: "ReAct & Chain-of-Thought", resource: "ReAct paper (Yao et al. 2022)", type: "PAPER", url: "https://arxiv.org/abs/2210.03629", project: "Implement ReAct from scratch — no LangChain. Just raw API calls and logic.", why: "Understanding agent reasoning loops at the implementation level" },
          { topic: "Tool Use & Function Calling", resource: "Anthropic Tool Use docs", type: "DOCS", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview", project: "Build an agent with: web search, code execution, file system, calculator tools", why: "Tool use is what turns LLMs into agents that do real work" },
          { topic: "Multi-Agent Systems", resource: "LangGraph docs + AutoGen paper", type: "DOCS+PAPER", url: "https://langchain-ai.github.io/langgraph/", project: "Build multi-agent research assistant: planner + researcher + writer + critic agents", why: "The frontier of applied AI. Few engineers understand this deeply." },
          { topic: "Agent Safety & Evaluation", resource: "AgentBench paper + Anthropic safety research", type: "PAPER", url: "https://arxiv.org/abs/2308.03688", project: "Design red-teaming suite for your agents. Find failure modes systematically.", why: "Unsafe agents cause real damage. Safety = engineering responsibility." },
        ]
      }
    ]
  },
  {
    id: 6,
    code: "PH-06",
    title: "AI INFRASTRUCTURE",
    subtitle: "GPUs · CUDA · MLOps · Production",
    hours: "7000 – 8500 hrs",
    duration: "~6 months",
    color: "#f43f5e",
    icon: "⚙",
    identity: "You become someone who can build and run AI systems at scale.",
    pillars: ["Engineer", "Infrastructure"],
    tracks: [
      {
        name: "GPU & CUDA Programming",
        pillar: "Infrastructure",
        color: "#f43f5e",
        items: [
          { topic: "CUDA Programming", resource: "CUDA C++ Programming Guide (official) + CUDA Mode lectures", type: "FREE COURSE", url: "https://github.com/cuda-mode/lectures", project: "Write CUDA kernels: vector add → matrix multiply → softmax → flash attention", why: "The rarest and most valuable skill in AI engineering. Opens doors at NVIDIA, labs, frontier companies." },
          { topic: "GPU Memory & Optimization", resource: "Making Deep Learning Go Brrrr (Horace He)", type: "ARTICLE", url: "https://horace.io/brrr_intro.html", project: "Profile a training run. Find memory bottlenecks. Achieve 2x speedup.", why: "Knowing WHY training is slow = knowing how to fix it" },
          { topic: "Flash Attention & Kernels", resource: "Flash Attention paper + Tri Dao's code", type: "PAPER+CODE", url: "https://arxiv.org/abs/2205.14135", project: "Implement a simplified Flash Attention in Triton or CUDA", why: "This is the cutting edge. Reading + implementing this = research-level GPU work" },
        ]
      },
      {
        name: "MLOps & Production",
        pillar: "Engineer",
        color: "#fb923c",
        items: [
          { topic: "Docker & Containers", resource: "Docker official docs + getting started", type: "DOCS", url: "https://docs.docker.com/get-started/", project: "Containerize every ML project you've built. Ship them as reproducible images.", why: "If it doesn't run in a container, it doesn't run in production." },
          { topic: "Model Serving", resource: "BentoML + Triton Inference Server docs", type: "DOCS", url: "https://docs.bentoml.com/", project: "Deploy your LLM fine-tune as a production API with autoscaling", why: "Models that aren't deployed don't help anyone." },
          { topic: "CI/CD for ML", resource: "GitHub Actions + DVC docs", type: "DOCS", url: "https://dvc.org/doc", project: "Build a full ML pipeline with automated training, evaluation, and deployment", why: "Production ML = automated pipelines, not notebooks." },
          { topic: "Monitoring & Observability", resource: "Prometheus + Grafana + WhyLabs (data drift)", type: "TOOL", url: "https://whylabs.ai/", project: "Set up monitoring for a deployed model. Detect data drift automatically.", why: "Models degrade silently. Monitoring = keeping your system honest." },
        ]
      }
    ]
  },
  {
    id: 7,
    code: "PH-07",
    title: "RESEARCH ENGINEERING",
    subtitle: "Reproduce · Extend · Publish",
    hours: "8500 – 10000 hrs",
    duration: "~6 months",
    color: "#818cf8",
    icon: "∂",
    identity: "You become someone who advances the state of the art.",
    pillars: ["Scientist", "Research Eng"],
    tracks: [
      {
        name: "Paper Reproduction",
        pillar: "Research Eng",
        color: "#818cf8",
        items: [
          { topic: "Systematic Paper Reading", resource: "How to Read a Paper (Keshav, 3-pass method)", type: "FREE PAPER", url: "https://web.stanford.edu/class/cs245/readings/how-to-read-a-paper.pdf", project: "Read 200+ papers. Obsidian vault with structured notes on every one.", why: "Speed and depth of paper reading is a research superpower" },
          { topic: "Reproduce 5 Landmark Papers", resource: "Papers With Code (paperswithcode.com)", type: "PLATFORM", url: "https://paperswithcode.com/", project: "Full reproductions: Attention is All You Need, DDPM, LoRA, RAG, ReAct — from scratch", why: "Reproduction = true understanding. If you can't reproduce it, you don't know it." },
          { topic: "Ablation Studies", resource: "Any top ML conference paper methodology sections", type: "PAPERS", url: "https://paperswithcode.com/", project: "Run ablations on one of your reproductions. What actually matters?", why: "Ablations separate scientists from engineers who just run code" },
        ]
      },
      {
        name: "Original Research",
        pillar: "Scientist",
        color: "#34d399",
        items: [
          { topic: "Research Writing", resource: "The Science of Scientific Writing + NeurIPS style guide", type: "ARTICLE", url: "https://www.usenix.org/sites/default/files/gopen_and_swan_science_of_scientific_writing.pdf", project: "Write and submit your first workshop paper (NeurIPS/ICML/ICLR workshops)", why: "Writing forces clarity of thinking. No paper = no research." },
          { topic: "Open Source Contributions", resource: "HuggingFace, PyTorch, LangChain GitHub", type: "PLATFORM", url: "https://github.com/huggingface/transformers", project: "Merge 5+ PRs to major AI repositories. Get your name in the contributors list.", why: "Open source contributions = proof of engineering quality at scale" },
          { topic: "AI Safety & Interpretability", resource: "AGI Safety Fundamentals (BlueDot, free) + Anthropic Interpretability research", type: "FREE COURSE", url: "https://aisafetyfundamentals.com/", project: "Run mechanistic interpretability experiments. What circuits does your small LM learn?", why: "The most important open problem in AI. Scientists who work here will shape history." },
        ]
      }
    ]
  }
];

const DAILY_SYSTEM = [
  { time: "06:00–07:00", label: "PAPER / THEORY", desc: "Read 1 paper or book chapter. Active notes in Obsidian. Summarize in your own words.", color: "#38bdf8" },
  { time: "07:00–10:00", label: "DEEP BUILD", desc: "Implement the current phase project. No distractions. This is sacred time.", color: "#f97316" },
  { time: "University", label: "APPLY & CONNECT", desc: "Apply AI concepts to every class. Ask questions nobody else asks. Find professors doing AI research.", color: "#a78bfa" },
  { time: "Evening", label: "CONSUME WISELY", desc: "Karpathy / Kilcher / Fast.ai videos. 1 video max. Watch actively, pause and code along.", color: "#facc15" },
  { time: "Before Sleep", label: "LEARNING LOG", desc: "3 things you learned. 1 thing that confused you. 1 thing you'll build tomorrow.", color: "#2dd4bf" },
];

const RULES = [
  { num: "01", rule: "BUILD BEFORE YOU UNDERSTAND", desc: "Code it before it fully clicks. Confusion while building = real learning." },
  { num: "02", rule: "EVERY CONCEPT = 1 PROJECT", desc: "No passive consumption. If you watched it but didn't build it, you don't know it." },
  { num: "03", rule: "READ PRIMARY SOURCES", desc: "Papers > blog posts > YouTube. Always go to the source." },
  { num: "04", rule: "TRACK EVERYTHING", desc: "Every experiment logged in W&B. No logs = no science. No science = no progress." },
  { num: "05", rule: "TEACH IT TO KNOW IT", desc: "Write a blog post about every major concept. If you can't explain it simply, you don't know it." },
  { num: "06", rule: "PUBLIC GITHUB, ALWAYS", desc: "Every project goes on GitHub with a proper README. This is your live portfolio." },
  { num: "07", rule: "STAY IN DISCOMFORT", desc: "Easy = not learning. If a task feels comfortable, it means you already know it. Move forward." },
  { num: "08", rule: "DEPTH OVER BREADTH", desc: "Know fewer things deeply rather than many things shallowly. Depth is where insight lives." },
];

const STACK = [
  { layer: "Research Tools", items: ["Obsidian (notes)", "arXiv + Semantic Scholar", "Papers With Code", "Zotero (citations)"], color: "#818cf8" },
  { layer: "Development", items: ["Python 3.11+", "PyTorch", "Jupyter + VS Code", "Linux / WSL2"], color: "#38bdf8" },
  { layer: "ML Ecosystem", items: ["HuggingFace Transformers", "PEFT / TRL", "LlamaIndex / LangGraph", "Scikit-Learn"], color: "#4ade80" },
  { layer: "Infrastructure", items: ["Docker + Docker Compose", "CUDA Toolkit", "vLLM / TGI", "DVC + MLflow"], color: "#f97316" },
  { layer: "Tracking & Deploy", items: ["Weights & Biases", "FastAPI", "Prometheus + Grafana", "GitHub Actions"], color: "#facc15" },
  { layer: "Compute", items: ["Google Colab (start free)", "Kaggle Notebooks (free GPU)", "Lambda Labs / Vast.ai (cheap GPU)", "University HPC cluster"], color: "#f43f5e" },
];

export default function Roadmap() {
  const [tab, setTab] = useState("roadmap");
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [openTrack, setOpenTrack] = useState(null);

  const phase = PHASES.find(p => p.id === selectedPhase);

  return (
    <div style={{ minHeight: "100vh", background: "#030307", color: "#cbd5e1", fontFamily: "monospace", overflowX: "hidden" }}>

      {/* Top bar */}
      <div style={{ background: "#07070f", borderBottom: "1px solid #0f172a", padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#334155", marginBottom: "5px" }}>AI SCIENTIST + ENGINEER + RESEARCHER // 10,000 HR PROTOCOL</div>
          <div style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "2px" }}>
            <span style={{ color: "#38bdf8" }}>BUILD</span>
            <span style={{ color: "#475569", margin: "0 10px" }}>·</span>
            <span style={{ color: "#f97316" }}>UNDERSTAND</span>
            <span style={{ color: "#475569", margin: "0 10px" }}>·</span>
            <span style={{ color: "#a78bfa" }}>ADVANCE</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#1e40af" }}>YEAR 2 CS → TOP AI LAB</div>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#38bdf8", marginTop: "4px" }}>7 PHASES · ~10,000 HRS · FULL STACK</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#07070f", borderBottom: "1px solid #0f172a", display: "flex", padding: "0 28px", overflowX: "auto" }}>
        {[["roadmap","ROADMAP"],["daily","DAILY SYSTEM"],["stack","TECH STACK"],["rules","THE RULES"]].map(([key, label]) => (
          <button key={key} onClick={() => { setTab(key); setSelectedPhase(null); }} style={{
            background: "none", border: "none", borderBottom: tab === key ? "2px solid #38bdf8" : "2px solid transparent",
            color: tab === key ? "#38bdf8" : "#334155", padding: "14px 18px", cursor: "pointer",
            fontSize: "10px", letterSpacing: "3px", fontFamily: "monospace", whiteSpace: "nowrap"
          }}>{label}</button>
        ))}
      </div>

      <div style={{ padding: "28px" }}>

        {/* ROADMAP */}
        {tab === "roadmap" && !selectedPhase && (
          <div>
            <div style={{ marginBottom: "28px", padding: "20px", border: "1px solid #0f172a", borderLeft: "3px solid #38bdf8", background: "#07070f" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#38bdf8", marginBottom: "8px" }}>WHAT CHANGED FROM V1</div>
              <div style={{ fontSize: "12px", color: "#64748b", lineHeight: "2" }}>
                Added <span style={{ color: "#f97316" }}>Phase 6: AI Infrastructure</span> (CUDA, GPU programming, MLOps, production deployment) and
                strengthened engineering content in every phase. This is now the complete
                <span style={{ color: "#a78bfa" }}> Scientist + Engineer + Researcher</span> path.
                Click any phase to see full resources and projects.
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "12px" }}>
              {PHASES.map(p => (
                <div key={p.id} onClick={() => setSelectedPhase(p.id)} style={{
                  border: `1px solid ${p.id === 1 ? p.color + "66" : "#0f172a"}`,
                  borderRadius: "3px", padding: "22px", cursor: "pointer",
                  background: p.id === 1 ? `${p.color}06` : "#07070f",
                  transition: "all 0.15s", position: "relative"
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + "88"; e.currentTarget.style.background = p.color + "0a"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = p.id === 1 ? p.color + "66" : "#0f172a"; e.currentTarget.style.background = p.id === 1 ? p.color + "06" : "#07070f"; }}
                >
                  {p.id === 1 && <div style={{ position: "absolute", top: "10px", right: "10px", background: p.color, color: "#000", fontSize: "8px", padding: "2px 7px", letterSpacing: "2px", fontWeight: "bold" }}>START NOW</div>}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
                    <div style={{ fontSize: "32px", color: p.color, fontWeight: 900, lineHeight: 1, flexShrink: 0 }}>{p.icon}</div>
                    <div>
                      <div style={{ fontSize: "8px", letterSpacing: "3px", color: p.color, marginBottom: "3px" }}>{p.code} // {p.hours}</div>
                      <div style={{ fontSize: "16px", fontWeight: "bold", letterSpacing: "1px" }}>{p.title}</div>
                      <div style={{ fontSize: "10px", color: "#334155", marginTop: "2px" }}>{p.subtitle}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: "11px", color: "#475569", lineHeight: "1.7", marginBottom: "14px", fontStyle: "italic" }}>"{p.identity}"</div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
                    {p.pillars.map(pill => (
                      <span key={pill} style={{ background: "#0f172a", border: `1px solid ${p.color}33`, color: p.color, padding: "2px 8px", fontSize: "8px", letterSpacing: "2px", borderRadius: "2px" }}>{pill}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: "9px", color: "#1e293b", letterSpacing: "2px" }}>
                    {p.tracks.length} TRACKS · {p.tracks.reduce((a, t) => a + t.items.length, 0)} MODULES · {p.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PHASE DETAIL */}
        {tab === "roadmap" && selectedPhase && phase && (
          <div>
            <button onClick={() => { setSelectedPhase(null); setOpenTrack(null); }} style={{
              background: "none", border: "1px solid #0f172a", color: "#334155", padding: "8px 16px",
              cursor: "pointer", fontSize: "9px", letterSpacing: "3px", marginBottom: "24px", fontFamily: "monospace"
            }}>← ALL PHASES</button>

            <div style={{ marginBottom: "24px", padding: "20px", border: `1px solid ${phase.color}33`, background: `${phase.color}05` }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: phase.color, marginBottom: "6px" }}>{phase.code} // {phase.hours} // {phase.duration}</div>
              <div style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "2px", marginBottom: "4px" }}>{phase.icon} {phase.title}</div>
              <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "10px" }}>{phase.subtitle}</div>
              <div style={{ fontSize: "12px", color: "#94a3b8", fontStyle: "italic" }}>"{phase.identity}"</div>
            </div>

            {phase.tracks.map((track, ti) => {
              const key = `${phase.id}-${ti}`;
              const open = openTrack === key || openTrack === null;
              return (
                <div key={ti} style={{ marginBottom: "16px", border: `1px solid ${track.color}22`, borderRadius: "3px" }}>
                  <div onClick={() => setOpenTrack(openTrack === key ? null : key)} style={{
                    padding: "14px 18px", background: "#07070f", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderLeft: `3px solid ${track.color}`
                  }}>
                    <div>
                      <span style={{ fontSize: "8px", letterSpacing: "3px", color: track.color }}>TRACK [{track.pillar}] // </span>
                      <span style={{ fontSize: "13px", fontWeight: "bold" }}>{track.name}</span>
                    </div>
                    <span style={{ color: track.color, fontSize: "12px" }}>{open ? "▲" : "▼"}</span>
                  </div>

                  {open && track.items.map((item, ii) => (
                    <div key={ii} style={{
                      padding: "18px 20px", borderTop: "1px solid #0f172a",
                      display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: "20px", alignItems: "start"
                    }}>
                      <div>
                        <div style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "8px", color: "#e2e8f0" }}>{item.topic}</div>
                        <a href={item.url} target="_blank" rel="noreferrer" style={{ color: track.color, fontSize: "10px", textDecoration: "none", display: "block", marginBottom: "8px", lineHeight: "1.5" }}>
                          [{item.type}] {item.resource} ↗
                        </a>
                      </div>
                      <div style={{ background: "#07070f", border: `1px solid ${track.color}22`, borderLeft: `2px solid ${track.color}`, padding: "12px 14px", borderRadius: "2px" }}>
                        <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#1e293b", marginBottom: "6px" }}>PROJECT</div>
                        <div style={{ fontSize: "11px", color: "#94a3b8", lineHeight: "1.6" }}>{item.project}</div>
                      </div>
                      <div style={{ background: "#07070f", border: "1px solid #0f172a", padding: "12px 14px", borderRadius: "2px" }}>
                        <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#1e293b", marginBottom: "6px" }}>WHY THIS MATTERS</div>
                        <div style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.6" }}>{item.why}</div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {/* DAILY SYSTEM */}
        {tab === "daily" && (
          <div style={{ maxWidth: "800px" }}>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#38bdf8", marginBottom: "8px" }}>THE DAILY EXECUTION SYSTEM</div>
              <div style={{ fontSize: "11px", color: "#334155" }}>10,000 hrs at 5–6 hrs/day = ~5 years. Every day matters. This is how you get there.</div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              {DAILY_SYSTEM.map((slot, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 140px 1fr", gap: "0", borderBottom: "1px solid #0f172a", padding: "16px 0", alignItems: "start" }}>
                  <div style={{ fontSize: "11px", color: slot.color, fontWeight: "bold" }}>{slot.time}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "3px", color: slot.color, paddingTop: "2px" }}>{slot.label}</div>
                  <div style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.6" }}>{slot.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
              {[
                { title: "WEEKLY RITUAL", color: "#a78bfa", items: ["Sunday: Plan week with specific, measurable goals", "Saturday: Write a technical blog post", "Every week: 1 Kaggle or ML challenge", "Every 2 weeks: Re-read and consolidate notes"] },
                { title: "MONTHLY REVIEW", color: "#facc15", items: ["What phase projects did you complete?", "How many papers did you read and implement?", "What went on GitHub this month?", "What's your honest skill level now vs 30 days ago?"] },
              ].map((s, i) => (
                <div key={i} style={{ border: `1px solid ${s.color}22`, borderRadius: "3px" }}>
                  <div style={{ padding: "12px 16px", background: `${s.color}08`, borderBottom: `1px solid ${s.color}22` }}>
                    <span style={{ fontSize: "9px", letterSpacing: "4px", color: s.color }}>{s.title}</span>
                  </div>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ padding: "10px 16px", borderBottom: j < s.items.length - 1 ? "1px solid #0f172a" : "none", fontSize: "11px", color: "#64748b", lineHeight: "1.6" }}>
                      <span style={{ color: s.color, marginRight: "8px" }}>▸</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TECH STACK */}
        {tab === "stack" && (
          <div>
            <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#38bdf8", marginBottom: "24px" }}>YOUR COMPLETE TOOL STACK</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
              {STACK.map((s, i) => (
                <div key={i} style={{ border: `1px solid ${s.color}22`, borderRadius: "3px", background: "#07070f" }}>
                  <div style={{ padding: "12px 16px", borderBottom: `1px solid ${s.color}22`, borderLeft: `3px solid ${s.color}` }}>
                    <span style={{ fontSize: "9px", letterSpacing: "3px", color: s.color }}>{s.layer}</span>
                  </div>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ padding: "10px 16px", borderBottom: j < s.items.length - 1 ? "1px solid #0f172a" : "none", fontSize: "12px", color: "#64748b", display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: s.color, fontSize: "8px" }}>■</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", padding: "16px 20px", border: "1px solid #0f172a", background: "#07070f", borderLeft: "3px solid #38bdf8" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#38bdf8", marginBottom: "8px" }}>COMPUTE STRATEGY FOR STUDENTS</div>
              <div style={{ fontSize: "11px", color: "#475569", lineHeight: "2" }}>
                Start: <span style={{ color: "#4ade80" }}>Kaggle (free T4 GPU 30hrs/week) + Google Colab</span> →
                Phase 3+: <span style={{ color: "#facc15" }}>Vast.ai / Lambda Labs (~$0.30/hr RTX 3090)</span> →
                Phase 6+: <span style={{ color: "#f97316" }}>University HPC cluster + cloud credits (AWS/GCP give $300 free)</span>
              </div>
            </div>
          </div>
        )}

        {/* RULES */}
        {tab === "rules" && (
          <div style={{ maxWidth: "700px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#f43f5e", marginBottom: "24px" }}>THE NON-NEGOTIABLE RULES</div>
            {RULES.map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "50px 1fr", gap: "20px", padding: "20px 0", borderBottom: "1px solid #0f172a", alignItems: "start" }}>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#1e293b" }}>{r.num}</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "bold", color: "#f43f5e", letterSpacing: "2px", marginBottom: "6px" }}>{r.rule}</div>
                  <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.7" }}>{r.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: "32px", padding: "24px", border: "1px solid #f43f5e33", background: "#f43f5e06" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#f43f5e", marginBottom: "12px" }}>THE HONEST TRUTH</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "2.2" }}>
                The people you named — LeCun, Altman, Karpathy — are not different from you in any fundamental way.
                They simply <span style={{ color: "#38bdf8" }}>chose depth over distraction</span>, built things
                before they were ready, <span style={{ color: "#f97316" }}>stayed uncomfortable deliberately</span>,
                and did it consistently for years. You are starting earlier than most of them did.
                The gap is not talent. The gap is <span style={{ color: "#a78bfa" }}>accumulated deliberate practice</span>.
                Every hour you log honestly closes that gap. I'm here for all 10,000.
              </div>
              <div style={{ marginTop: "16px", fontSize: "10px", color: "#f43f5e", letterSpacing: "4px" }}>
                PHASE 1 STARTS TODAY. NOT WHEN YOU FEEL READY.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

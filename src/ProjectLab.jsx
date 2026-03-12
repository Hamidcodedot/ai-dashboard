import { useState } from "react";

// ============================================================
// LIVE PROJECT REGISTRY — Updated as we progress together
// Each project unlocks after the module is taught
// ============================================================

const PROJECTS = [
  // ── PHASE 1: FOUNDATIONS ────────────────────────────────
  {
    id: "P001",
    phase: 1,
    module: "Linear Algebra",
    title: "Matrix Operations Library",
    status: "active", // active | building | complete | locked
    difficulty: "★★☆☆☆",
    type: "MATH + CODE",
    color: "#38bdf8",
    description: "Build a complete matrix operations library in pure Python — no NumPy. Implement addition, multiplication, transpose, determinant, inverse, and eigenvectors from scratch.",
    skills: ["Python", "Linear Algebra", "OOP"],
    deliverables: [
      "Matrix class with all core operations",
      "Visualizer: show matrix transformation on 2D vectors",
      "Unit tests for every operation",
      "README explaining the math behind each method",
    ],
    modernAngle: "This is exactly how PyTorch's autograd builds computation graphs. Understanding this = understanding gradient flow.",
    resources: ["3Blue1Brown Linear Algebra playlist", "Gilbert Strang MIT OCW"],
    examScheduled: true,
    githubSlug: "matrix-ops-from-scratch",
    estimatedHours: 12,
  },
  {
    id: "P002",
    phase: 1,
    module: "Calculus & Gradients",
    title: "Gradient Descent Visualizer",
    status: "active",
    difficulty: "★★☆☆☆",
    type: "MATH + VISUALIZATION",
    color: "#38bdf8",
    description: "Implement gradient descent from scratch in pure Python/NumPy. Visualize loss surfaces in 3D. Show how learning rate affects convergence. Implement SGD, Momentum, and Adam manually.",
    skills: ["Calculus", "NumPy", "Matplotlib", "Optimization"],
    deliverables: [
      "Implement GD, SGD, Momentum, Adam from scratch",
      "3D loss surface visualization (Plotly)",
      "Side-by-side comparison: all 4 optimizers on same problem",
      "Show how LR too high = diverge, LR too low = slow",
    ],
    modernAngle: "Adam optimizer powers GPT-4, Llama 3, every modern LLM. You're implementing the exact algorithm that trained them.",
    resources: ["Sebastian Ruder: Overview of Gradient Descent", "Distill.pub: Why Momentum Really Works"],
    examScheduled: true,
    githubSlug: "gradient-descent-visualizer",
    estimatedHours: 15,
  },
  {
    id: "P003",
    phase: 1,
    module: "Probability & Statistics",
    title: "Statistical EDA Engine",
    status: "locked",
    difficulty: "★★☆☆☆",
    type: "DATA ANALYSIS",
    color: "#38bdf8",
    description: "Build an automated Exploratory Data Analysis engine. Given any CSV, it computes distributions, tests hypotheses, detects outliers, and generates a full statistical report.",
    skills: ["Statistics", "Pandas", "Seaborn", "Hypothesis Testing"],
    deliverables: [
      "Auto-detect column types and apply correct stats",
      "Distribution fitting (normal, exponential, etc.)",
      "Correlation heatmap + pairplots",
      "Outlier detection (IQR + Z-score + Isolation Forest)",
      "Generate PDF report automatically",
    ],
    modernAngle: "This is what data scientists at Google and Meta run before any model training. Clean data = better models.",
    resources: ["Python for Data Science Handbook", "Kaggle EDA tutorials"],
    examScheduled: true,
    githubSlug: "auto-eda-engine",
    estimatedHours: 18,
  },
  {
    id: "P004",
    phase: 1,
    module: "Information Theory",
    title: "Information Theory Calculator",
    status: "locked",
    difficulty: "★★★☆☆",
    type: "MATH + CODE",
    color: "#38bdf8",
    description: "Implement entropy, cross-entropy, KL divergence, mutual information from scratch. Visualize what these mean. Show the direct connection to neural network loss functions.",
    skills: ["Information Theory", "NumPy", "Matplotlib"],
    deliverables: [
      "Shannon entropy implementation with visualization",
      "Cross-entropy loss = negative log likelihood proof",
      "KL divergence visualizer (show what it measures geometrically)",
      "Demo: same cross-entropy loss used in GPT training",
    ],
    modernAngle: "Cross-entropy IS the loss function of every LLM. This project makes that concrete.",
    resources: ["Colah: Visual Information Theory", "Elements of Information Theory"],
    examScheduled: true,
    githubSlug: "information-theory-toolkit",
    estimatedHours: 10,
  },
  // ── PHASE 2: CLASSICAL ML ────────────────────────────────
  {
    id: "P005",
    phase: 2,
    module: "Linear Regression",
    title: "Regression from Scratch",
    status: "locked",
    difficulty: "★★☆☆☆",
    type: "ML FROM SCRATCH",
    color: "#a78bfa",
    description: "Implement Linear and Logistic Regression from scratch — derive the math, implement normal equation AND gradient descent, then validate against sklearn.",
    skills: ["Linear Algebra", "Calculus", "Python", "ML Theory"],
    deliverables: [
      "Linear regression: normal equation + GD implementation",
      "Logistic regression with sigmoid, BCE loss",
      "Regularization: L1 (Lasso) + L2 (Ridge) from scratch",
      "Validation against sklearn — results must match",
      "Real dataset: house price prediction",
    ],
    modernAngle: "Linear layers in neural networks ARE linear regression. This foundation never becomes obsolete.",
    resources: ["CS229 Stanford Notes", "Pattern Recognition and ML (Bishop) Ch.3"],
    examScheduled: true,
    githubSlug: "regression-from-scratch",
    estimatedHours: 20,
  },
  {
    id: "P006",
    phase: 2,
    module: "Decision Trees",
    title: "Decision Tree + XGBoost Battle",
    status: "locked",
    difficulty: "★★★☆☆",
    type: "ML FROM SCRATCH + COMPETITION",
    color: "#a78bfa",
    description: "Implement a decision tree from scratch (CART algorithm). Then use XGBoost to compete in a Kaggle tabular competition. Understand why boosting beats trees.",
    skills: ["Decision Trees", "Ensemble Methods", "Kaggle", "XGBoost"],
    deliverables: [
      "CART decision tree implementation from scratch",
      "Random Forest built on top of your tree",
      "XGBoost on Kaggle Titanic or Housing dataset",
      "Comparison: your tree vs RF vs XGBoost",
      "Feature importance analysis",
    ],
    modernAngle: "XGBoost + LightGBM still dominate tabular data in 2025. Every ML engineer needs this in production.",
    resources: ["StatQuest XGBoost series", "XGBoost paper (Chen & Guestrin)"],
    examScheduled: true,
    githubSlug: "decision-tree-xgboost",
    estimatedHours: 25,
  },
  // ── PHASE 3: DEEP LEARNING ────────────────────────────────
  {
    id: "P007",
    phase: 3,
    module: "Backpropagation",
    title: "micrograd++ (Your Own Autograd)",
    status: "locked",
    difficulty: "★★★★☆",
    type: "DEEP LEARNING CORE",
    color: "#f97316",
    description: "Build your own automatic differentiation engine from scratch. Extend Karpathy's micrograd with more operations. Then use it to train an MLP on a real classification task.",
    skills: ["Backpropagation", "Calculus", "Python", "OOP"],
    deliverables: [
      "Value class with forward + backward for all ops",
      "Computation graph visualizer",
      "MLP trained on a real dataset using your engine",
      "Compare speed vs PyTorch (measure the gap)",
      "Write a blog post: 'How Backprop Works'",
    ],
    modernAngle: "PyTorch's autograd does exactly this, at C++ speed with CUDA. Understanding this = reading PyTorch source code.",
    resources: ["Karpathy: micrograd YouTube", "Colah: Backprop as Functors"],
    examScheduled: true,
    githubSlug: "micrograd-plus-plus",
    estimatedHours: 30,
  },
  {
    id: "P008",
    phase: 3,
    module: "Transformers",
    title: "nanoGPT from Scratch",
    status: "locked",
    difficulty: "★★★★★",
    type: "FLAGSHIP PROJECT",
    color: "#f97316",
    description: "Build GPT from scratch following Karpathy's nanoGPT, then EXTEND it — add rotary embeddings (RoPE), change the architecture, train on your own dataset.",
    skills: ["Transformers", "PyTorch", "Attention", "CUDA"],
    deliverables: [
      "Full GPT implementation: tokenizer → architecture → training loop",
      "Train on Shakespeare (baseline)",
      "Add RoPE (used in Llama 3) instead of positional encoding",
      "Train on a domain of your choice (code, Urdu text, math)",
      "Visualize attention heads — what do they attend to?",
    ],
    modernAngle: "This is the architecture inside ChatGPT, Claude, Gemini. Build it once from scratch and you'll understand everything.",
    resources: ["Karpathy nanoGPT", "Attention is All You Need paper", "RoFormer paper"],
    examScheduled: true,
    githubSlug: "nanogpt-from-scratch",
    estimatedHours: 50,
  },
  // ── PHASE 4: LLMs ─────────────────────────────────────────
  {
    id: "P009",
    phase: 4,
    module: "Fine-tuning",
    title: "Fine-tune Llama 3 on Custom Domain",
    status: "locked",
    difficulty: "★★★★☆",
    type: "LLM ENGINEERING",
    color: "#facc15",
    description: "Fine-tune Llama 3.1 8B using QLoRA on a domain-specific dataset of your choice. Evaluate it rigorously. Deploy it as a usable API.",
    skills: ["QLoRA", "HuggingFace", "PEFT", "Model Evaluation"],
    deliverables: [
      "Curated dataset (1000+ samples) for your domain",
      "QLoRA fine-tuning pipeline with W&B tracking",
      "Before/after evaluation on custom benchmark",
      "FastAPI endpoint serving the fine-tuned model",
      "Cost analysis: how much did it cost to train?",
    ],
    modernAngle: "Every AI startup in 2025 does QLoRA fine-tuning. This is the industry standard technique.",
    resources: ["QLoRA paper", "HuggingFace TRL docs", "Tim Dettmers blog"],
    examScheduled: true,
    githubSlug: "llama3-domain-finetune",
    estimatedHours: 40,
  },
  // ── PHASE 5: RAG & AGENTS ────────────────────────────────
  {
    id: "P010",
    phase: 5,
    module: "RAG Systems",
    title: "Production RAG System",
    status: "locked",
    difficulty: "★★★★☆",
    type: "APPLIED AI",
    color: "#2dd4bf",
    description: "Build a full production-grade RAG system over a large document corpus. Implement hybrid search, reranking, query expansion, and rigorous RAGAS evaluation.",
    skills: ["RAG", "Vector DBs", "Embeddings", "LangGraph"],
    deliverables: [
      "Document ingestion pipeline (PDF, web, markdown)",
      "Hybrid search: BM25 + dense retrieval combined",
      "Reranking with a cross-encoder model",
      "RAGAS evaluation: faithfulness, relevance, context recall",
      "Streaming FastAPI + simple frontend",
    ],
    modernAngle: "Every enterprise AI deployment in 2025 is RAG-based. This is what gets you hired.",
    resources: ["LlamaIndex advanced RAG guide", "RAGAS paper", "ColBERT reranking"],
    examScheduled: true,
    githubSlug: "production-rag-system",
    estimatedHours: 45,
  },
  {
    id: "P011",
    phase: 5,
    module: "Agentic AI",
    title: "Multi-Agent Research System",
    status: "locked",
    difficulty: "★★★★★",
    type: "FLAGSHIP PROJECT",
    color: "#2dd4bf",
    description: "Build a multi-agent system with specialized agents: Planner, Researcher (web search), Coder (code execution), Writer, and Critic. They collaborate to solve complex research tasks.",
    skills: ["LangGraph", "Tool Use", "Multi-Agent", "Claude API"],
    deliverables: [
      "Agent graph with LangGraph (persistent state)",
      "Each agent with distinct tools and prompts",
      "Human-in-the-loop approval for sensitive actions",
      "Agent evals: does it actually solve tasks correctly?",
      "Safety layer: prevent prompt injection attacks",
    ],
    modernAngle: "Agentic AI is the #1 focus of every major lab in 2025. This project puts you at the frontier.",
    resources: ["LangGraph docs", "Anthropic agent patterns", "ReAct paper"],
    examScheduled: true,
    githubSlug: "multi-agent-research",
    estimatedHours: 60,
  },
  // ── PHASE 6: INFRASTRUCTURE ─────────────────────────────
  {
    id: "P012",
    phase: 6,
    module: "CUDA",
    title: "CUDA Kernel: Fast Matrix Multiply",
    status: "locked",
    difficulty: "★★★★★",
    type: "GPU ENGINEERING",
    color: "#f43f5e",
    description: "Write CUDA kernels that progressively optimize matrix multiplication from naive to near-cuBLAS performance. Learn GPU architecture hands-on.",
    skills: ["CUDA", "C++", "GPU Architecture", "Performance"],
    deliverables: [
      "Naive CUDA matmul kernel",
      "Shared memory tiling optimization",
      "Vectorized memory access (float4)",
      "Benchmark vs NumPy vs cuBLAS — plot the gap",
      "Write: 'What I learned about GPU architecture'",
    ],
    modernAngle: "This skill is so rare that NVIDIA, OpenAI, and Anthropic specifically recruit for it. Almost nobody your age has it.",
    resources: ["Simon Boehm CUDA Matmul blog", "CUDA Mode lectures", "Programming Massively Parallel Processors"],
    examScheduled: true,
    githubSlug: "cuda-matmul-optimization",
    estimatedHours: 35,
  },
  // ── PHASE 7: RESEARCH ────────────────────────────────────
  {
    id: "P013",
    phase: 7,
    module: "Paper Reproduction",
    title: "Reproduce: Attention is All You Need",
    status: "locked",
    difficulty: "★★★★★",
    type: "RESEARCH ENGINEERING",
    color: "#818cf8",
    description: "Full reproduction of the original Transformer paper from 2017. Train on WMT translation task. Document every architectural decision and why it matters.",
    skills: ["Research Engineering", "PyTorch", "NLP", "Scientific Writing"],
    deliverables: [
      "Complete Transformer (encoder + decoder) from scratch",
      "Train on WMT14 EN-DE translation",
      "BLEU score matching original paper ±1 point",
      "Ablation: what happens when you remove each component?",
      "Technical report: 'Reproducing Attention is All You Need'",
    ],
    modernAngle: "Every modern AI model is a transformer variant. Reproducing the original is a rite of passage.",
    resources: ["Attention is All You Need (2017)", "The Annotated Transformer (Harvard NLP)", "Harvard SEAS reproduction guide"],
    examScheduled: true,
    githubSlug: "transformer-reproduction",
    estimatedHours: 55,
  },
];

const STATUS_CONFIG = {
  active:    { label: "ACTIVE",    color: "#4ade80", bg: "#4ade8015" },
  building:  { label: "BUILDING",  color: "#facc15", bg: "#facc1515" },
  complete:  { label: "COMPLETE",  color: "#38bdf8", bg: "#38bdf815" },
  locked:    { label: "LOCKED",    color: "#1e293b", bg: "#07070f"   },
};

const PHASE_META = {
  1: { label: "FOUNDATIONS",     color: "#38bdf8" },
  2: { label: "CLASSICAL ML",    color: "#a78bfa" },
  3: { label: "DEEP LEARNING",   color: "#f97316" },
  4: { label: "LLMs",            color: "#facc15" },
  5: { label: "RAG & AGENTS",    color: "#2dd4bf" },
  6: { label: "INFRASTRUCTURE",  color: "#f43f5e" },
  7: { label: "RESEARCH",        color: "#818cf8" },
};

export default function ProjectLab() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [phaseFilter, setPhaseFilter] = useState("all");

  const project = PROJECTS.find(p => p.id === selected);

  const visible = PROJECTS.filter(p => {
    if (filter !== "all" && p.status !== filter) return false;
    if (phaseFilter !== "all" && String(p.phase) !== phaseFilter) return false;
    return true;
  });

  const stats = {
    total: PROJECTS.length,
    active: PROJECTS.filter(p => p.status === "active").length,
    building: PROJECTS.filter(p => p.status === "building").length,
    complete: PROJECTS.filter(p => p.status === "complete").length,
    locked: PROJECTS.filter(p => p.status === "locked").length,
    totalHours: PROJECTS.reduce((a, p) => a + p.estimatedHours, 0),
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020209", color: "#cbd5e1", fontFamily: "'Courier New', monospace", overflowX: "hidden" }}>

      {/* Header */}
      <div style={{ background: "#05050e", borderBottom: "1px solid #0c0c1e", padding: "22px 28px" }}>
        <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#1e293b", marginBottom: "6px" }}>LIVE PROJECT REGISTRY // AI SCIENTIST + ENGINEER PATH</div>
        <div style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "2px", marginBottom: "12px" }}>
          PROJECT <span style={{ color: "#4ade80" }}>LAB</span>
        </div>

        {/* Stats bar */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { label: "TOTAL", val: stats.total, color: "#475569" },
            { label: "ACTIVE", val: stats.active, color: "#4ade80" },
            { label: "BUILDING", val: stats.building, color: "#facc15" },
            { label: "COMPLETE", val: stats.complete, color: "#38bdf8" },
            { label: "LOCKED", val: stats.locked, color: "#1e293b" },
            { label: "EST. HOURS", val: stats.totalHours + "h", color: "#a78bfa" },
          ].map(s => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "18px", fontWeight: 900, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#1e293b" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: "#05050e", borderBottom: "1px solid #0c0c1e", padding: "0 28px", display: "flex", gap: "0", overflowX: "auto" }}>
        {[["all", "ALL PROJECTS"], ["active", "ACTIVE"], ["building", "BUILDING"], ["complete", "COMPLETE"]].map(([key, label]) => (
          <button key={key} onClick={() => setFilter(key)} style={{
            background: "none", border: "none", borderBottom: filter === key ? "2px solid #4ade80" : "2px solid transparent",
            color: filter === key ? "#4ade80" : "#1e293b", padding: "12px 16px", cursor: "pointer",
            fontSize: "9px", letterSpacing: "3px", fontFamily: "'Courier New', monospace", whiteSpace: "nowrap"
          }}>{label}</button>
        ))}
        <div style={{ borderLeft: "1px solid #0c0c1e", marginLeft: "8px", paddingLeft: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          {["all", "1", "2", "3", "4", "5", "6", "7"].map(p => (
            <button key={p} onClick={() => setPhaseFilter(p)} style={{
              background: phaseFilter === p ? "#0f172a" : "none",
              border: phaseFilter === p ? `1px solid ${p === "all" ? "#475569" : PHASE_META[p]?.color || "#475569"}` : "1px solid transparent",
              color: phaseFilter === p ? (p === "all" ? "#475569" : PHASE_META[p]?.color) : "#1e293b",
              padding: "4px 10px", cursor: "pointer", fontSize: "9px",
              letterSpacing: "2px", fontFamily: "'Courier New', monospace", borderRadius: "2px"
            }}>{p === "all" ? "ALL" : `P${p}`}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "24px 28px" }}>
        {!selected && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
            {visible.map(p => {
              const sc = STATUS_CONFIG[p.status];
              const pm = PHASE_META[p.phase];
              return (
                <div key={p.id} onClick={() => p.status !== "locked" && setSelected(p.id)}
                  style={{
                    border: `1px solid ${p.status === "locked" ? "#0c0c1e" : p.color + "33"}`,
                    borderRadius: "3px", padding: "20px", background: sc.bg,
                    cursor: p.status !== "locked" ? "pointer" : "default",
                    transition: "all 0.15s", opacity: p.status === "locked" ? 0.5 : 1,
                    borderLeft: `3px solid ${p.status === "locked" ? "#0c0c1e" : p.color}`
                  }}
                  onMouseEnter={e => { if (p.status !== "locked") { e.currentTarget.style.borderColor = p.color + "66"; e.currentTarget.style.background = p.color + "10"; }}}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = p.status === "locked" ? "#0c0c1e" : p.color + "33"; e.currentTarget.style.background = sc.bg; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ fontSize: "9px", letterSpacing: "2px", color: "#1e293b" }}>{p.id}</span>
                      <span style={{ background: "#0c0c1e", border: `1px solid ${pm.color}33`, color: pm.color, fontSize: "8px", padding: "1px 6px", letterSpacing: "2px" }}>
                        P{p.phase}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: "#334155", fontSize: "10px" }}>{p.difficulty}</span>
                      <span style={{ background: sc.bg, border: `1px solid ${sc.color}44`, color: sc.color, fontSize: "8px", padding: "2px 8px", letterSpacing: "2px" }}>
                        {sc.label}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "4px", color: p.status === "locked" ? "#1e293b" : "#e2e8f0", lineHeight: "1.3" }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: "9px", letterSpacing: "2px", color: p.color, marginBottom: "10px" }}>{p.type}</div>

                  <div style={{ fontSize: "11px", color: "#334155", lineHeight: "1.7", marginBottom: "12px" }}>
                    {p.description.slice(0, 120)}...
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {p.skills.slice(0, 3).map(s => (
                        <span key={s} style={{ background: "#0c0c1e", color: "#334155", fontSize: "8px", padding: "2px 7px", letterSpacing: "1px" }}>{s}</span>
                      ))}
                    </div>
                    <span style={{ fontSize: "9px", color: "#1e293b" }}>~{p.estimatedHours}h</span>
                  </div>

                  {p.examScheduled && (
                    <div style={{ marginTop: "10px", fontSize: "8px", color: "#a78bfa", letterSpacing: "2px", borderTop: "1px solid #0c0c1e", paddingTop: "8px" }}>
                      ⊕ EXAM AFTER THIS MODULE
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* PROJECT DETAIL */}
        {selected && project && (
          <div style={{ maxWidth: "860px" }}>
            <button onClick={() => setSelected(null)} style={{
              background: "none", border: "1px solid #0c0c1e", color: "#334155",
              padding: "8px 16px", cursor: "pointer", fontSize: "9px", letterSpacing: "3px",
              marginBottom: "24px", fontFamily: "'Courier New', monospace"
            }}>← ALL PROJECTS</button>

            <div style={{ borderLeft: `4px solid ${project.color}`, paddingLeft: "20px", marginBottom: "28px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: project.color, marginBottom: "4px" }}>
                {project.id} // PHASE {project.phase}: {PHASE_META[project.phase].label} // {project.type}
              </div>
              <div style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "1px", marginBottom: "4px" }}>{project.title}</div>
              <div style={{ fontSize: "11px", color: "#334155" }}>{project.difficulty} difficulty · ~{project.estimatedHours} hours estimated</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div style={{ border: `1px solid ${project.color}22`, borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", borderBottom: `1px solid ${project.color}22`, fontSize: "9px", letterSpacing: "3px", color: project.color }}>MISSION</div>
                <div style={{ padding: "16px", fontSize: "12px", color: "#94a3b8", lineHeight: "1.8" }}>{project.description}</div>
              </div>

              <div style={{ border: "1px solid #0c0c1e", borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid #0c0c1e", fontSize: "9px", letterSpacing: "3px", color: "#a78bfa" }}>WHY THIS IS MODERN</div>
                <div style={{ padding: "16px", fontSize: "12px", color: "#94a3b8", lineHeight: "1.8", fontStyle: "italic" }}>
                  "{project.modernAngle}"
                </div>
              </div>
            </div>

            <div style={{ border: `1px solid ${project.color}22`, borderRadius: "3px", marginBottom: "16px" }}>
              <div style={{ padding: "12px 16px", borderBottom: `1px solid ${project.color}22`, fontSize: "9px", letterSpacing: "3px", color: project.color }}>
                DELIVERABLES — what you must ship
              </div>
              {project.deliverables.map((d, i) => (
                <div key={i} style={{ padding: "12px 20px", borderBottom: i < project.deliverables.length - 1 ? "1px solid #0c0c1e" : "none", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: project.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
                  <span style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6" }}>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ border: "1px solid #0c0c1e", borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid #0c0c1e", fontSize: "9px", letterSpacing: "3px", color: "#38bdf8" }}>SKILLS YOU'LL BUILD</div>
                {project.skills.map((s, i) => (
                  <div key={i} style={{ padding: "10px 16px", borderBottom: i < project.skills.length - 1 ? "1px solid #0c0c1e" : "none", fontSize: "11px", color: "#64748b", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#38bdf8" }}>■</span>{s}
                  </div>
                ))}
              </div>

              <div style={{ border: "1px solid #0c0c1e", borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid #0c0c1e", fontSize: "9px", letterSpacing: "3px", color: "#facc15" }}>RESOURCES</div>
                {project.resources.map((r, i) => (
                  <div key={i} style={{ padding: "10px 16px", borderBottom: i < project.resources.length - 1 ? "1px solid #0c0c1e" : "none", fontSize: "11px", color: "#64748b", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#facc15" }}>▸</span>{r}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "16px", padding: "16px 20px", border: "1px solid #a78bfa33", background: "#a78bfa08", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#a78bfa", marginBottom: "4px" }}>GITHUB REPO NAME</div>
                <div style={{ fontSize: "13px", color: "#94a3b8" }}>github.com/you/{project.githubSlug}</div>
              </div>
              {project.examScheduled && (
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#a78bfa", marginBottom: "4px" }}>EXAM AFTER THIS PROJECT</div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>Ask professor when ready</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

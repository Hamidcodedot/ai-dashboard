import { useState } from "react";

// ============================================================
// FINAL AI SCIENTIST + ENGINEER + RESEARCHER ROADMAP
// Clean · Complete · Updated 2026
// ============================================================

const PHASES = [
  {
    id: 1,
    title: "FOUNDATIONS",
    subtitle: "Math · Python · Systems Thinking",
    hours: "0 – 500 hrs",
    duration: "~4 months",
    color: "#00ff9d",
    icon: "⚡",
    identity: "You become someone who thinks in first principles.",
    pillars: ["Scientist", "Engineer"],
    description: "Master the mathematics and programming that everything in AI is built on. Nothing gets skipped here — this is your bedrock.",
    tracks: [
      {
        name: "Mathematics for AI",
        items: [
          {
            topic: "Linear Algebra",
            why: "Vectors, matrices, transformations = the language all neural networks speak.",
            resources: [
              { label: "3Blue1Brown: Essence of Linear Algebra", type: "VIDEO", url: "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", free: true },
              { label: "Gilbert Strang: MIT OCW 18.06", type: "VIDEO", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", free: true },
              { label: "Mathematics for ML (Deisenroth) — Ch.2", type: "BOOK", url: "https://mml-book.github.io/", free: true },
            ],
            project: "Build a matrix operations library in pure Python — no NumPy. Add, multiply, transpose, determinant, inverse, eigenvectors.",
          },
          {
            topic: "Calculus & Gradients",
            why: "Backpropagation IS calculus. You must feel derivatives, not just know the formula.",
            resources: [
              { label: "3Blue1Brown: Essence of Calculus", type: "VIDEO", url: "https://youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", free: true },
              { label: "Khan Academy: Multivariable Calculus", type: "COURSE", url: "https://khanacademy.org/math/multivariable-calculus", free: true },
              { label: "Mathematics for ML (Deisenroth) — Ch.5", type: "BOOK", url: "https://mml-book.github.io/", free: true },
            ],
            project: "Implement gradient descent from scratch. Visualize 3D loss surfaces. Compare SGD vs Momentum vs Adam.",
          },
          {
            topic: "Probability & Statistics",
            why: "Every loss function, every metric, every uncertainty estimate in AI = probability theory.",
            resources: [
              { label: "StatQuest with Josh Starmer (full channel)", type: "VIDEO", url: "https://youtube.com/@statquest", free: true },
              { label: "Probability for Data Science (textbook)", type: "BOOK", url: "https://probability4datascience.com/", free: true },
              { label: "Khan Academy: Statistics & Probability", type: "COURSE", url: "https://khanacademy.org/math/statistics-probability", free: true },
            ],
            project: "Build an automated EDA engine — given any CSV, compute distributions, test hypotheses, detect outliers, generate report.",
          },
          {
            topic: "Information Theory",
            why: "Cross-entropy IS the loss function of every LLM. KL divergence IS the loss in VAEs. This is not optional.",
            resources: [
              { label: "Visual Information Theory — Chris Olah", type: "ARTICLE", url: "https://colah.github.io/posts/2015-09-Visual-Information/", free: true },
              { label: "Khan Academy: Information Theory", type: "VIDEO", url: "https://youtube.com/watch?v=2s3aJfRr9gE", free: true },
              { label: "Elements of Information Theory (Cover & Thomas) — Ch.1-2", type: "BOOK", url: "https://www.wiley.com/en-us/Elements+of+Information+Theory-p-9780471241959", free: false },
            ],
            project: "Implement entropy, cross-entropy, KL divergence from scratch. Visualize what each one measures geometrically.",
          },
        ],
      },
      {
        name: "Python & Software Engineering",
        items: [
          {
            topic: "Python Mastery",
            why: "Your primary weapon. Every AI system is written in Python. Master it completely.",
            resources: [
              { label: "Python for Data Science Handbook (VanderPlas)", type: "BOOK", url: "https://jakevdp.github.io/PythonDataScienceHandbook/", free: true },
              { label: "Kaggle: Python + Pandas courses", type: "COURSE", url: "https://kaggle.com/learn", free: true },
              { label: "Real Python — advanced tutorials", type: "ARTICLE", url: "https://realpython.com/", free: true },
            ],
            project: "Build a CLI data pipeline tool: ingest CSV → clean → analyze → export statistical report. Production quality.",
          },
          {
            topic: "NumPy from Internals",
            why: "NumPy thinking = tensor thinking. Same mental model you'll use in PyTorch every day.",
            resources: [
              { label: "From Python to NumPy (Nicolas Rougier)", type: "BOOK", url: "https://www.labri.fr/perso/nrougier/from-python-to-numpy/", free: true },
              { label: "NumPy official documentation", type: "DOCS", url: "https://numpy.org/doc/stable/", free: true },
            ],
            project: "Implement 10 ML operations using ONLY raw NumPy broadcasting — no loops, no sklearn.",
          },
          {
            topic: "Git & Clean Code",
            why: "Your public GitHub IS your resume. Every top lab looks at it before the interview.",
            resources: [
              { label: "Pro Git Book (free online)", type: "BOOK", url: "https://git-scm.com/book/en/v2", free: true },
              { label: "Google Python Style Guide", type: "DOCS", url: "https://google.github.io/styleguide/pyguide.html", free: true },
            ],
            project: "Set up GitHub portfolio. Every project from now = documented, versioned, README with results.",
          },
          {
            topic: "Linux & Command Line",
            why: "Every GPU cluster, every cloud VM, every Docker container runs Linux. Non-negotiable.",
            resources: [
              { label: "The Linux Command Line (free book)", type: "BOOK", url: "https://linuxcommand.org/tlcl.php", free: true },
              { label: "Missing Semester of CS Education (MIT)", type: "VIDEO", url: "https://missing.csail.mit.edu/", free: true },
            ],
            project: "Set up WSL2 on Windows. Automate your dev workflow with bash scripts. Learn vim basics.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CLASSICAL ML",
    subtitle: "Algorithms · Intuition · Engineering",
    hours: "500 – 1500 hrs",
    duration: "~5 months",
    color: "#f97316",
    icon: "🧠",
    identity: "You become someone who understands WHY algorithms work, not just how to call them.",
    pillars: ["Scientist", "Engineer"],
    description: "Traditional ML done deeply. The intuition built here makes deep learning click faster and makes you a better researcher forever.",
    tracks: [
      {
        name: "Core ML Algorithms",
        items: [
          {
            topic: "Linear & Logistic Regression",
            why: "Linear layers in neural networks ARE linear regression. This intuition never expires.",
            resources: [
              { label: "StatQuest: Linear Regression series", type: "VIDEO", url: "https://youtube.com/@statquest", free: true },
              { label: "Hands-On ML — Aurélien Géron (GitHub)", type: "BOOK", url: "https://github.com/ageron/handson-ml3", free: true },
              { label: "CS229 Stanford Notes — Andrew Ng", type: "NOTES", url: "https://cs229.stanford.edu/", free: true },
            ],
            project: "Implement linear & logistic regression from scratch — derive the math first, then code it. Validate against sklearn.",
          },
          {
            topic: "Decision Trees, Random Forests, XGBoost",
            why: "XGBoost still wins most tabular data competitions in 2026. Every ML engineer needs this.",
            resources: [
              { label: "StatQuest: Decision Trees + XGBoost series", type: "VIDEO", url: "https://youtube.com/@statquest", free: true },
              { label: "XGBoost paper — Chen & Guestrin (2016)", type: "PAPER", url: "https://arxiv.org/abs/1603.02754", free: true },
              { label: "Hands-On ML Ch.6-7 — Géron", type: "BOOK", url: "https://github.com/ageron/handson-ml3", free: true },
            ],
            project: "Implement decision tree (CART) from scratch. Then use XGBoost on a Kaggle competition — hit top 25%.",
          },
          {
            topic: "SVMs & Kernel Methods",
            why: "Deep mathematical insight into margins and generalization that sharpens your theory.",
            resources: [
              { label: "CS229 Stanford: SVM lecture notes", type: "NOTES", url: "https://cs229.stanford.edu/", free: true },
              { label: "StatQuest: Support Vector Machines", type: "VIDEO", url: "https://youtube.com/@statquest", free: true },
            ],
            project: "Implement SVM with SMO algorithm from scratch. Visualize decision boundaries with different kernels.",
          },
          {
            topic: "Unsupervised Learning (K-Means, PCA)",
            why: "Representation learning is the heart of modern AI. PCA is inside dimensionality reduction everywhere.",
            resources: [
              { label: "StatQuest: PCA series", type: "VIDEO", url: "https://youtube.com/@statquest", free: true },
              { label: "CS229 Unsupervised learning notes", type: "NOTES", url: "https://cs229.stanford.edu/", free: true },
            ],
            project: "Implement K-Means + PCA from scratch. Apply PCA to image compression — show before/after.",
          },
        ],
      },
      {
        name: "ML Engineering",
        items: [
          {
            topic: "Experiment Tracking with W&B",
            why: "Real researchers track every experiment. No tracking = no science = no progress.",
            resources: [
              { label: "Weights & Biases official docs + tutorials", type: "DOCS", url: "https://docs.wandb.ai/", free: true },
              { label: "W&B YouTube channel", type: "VIDEO", url: "https://youtube.com/@wandb", free: true },
            ],
            project: "Set up W&B on every project from now on. Log hyperparameters, metrics, model artifacts.",
          },
          {
            topic: "Data Engineering Basics",
            why: "80% of real ML work is data. Engineers who handle data well are genuinely rare.",
            resources: [
              { label: "Kaggle: Pandas + SQL courses (free)", type: "COURSE", url: "https://kaggle.com/learn", free: true },
              { label: "Effective Pandas — Matt Harrison", type: "BOOK", url: "https://store.metasnake.com/effective-pandas-book", free: false },
            ],
            project: "Build ETL pipeline: raw messy data → clean features → model-ready dataset. Fully automated.",
          },
          {
            topic: "Model Evaluation & Bias",
            why: "Responsible AI is required at every top lab. Evaluating models rigorously = scientist thinking.",
            resources: [
              { label: "Fairness and ML (free book)", type: "BOOK", url: "https://fairmlbook.org/", free: true },
              { label: "Scikit-learn: Model Evaluation guide", type: "DOCS", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", free: true },
            ],
            project: "Audit a trained model for bias. Write a structured report with findings and mitigations.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "DEEP LEARNING",
    subtitle: "Neural Nets · Backprop · Transformers",
    hours: "1500 – 3500 hrs",
    duration: "~7 months",
    color: "#a855f7",
    icon: "🔥",
    identity: "You become someone who can build any neural architecture from scratch.",
    pillars: ["Scientist", "Engineer", "Research Eng"],
    description: "From perceptrons to transformers — build everything from scratch first, then use frameworks. This phase separates researchers from script runners.",
    tracks: [
      {
        name: "Neural Networks from Scratch",
        items: [
          {
            topic: "Backpropagation & Autograd",
            why: "If you can't build backprop from scratch, you don't truly understand deep learning.",
            resources: [
              { label: "Karpathy: micrograd — build backprop engine", type: "VIDEO", url: "https://youtube.com/watch?v=VMj-3S1tku0", free: true },
              { label: "Colah: Backprop as Computation Graphs", type: "ARTICLE", url: "https://colah.github.io/posts/2015-08-Backprop/", free: true },
              { label: "Deep Learning (Goodfellow) Ch.6", type: "BOOK", url: "https://www.deeplearningbook.org/", free: true },
            ],
            project: "Build your own autograd engine (micrograd++) from scratch. Train an MLP with it on a real dataset.",
          },
          {
            topic: "MLPs & Training Dynamics",
            why: "Training dynamics — vanishing gradients, batch norm, dropout — is what separates researchers from users.",
            resources: [
              { label: "Karpathy: makemore series (MLP → language model)", type: "VIDEO", url: "https://youtube.com/@AndrejKarpathy", free: true },
              { label: "Deep Learning (Goodfellow) Ch.7-8", type: "BOOK", url: "https://www.deeplearningbook.org/", free: true },
            ],
            project: "Build character-level language model from scratch. Visualize vanishing gradients. Add batch norm manually.",
          },
          {
            topic: "CNNs",
            why: "Spatial hierarchies and weight sharing are timeless architectural principles — used in vision transformers too.",
            resources: [
              { label: "Fast.ai: Practical Deep Learning Part 1 (free)", type: "COURSE", url: "https://course.fast.ai/", free: true },
              { label: "Stanford CS231n: CNN for Visual Recognition", type: "VIDEO", url: "https://youtube.com/playlist?list=PLC1qU-LWwrF64f4Qkte0ED0ACzhMMoJv_", free: true },
              { label: "Deep Learning (Goodfellow) Ch.9", type: "BOOK", url: "https://www.deeplearningbook.org/", free: true },
            ],
            project: "Build CNN from scratch. Train on CIFAR-10. Beat the baseline. Document every experiment in W&B.",
          },
          {
            topic: "Attention Mechanism",
            why: "This one mechanism powers GPT-4, Claude, Gemini, Llama — 95% of modern AI.",
            resources: [
              { label: "Attention is All You Need — original paper (2017)", type: "PAPER", url: "https://arxiv.org/abs/1706.03762", free: true },
              { label: "3Blue1Brown: Attention in Transformers (visual)", type: "VIDEO", url: "https://youtube.com/watch?v=eMlx5fFNoYc", free: true },
              { label: "Illustrated Transformer — Jay Alammar", type: "ARTICLE", url: "https://jalammar.github.io/illustrated-transformer/", free: true },
            ],
            project: "Implement multi-head attention using only NumPy. Then verify your results match PyTorch's output.",
          },
          {
            topic: "Transformers & GPT",
            why: "The foundational architecture of all modern AI. Build it once from scratch and everything else makes sense.",
            resources: [
              { label: "Karpathy: Let's build GPT from scratch", type: "VIDEO", url: "https://youtube.com/watch?v=kCc8FmEb1nY", free: true },
              { label: "The Annotated Transformer — Harvard NLP", type: "ARTICLE", url: "https://nlp.seas.harvard.edu/annotated-transformer/", free: true },
              { label: "nanoGPT — Karpathy GitHub", type: "CODE", url: "https://github.com/karpathy/nanoGPT", free: true },
            ],
            project: "Build GPT from scratch following nanoGPT. Train on Shakespeare. Then add RoPE embeddings (used in Llama 3).",
          },
        ],
      },
      {
        name: "PyTorch & Frameworks",
        items: [
          {
            topic: "PyTorch Deep Dive",
            why: "Industry standard for research. Deep knowledge = ability to debug any model, anywhere.",
            resources: [
              { label: "PyTorch official tutorials", type: "DOCS", url: "https://pytorch.org/tutorials/", free: true },
              { label: "Karpathy: Zero to Hero series (full)", type: "VIDEO", url: "https://youtube.com/@AndrejKarpathy", free: true },
            ],
            project: "Re-implement all prior projects in clean PyTorch with proper nn.Module abstractions.",
          },
          {
            topic: "HuggingFace Ecosystem",
            why: "HuggingFace is the GitHub of AI models. You must be completely fluent here.",
            resources: [
              { label: "HuggingFace NLP Course (free)", type: "COURSE", url: "https://huggingface.co/learn/nlp-course/", free: true },
              { label: "HuggingFace docs — Transformers library", type: "DOCS", url: "https://huggingface.co/docs/transformers", free: true },
            ],
            project: "Fine-tune BERT on a custom text classification task. Push model and demo to HuggingFace Hub.",
          },
          {
            topic: "Intro to CUDA (GPU Programming)",
            why: "The rarest skill in AI engineering. Opens doors at NVIDIA, OpenAI, Anthropic, DeepMind.",
            resources: [
              { label: "CUDA Mode — free lectures (GitHub)", type: "VIDEO", url: "https://github.com/cuda-mode/lectures", free: true },
              { label: "Simon Boehm: How to Optimize a CUDA Matmul", type: "ARTICLE", url: "https://siboehm.com/articles/22/CUDA-MMM", free: true },
              { label: "Making Deep Learning Go Brrrr — Horace He", type: "ARTICLE", url: "https://horace.io/brrr_intro.html", free: true },
            ],
            project: "Write your first CUDA kernel: vector add → matrix multiply. Benchmark vs NumPy.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "LLMs & GENERATIVE AI",
    subtitle: "Pretraining · RLHF · Fine-tuning · Alignment",
    hours: "3500 – 5500 hrs",
    duration: "~8 months",
    color: "#fbbf24",
    icon: "🚀",
    identity: "You become someone who can train, evaluate, align, and deploy language models.",
    pillars: ["Scientist", "Engineer", "Research Eng"],
    description: "The frontier of AI. Pretraining, RLHF, fine-tuning, inference optimization — the full LLM stack from theory to production.",
    tracks: [
      {
        name: "LLM Science",
        items: [
          {
            topic: "Scaling Laws",
            why: "Understanding scaling = understanding why GPT-4 exists and what comes next.",
            resources: [
              { label: "Scaling Laws for LLMs — Kaplan et al. (2020)", type: "PAPER", url: "https://arxiv.org/abs/2001.08361", free: true },
              { label: "Chinchilla Scaling Laws — Hoffmann et al. (2022)", type: "PAPER", url: "https://arxiv.org/abs/2203.15556", free: true },
              { label: "Yannic Kilcher: Scaling Laws walkthrough", type: "VIDEO", url: "https://youtube.com/@YannicKilcher", free: true },
            ],
            project: "Run your own scaling experiments on a small LM. Plot loss vs compute curves. Write your findings.",
          },
          {
            topic: "Tokenization Internals",
            why: "Tokenization bugs cause subtle model failures. Scientists understand this from the inside.",
            resources: [
              { label: "Karpathy: Let's build the GPT Tokenizer", type: "VIDEO", url: "https://youtube.com/watch?v=zduSFxRajkE", free: true },
              { label: "BPE paper — Sennrich et al.", type: "PAPER", url: "https://arxiv.org/abs/1508.07909", free: true },
            ],
            project: "Build a BPE tokenizer from scratch. Analyze failure cases — what does it tokenize badly?",
          },
          {
            topic: "RLHF & Alignment",
            why: "The technique that turned GPT-3 into ChatGPT. Every aligned model — Claude, GPT-4 — uses this.",
            resources: [
              { label: "InstructGPT paper — Ouyang et al. (2022)", type: "PAPER", url: "https://arxiv.org/abs/2203.02155", free: true },
              { label: "Constitutional AI — Anthropic (2022)", type: "PAPER", url: "https://arxiv.org/abs/2212.08073", free: true },
              { label: "Yannic Kilcher: InstructGPT walkthrough", type: "VIDEO", url: "https://youtube.com/@YannicKilcher", free: true },
              { label: "HuggingFace TRL library docs", type: "DOCS", url: "https://huggingface.co/docs/trl", free: true },
            ],
            project: "Implement basic RLHF pipeline: SFT → Reward Model → PPO fine-tune on a toy model.",
          },
          {
            topic: "Pretraining a Small LM",
            why: "Pretrain once, even at small scale — you'll understand everything differently after.",
            resources: [
              { label: "nanoGPT — Karpathy GitHub", type: "CODE", url: "https://github.com/karpathy/nanoGPT", free: true },
              { label: "The Pile dataset (EleutherAI)", type: "DATA", url: "https://pile.eleuther.ai/", free: true },
            ],
            project: "Pretrain a 10M parameter LM on a text corpus of your choice. Analyze what it learns.",
          },
        ],
      },
      {
        name: "LLM Engineering",
        items: [
          {
            topic: "Fine-tuning: LoRA & QLoRA",
            why: "Parameter-efficient fine-tuning is how every company adapts LLMs in 2026. Industry standard.",
            resources: [
              { label: "QLoRA paper — Dettmers et al. (2023)", type: "PAPER", url: "https://arxiv.org/abs/2305.14314", free: true },
              { label: "LoRA paper — Hu et al. (2021)", type: "PAPER", url: "https://arxiv.org/abs/2106.09685", free: true },
              { label: "HuggingFace PEFT library docs", type: "DOCS", url: "https://huggingface.co/docs/peft", free: true },
              { label: "Tim Dettmers blog: QLoRA explained", type: "ARTICLE", url: "https://timdettmers.com/2023/01/30/which-gpu-for-deep-learning/", free: true },
            ],
            project: "Fine-tune Llama 3.1 8B with QLoRA on a domain of your choice. Evaluate before/after rigorously.",
          },
          {
            topic: "Inference Optimization & vLLM",
            why: "Serving LLMs efficiently = millions of dollars saved at scale. Critical production skill.",
            resources: [
              { label: "PagedAttention / vLLM paper (2023)", type: "PAPER", url: "https://arxiv.org/abs/2309.06180", free: true },
              { label: "vLLM official docs", type: "DOCS", url: "https://docs.vllm.ai/", free: true },
            ],
            project: "Deploy a fine-tuned model with vLLM. Benchmark throughput vs naive HuggingFace serving.",
          },
          {
            topic: "Quantization: GPTQ & AWQ",
            why: "Running 70B models on consumer hardware — this skill makes you dangerous in resource-constrained settings.",
            resources: [
              { label: "GPTQ paper — Frantar et al. (2022)", type: "PAPER", url: "https://arxiv.org/abs/2210.17323", free: true },
              { label: "AWQ paper — Lin et al. (2023)", type: "PAPER", url: "https://arxiv.org/abs/2306.00978", free: true },
              { label: "HuggingFace quantization guide", type: "DOCS", url: "https://huggingface.co/docs/transformers/quantization", free: true },
            ],
            project: "Quantize a 7B model with GPTQ and AWQ. Measure accuracy vs speed tradeoffs on real benchmarks.",
          },
          {
            topic: "LLM Evaluation",
            why: "Evaluation is the hardest unsolved problem in LLMs. Scientists who can design evals are rare.",
            resources: [
              { label: "EleutherAI LM Eval Harness (GitHub)", type: "CODE", url: "https://github.com/EleutherAI/lm-evaluation-harness", free: true },
              { label: "MMLU benchmark paper", type: "PAPER", url: "https://arxiv.org/abs/2009.03300", free: true },
              { label: "Judging LLM-as-a-Judge (MT-Bench paper)", type: "PAPER", url: "https://arxiv.org/abs/2306.05685", free: true },
            ],
            project: "Build a domain-specific eval harness. Evaluate 3 different models. Write a comparison report.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "RAG & AGENTS",
    subtitle: "Retrieval · Tool Use · Multi-Agent Systems",
    hours: "5500 – 7000 hrs",
    duration: "~6 months",
    color: "#06b6d4",
    icon: "🤖",
    identity: "You become someone who builds intelligent systems that act in the real world.",
    pillars: ["Engineer", "Research Eng", "Product"],
    description: "Retrieval Augmented Generation, vector databases, agentic AI, multi-agent systems — the applied frontier of 2026.",
    tracks: [
      {
        name: "RAG Systems",
        items: [
          {
            topic: "Embeddings & Vector Databases",
            why: "Vector search is the backbone of every production RAG system deployed today.",
            resources: [
              { label: "RAG original paper — Lewis et al. (2020)", type: "PAPER", url: "https://arxiv.org/abs/2005.11401", free: true },
              { label: "Chroma vector database docs", type: "DOCS", url: "https://docs.trychroma.com/", free: true },
              { label: "MTEB leaderboard — best embedding models", type: "TOOL", url: "https://huggingface.co/spaces/mteb/leaderboard", free: true },
            ],
            project: "Build semantic search over 10,000 research papers using embeddings + Chroma.",
          },
          {
            topic: "Advanced RAG Architecture",
            why: "Naive RAG fails in production. Real RAG requires reranking, hybrid search, query expansion.",
            resources: [
              { label: "LlamaIndex advanced RAG guide", type: "DOCS", url: "https://docs.llamaindex.ai/", free: true },
              { label: "RAG survey paper (2024)", type: "PAPER", url: "https://arxiv.org/abs/2312.10997", free: true },
              { label: "ColBERT reranking paper", type: "PAPER", url: "https://arxiv.org/abs/2004.12832", free: true },
            ],
            project: "Build production RAG: hybrid BM25 + dense retrieval + cross-encoder reranking + query expansion.",
          },
          {
            topic: "RAG Evaluation with RAGAS",
            why: "Unevaluated RAG is a liability. Rigorous eval = scientist thinking applied to engineering.",
            resources: [
              { label: "RAGAS framework docs", type: "DOCS", url: "https://docs.ragas.io/", free: true },
              { label: "RAGAS paper (2023)", type: "PAPER", url: "https://arxiv.org/abs/2309.15217", free: true },
            ],
            project: "Build automated eval pipeline. Track faithfulness, answer relevance, context recall on your RAG.",
          },
        ],
      },
      {
        name: "Agentic AI",
        items: [
          {
            topic: "ReAct & Chain-of-Thought",
            why: "Understanding agent reasoning loops at the implementation level — not just using a library.",
            resources: [
              { label: "ReAct paper — Yao et al. (2022)", type: "PAPER", url: "https://arxiv.org/abs/2210.03629", free: true },
              { label: "Chain-of-Thought paper — Wei et al. (2022)", type: "PAPER", url: "https://arxiv.org/abs/2201.11903", free: true },
              { label: "Yannic Kilcher: ReAct walkthrough", type: "VIDEO", url: "https://youtube.com/@YannicKilcher", free: true },
            ],
            project: "Implement ReAct agent from scratch — raw API calls only, no LangChain. Solve 5 real tasks with it.",
          },
          {
            topic: "Tool Use & Function Calling",
            why: "Tool use is what turns LLMs into agents that do real work in the real world.",
            resources: [
              { label: "Anthropic: Tool Use documentation", type: "DOCS", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview", free: true },
              { label: "Gorilla: LLM for API calls paper", type: "PAPER", url: "https://arxiv.org/abs/2305.15334", free: true },
            ],
            project: "Build agent with: web search, code execution, file system, calculator, and Wikipedia tools.",
          },
          {
            topic: "Multi-Agent Systems with LangGraph",
            why: "The frontier of applied AI in 2026. Few engineers understand multi-agent coordination deeply.",
            resources: [
              { label: "LangGraph official docs + tutorials", type: "DOCS", url: "https://langchain-ai.github.io/langgraph/", free: true },
              { label: "AutoGen paper — Microsoft (2023)", type: "PAPER", url: "https://arxiv.org/abs/2308.08155", free: true },
              { label: "AgentBench evaluation paper", type: "PAPER", url: "https://arxiv.org/abs/2308.03688", free: true },
            ],
            project: "Build multi-agent research system: Planner + Researcher + Coder + Writer + Critic agents collaborating.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "AI INFRASTRUCTURE",
    subtitle: "CUDA · GPU · MLOps · Production",
    hours: "7000 – 8500 hrs",
    duration: "~6 months",
    color: "#f43f5e",
    icon: "⚙️",
    identity: "You become someone who can build and run AI systems at industrial scale.",
    pillars: ["Engineer", "Infrastructure"],
    description: "The layer that separates AI engineers from AI infrastructure engineers. CUDA, production serving, MLOps — the rarest skills in the field.",
    tracks: [
      {
        name: "GPU & CUDA Programming",
        items: [
          {
            topic: "CUDA Programming Fundamentals",
            why: "NVIDIA, OpenAI, Anthropic, DeepMind specifically recruit for this. Almost nobody your age has it.",
            resources: [
              { label: "CUDA Mode — free lectures (GitHub)", type: "VIDEO", url: "https://github.com/cuda-mode/lectures", free: true },
              { label: "CUDA C++ Programming Guide (official)", type: "DOCS", url: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/", free: true },
              { label: "Programming Massively Parallel Processors (book)", type: "BOOK", url: "https://www.amazon.com/Programming-Massively-Parallel-Processors-Hands/dp/0323912311", free: false },
            ],
            project: "Write CUDA kernels progressively: vector add → matrix multiply → softmax → ReLU. Benchmark all.",
          },
          {
            topic: "GPU Memory Optimization",
            why: "Knowing WHY training is slow = knowing how to fix it. This saves compute budgets.",
            resources: [
              { label: "Making Deep Learning Go Brrrr — Horace He", type: "ARTICLE", url: "https://horace.io/brrr_intro.html", free: true },
              { label: "GPU Performance for Deep Learning — Tim Dettmers", type: "ARTICLE", url: "https://timdettmers.com/2023/01/30/which-gpu-for-deep-learning/", free: true },
            ],
            project: "Profile a training run with PyTorch Profiler. Find the top 3 bottlenecks. Achieve 2x speedup.",
          },
          {
            topic: "Flash Attention",
            why: "Flash Attention is used in every modern LLM. Reading + implementing it = research-level GPU work.",
            resources: [
              { label: "Flash Attention paper — Dao et al. (2022)", type: "PAPER", url: "https://arxiv.org/abs/2205.14135", free: true },
              { label: "Flash Attention 2 paper — Dao (2023)", type: "PAPER", url: "https://arxiv.org/abs/2307.08691", free: true },
              { label: "Tri Dao: Flash Attention GitHub", type: "CODE", url: "https://github.com/Dao-AILab/flash-attention", free: true },
            ],
            project: "Implement a simplified Flash Attention in Triton. Compare memory usage vs standard attention.",
          },
        ],
      },
      {
        name: "MLOps & Production",
        items: [
          {
            topic: "Docker & Containerization",
            why: "If it doesn't run in a container, it doesn't run in production. Full stop.",
            resources: [
              { label: "Docker official getting started docs", type: "DOCS", url: "https://docs.docker.com/get-started/", free: true },
              { label: "Docker for ML engineers — Weights & Biases", type: "ARTICLE", url: "https://wandb.ai/site/articles/docker", free: true },
            ],
            project: "Containerize every ML project you've built. Make them reproducible with a single docker run command.",
          },
          {
            topic: "Model Serving & CI/CD",
            why: "Models that aren't deployed don't help anyone. Automated pipelines = professional engineering.",
            resources: [
              { label: "BentoML docs — model serving", type: "DOCS", url: "https://docs.bentoml.com/", free: true },
              { label: "DVC: Data Version Control docs", type: "DOCS", url: "https://dvc.org/doc", free: true },
              { label: "GitHub Actions for ML (tutorial)", type: "ARTICLE", url: "https://github.com/features/actions", free: true },
            ],
            project: "Build full ML pipeline: automated training → evaluation → deployment with GitHub Actions CI/CD.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "RESEARCH & MASTERY",
    subtitle: "Reproduce · Publish · Advance the Field",
    hours: "8500 – 10000 hrs",
    duration: "~6 months",
    color: "#818cf8",
    icon: "👑",
    identity: "You become someone who advances the state of the art.",
    pillars: ["Scientist", "Research Eng"],
    description: "Read papers, reproduce them, extend them, publish. This is where you cross from practitioner to researcher.",
    tracks: [
      {
        name: "Research Engineering",
        items: [
          {
            topic: "How to Read Papers (3-Pass Method)",
            why: "Speed and depth of paper reading is a research superpower. Most people read papers wrong.",
            resources: [
              { label: "How to Read a Paper — Keshav (3-pass method)", type: "PAPER", url: "https://web.stanford.edu/class/cs245/readings/how-to-read-a-paper.pdf", free: true },
              { label: "Yannic Kilcher paper walkthroughs (YouTube)", type: "VIDEO", url: "https://youtube.com/@YannicKilcher", free: true },
              { label: "Papers With Code — all SOTA papers", type: "PLATFORM", url: "https://paperswithcode.com/", free: true },
            ],
            project: "Read + structured-summarize 200 papers. Build Obsidian vault. Every paper = problem, method, results, my take.",
          },
          {
            topic: "Reproduce 5 Landmark Papers",
            why: "Reproduction = true understanding. If you can't reproduce it, you don't actually know it.",
            resources: [
              { label: "The Annotated Transformer — Harvard NLP", type: "ARTICLE", url: "https://nlp.seas.harvard.edu/annotated-transformer/", free: true },
              { label: "Papers With Code reproduction guides", type: "PLATFORM", url: "https://paperswithcode.com/", free: true },
            ],
            project: "Full reproductions: Attention is All You Need + DDPM + LoRA + RAG + ReAct — from scratch, results match paper.",
          },
          {
            topic: "Open Source Contributions",
            why: "PRs merged to major AI repos = proof of engineering quality at scale. Visible to every recruiter.",
            resources: [
              { label: "HuggingFace Transformers — GitHub", type: "CODE", url: "https://github.com/huggingface/transformers", free: true },
              { label: "PyTorch — GitHub", type: "CODE", url: "https://github.com/pytorch/pytorch", free: true },
              { label: "LangChain — GitHub", type: "CODE", url: "https://github.com/langchain-ai/langchain", free: true },
            ],
            project: "Merge 5+ meaningful PRs to major AI repositories. Document each contribution.",
          },
        ],
      },
      {
        name: "Original Research",
        items: [
          {
            topic: "Writing Research Papers",
            why: "Writing forces clarity. No paper = no research. This is how the field communicates.",
            resources: [
              { label: "The Science of Scientific Writing (Gopen & Swan)", type: "ARTICLE", url: "https://www.usenix.org/sites/default/files/gopen_and_swan_science_of_scientific_writing.pdf", free: true },
              { label: "How to write a great research paper — Simon Peyton Jones", type: "VIDEO", url: "https://youtube.com/watch?v=VK51E3gHENc", free: true },
              { label: "NeurIPS / ICML style guides", type: "DOCS", url: "https://neurips.cc/Conferences/2024/CallForPapers", free: true },
            ],
            project: "Write and submit your first workshop paper to NeurIPS / ICML / ICLR workshops.",
          },
          {
            topic: "AI Safety & Interpretability",
            why: "The most important open problem in AI. Scientists who work here will shape the trajectory of humanity.",
            resources: [
              { label: "AGI Safety Fundamentals — BlueDot (free)", type: "COURSE", url: "https://aisafetyfundamentals.com/", free: true },
              { label: "Anthropic: Transformer Circuits research", type: "ARTICLE", url: "https://transformer-circuits.pub/", free: true },
              { label: "Toy Models of Superposition — Anthropic", type: "PAPER", url: "https://arxiv.org/abs/2209.11895", free: true },
            ],
            project: "Run mechanistic interpretability experiments on your small LM. What circuits does it learn? Write it up.",
          },
        ],
      },
    ],
  },
];

const ESSENTIAL_PAPERS = [
  { title: "Attention Is All You Need", year: 2017, authors: "Vaswani et al.", url: "https://arxiv.org/abs/1706.03762", why: "The transformer — foundation of all modern AI", phase: 3 },
  { title: "BERT", year: 2018, authors: "Devlin et al.", url: "https://arxiv.org/abs/1810.04805", why: "Bidirectional pretraining that changed NLP forever", phase: 3 },
  { title: "Scaling Laws for Neural LMs", year: 2020, authors: "Kaplan et al.", url: "https://arxiv.org/abs/2001.08361", why: "Why bigger models + more data = better AI", phase: 4 },
  { title: "GPT-3 (Brown et al.)", year: 2020, authors: "Brown et al.", url: "https://arxiv.org/abs/2005.14165", why: "Demonstrated emergent capabilities at scale", phase: 4 },
  { title: "RAG (Lewis et al.)", year: 2020, authors: "Lewis et al.", url: "https://arxiv.org/abs/2005.11401", why: "Original RAG paper — read before all RAG work", phase: 5 },
  { title: "InstructGPT (RLHF)", year: 2022, authors: "Ouyang et al.", url: "https://arxiv.org/abs/2203.02155", why: "How to align LLMs to human preferences", phase: 4 },
  { title: "Constitutional AI", year: 2022, authors: "Anthropic", url: "https://arxiv.org/abs/2212.08073", why: "Self-supervised alignment — what Claude is built on", phase: 4 },
  { title: "LoRA", year: 2021, authors: "Hu et al.", url: "https://arxiv.org/abs/2106.09685", why: "Parameter-efficient fine-tuning used everywhere", phase: 4 },
  { title: "Flash Attention", year: 2022, authors: "Dao et al.", url: "https://arxiv.org/abs/2205.14135", why: "Memory-efficient attention — in every modern LLM", phase: 6 },
  { title: "QLoRA", year: 2023, authors: "Dettmers et al.", url: "https://arxiv.org/abs/2305.14314", why: "Fine-tune 65B models on a single GPU", phase: 4 },
  { title: "Llama 2", year: 2023, authors: "Touvron et al.", url: "https://arxiv.org/abs/2307.09288", why: "Open-source LLM that democratized AI research", phase: 4 },
  { title: "ReAct", year: 2022, authors: "Yao et al.", url: "https://arxiv.org/abs/2210.03629", why: "Reasoning + acting — foundation of all AI agents", phase: 5 },
];

const MENTORS = [
  { name: "Andrej Karpathy", role: "Former Tesla AI, OpenAI founder", why: "Best teacher of LLM internals alive. Watch every single video. Twice.", url: "https://youtube.com/@AndrejKarpathy", type: "VIDEO" },
  { name: "Yannic Kilcher", role: "ML Researcher & Educator", why: "Best paper walkthroughs on YouTube. Teaches you HOW to read research.", url: "https://youtube.com/@YannicKilcher", type: "VIDEO" },
  { name: "Yann LeCun", role: "Chief AI Scientist, Meta", why: "Pioneer of CNNs and self-supervised learning. Follow for frontier debates.", url: "https://twitter.com/ylecun", type: "FOLLOW" },
  { name: "Sebastian Raschka", role: "Lightning AI, ML Researcher", why: "Practical ML with deep rigor. His blog posts are textbook quality.", url: "https://twitter.com/rasbt", type: "FOLLOW" },
  { name: "Jeremy Howard", role: "fast.ai founder", why: "Makes deep learning genuinely accessible without sacrificing depth.", url: "https://twitter.com/jeremyphoward", type: "FOLLOW" },
  { name: "Hyung Won Chung", role: "OpenAI Researcher", why: "Deep insights on LLM training and scaling. Follow for research thinking.", url: "https://twitter.com/hwchung27", type: "FOLLOW" },
];

const TYPE_COLORS = {
  "VIDEO":    { bg: "#1e3a2f", text: "#4ade80",  border: "#4ade8033" },
  "PAPER":    { bg: "#1e1e3a", text: "#818cf8",  border: "#818cf833" },
  "BOOK":     { bg: "#3a2a1e", text: "#fb923c",  border: "#fb923c33" },
  "COURSE":   { bg: "#1e2e3a", text: "#38bdf8",  border: "#38bdf833" },
  "ARTICLE":  { bg: "#2a1e3a", text: "#c084fc",  border: "#c084fc33" },
  "DOCS":     { bg: "#1e3a3a", text: "#2dd4bf",  border: "#2dd4bf33" },
  "CODE":     { bg: "#2a1e1e", text: "#f87171",  border: "#f8717133" },
  "NOTES":    { bg: "#2a2a1e", text: "#facc15",  border: "#facc1533" },
  "PLATFORM": { bg: "#1e2a1e", text: "#86efac",  border: "#86efac33" },
  "TOOL":     { bg: "#1e1e2a", text: "#a5b4fc",  border: "#a5b4fc33" },
  "DATA":     { bg: "#2a1e2a", text: "#e879f9",  border: "#e879f933" },
};

function TypeBadge({ type, free }) {
  const style = TYPE_COLORS[type] || TYPE_COLORS["ARTICLE"];
  return (
    <span style={{
      background: style.bg, color: style.text, border: `1px solid ${style.border}`,
      fontSize: "9px", padding: "2px 7px", letterSpacing: "2px", borderRadius: "2px",
      fontFamily: "monospace", display: "inline-flex", alignItems: "center", gap: "4px"
    }}>
      {type}{free && <span style={{ color: "#4ade80", fontSize: "8px" }}>FREE</span>}
    </span>
  );
}

export default function AIRoadmap() {
  const [tab, setTab] = useState("roadmap");
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [openTrack, setOpenTrack] = useState(null);
  const [paperFilter, setPaperFilter] = useState("all");

  const phase = PHASES.find(p => p.id === selectedPhase);

  return (
    <div style={{ minHeight: "100vh", background: "#04040c", color: "#cbd5e1", fontFamily: "'Courier New', monospace" }}>

      {/* Header */}
      <div style={{ background: "#07070f", borderBottom: "1px solid #0f172a", padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#1e293b", marginBottom: "5px" }}>AI SCIENTIST + ENGINEER + RESEARCHER // 10,000 HR PROTOCOL</div>
          <div style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "2px" }}>
            FROM STUDENT →{" "}
            <span style={{ color: "#00ff9d" }}>WORLD CLASS AI</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#1e293b" }}>7 PHASES · 13 TRACKS · 10,000 HRS</div>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#00ff9d", marginTop: "4px" }}>⚡ MISSION ACTIVE — YEAR 2 CS</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#07070f", borderBottom: "1px solid #0f172a", display: "flex", padding: "0 28px", overflowX: "auto" }}>
        {[["roadmap","🗺 ROADMAP"],["papers","📄 PAPERS"],["mentors","👥 MENTORS"],["daily","⏰ DAILY SYSTEM"]].map(([key, label]) => (
          <button key={key} onClick={() => { setTab(key); setSelectedPhase(null); }} style={{
            background: "none", border: "none",
            borderBottom: tab === key ? "2px solid #00ff9d" : "2px solid transparent",
            color: tab === key ? "#00ff9d" : "#334155",
            padding: "14px 18px", cursor: "pointer", fontSize: "10px",
            letterSpacing: "3px", fontFamily: "monospace", whiteSpace: "nowrap"
          }}>{label}</button>
        ))}
      </div>

      <div style={{ padding: "28px" }}>

        {/* ── ROADMAP OVERVIEW ── */}
        {tab === "roadmap" && !selectedPhase && (
          <div>
            <div style={{ marginBottom: "28px", maxWidth: "650px" }}>
              <div style={{ fontSize: "12px", color: "#475569", lineHeight: "2" }}>
                7 phases. Each builds on the last. Click any phase to see the full resource list —
                videos, papers, books, articles — with direct links and a hands-on project.
                <span style={{ color: "#00ff9d" }}> Nothing is locked. Everything is free where possible.</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
              {PHASES.map(p => (
                <div key={p.id} onClick={() => setSelectedPhase(p.id)}
                  style={{
                    border: `1px solid ${p.id === 1 ? p.color + "55" : "#0f172a"}`,
                    borderLeft: `3px solid ${p.color}`,
                    borderRadius: "3px", padding: "20px", cursor: "pointer",
                    background: p.id === 1 ? p.color + "08" : "#07070f",
                    transition: "all 0.15s", position: "relative"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = p.color + "0d"; e.currentTarget.style.borderColor = p.color + "66"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = p.id === 1 ? p.color + "08" : "#07070f"; e.currentTarget.style.borderColor = p.id === 1 ? p.color + "55" : "#0f172a"; }}
                >
                  {p.id === 1 && (
                    <div style={{ position: "absolute", top: "10px", right: "10px", background: p.color, color: "#000", fontSize: "8px", padding: "2px 7px", letterSpacing: "2px", fontWeight: "bold" }}>
                      START HERE
                    </div>
                  )}
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{p.icon}</div>
                  <div style={{ fontSize: "8px", letterSpacing: "3px", color: p.color, marginBottom: "3px" }}>PHASE {p.id} // {p.hours}</div>
                  <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "3px" }}>{p.title}</div>
                  <div style={{ fontSize: "10px", color: "#334155", marginBottom: "10px" }}>{p.subtitle}</div>
                  <div style={{ fontSize: "11px", color: "#475569", lineHeight: "1.7", marginBottom: "14px" }}>{p.description}</div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
                    {p.pillars.map(pill => (
                      <span key={pill} style={{ background: "#0f172a", border: `1px solid ${p.color}33`, color: p.color, padding: "2px 8px", fontSize: "8px", letterSpacing: "2px" }}>{pill}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: "9px", color: "#1e293b" }}>
                    {p.tracks.length} tracks · {p.tracks.reduce((a, t) => a + t.items.length, 0)} modules · {p.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PHASE DETAIL ── */}
        {tab === "roadmap" && selectedPhase && phase && (
          <div>
            <button onClick={() => { setSelectedPhase(null); setOpenTrack(null); }} style={{
              background: "none", border: "1px solid #0f172a", color: "#334155",
              padding: "8px 16px", cursor: "pointer", fontSize: "9px",
              letterSpacing: "3px", marginBottom: "24px", fontFamily: "monospace"
            }}>← BACK</button>

            <div style={{ borderLeft: `4px solid ${phase.color}`, paddingLeft: "18px", marginBottom: "28px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: phase.color, marginBottom: "4px" }}>PHASE {phase.id} // {phase.hours} // {phase.duration}</div>
              <div style={{ fontSize: "26px", fontWeight: 900, marginBottom: "4px" }}>{phase.icon} {phase.title}</div>
              <div style={{ fontSize: "11px", color: "#475569", marginBottom: "8px" }}>{phase.subtitle}</div>
              <div style={{ fontSize: "12px", color: "#94a3b8", fontStyle: "italic" }}>"{phase.identity}"</div>
            </div>

            {phase.tracks.map((track, ti) => {
              const key = `${phase.id}-${ti}`;
              const isOpen = openTrack !== key + "_closed";
              return (
                <div key={ti} style={{ marginBottom: "20px", border: `1px solid ${phase.color}22`, borderRadius: "3px" }}>
                  <div onClick={() => setOpenTrack(isOpen ? key + "_closed" : null)}
                    style={{ padding: "14px 18px", background: "#07070f", cursor: "pointer", borderLeft: `3px solid ${phase.color}`, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                      <span style={{ color: phase.color, fontSize: "9px", letterSpacing: "3px", marginRight: "8px" }}>TRACK</span>
                      {track.name}
                    </span>
                    <span style={{ color: phase.color }}>{isOpen ? "▲" : "▼"}</span>
                  </div>

                  {isOpen && track.items.map((item, ii) => (
                    <div key={ii} style={{ padding: "20px", borderTop: "1px solid #0f172a" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                        <div style={{ fontSize: "14px", fontWeight: "bold", color: "#e2e8f0" }}>{item.topic}</div>
                      </div>

                      <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "14px", lineHeight: "1.6", fontStyle: "italic", borderLeft: "2px solid #1e293b", paddingLeft: "12px" }}>
                        {item.why}
                      </div>

                      <div style={{ marginBottom: "14px" }}>
                        <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#1e293b", marginBottom: "8px" }}>RESOURCES</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          {item.resources.map((r, ri) => (
                            <a key={ri} href={r.url} target="_blank" rel="noreferrer" style={{
                              display: "flex", alignItems: "center", gap: "10px",
                              textDecoration: "none", padding: "8px 12px",
                              background: "#0a0a14", border: "1px solid #0f172a", borderRadius: "2px",
                              transition: "border-color 0.15s"
                            }}
                              onMouseEnter={e => e.currentTarget.style.borderColor = phase.color + "55"}
                              onMouseLeave={e => e.currentTarget.style.borderColor = "#0f172a"}
                            >
                              <TypeBadge type={r.type} free={r.free} />
                              <span style={{ fontSize: "12px", color: "#94a3b8", flex: 1 }}>{r.label}</span>
                              <span style={{ color: "#334155", fontSize: "11px" }}>↗</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div style={{ background: "#07070f", border: `1px solid ${phase.color}22`, borderLeft: `3px solid ${phase.color}`, padding: "12px 16px", borderRadius: "2px" }}>
                        <div style={{ fontSize: "8px", letterSpacing: "3px", color: phase.color, marginBottom: "6px" }}>PROJECT</div>
                        <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.7" }}>{item.project}</div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {/* ── PAPERS ── */}
        {tab === "papers" && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#818cf8", marginBottom: "8px" }}>ESSENTIAL PAPERS — READ THEM ALL</div>
              <div style={{ fontSize: "11px", color: "#334155", marginBottom: "16px" }}>These papers define modern AI. Read in phase order. Every serious researcher has read all of these.</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["all", "3", "4", "5", "6"].map(f => (
                  <button key={f} onClick={() => setPaperFilter(f)} style={{
                    background: paperFilter === f ? "#1e293b" : "none",
                    border: `1px solid ${paperFilter === f ? "#818cf8" : "#1e293b"}`,
                    color: paperFilter === f ? "#818cf8" : "#334155",
                    padding: "4px 12px", cursor: "pointer", fontSize: "9px",
                    letterSpacing: "2px", fontFamily: "monospace", borderRadius: "2px"
                  }}>{f === "all" ? "ALL" : `PHASE ${f}`}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {ESSENTIAL_PAPERS.filter(p => paperFilter === "all" || String(p.phase) === paperFilter).map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noreferrer" style={{
                  display: "grid", gridTemplateColumns: "32px 1fr 1fr auto",
                  gap: "16px", alignItems: "center", padding: "16px 20px",
                  border: "1px solid #0f172a", background: "#07070f",
                  textDecoration: "none", color: "inherit", borderRadius: "2px",
                  transition: "border-color 0.15s"
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "#818cf855"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#0f172a"}
                >
                  <div style={{ fontSize: "16px", fontWeight: 900, color: "#1e293b" }}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "bold", color: "#e2e8f0", marginBottom: "3px" }}>{p.title}</div>
                    <div style={{ fontSize: "10px", color: "#334155" }}>{p.authors} · {p.year}</div>
                  </div>
                  <div style={{ fontSize: "11px", color: "#475569", lineHeight: "1.6" }}>{p.why}</div>
                  <span style={{ background: "#1e1e3a", border: "1px solid #818cf833", color: "#818cf8", fontSize: "8px", padding: "2px 8px", letterSpacing: "2px", whiteSpace: "nowrap" }}>
                    PHASE {p.phase}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── MENTORS ── */}
        {tab === "mentors" && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#00ff9d", marginBottom: "8px" }}>LEARN FROM THE BEST</div>
              <div style={{ fontSize: "11px", color: "#334155" }}>Follow these people obsessively. Study HOW they think, not just WHAT they say.</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
              {MENTORS.map((m, i) => (
                <a key={i} href={m.url} target="_blank" rel="noreferrer" style={{
                  border: "1px solid #0f172a", borderRadius: "3px", padding: "22px",
                  textDecoration: "none", color: "inherit", display: "block",
                  background: "#07070f", transition: "all 0.15s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#00ff9d33"; e.currentTarget.style.background = "#00ff9d06"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#0f172a"; e.currentTarget.style.background = "#07070f"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <TypeBadge type={m.type} free={true} />
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "4px", color: "#e2e8f0" }}>{m.name}</div>
                  <div style={{ fontSize: "10px", color: "#334155", marginBottom: "12px" }}>{m.role}</div>
                  <div style={{ fontSize: "11px", color: "#64748b", lineHeight: "1.7" }}>{m.why}</div>
                  <div style={{ marginTop: "14px", color: "#00ff9d", fontSize: "10px" }}>Follow / Watch ↗</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── DAILY SYSTEM ── */}
        {tab === "daily" && (
          <div style={{ maxWidth: "700px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#00ff9d", marginBottom: "24px" }}>YOUR DAILY EXECUTION SYSTEM</div>

            {[
              { label: "DAILY SCHEDULE", color: "#00ff9d", items: [
                "06:00 → 07:00 | Read 1 paper or book chapter. Active notes in Obsidian. Rewrite in your own words.",
                "07:00 → 10:00 | DEEP BUILD: implement the current phase project. No distractions. Sacred time.",
                "University | Apply AI concepts everywhere. Ask questions nobody else asks.",
                "Evening | 1 video max — Karpathy or Kilcher. Watch actively. Pause. Code along.",
                "Before sleep | Learning log: 3 things learned · 1 confusion · 1 thing to build tomorrow.",
              ]},
              { label: "WEEKLY RITUAL", color: "#fbbf24", items: [
                "Sunday: Plan the week — specific, measurable learning goals only.",
                "Saturday: Write a technical blog post or LinkedIn post about what you built.",
                "Every week: 1 Kaggle competition or ML challenge. Submit something.",
                "Every 2 weeks: Re-read and consolidate your Obsidian notes.",
              ]},
              { label: "THE RULES", color: "#f43f5e", items: [
                "01 — Build before you fully understand. Confusion while coding = real learning.",
                "02 — Every concept = 1 project. No passive consumption counts.",
                "03 — Read primary sources: papers > blog posts > YouTube. Always.",
                "04 — Track every experiment in W&B. No logs = no science.",
                "05 — Teach it to own it. Write about every major concept you learn.",
                "06 — Public GitHub. Every project documented. This is your live portfolio.",
                "07 — Stay uncomfortable. If it feels easy, you already know it. Move forward.",
              ]},
              { label: "TOOLS TO MASTER", color: "#06b6d4", items: [
                "Obsidian → Second brain. Every paper, concept, idea goes here.",
                "GitHub → Every project, every experiment, every commit.",
                "Weights & Biases → Every training run tracked like a scientist.",
                "Kaggle Notebooks → Free GPU to start. Use every week.",
                "HuggingFace → Your second home for models, datasets, demos.",
                "arXiv + Papers With Code → How you stay current with research.",
              ]},
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: "16px", border: `1px solid ${s.color}22`, borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", background: s.color + "08", borderBottom: `1px solid ${s.color}22` }}>
                  <span style={{ fontSize: "9px", letterSpacing: "4px", color: s.color }}>{s.label}</span>
                </div>
                {s.items.map((item, j) => (
                  <div key={j} style={{ padding: "10px 16px", borderBottom: j < s.items.length - 1 ? "1px solid #0f172a" : "none", fontSize: "12px", color: "#64748b", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: s.color, flexShrink: 0 }}>▸</span>{item}
                  </div>
                ))}
              </div>
            ))}

            <div style={{ marginTop: "8px", padding: "22px", border: "1px solid #00ff9d33", background: "#00ff9d06" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#00ff9d", marginBottom: "12px" }}>FINAL WORD</div>
              <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "2.2" }}>
                LeCun, Altman, Karpathy — not born different. They simply{" "}
                <span style={{ color: "#00ff9d" }}>showed up every day for years</span>, built things before they were ready,
                stayed uncomfortable deliberately, and shared everything publicly.
                You are starting earlier than most of them did.
                The gap is not talent. The gap is{" "}
                <span style={{ color: "#fbbf24" }}>accumulated deliberate practice</span>.
              </div>
              <div style={{ marginTop: "16px", fontSize: "10px", color: "#00ff9d", letterSpacing: "4px" }}>
                PHASE 1 STARTS TODAY. THE CLOCK IS RUNNING. ⚡
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import { useState } from "react";

// ============================================================
// HACKATHONS & COMPETITIONS — AI Career Accelerator
// Updated 2026 — Real platforms, real opportunities
// ============================================================

const COMPETITIONS = [
  // ── KAGGLE ──────────────────────────────────────────────
  {
    id: "C001",
    name: "Kaggle Competitions",
    type: "ML COMPETITION",
    platform: "Kaggle",
    url: "https://kaggle.com/competitions",
    color: "#20beff",
    status: "ongoing",
    frequency: "Always active",
    prize: "$$ — varies per competition",
    difficulty: "Beginner → Expert",
    phase: 2,
    why: "The world's largest ML competition platform. Your first public proof of skill. Kaggle medals on your profile = instant credibility with recruiters.",
    whatYouGain: ["Real datasets, real problems", "Global leaderboard ranking", "Kaggle medals for your profile", "Community notebooks to learn from"],
    howToStart: "Start with 'Getting Started' competitions: Titanic, House Prices, Digit Recognizer. These are permanent learning competitions with no deadline.",
    tips: ["Read top solution writeups after every competition — this is where you learn the most", "Form teams once you have Phase 2 knowledge", "Focus on feature engineering and ensembling to climb the leaderboard"],
  },
  {
    id: "C002",
    name: "Kaggle LLM Competitions",
    type: "LLM CHALLENGE",
    platform: "Kaggle",
    url: "https://kaggle.com/competitions?hostSegmentIdFilter=8",
    color: "#20beff",
    status: "ongoing",
    frequency: "Multiple active at all times",
    prize: "$10,000 – $100,000+",
    difficulty: "Intermediate → Expert",
    phase: 4,
    why: "LLM-specific competitions — prompt optimization, RAG, fine-tuning challenges. Directly relevant to the frontier.",
    whatYouGain: ["LLM engineering skills under competition pressure", "Exposure to real enterprise AI problems", "High prize pools", "Top solutions get published"],
    howToStart: "Wait until Phase 4. Then join actively — these require fine-tuning and RAG knowledge.",
    tips: ["Read the discussion forums — top competitors share insights", "vLLM + QLoRA = your competitive edge", "Ensemble multiple fine-tuned models"],
  },
  // ── HACKATHONS ──────────────────────────────────────────
  {
    id: "C003",
    name: "Lablab.ai Hackathons",
    type: "AI HACKATHON",
    platform: "Lablab.ai",
    url: "https://lablab.ai/event",
    color: "#a855f7",
    status: "ongoing",
    frequency: "Weekly — multiple running at all times",
    prize: "Cash + API credits + mentorship",
    difficulty: "Beginner → Intermediate",
    phase: 1,
    why: "Best platform for AI hackathons in 2026. Weekly events using latest models — Claude, GPT-4, Llama, Stable Diffusion. Perfect for building portfolio projects fast.",
    whatYouGain: ["Build real AI apps in 48-72 hours", "Network with global AI builders", "API credits for top models", "Certificate + portfolio project"],
    howToStart: "Sign up at lablab.ai. Join a hackathon this weekend — you can participate even as a beginner. Build something with Claude API or OpenAI.",
    tips: ["Focus on a narrow problem — don't try to build everything", "Ship a working demo, not a perfect product", "Document your project on GitHub immediately after"],
  },
  {
    id: "C004",
    name: "MLH (Major League Hacking)",
    type: "HACKATHON",
    platform: "MLH",
    url: "https://mlh.io/seasons/2026/events",
    color: "#e879f9",
    status: "ongoing",
    frequency: "Every weekend globally",
    prize: "Prizes + swag + internship referrals",
    difficulty: "Beginner → Intermediate",
    phase: 1,
    why: "The world's largest hackathon league. Massive networking opportunity. Top companies sponsor and recruit directly from MLH events.",
    whatYouGain: ["Network with CS students globally", "Direct recruiter exposure", "Build fast under pressure", "MLH fellowship opportunities"],
    howToStart: "Find an online MLH hackathon at mlh.io. Join solo or find teammates on their Discord.",
    tips: ["Win sponsor prizes — easier than winning overall", "Talk to every sponsor booth — this is where jobs come from", "Build an AI project — stands out in 2026"],
  },
  {
    id: "C005",
    name: "Devpost Hackathons",
    type: "HACKATHON",
    platform: "Devpost",
    url: "https://devpost.com/hackathons",
    color: "#38bdf8",
    status: "ongoing",
    frequency: "Hundreds active at all times",
    prize: "$$ — varies widely",
    difficulty: "All levels",
    phase: 1,
    why: "Largest hackathon aggregator. Find AI-specific hackathons by major companies — Google, Meta, Microsoft, NVIDIA all host here.",
    whatYouGain: ["Company-sponsored challenges", "Wide variety of AI tracks", "Public project showcase", "Industry judge feedback"],
    howToStart: "Filter by 'AI/ML' category. Start with online hackathons. Build a project, write a good README, submit.",
    tips: ["Read winning projects from past hackathons before building", "Video demo quality matters as much as the code", "Tag your project well — judges search by keywords"],
  },
  {
    id: "C006",
    name: "Hugging Face Competitions (Spaces)",
    type: "AI CHALLENGE",
    platform: "HuggingFace",
    url: "https://huggingface.co/competitions",
    color: "#fbbf24",
    status: "ongoing",
    frequency: "Monthly new challenges",
    prize: "GPU credits + visibility + prizes",
    difficulty: "Intermediate → Expert",
    phase: 3,
    why: "Research-level competitions hosted by HuggingFace. Winning or placing = massive visibility in the AI research community. Researchers and lab recruiters watch these.",
    whatYouGain: ["Research community visibility", "HuggingFace GPU credits", "Collaboration with top researchers", "Your model featured on HF Hub"],
    howToStart: "Join at Phase 3+. Build a model, push to HF Hub, submit to active challenges.",
    tips: ["Open-source your solution — visibility > prize money here", "Write a model card with full details", "Engage in the community discussion"],
  },
  {
    id: "C007",
    name: "AICrowd Challenges",
    type: "AI RESEARCH CHALLENGE",
    platform: "AICrowd",
    url: "https://www.aicrowd.com/challenges",
    color: "#f97316",
    status: "ongoing",
    frequency: "Multiple active challenges",
    prize: "Cash + research recognition",
    difficulty: "Intermediate → Expert",
    phase: 3,
    why: "Research-grade AI challenges. Many are tied to real academic papers and conference workshops. Placing = potential co-authorship on papers.",
    whatYouGain: ["Research-grade problem exposure", "Potential paper co-authorship", "Academic community recognition", "Real benchmark datasets"],
    howToStart: "Browse active challenges at aicrowd.com. Pick one aligned with your current phase focus.",
    tips: ["Read the associated papers before starting", "Focus on reproducibility — document everything", "Engage with the challenge organizers on Discord"],
  },
  {
    id: "C008",
    name: "ICML / NeurIPS / ICLR Competitions",
    type: "RESEARCH COMPETITION",
    platform: "Top AI Conferences",
    url: "https://paperswithcode.com/competitions",
    color: "#818cf8",
    status: "annual",
    frequency: "Annual — tied to conference schedule",
    prize: "Research recognition + conference travel",
    difficulty: "Expert",
    phase: 7,
    why: "The pinnacle of AI competitions. These are what top researchers compete in. Winning is career-defining — it goes on your academic CV permanently.",
    whatYouGain: ["Elite research community recognition", "Conference presentation opportunity", "Academic CV entry", "Collaboration with top labs"],
    howToStart: "Target Phase 7. Follow ICML/NeurIPS/ICLR calls for competitions annually.",
    tips: ["These require novel research, not just engineering", "Form teams with researchers, not just engineers", "Read all previous winning solutions"],
  },
  // ── GRANTS & FELLOWSHIPS ──────────────────────────────
  {
    id: "C009",
    name: "Anthropic AI Safety Grants",
    type: "RESEARCH GRANT",
    platform: "Anthropic",
    url: "https://anthropic.com/",
    color: "#f43f5e",
    status: "periodic",
    frequency: "Periodic — check regularly",
    prize: "$10,000 – $100,000 research funding",
    difficulty: "Advanced",
    phase: 6,
    why: "Anthropic funds external AI safety research. As a student researcher, this is a path to funded research and direct connection to one of the top AI labs.",
    whatYouGain: ["Research funding", "Anthropic researcher mentorship", "Direct lab connection", "Publication support"],
    howToStart: "Build a research track record first (Phase 5+). Then apply with a concrete safety research proposal.",
    tips: ["Focus on interpretability or alignment — Anthropic's core interests", "Have a published paper or preprint before applying", "Connect with Anthropic researchers on Twitter first"],
  },
  {
    id: "C010",
    name: "Google Summer of Code (GSoC)",
    type: "FELLOWSHIP",
    platform: "Google",
    url: "https://summerofcode.withgoogle.com/",
    color: "#4ade80",
    status: "annual",
    frequency: "Annual — applications open January/February",
    prize: "$1,500 – $6,600 stipend",
    difficulty: "Intermediate",
    phase: 3,
    why: "Paid open source contribution to major AI projects — TensorFlow, PyTorch, HuggingFace all participate. Massive resume signal and mentorship from core maintainers.",
    whatYouGain: ["Paid open source contribution", "Mentorship from core maintainers", "Google certification", "Strong resume signal"],
    howToStart: "Apply in Phase 3+. Contribute small PRs to the org BEFORE applying — this is how you get accepted.",
    tips: ["Start contributing 3 months before applications open", "Write a detailed, specific proposal — vague proposals never get accepted", "Pick a project with an active mentor"],
  },
  {
    id: "C011",
    name: "NVIDIA Jetson AI Specialist",
    type: "CERTIFICATION + CHALLENGE",
    platform: "NVIDIA",
    url: "https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs",
    color: "#76b900",
    status: "ongoing",
    frequency: "Self-paced",
    prize: "Official NVIDIA certification",
    difficulty: "Intermediate",
    phase: 3,
    why: "Official NVIDIA AI certification. Recognized globally. Shows you can deploy AI on edge hardware — a rare and valued skill.",
    whatYouGain: ["Official NVIDIA certification", "Edge AI deployment skills", "Community recognition", "NVIDIA developer network access"],
    howToStart: "Complete the Jetson AI Fundamentals course, then apply for certification.",
    tips: ["Complete the full course, not just the certification exam", "Build a project beyond the requirements", "Share your certification project on LinkedIn"],
  },
  {
    id: "C012",
    name: "Zindi Africa AI Competitions",
    type: "ML COMPETITION",
    platform: "Zindi",
    url: "https://zindi.africa/competitions",
    color: "#2dd4bf",
    status: "ongoing",
    frequency: "Multiple active monthly",
    prize: "Cash prizes in USD",
    difficulty: "Beginner → Expert",
    phase: 2,
    why: "Africa-focused ML competitions with real social impact problems. Less competition than Kaggle = easier to rank high early. Great for building confidence and portfolio.",
    whatYouGain: ["High ranking easier than Kaggle", "Real-world impact problems", "African tech network", "USD cash prizes"],
    howToStart: "Sign up at zindi.africa. Join any active competition — problems are clearly stated and datasets are clean.",
    tips: ["Great for getting your first top-10 finish", "Solutions often published — learn from them", "Community is supportive and collaborative"],
  },
];

const SCHEDULE = [
  { phase: "Phase 1 (Now)", color: "#00ff9d", competitions: ["Lablab.ai weekly hackathons (start immediately)", "MLH online hackathons", "Devpost AI challenges", "Kaggle: Getting Started competitions (Titanic, House Prices)"] },
  { phase: "Phase 2", color: "#f97316", competitions: ["Kaggle tabular competitions", "Zindi Africa competitions", "Lablab.ai (more complex projects now)", "Local university hackathons"] },
  { phase: "Phase 3", color: "#a855f7", competitions: ["HuggingFace Spaces challenges", "AICrowd challenges", "Google Summer of Code application", "NVIDIA Jetson AI certification", "Kaggle computer vision tracks"] },
  { phase: "Phase 4", color: "#fbbf24", competitions: ["Kaggle LLM competitions", "HuggingFace LLM challenges", "AI safety hackathons", "Startup weekends with AI focus"] },
  { phase: "Phase 5-6", color: "#06b6d4", competitions: ["Anthropic AI Safety Grants", "Conference workshop competitions", "Industry-sponsored research challenges"] },
  { phase: "Phase 7", color: "#818cf8", competitions: ["ICML / NeurIPS / ICLR competitions", "All major research competitions", "Grant applications", "Organizing your own challenge"] },
];

const STATUS_STYLE = {
  ongoing:  { label: "ONGOING",  color: "#4ade80", bg: "#4ade8015" },
  annual:   { label: "ANNUAL",   color: "#fbbf24", bg: "#fbbf2415" },
  periodic: { label: "PERIODIC", color: "#38bdf8", bg: "#38bdf815" },
};

export default function Competitions() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("all");
  const [view, setView] = useState("grid");

  const comp = COMPETITIONS.find(c => c.id === selected);

  const TYPE_FILTERS = ["all", "ML COMPETITION", "AI HACKATHON", "HACKATHON", "AI CHALLENGE", "RESEARCH COMPETITION", "FELLOWSHIP", "RESEARCH GRANT"];

  const visible = COMPETITIONS.filter(c => tab === "all" || c.type === tab);

  return (
    <div style={{ minHeight: "100vh", background: "#04040c", color: "#cbd5e1", fontFamily: "'Courier New', monospace" }}>

      {/* Header */}
      <div style={{ background: "#07070f", borderBottom: "1px solid #0f172a", padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#1e293b", marginBottom: "5px" }}>COMPETITIONS · HACKATHONS · GRANTS · FELLOWSHIPS</div>
          <div style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "2px" }}>
            ARENA <span style={{ color: "#f97316" }}>LAB</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#1e293b" }}>{COMPETITIONS.length} OPPORTUNITIES TRACKED</div>
          <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#4ade80", marginTop: "4px" }}>⚡ START PHASE 1 — JOIN NOW</div>
        </div>
      </div>

      {/* Sub tabs */}
      <div style={{ background: "#07070f", borderBottom: "1px solid #0f172a", display: "flex", padding: "0 28px", overflowX: "auto", gap: "0" }}>
        {[["grid", "ALL OPPORTUNITIES"], ["schedule", "BY PHASE SCHEDULE"]].map(([key, label]) => (
          <button key={key} onClick={() => setView(key)} style={{
            background: "none", border: "none",
            borderBottom: view === key ? "2px solid #f97316" : "2px solid transparent",
            color: view === key ? "#f97316" : "#334155",
            padding: "13px 18px", cursor: "pointer", fontSize: "10px",
            letterSpacing: "3px", fontFamily: "monospace", whiteSpace: "nowrap"
          }}>{label}</button>
        ))}
      </div>

      <div style={{ padding: "28px" }}>

        {/* ── GRID VIEW ── */}
        {view === "grid" && !selected && (
          <div>
            {/* Type filter */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "24px" }}>
              {["all", "ML COMPETITION", "AI HACKATHON", "HACKATHON", "RESEARCH COMPETITION", "FELLOWSHIP", "RESEARCH GRANT"].map(f => (
                <button key={f} onClick={() => setTab(f)} style={{
                  background: tab === f ? "#0f172a" : "none",
                  border: `1px solid ${tab === f ? "#f97316" : "#0f172a"}`,
                  color: tab === f ? "#f97316" : "#334155",
                  padding: "4px 12px", cursor: "pointer", fontSize: "8px",
                  letterSpacing: "2px", fontFamily: "monospace", borderRadius: "2px"
                }}>{f === "all" ? "ALL" : f}</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
              {visible.map(c => {
                const ss = STATUS_STYLE[c.status];
                return (
                  <div key={c.id} onClick={() => setSelected(c.id)} style={{
                    border: `1px solid ${c.color}22`,
                    borderLeft: `3px solid ${c.color}`,
                    borderRadius: "3px", padding: "20px", cursor: "pointer",
                    background: "#07070f", transition: "all 0.15s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = c.color + "0a"; e.currentTarget.style.borderColor = c.color + "55"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#07070f"; e.currentTarget.style.borderColor = c.color + "22"; }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                      <span style={{ background: "#0f172a", border: `1px solid ${c.color}33`, color: c.color, fontSize: "8px", padding: "2px 8px", letterSpacing: "2px" }}>{c.type}</span>
                      <span style={{ background: ss.bg, border: `1px solid ${ss.color}33`, color: ss.color, fontSize: "8px", padding: "2px 8px", letterSpacing: "2px" }}>{ss.label}</span>
                    </div>

                    <div style={{ fontSize: "15px", fontWeight: "bold", color: "#e2e8f0", marginBottom: "3px" }}>{c.name}</div>
                    <div style={{ fontSize: "10px", color: "#334155", marginBottom: "10px" }}>{c.platform} · {c.frequency}</div>
                    <div style={{ fontSize: "11px", color: "#475569", lineHeight: "1.7", marginBottom: "12px" }}>{c.why.slice(0, 100)}...</div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "10px", color: "#4ade80" }}>{c.prize}</span>
                      <span style={{ background: "#0f172a", color: "#334155", fontSize: "8px", padding: "2px 8px", letterSpacing: "2px" }}>PHASE {c.phase}+</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── DETAIL VIEW ── */}
        {view === "grid" && selected && comp && (
          <div style={{ maxWidth: "820px" }}>
            <button onClick={() => setSelected(null)} style={{
              background: "none", border: "1px solid #0f172a", color: "#334155",
              padding: "8px 16px", cursor: "pointer", fontSize: "9px",
              letterSpacing: "3px", marginBottom: "24px", fontFamily: "monospace"
            }}>← BACK</button>

            <div style={{ borderLeft: `4px solid ${comp.color}`, paddingLeft: "18px", marginBottom: "28px" }}>
              <div style={{ fontSize: "8px", letterSpacing: "4px", color: comp.color, marginBottom: "4px" }}>{comp.type} // {comp.platform} // PHASE {comp.phase}+</div>
              <div style={{ fontSize: "24px", fontWeight: 900, marginBottom: "4px" }}>{comp.name}</div>
              <div style={{ fontSize: "11px", color: "#334155", marginBottom: "4px" }}>{comp.frequency}</div>
              <div style={{ fontSize: "12px", color: "#4ade80" }}>{comp.prize}</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              <div style={{ border: `1px solid ${comp.color}22`, borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", borderBottom: `1px solid ${comp.color}22`, fontSize: "9px", letterSpacing: "3px", color: comp.color }}>WHY THIS MATTERS</div>
                <div style={{ padding: "16px", fontSize: "12px", color: "#94a3b8", lineHeight: "1.8" }}>{comp.why}</div>
              </div>
              <div style={{ border: "1px solid #0f172a", borderRadius: "3px" }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid #0f172a", fontSize: "9px", letterSpacing: "3px", color: "#4ade80" }}>WHAT YOU GAIN</div>
                {comp.whatYouGain.map((g, i) => (
                  <div key={i} style={{ padding: "10px 16px", borderBottom: i < comp.whatYouGain.length - 1 ? "1px solid #0f172a" : "none", fontSize: "11px", color: "#64748b", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#4ade80" }}>▸</span>{g}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ border: `1px solid ${comp.color}22`, borderRadius: "3px", marginBottom: "14px" }}>
              <div style={{ padding: "12px 16px", borderBottom: `1px solid ${comp.color}22`, fontSize: "9px", letterSpacing: "3px", color: comp.color }}>HOW TO START</div>
              <div style={{ padding: "16px", fontSize: "12px", color: "#94a3b8", lineHeight: "1.8" }}>{comp.howToStart}</div>
            </div>

            <div style={{ border: "1px solid #0f172a", borderRadius: "3px", marginBottom: "14px" }}>
              <div style={{ padding: "12px 16px", borderBottom: "1px solid #0f172a", fontSize: "9px", letterSpacing: "3px", color: "#fbbf24" }}>PRO TIPS</div>
              {comp.tips.map((t, i) => (
                <div key={i} style={{ padding: "10px 16px", borderBottom: i < comp.tips.length - 1 ? "1px solid #0f172a" : "none", fontSize: "11px", color: "#64748b", display: "flex", gap: "8px" }}>
                  <span style={{ color: "#fbbf24" }}>▸</span>{t}
                </div>
              ))}
            </div>

            <a href={comp.url} target="_blank" rel="noreferrer" style={{
              display: "block", padding: "14px 20px", background: comp.color + "15",
              border: `1px solid ${comp.color}44`, borderRadius: "3px",
              textDecoration: "none", color: comp.color, fontSize: "12px",
              letterSpacing: "2px", textAlign: "center", transition: "all 0.15s"
            }}
              onMouseEnter={e => e.currentTarget.style.background = comp.color + "25"}
              onMouseLeave={e => e.currentTarget.style.background = comp.color + "15"}
            >
              OPEN {comp.platform.toUpperCase()} ↗
            </a>
          </div>
        )}

        {/* ── PHASE SCHEDULE VIEW ── */}
        {view === "schedule" && (
          <div style={{ maxWidth: "750px" }}>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#f97316", marginBottom: "8px" }}>COMPETITION SCHEDULE BY PHASE</div>
              <div style={{ fontSize: "11px", color: "#334155", lineHeight: "1.8" }}>
                You don't wait until you're "ready" to compete. You compete from <span style={{ color: "#4ade80" }}>Phase 1</span>.
                Early competitions build speed, confidence, and network. The goal is not to win at first — it's to show up.
              </div>
            </div>

            {SCHEDULE.map((s, i) => (
              <div key={i} style={{ marginBottom: "14px", border: `1px solid ${s.color}22`, borderRadius: "3px" }}>
                <div style={{ padding: "14px 18px", background: s.color + "08", borderLeft: `3px solid ${s.color}`, display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "3px", color: s.color }}>{s.phase.toUpperCase()}</span>
                  {i === 0 && <span style={{ background: s.color, color: "#000", fontSize: "8px", padding: "1px 7px", letterSpacing: "2px", fontWeight: "bold" }}>YOU ARE HERE</span>}
                </div>
                {s.competitions.map((c, j) => (
                  <div key={j} style={{ padding: "10px 18px", borderBottom: j < s.competitions.length - 1 ? "1px solid #0f172a" : "none", fontSize: "12px", color: "#64748b", display: "flex", gap: "10px" }}>
                    <span style={{ color: s.color, flexShrink: 0 }}>▸</span>{c}
                  </div>
                ))}
              </div>
            ))}

            <div style={{ marginTop: "8px", padding: "20px", border: "1px solid #f9731633", background: "#f9731608" }}>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#f97316", marginBottom: "10px" }}>THE COMPETITION MINDSET</div>
              <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "2.2" }}>
                Competitions are not just about winning. They are about{" "}
                <span style={{ color: "#4ade80" }}>exposure, speed, and network</span>.
                Every hackathon puts you in a room (virtual or physical) with people who will hire you,
                co-found with you, or collaborate with you on research.
                The person who ships a working demo beats the person with a perfect idea every time.
                <br /><br />
                <span style={{ color: "#fbbf24" }}>Rule: Participate in at least 1 competition or hackathon every month. No exceptions.</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

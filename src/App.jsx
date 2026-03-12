import { useState } from "react"
import Roadmap from "./Roadmap"
import ProjectLab from "./ProjectLab"

export default function App() {
  const [page, setPage] = useState("roadmap")
  return (
    <div>
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "#020209", borderBottom: "1px solid #0f172a",
        display: "flex", gap: "0", padding: "0 24px", fontFamily: "monospace"
      }}>
        {[["roadmap","🗺 ROADMAP"], ["projects","⚗ PROJECT LAB"]].map(([key, label]) => (
          <button key={key} onClick={() => setPage(key)} style={{
            background: "none", border: "none",
            borderBottom: page === key ? "2px solid #38bdf8" : "2px solid transparent",
            color: page === key ? "#38bdf8" : "#334155",
            padding: "14px 20px", cursor: "pointer",
            fontSize: "11px", letterSpacing: "3px", fontFamily: "monospace"
          }}>{label}</button>
        ))}
      </div>
      <div style={{ paddingTop: "48px" }}>
        {page === "roadmap"  && <Roadmap />}
        {page === "projects" && <ProjectLab />}
      </div>
    </div>
  )
}

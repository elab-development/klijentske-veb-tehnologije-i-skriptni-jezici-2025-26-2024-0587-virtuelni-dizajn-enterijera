import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Ton = "sve" | "topli" | "hladni" | "neutralni";

function Boje() {
  const navigate = useNavigate();
  const [aktivniTon, setAktivniTon] = useState<Ton>("sve");

  const palete = [
    { naziv: "Topli zemljani tonovi", boje: ["#8B7355", "#A1866F", "#C9B79C", "#EFE6D8"], ton: "topli" },
    { naziv: "Moderni neutralni", boje: ["#111827", "#374151", "#6B7280", "#D1D5DB"], ton: "neutralni" },
    { naziv: "Skandinavski plavi tonovi", boje: ["#1E3A4C", "#3E6B89", "#7FA0B8", "#E8EEF2"], ton: "hladni" },
    { naziv: "Roze tonovi", boje: ["#FCE7F3", "#FBCFE8", "#F9A8D4", "#EC4899"], ton: "topli" },
    { naziv: "Crveni tonovi", boje: ["#FEE2E2", "#FCA5A5", "#EF4444", "#7F1D1D"], ton: "topli"},
    { naziv: "Narandžasti tonovi", boje: ["#FFEDD5", "#FDBA74", "#FB923C", "#C2410C"], ton: "topli" },
    { naziv: "Žuti tonovi", boje: ["#FEF9C3", "#FDE68A", "#FACC15", "#CA8A04"], ton: "topli" },
    { naziv: "Zeleni tonovi", boje: ["#DCFCE7", "#86EFAC", "#0eab48", "#14532D"], ton: "hladni" },
    { naziv: "Plavi tonovi", boje: ["#DBEAFE", "#93C5FD", "#3B82F6", "#1E3A8A"], ton: "hladni"},
    { naziv: "Ljubičasti tonovi", boje: ["#F3E8FF", "#D8B4FE", "#A855F7", "#4C1D95"], ton: "hladni" },
  ];

  const filteri: { id: Ton; oznaka: string}[] = [
    { id: "sve", oznaka: "Sve"},
    { id: "topli", oznaka: "Topli"},
    { id: "hladni", oznaka: "Hladni"},
    {id: "neutralni", oznaka: "Neutralni"},
  ];
  const filPalete = aktivniTon === "sve" ? palete: palete.filter((p) => p.ton === aktivniTon);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f3ee", paddingTop: "120px", paddingBottom: "60px", paddingLeft: "40px", paddingRight: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <button
          onClick={() => navigate("/products/Boje")}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#2563eb", background: "none", border: "none", cursor: "pointer", fontSize: "16px", marginBottom: "30px", padding: 0 }}
        >
          ← Nazad na ponudu
        </button>

        <h1 style={{ textAlign: "center", fontSize: "46px", marginBottom: "16px", color: "#2f2f2f" }}>
          Paleta boja
        </h1>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "50px", fontSize: "18px" }}>
          Predlozi kombinacija boja koje možeš iskoristiti za svoj enterijer.
        </p>

        <div style={{ display: "flex", justifyContent:"center", gap:"10px", marginBottom:"40px", flexWrap: "wrap"}}>
        {filteri.map((f) => (
          <button
          key = {f.id}
          onClick={() => setAktivniTon(f.id)}
          style ={{
            padding: "8px 20px",
            borderRadius: "20px",
            border:" 2px solid",
            borderColor: aktivniTon === f.id ? "#8b7355" : "#d1d5db",
            backgroundColor: aktivniTon === f.id ? "#8b7355" : "white",
            color: aktivniTon === f.id ? "white" : "#374151",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: aktivniTon === f.id ? 600: 400,
            transition: " all 0.2s",
          }}
          >
            {f.oznaka}
          </button>
        ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "22px" }}>
          {filPalete.map((paleta) => (
            <div key={paleta.naziv} style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "20px", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
              <h2 style={{ fontSize: "20px", marginBottom: "14px", color: "#2f2f2f" }}>
                {paleta.naziv}
              </h2>
              <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                {paleta.boje.map((boja) => (
                  <div key={boja} title={boja} style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: boja, border: "1px solid #e5e7eb" }} />
                ))}
              </div>
              <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
                {paleta.boje.join("  •  ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Boje;
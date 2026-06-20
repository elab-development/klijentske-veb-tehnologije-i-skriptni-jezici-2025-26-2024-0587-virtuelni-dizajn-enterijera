import { useState } from "react";

interface DugmeProps {
  tekst: string;
  onClick: () => void;
  boja?: string;
}

export default function Dugme({ tekst, onClick, boja = "#2563eb" }: DugmeProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: boja,
        color: "white",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: 600,
      }}
    >
      {tekst}
    </button>
  );
}
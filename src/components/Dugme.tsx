interface DugmeProps {
  tekst: string;
  onClick: () => void;
  boja?: string;
}

export default function Dugme({ tekst, onClick, boja = "#2563eb" }: DugmeProps) {
  return (
    <button
      onClick={onClick}
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
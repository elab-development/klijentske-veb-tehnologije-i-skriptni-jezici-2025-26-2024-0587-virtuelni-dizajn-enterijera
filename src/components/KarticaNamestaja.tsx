import type { Proizvod } from "../models/ProizvodModel";

interface KarticaNamestajaProps {
  product: Proizvod;
  onAdd: (product: Proizvod) => void;
}
// komentar sa odbrane
export default function KarticaNamestaja({ product, onAdd }: KarticaNamestajaProps) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fafafa",
      }}
    >
      <img
        src={product.image_path}
        alt={product.name}
        style={{
          width: "100%",
          height: 90,
          objectFit: "cover",
          borderRadius: 6,
          marginBottom: 6,
        }}
      />
      <p style={{ fontSize: 12, fontWeight: "bold", margin: "0 0 2px", color: "#2f2f2f" }}>
        {product.name}
      </p>
      <p style={{ fontSize: 11, color: "#888", margin: "0 0 6px" }}>
        {product.dimensions.width}×{product.dimensions.depth} cm
      </p>
      <p style= {{ fontSize: 11, color: "#a07850", margin: "0 0 6px"}}>
        {product.getWoodTypeLabel()}
      </p>
      <button
        onClick={() => onAdd(product)}
        style={{
          width: "100%",
          padding: "6px 0",
          backgroundColor: "#8b7355",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        + Dodaj u sobu
      </button>
    </div>
  );
}
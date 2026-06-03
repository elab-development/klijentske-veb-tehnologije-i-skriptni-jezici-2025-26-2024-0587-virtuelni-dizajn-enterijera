import { useState, useEffect, useRef } from "react";
import { DndContext, useDraggable } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Product {
  id: string;
  name: string;
  category: string;
  dimensions: { width: number; depth: number; height: number };
  image_path: string;
  price: number;
  wood_type: string;
  finish: string;
}

interface PlacedItem {
  uid: string;
  product: Product;
  x: number;
  y: number;
}

interface Point {
  x: number;
  y: number;
}

const PX_PER_M = 60;
const SCALE = PX_PER_M / 100;

const CATEGORIES = [
  "all", "sofa", "chair", "stool", "table",
  "desk", "lamp", "wardrove", "mirror", "kitchen",
];

const CATEGORY_LABELS: Record<string, string> = {
  all: "Sve kategorije",
  sofa: "Sofa",
  chair: "Stolica",
  stool: "Taburet",
  table: "Sto",
  desk: "Radni sto",
  lamp: "Lampa",
  wardrove: "Ormar",
  mirror: "Ogledalo",
  kitchen: "Kuhinja",
};

const MOCK_PRODUCTS: Product[] = [
  { id: "m1", name: "Sofa Milano", category: "sofa", dimensions: { width: 220, depth: 90, height: 85 }, image_path: "https://placehold.co/200x140/c9b79c/5a4a3a?text=Sofa", price: 899, wood_type: "oak", finish: "natural" },
  { id: "m2", name: "Fotelja Lux", category: "chair", dimensions: { width: 80, depth: 80, height: 90 }, image_path: "https://placehold.co/200x140/d9c9b8/5a4a3a?text=Fotelja", price: 399, wood_type: "walnut", finish: "dark" },
  { id: "m3", name: "Trpezarijski sto", category: "table", dimensions: { width: 160, depth: 80, height: 75 }, image_path: "https://placehold.co/200x140/e8ddd1/5a4a3a?text=Sto", price: 549, wood_type: "oak", finish: "light" },
  { id: "m4", name: "Stolica Moderna", category: "stool", dimensions: { width: 45, depth: 45, height: 80 }, image_path: "https://placehold.co/200x140/c9b79c/5a4a3a?text=Stolica", price: 149, wood_type: "maple", finish: "natural" },
  { id: "m5", name: "Radni sto", category: "desk", dimensions: { width: 140, depth: 70, height: 75 }, image_path: "https://placehold.co/200x140/b8a898/5a4a3a?text=Desk", price: 449, wood_type: "pine", finish: "light" },
  { id: "m6", name: "Podna lampa", category: "lamp", dimensions: { width: 40, depth: 40, height: 160 }, image_path: "https://placehold.co/200x140/efe6d8/5a4a3a?text=Lampa", price: 199, wood_type: "bamboo", finish: "natural" },
  { id: "m7", name: "Ormar 3-krila", category: "wardrove", dimensions: { width: 180, depth: 60, height: 220 }, image_path: "https://placehold.co/200x140/d0c0af/5a4a3a?text=Ormar", price: 799, wood_type: "walnut", finish: "dark" },
  { id: "m8", name: "Ogledalo Oval", category: "mirror", dimensions: { width: 60, depth: 5, height: 90 }, image_path: "https://placehold.co/200x140/e0d8d0/5a4a3a?text=Ogledalo", price: 249, wood_type: "oak", finish: "medium" },
  { id: "m9", name: "Kuhinjski island", category: "kitchen", dimensions: { width: 120, depth: 60, height: 90 }, image_path: "https://placehold.co/200x140/c8b8a8/5a4a3a?text=Kuhinja", price: 1199, wood_type: "oak", finish: "light" },
  { id: "m10", name: "Taburet Okrugli", category: "stool", dimensions: { width: 40, depth: 40, height: 45 }, image_path: "https://placehold.co/200x140/d9c9b8/5a4a3a?text=Taburet", price: 99, wood_type: "cedar", finish: "natural" },
];

function DraggableFurniture({
  item,
  onRemove,
}: {
  item: PlacedItem;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.uid,
  });

  const w = Math.max((item.product.dimensions.width || 60) * SCALE, 24);
  const h = Math.max((item.product.dimensions.depth || 60) * SCALE, 24);

  return (
    <div
      ref={setNodeRef}
      style={{
        position: "absolute",
        left: item.x,
        top: item.y,
        width: w,
        height: h + 22,
        transform: CSS.Translate.toString(transform),
        zIndex: 10,
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        style={{
          position: "absolute",
          top: -8,
          right: -8,
          width: 20,
          height: 20,
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: 13,
          lineHeight: "20px",
          textAlign: "center",
          padding: 0,
          zIndex: 20,
        }}
      >
        ×
      </button>
      <div
        {...listeners}
        {...attributes}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          border: "2px solid #8b7355",
          borderRadius: 8,
          backgroundColor: "rgba(255,255,255,0.92)",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        <img
          src={item.product.image_path}
          alt={item.product.name}
          style={{ width: "100%", height: h - 4, objectFit: "cover" }}
          draggable={false}
        />
        <div
          style={{
            fontSize: 9,
            textAlign: "center",
            padding: "2px 4px",
            color: "#333",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {item.product.name}
        </div>
      </div>
    </div>
  );
}

export default function DizajnEditor() {
  const [mode, setMode] = useState<"draw" | "place">("place");
  const [points, setPoints] = useState<Point[]>([]);
  const [roomClosed, setRoomClosed] = useState(false);
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [hoverClose, setHoverClose] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setLoading(true);
    const cat = selectedCategory === "all" ? "" : `&category=${selectedCategory}`;
    fetch(`https://furniture-api.fly.dev/v1/products?limit=30${cat}`)
      .then((r) => r.json())
      .then((data) => {
        const items: Product[] = data.data || [];
        if (items.length > 0) {
          setProducts(items);
        } else {
          const filtered = selectedCategory === "all"
            ? MOCK_PRODUCTS
            : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);
          setProducts(filtered);
        }
        setLoading(false);
      })
      .catch(() => {
        const filtered = selectedCategory === "all"
          ? MOCK_PRODUCTS
          : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);
        setProducts(filtered);
        setLoading(false);
      });
  }, [selectedCategory]);

  useEffect(() => {
    const saved = localStorage.getItem("interiorly_layout");
    if (saved) {
      try {
        const { points: p, closed, items } = JSON.parse(saved);
        setPoints(p || []);
        setRoomClosed(!!closed);
        setPlacedItems(items || []);
      } catch {
        // ignore invalid stored data
      }
    }
  }, []);

  const handleCanvasClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (roomClosed || mode !== "draw") return;
    const rect = svgRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (points.length >= 3) {
      const dist = Math.hypot(x - points[0].x, y - points[0].y);
      if (dist < 15) {
        setRoomClosed(true);
        setMode("place");
        return;
      }
    }
    setPoints((prev) => [...prev, { x, y }]);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (roomClosed || points.length < 3 || mode !== "draw") return;
    const rect = svgRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverClose(Math.hypot(x - points[0].x, y - points[0].y) < 15);
  };

  const addFurniture = (product: Product) => {
    setPlacedItems((prev) => [
      ...prev,
      { uid: `${product.id}-${Date.now()}`, product, x: 200, y: 150 },
    ]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    setPlacedItems((prev) =>
      prev.map((item) =>
        item.uid === active.id
          ? { ...item, x: item.x + delta.x, y: item.y + delta.y }
          : item
      )
    );
  };

  const saveLayout = () => {
    localStorage.setItem(
      "interiorly_layout",
      JSON.stringify({ points, closed: roomClosed, items: placedItems })
    );
    alert("Raspored sačuvan!");
  };

  const downloadJSON = () => {
    const data = {
      room: { points },
      furniture: placedItems.map((i) => ({
        name: i.product.name,
        category: i.product.category,
        x: i.x,
        y: i.y,
        dimensions: i.product.dimensions,
      })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "interiorly_raspored.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetAll = () => {
    setPoints([]);
    setRoomClosed(false);
    setMode("draw");
    setPlacedItems([]);
    localStorage.removeItem("interiorly_layout");
  };

  const closeRoom = () => {
    setRoomClosed(true);
    setMode("place");
  };

  const polygonStr = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 65px)",
        backgroundColor: "#f7f3ee",
      }}
    >
      
      <div
        style={{
          width: 250,
          backgroundColor: "#fff",
          borderRight: "1px solid #eee",
          overflowY: "auto",
          padding: 14,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h3 style={{ margin: 0, color: "#2f2f2f", fontSize: 16 }}>
          Nameštaj
        </h3>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "7px 10px",
            borderRadius: 8,
            border: "1px solid #ddd",
            fontSize: 13,
          }}
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {CATEGORY_LABELS[c] || c}
            </option>
          ))}
        </select>

        {loading ? (
          <p style={{ fontSize: 13, color: "#888", textAlign: "center" }}>
            Učitavanje...
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
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
              <p
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  margin: "0 0 2px",
                  color: "#2f2f2f",
                }}
              >
                {product.name}
              </p>
              <p style={{ fontSize: 11, color: "#888", margin: "0 0 6px" }}>
                {product.dimensions.width}×{product.dimensions.depth} cm
              </p>
              <button
                onClick={() => addFurniture(product)}
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
          ))
        )}
      </div>

      
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 16px",
            backgroundColor: "#fff",
            borderBottom: "1px solid #eee",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              if (mode === "draw") {
                setMode("place");
              } else {
                setRoomClosed(false);
                setPoints([]);
                setMode("draw");
              }
            }}
            style={{
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: mode === "draw" ? "#ef4444" : "#8b7355",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {mode === "draw" ? "✕ Prekini crtanje" : "✏ Nacrtaj sobu"}
          </button>

          {mode === "draw" && (
            <span style={{ fontSize: 12, color: "#666" }}>
              {points.length === 0
                ? "Klikni na platno da postaviš prvu tačku"
                : points.length < 3
                ? `${points.length} tač. – dodaj još`
                : "Klikni na prvu tačku (zelenu) ili pritisni →"}
            </span>
          )}

          {mode === "draw" && !roomClosed && points.length >= 3 && (
            <button
              onClick={closeRoom}
              style={{
                padding: "5px 14px",
                backgroundColor: "#22c55e",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Zatvori sobu
            </button>
          )}

          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button
              onClick={saveLayout}
              style={{
                padding: "5px 14px",
                backgroundColor: "#8b7355",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Sačuvaj
            </button>
            <button
              onClick={downloadJSON}
              style={{
                padding: "5px 14px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              ↓ JSON
            </button>
            <button
              onClick={resetAll}
              style={{
                padding: "5px 14px",
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Resetuj
            </button>
          </div>
        </div>

        
        <div style={{ flex: 1, padding: 16, overflow: "hidden" }}>
          <DndContext onDragEnd={handleDragEnd}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundColor: "#e8e0d5",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <svg
                ref={svgRef}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  cursor: mode === "draw" && !roomClosed ? "crosshair" : "default",
                  zIndex: mode === "draw" && !roomClosed ? 20 : 1,
                  pointerEvents: mode === "draw" && !roomClosed ? "all" : "none",
                }}
                onClick={handleCanvasClick}
                onMouseMove={handleMouseMove}
              >
                <defs>
                  <pattern id="grid1m" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c8bfb5" strokeWidth="0.6" />
                  </pattern>
                  <pattern id="grid5m" width="300" height="300" patternUnits="userSpaceOnUse">
                    <rect width="300" height="300" fill="url(#grid1m)" />
                    <path d="M 300 0 L 0 0 0 300" fill="none" stroke="#a89880" strokeWidth="1.2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid5m)" />

                {roomClosed && (
                  <polygon
                    points={polygonStr}
                    fill="rgba(255,252,248,0.75)"
                    stroke="#8b7355"
                    strokeWidth="3"
                  />
                )}

                {!roomClosed && points.length >= 2 && (
                  <polyline
                    points={polygonStr}
                    fill="none"
                    stroke="#8b7355"
                    strokeWidth="2"
                    strokeDasharray="6,4"
                  />
                )}

                {points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={i === 0 && points.length >= 3 ? (hoverClose ? 10 : 7) : 5}
                    fill={i === 0 && points.length >= 3 && hoverClose ? "#22c55e" : "#8b7355"}
                    stroke="white"
                    strokeWidth="2"
                  />
                ))}

                {points.length === 0 && mode === "draw" && (
                  <text x="50%" y="50%" textAnchor="middle" fill="#aaa" fontSize="15" dy=".3em">
                    Klikni ovde da počneš crtati zidove sobe
                  </text>
                )}

                {mode === "draw" && !roomClosed && points.length >= 2 &&
                  points.slice(0, -1).map((p, i) => {
                    const next = points[i + 1];
                    const mx = (p.x + next.x) / 2;
                    const my = (p.y + next.y) / 2;
                    const dist = Math.hypot(next.x - p.x, next.y - p.y);
                    const meters = (dist / PX_PER_M).toFixed(2);
                    return (
                      <g key={i}>
                        <rect x={mx - 22} y={my - 10} width={44} height={18} rx={4} fill="rgba(255,255,255,0.85)" />
                        <text x={mx} y={my + 4} textAnchor="middle" fontSize="11" fill="#5a4a3a" fontWeight="600">
                          {meters}m
                        </text>
                      </g>
                    );
                  })
                }

                {roomClosed && points.length >= 2 &&
                  [...points, points[0]].slice(0, -1).map((p, i) => {
                    const next = [...points, points[0]][i + 1];
                    const mx = (p.x + next.x) / 2;
                    const my = (p.y + next.y) / 2;
                    const dist = Math.hypot(next.x - p.x, next.y - p.y);
                    const meters = (dist / PX_PER_M).toFixed(2);
                    return (
                      <g key={i}>
                        <rect x={mx - 22} y={my - 10} width={44} height={18} rx={4} fill="rgba(255,255,255,0.85)" />
                        <text x={mx} y={my + 4} textAnchor="middle" fontSize="11" fill="#5a4a3a" fontWeight="600">
                          {meters}m
                        </text>
                      </g>
                    );
                  })
                }
              </svg>

              
              <div style={{
                position: "absolute",
                bottom: 12,
                right: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: "none",
                zIndex: 5,
              }}>
                <span style={{ fontSize: 11, color: "#5a4a3a", fontWeight: 600, marginBottom: 2 }}>1m</span>
                <div style={{
                  width: 60,
                  height: 6,
                  borderLeft: "2px solid #5a4a3a",
                  borderRight: "2px solid #5a4a3a",
                  borderBottom: "2px solid #5a4a3a",
                }} />
              </div>

              {placedItems.map((item) => (
                <DraggableFurniture
                  key={item.uid}
                  item={item}
                  onRemove={() =>
                    setPlacedItems((prev) => prev.filter((i) => i.uid !== item.uid))
                  }
                />
              ))}
            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
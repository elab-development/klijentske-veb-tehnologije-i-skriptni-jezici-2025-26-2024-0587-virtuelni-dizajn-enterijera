import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { useState, useEffect } from "react";

type ProductInfo = {
  name: string;
  description: string;
  image: string;
  features: string[];
  ruta?: string;
};

type NamestajItem = {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
};

type Kategorija = {
  id: string;
  naziv: string;
};

const KATEGORIJE: Kategorija[] = [
  { id: "dnevna", naziv: "Dnevna soba" },
  { id: "spavaca", naziv: "Spavaća soba" },
  { id: "trpezarija", naziv: "Trpezarija" },
  { id: "radni", naziv: "Radni prostor" },
  { id: "kupatilo", naziv: "Kupatilo" },
  { id: "kuhinja", naziv: "Kuhinja" },
];

const LOKALNI_NAMESTAJ: Record<string, NamestajItem[]> = {
  dnevna: [
    { id: 101, title: "Sofa Milano", thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", category: "dnevna" },
    { id: 102, title: "Fotelja Comfort", thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", category: "dnevna" },
    { id: 103, title: "Kauč Relax", thumbnail: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "dnevna" },
    { id: 104, title: "Sto", thumbnail: "https://images.unsplash.com/photo-1560448076-957f79776e95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "dnevna" },
    { id: 105, title: "Polica za knjige", thumbnail: "https://images.unsplash.com/photo-1543248939-4296e1fea89b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "dnevna" },
    { id: 106, title: "TV komoda", thumbnail: "https://images.unsplash.com/photo-1716765758698-0684b5d186cc?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "dnevna" },
  ],
  spavaca: [
    { id: 201, title: "Bračni krevet", thumbnail: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80", category: "spavaca" },
    { id: 202, title: "Noćni stočić", thumbnail: "https://images.unsplash.com/photo-1649194271420-b2ff52418a62?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "spavaca" },
    { id: 203, title: "Ormar sa ogledalom", thumbnail: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "spavaca" },
    { id: 204, title: "Komoda", thumbnail: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "spavaca" },
    { id: 205, title: "Ogledalo", thumbnail: "https://images.unsplash.com/photo-1570974797119-9d44484cd541?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "spavaca" },
    { id: 206, title: "Manji krevet", thumbnail: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "spavaca" },
  ],
  trpezarija: [
    { id: 301, title: "Trpezarijski sto", thumbnail: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80", category: "trpezarija" },
    { id: 302, title: "Trpezarijska stolica", thumbnail: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80", category: "trpezarija" },
    { id: 303, title: "Manji sto", thumbnail: "https://images.unsplash.com/photo-1657524398377-567034729507?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "trpezarija" },
    { id: 304, title: "Vitrina", thumbnail: "https://plus.unsplash.com/premium_photo-1676823570630-be7b7e1ce1bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "trpezarija" },
    { id: 305, title: "Okrugli sto", thumbnail: "https://images.unsplash.com/photo-1687949289431-7dbbef0f872f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "trpezarija" },
    { id: 306, title: "Veći sto", thumbnail: "https://images.unsplash.com/photo-1593136596203-7212b076f4d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "trpezarija" },
  ],
  radni: [
    { id: 401, title: "Radni sto", thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "radni" },
    { id: 402, title: "Kancelarijska stolica", thumbnail: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "radni" },
    { id: 403, title: "Polica za dokumente", thumbnail: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&q=80", category: "radni" },
    { id: 404, title: "Ugaoni sto", thumbnail: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80", category: "radni" },
    
  ],
  kupatilo: [
    { id: 502, title: "Polica za kupatilo", thumbnail: "https://plus.unsplash.com/premium_photo-1681487208776-e308bfaa0539?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kupatilo" },
    { id: 503, title: "Kada", thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80", category: "kupatilo" },
    { id: 504, title: "Ogledalo sa okvirom", thumbnail: "https://plus.unsplash.com/premium_photo-1676968003305-307c441dbbd3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kupatilo" },
    { id: 506, title: "Lavabo komoda", thumbnail: "https://images.unsplash.com/photo-1695002817411-203c7f19dfa3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kupatilo" },
  ],
  kuhinja: [
    { id: 601, title: "Kuhinjski island", thumbnail: "https://images.unsplash.com/photo-1617228069096-4638a7ffc906?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kuhinja" },
    { id: 604, title: "Police", thumbnail: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kuhinja" },
    { id: 606, title: "Ugaona kuhinja", thumbnail: "https://images.unsplash.com/photo-1651765895131-1ae059a5f9ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kuhinja" },
  ],
};

const products: Record<string, ProductInfo> = {
  "2D": {
    name: "2D dizajn prostora",
    description: "Uz pomoć naših alata dizajnirate svoj prostor na način koji baš Vama odgovara!",
    image: "https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?q=80&w=1632&auto=format&fit=crop",
    features: [
      "Iskoristi alate koji su ti na raspolaganju i uredi svoj prostor u 2D-u.",
      "Nameštaj i boje iz kataloga su ti na raspolaganju.",
      "Uredi svoj prostor po svom ukusu!",
      "Najbolji način da se uveriš da se sve uklapa i odgovara baš Vama.",
    ],
    ruta: "/dizajn-editor",
  },
  Nameštaj: {
    name: "Nameštaj",
    description: "Odaberi savršen izgled nameštaja koji će upotpuniti Vaš prostor!",
    image: "https://images.unsplash.com/photo-1765006556070-7a121a99daf4?q=80&w=1707&auto=format&fit=crop",
    features: [
      "Prelistaj katalog nameštaja i pronađi savršenu ideju za svoj prostor!",
      "Širok izbor nameštaja po sobama!",
    ],
    ruta: "/dizajn-editor",
  },
  Boje: {
    name: "Palete boja",
    description: "Odluči se za boje koje će uneti vedrinu i lepotu u Vaš prostor!",
    image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1632&auto=format&fit=crop",
    features: [
      "Odaberi savršenu boju za svoj prostor!",
      "Odluči se za boju koja će ulepšati Vaš prostor.",
      "Prelistaj katalog i odaberi.",
    ],
    ruta: "/boje",
  },
};

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? products[id] : null;

  const [prikaziKatalog, setPrikaziKatalog] = useState(false);
  const [aktivnaKategorija, setAktivnaKategorija] = useState<string>("dnevna");
  const [apiNamestaj, setApiNamestaj] = useState<NamestajItem[]>([]);
  const [loadingApi, setLoadingApi] = useState(false);

  useEffect(() => {
    if (id !== "Nameštaj" || !prikaziKatalog) return;
    setLoadingApi(true);
    fetch("https://dummyjson.com/products/category/furniture")
      .then((r) => r.json())
      .then((data) => {
        const mapped: NamestajItem[] = (data.products || []).map((p: any) => ({
          id: p.id,
          title: p.title,
          thumbnail: p.thumbnail,
          category: "api",
        }));
        setApiNamestaj(mapped);
        setLoadingApi(false);
      })
      .catch(() => setLoadingApi(false));
  }, [id, prikaziKatalog]);

  const trenutniNamestaj =
    aktivnaKategorija === "api"
      ? apiNamestaj
      : LOKALNI_NAMESTAJ[aktivnaKategorija] || [];

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "140px 60px 80px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Stranica nije pronađena</h2>
        <button
          onClick={() => navigate("/ponuda")}
          style={{ color: "#2563eb", background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}
        >
          Nazad na ponudu
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7f3ee", padding: "140px 60px 80px" }}>
      <button
        onClick={() => navigate("/ponuda")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "#2563eb",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "40px",
        }}
      >
        <ArrowLeft size={20} />
        Nazad na ponudu
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              objectFit: "cover",
              maxHeight: "420px",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h1 style={{ fontSize: "40px", color: "#111827", marginBottom: "12px" }}>{product.name}</h1>
            <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6" }}>{product.description}</p>
          </div>

          <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontSize: "20px", color: "#111827", marginBottom: "16px" }}>Ponuda</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {product.features.map((feature, index) => (
                <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Check size={20} color="#16a34a" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "#374151", fontSize: "15px" }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {id === "Nameštaj" ? (
            <button
              onClick={() => setPrikaziKatalog(!prikaziKatalog)}
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              {prikaziKatalog ? "▲ Sakrij katalog" : "▼ Pogledaj katalog nameštaja"}
            </button>
          ) : (
            <button
              onClick={() => navigate(product.ruta!)}
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Pogledaj
            </button>
          )}
        </div>
      </div>

      {id === "Nameštaj" && prikaziKatalog && (
        <div style={{ maxWidth: "1100px", margin: "60px auto 0" }}>
          <h2 style={{ fontSize: "28px", color: "#111827", marginBottom: "24px" }}>
            Katalog nameštaja
          </h2>

          {/* Kategorije tabs */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "30px", flexWrap: "wrap" }}>
            {KATEGORIJE.map((kat) => (
              <button
                key={kat.id}
                onClick={() => setAktivnaKategorija(kat.id)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "20px",
                  border: "2px solid",
                  borderColor: aktivnaKategorija === kat.id ? "#2563eb" : "#e5e7eb",
                  backgroundColor: aktivnaKategorija === kat.id ? "#2563eb" : "white",
                  color: aktivnaKategorija === kat.id ? "white" : "#374151",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {kat.naziv}
              </button>
            ))}
            <button
              onClick={() => setAktivnaKategorija("api")}
              style={{
                padding: "8px 20px",
                borderRadius: "20px",
                border: "2px solid",
                borderColor: aktivnaKategorija === "api" ? "#2563eb" : "#e5e7eb",
                backgroundColor: aktivnaKategorija === "api" ? "#2563eb" : "white",
                color: aktivnaKategorija === "api" ? "white" : "#374151",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Iz kataloga
            </button>
          </div>

          {/* Prikaz nameštaja */}
          {aktivnaKategorija === "api" && loadingApi ? (
            <p style={{ textAlign: "center", color: "#666" }}>Učitavanje...</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {trenutniNamestaj.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)")}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "14px" }}>
                    <p style={{ fontWeight: 600, color: "#111827", fontSize: "15px", margin: 0 }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
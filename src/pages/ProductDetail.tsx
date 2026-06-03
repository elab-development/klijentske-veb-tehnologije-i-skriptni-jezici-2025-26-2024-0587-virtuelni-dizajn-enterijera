import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";

type ProductInfo = {
  name: string;
  description: string;
  image: string;
  features: string[];
  ruta?: string;
};

const products: Record<string, ProductInfo> = {
  "2D": {
    name: "2D dizajn prostora",
    description:
      "Uz pomoć naših alata dizajnirate svoj prostor na način koji baš Vama odgovara!",
    image:
      "https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    description:
      "Odaberi savršen izgled nameštaja koji će upotpuniti Vaš prostor!",
    image:
      "https://images.unsplash.com/photo-1765006556070-7a121a99daf4?q=80&w=1707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Prelistaj katalog nameštaja i pronađi savršenu ideju za svoj prostor!",
      "Širok izbor nameštaja!",
    ],
    ruta: "/dizajn-editor",
  },
  Boje: {
    name: "Palete boja",
    description:
      "Odluči se za boje koje će uneti vedrinu i lepotu u Vaš prostor!",
    image:
      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  if (!product) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "140px 60px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Stranica nije pronađena
        </h2>

        <button
          onClick={() => navigate("/ponuda")}
          style={{
            color: "#2563eb",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Nazad na ponudu
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f3ee",
        padding: "140px 60px 80px",
      }}
    >
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "40px",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              {product.description}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#111827",
                marginBottom: "16px",
              }}
            >
              Ponuda
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Check
                    size={20}
                    color="#16a34a"
                    style={{
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "#374151",
                      fontSize: "15px",
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
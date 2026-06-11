import { useNavigate } from "react-router-dom";

const kartice = [
  {
    id: "2D",
    naslov: "2D Dizajn prostora",
    opis: "Uz pomoć naših alata dizajnirate svoj prostor na način koji baš Vama odgovara!",
    slika:
      "https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "Nameštaj",
    naslov: "Nameštaj",
    opis: "Odaberi savršen izgled nameštaja koji će upotpuniti Vaš prostor!",
    slika:
      "https://images.unsplash.com/photo-1765006556070-7a121a99daf4?q=80&w=1707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "Boje",
    naslov: "Palete boja",
    opis: "Odluči se za boje koje će uneti vedrinu i lepotu u Vaš prostor!",
    slika:
      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Ponuda() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f3ee",
        padding: "140px clamp(16px, 5vw, 60px) 80px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "#111827",
            marginBottom: "15px",
          }}
        >
          Naša ponuda
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
          }}
        >
          Napravite najbolji izbor iz naše široke ponude!
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {kartice.map((kartica) => (
          <div
            key={kartica.id}
            onClick={() => navigate(`/products/${kartica.id}`)}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(0,0,0,0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.08)")
            }
          >
            <img
              src={kartica.slika}
              alt={kartica.naslov}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  color: "#111827",
                  marginBottom: "10px",
                }}
              >
                {kartica.naslov}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {kartica.opis}
              </p>

              <span
                style={{
                  color: "#2563eb",
                  fontWeight: "500",
                }}
              >
                Saznaj više →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ponuda;
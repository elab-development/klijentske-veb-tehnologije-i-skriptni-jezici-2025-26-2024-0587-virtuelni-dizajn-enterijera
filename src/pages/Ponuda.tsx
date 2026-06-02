import { useNavigate } from "react-router-dom";

function Ponuda() {
  const navigate = useNavigate();

  const kartice = [
    {
      naslov: "2D Dizajn prostora",
      opis:
        "Kreirajte raspored prostorije, menjajte boje zidova i prevlačite nameštaj pomoću drag-and-drop sistema.",
      ruta: "/dizajn-editor",
    },
    {
      naslov: "Paleta boja",
      opis:
        "Istražite kombinacije boja, materijala i stilova za vaš enterijer.",
      ruta: "/boje",
    },
    {
      naslov: "Inspiracija",
      opis:
        "Pregledajte galeriju modernih enterijera i pronađite ideje za svoj dom.",
      ruta: "/galerija",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f3ee",
        padding: "80px 60px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "15px",
          fontSize: "48px",
        }}
      >
        Naša ponuda
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "60px",
          fontSize: "18px",
        }}
      >
        Kreiramo enterijere prilagođene vašem načinu života.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {kartice.map((kartica) => (
          <div
            key={kartica.naslov}
            style={{
              width: "320px",
              backgroundColor: "white",
              borderRadius: "25px",
              padding: "35px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "#e8ddd1",
                marginBottom: "20px",
              }}
            />

            <h2>{kartica.naslov}</h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.6",
                marginBottom: "25px",
              }}
            >
              {kartica.opis}
            </p>

            <button
              onClick={() => navigate(kartica.ruta)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Pokreni
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ponuda;
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#1f2937",
          letterSpacing: "1px",
          margin: 0,
          cursor: "pointer",
        }}
      >
        Interiorly
      </h1>

      <div
        style={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#1f2937",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Početna
        </Link>

        <Link
          to="/ponuda"
          style={{
            textDecoration: "none",
            color: "#1f2937",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Ponuda
        </Link>

        <Link
          to="/galerija"
          style={{
            textDecoration: "none",
            color: "#1f2937",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Galerija
        </Link>

        <Link
          to="/podaci"
          style={{
            textDecoration: "none",
            color: "#1f2937",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Korisnički profil
        </Link>

        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Odjavi se
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
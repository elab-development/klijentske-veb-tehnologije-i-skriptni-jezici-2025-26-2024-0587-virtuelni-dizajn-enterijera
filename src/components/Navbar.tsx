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
        borderBottom: "1px solid #eee",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <h2>Interiorly</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link to="/home">Početna</Link>
        <Link to="/ponuda">Ponuda</Link>
        <Link to="/galerija">Galerija</Link>
        <Link to="/podaci">Podaci</Link>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Odjavi se
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
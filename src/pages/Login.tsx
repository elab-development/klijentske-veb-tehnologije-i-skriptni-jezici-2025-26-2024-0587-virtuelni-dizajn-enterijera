import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Dugme from "../components/Dugme";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) return;
    const user = { email, name: name || email.split("@")[0] };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1749464251742-107093fc5650?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "min(500px, 90vw)",
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: "clamp(20px, 5vw, 40px)",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px", fontSize:"50px" }}>Interiorly</h1>
        <p style={{ textAlign: "center", marginBottom: "30px" }}>Prijavi se</p>

        <label>Ime i Prezime</label>
        <input
          type="text"
          placeholder="Vaše ime i prezime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
             width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              boxSizing: "border-box",
           
          }}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
             width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              boxSizing: "border-box",
          }}
        />

        <label>Lozinka</label>
        <div style={{ position: "relative", marginTop: "8px", marginBottom: "20px" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
               width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#888",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
  <Dugme tekst="Potvrdi" onClick={handleLogin} />
</div>

        

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Novi korisnik?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Registruj se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
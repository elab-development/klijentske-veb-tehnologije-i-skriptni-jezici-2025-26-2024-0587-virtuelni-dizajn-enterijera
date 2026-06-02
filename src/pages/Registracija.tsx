import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email, name }));
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
          width: "500px",
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          Interiorly
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "30px",
            fontSize: "20px",
          }}
        >
          Napravi nalog
        </p>

        <form onSubmit={handleSubmit}>
          <label>Ime i prezime</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Petar Petrović"
            required
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              style={{
                width: "100%",
                padding: "14px",
                paddingRight: "48px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
            />
            <button
              type="button"
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

          <label>Potvrdi lozinku</label>
          <div style={{ position: "relative", marginTop: "8px", marginBottom: "25px" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              required
              style={{
                width: "100%",
                padding: "14px",
                paddingRight: "48px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
            />
            <button
              type="button"
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

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Napravi nalog
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#6b7280",
          }}
        >
          Već imate nalog?{" "}
          <Link
            to="/"
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Prijavi se
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
import { useState, useEffect } from "react";
import { User, Mail, Edit2, Save } from "lucide-react";

function Podaci() {
  const [isEditing, setIsEditing] = useState(false);

  const getUserData = () => JSON.parse(localStorage.getItem("user") || "{}");

  const [profile, setProfile] = useState({
    name: getUserData().name || "",
    email: getUserData().email || "",
  });

  useEffect(() => {
    const sync = () => {
      const userData = getUserData();
      setProfile({
        name: userData.name || "",
        email: userData.email || "",
      });
    };
    window.addEventListener("storage", sync);
    sync();
    return () => window.removeEventListener("storage", sync);
  }, []);

  const handleSave = () => {
    const userData = getUserData();
    localStorage.setItem("user", JSON.stringify({ ...userData, name: profile.name, email: profile.email }));
    setIsEditing(false);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", paddingTop: "100px", paddingLeft: "40px", paddingRight: "40px", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "36px", color: "#111827" }}>Korisnički profil</h1>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "10px 24px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {isEditing ? <><Save size={18} /> Sačuvaj</> : <><Edit2 size={18} /> Uredi profil</>}
          </button>
        </div>

        <div style={{
          background: "linear-gradient(135deg, #93c5fd, #a5b4fc)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", paddingBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.4)", marginBottom: "24px" }}>
            <div style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <User size={45} color="#2563eb" />
            </div>
            <h2 style={{ fontSize: "26px", color: "#1e3a5f" }}>{profile.name}</h2>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "20px" }}>
            <User size={22} color="#4b6cb7" style={{ marginTop: "4px" }} />
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: "13px", color: "#4b5563", display: "block", marginBottom: "6px" }}>Ime i Prezime</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "16px", boxSizing: "border-box" }}
                />
              ) : (
                <p style={{ fontSize: "16px", color: "#111827" }}>{profile.name || "—"}</p>
              )}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
            <Mail size={22} color="#4b6cb7" style={{ marginTop: "4px" }} />
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: "13px", color: "#4b5563", display: "block", marginBottom: "6px" }}>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "16px", boxSizing: "border-box" }}
                />
              ) : (
                <p style={{ fontSize: "16px", color: "#111827" }}>{profile.email || "—"}</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Podaci;
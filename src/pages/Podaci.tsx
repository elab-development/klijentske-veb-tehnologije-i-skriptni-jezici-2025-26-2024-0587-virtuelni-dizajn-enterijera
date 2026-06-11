import { useState, useEffect } from "react";
import { User, Mail, } from "lucide-react";
import { Korisnik } from "../models/KorisnikModel";
import Dugme from "../components/Dugme";

function Podaci() {
  const [isEditing, setIsEditing] = useState(false);
  const [prikaziSacuvane, setPrikaziSacuvane] = useState(false);
const [omiljeneSlike, setOmiljeneSlike] = useState<{ id: number; naziv: string; slika: string }[]>(
  () => JSON.parse(localStorage.getItem("omiljeneSlike") || "[]")
);
  



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
      setOmiljeneSlike(JSON.parse(localStorage.getItem("omiljeneSlike") || "[]"));
    };
    window.addEventListener("storage", sync);
    sync();
    return () => window.removeEventListener("storage", sync);
  }, []);

 const handleSave = () => {
  const korisnik = new Korisnik(profile.name, profile.email);
  if (!korisnik.isValid()) {
    alert("Unesite ispravno ime i email!");
    return;
  }
  const userData = getUserData();
  localStorage.setItem("user", JSON.stringify({ ...userData, name: korisnik.info.ime, email: korisnik.info.email }));
  setIsEditing(false);
};
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", paddingTop: "100px", paddingLeft: "clamp(16px, 5vw, 40px)", paddingRight: "clamp(16px, 5vw, 40px)", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ display: "flex",flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "36px", color: "#111827" }}>Korisnički profil</h1>
          <Dugme 
  tekst={isEditing ? "Sačuvaj" : "Uredi profil"} 
  onClick={() => isEditing ? handleSave() : setIsEditing(true)} 
/>
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
            <div style={{ marginTop: "30px" }}>
  <button
    onClick={() => setPrikaziSacuvane(!prikaziSacuvane)}
    style={{
      width: "fit-content",
      padding: "16px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "14px",
      fontSize: "15px",
      cursor: "pointer",
      display: "block",
      marginLeft: "auto",
    }}
  >
    {prikaziSacuvane ? "▲ Sakrij sačuvane ideje" : "▼ Sačuvane ideje"}
  </button>

  {prikaziSacuvane && (
    <div style={{ marginTop: "30px",}}>
      {omiljeneSlike.length === 0 ? (
        <p style={{ color: "#6b7280", textAlign: "center", fontSize: "16px" }}>
          Nema sačuvanih ideja.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {omiljeneSlike.map((slika) => (
            <div key={slika.id} style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <img src={slika.slika} alt={slika.naziv} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "10px", backgroundColor: "white" }}>
                <p style={{ fontSize: "14px", color: "#374151", margin: 0 }}>{slika.naziv}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )}
</div>
          </div>

        </div>
      </div>
    
    
  );
}

export default Podaci;
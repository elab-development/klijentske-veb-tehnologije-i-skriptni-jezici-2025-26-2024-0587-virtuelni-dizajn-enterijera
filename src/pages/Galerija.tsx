import { useState } from "react";
import { Heart, X } from "lucide-react";

const stavkeGalerije = {
  dnevna: [
    { id: 1, naziv: "Moderna dnevna soba", slika: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 2, naziv: "Udoban dnevni boravak", slika: "https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 3, naziv: "Elegantna dnevna soba", slika: "https://images.unsplash.com/photo-1680209667207-cae0f6cd8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 4, naziv: "Svetla dnevna soba", slika: "https://images.unsplash.com/photo-1704040686433-b1c45e9f4104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 5, naziv: "Minimalistička dnevna soba", slika: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 6, naziv: "Prostrana dnevna soba", slika: "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 7, naziv: "Topla dnevna soba", slika: "https://images.unsplash.com/photo-1704040686510-b747ff423ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 8, naziv: "Savremena dnevna soba", slika: "https://images.unsplash.com/photo-1704040686370-52238a5dab05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 9, naziv: "Klasična dnevna soba", slika: "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 10, naziv: "Luksuzna dnevna soba", slika: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  spavaca: [
    { id: 11, naziv: "Minimalistička spavaća soba", slika: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 12, naziv: "Savremena spavaća soba", slika: "https://images.unsplash.com/photo-1638840992956-142399e7e2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 13, naziv: "Mirna spavaća soba", slika: "https://images.unsplash.com/photo-1633809365429-2fa048a02119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 14, naziv: "Elegantna spavaća soba", slika: "https://images.unsplash.com/photo-1600210491741-a69593e43133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 15, naziv: "Udobna spavaća soba", slika: "https://images.unsplash.com/photo-1710224002849-a76ea1068b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 16, naziv: "Luksuzna spavaća soba", slika: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 17, naziv: "Svetla spavaća soba", slika: "https://images.unsplash.com/photo-1618221823713-ca8c0e6c9992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 18, naziv: "Topla spavaća soba", slika: "https://images.unsplash.com/photo-1632119580908-ae947d4c7691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 19, naziv: "Prostrana spavaća soba", slika: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 20, naziv: "Moderna spavaća soba", slika: "https://images.unsplash.com/photo-1650484238427-e3743996836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  kuhinja: [
    { id: 21, naziv: "Svetla kuhinja", slika: "https://images.unsplash.com/photo-1722605090433-41d1183a792d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 22, naziv: "Funkcionalna kuhinja", slika: "https://images.unsplash.com/photo-1649083048428-3d8ed23a3ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 23, naziv: "Moderna kuhinja", slika: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 24, naziv: "Elegantna kuhinja", slika: "https://images.unsplash.com/photo-1649083048391-1c9e82472f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 25, naziv: "Prostrana kuhinja", slika: "https://images.unsplash.com/photo-1669103148197-539672dbdeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 26, naziv: "Minimalistička kuhinja", slika: "https://images.unsplash.com/photo-1609347744425-175ecbd3cc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 27, naziv: "Klasična kuhinja", slika: "https://images.unsplash.com/photo-1649083048597-d7b4f1e8a386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 28, naziv: "Luksuzna kuhinja", slika: "https://images.unsplash.com/photo-1659720879171-5fb849451fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 29, naziv: "Praktična kuhinja", slika: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 30, naziv: "Savremena kuhinja", slika: "https://images.unsplash.com/photo-1623114112861-f64b300f4156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  kupatilo: [
    { id: 31, naziv: "Luksuzno kupatilo", slika: "https://images.unsplash.com/photo-1576698483491-8c43f0862543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 32, naziv: "Moderno kupatilo", slika: "https://images.unsplash.com/photo-1722186382699-8a6aecee6c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 33, naziv: "Minimalistično kupatilo", slika: "https://images.unsplash.com/photo-1600488999585-e4364713b90a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 34, naziv: "Elegantno kupatilo", slika: "https://images.unsplash.com/photo-1720430499886-8943f89990e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 35, naziv: "Svetlo kupatilo", slika: "https://images.unsplash.com/photo-1685642170102-d5618c8a4d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 36, naziv: "Prostrano kupatilo", slika: "https://images.unsplash.com/photo-1651415223860-1a4bf68510c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 37, naziv: "Klasično kupatilo", slika: "https://images.unsplash.com/photo-1720430499911-e9561ba73fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 38, naziv: "Savremeno kupatilo", slika: "https://images.unsplash.com/photo-1595515926042-c36353b7ea13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 39, naziv: "Toplo kupatilo", slika: "https://images.unsplash.com/photo-1680209081088-645c22402d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 40, naziv: "Relaksirajuće kupatilo", slika: "https://images.unsplash.com/photo-1656646523682-f567bf2f28da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  radniProstor: [
    { id: 41, naziv: "Elegantan radni prostor", slika: "https://images.unsplash.com/photo-1614250836482-b596f7494f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 42, naziv: "Minimalistički radni prostor", slika: "https://images.unsplash.com/photo-1623180253479-3eaed9dda118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 43, naziv: "Moderan radni prostor", slika: "https://images.unsplash.com/photo-1669723008642-b00fa9d10b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 44, naziv: "Funkcionalan radni prostor", slika: "https://images.unsplash.com/photo-1669723008519-3b5043b5b826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 45, naziv: "Svetao radni prostor", slika: "https://images.unsplash.com/photo-1669723009423-6c1b3d11dd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 46, naziv: "Prostran radni prostor", slika: "https://images.unsplash.com/photo-1651739083958-02dcd72b0179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 47, naziv: "Kreativan radni prostor", slika: "https://images.unsplash.com/photo-1616748466877-9c7ff43cce46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 48, naziv: "Udoban radni prostor", slika: "https://images.unsplash.com/photo-1651739084015-85af0539f960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 49, naziv: "Klasičan radni prostor", slika: "https://images.unsplash.com/photo-1577106777018-886191d770b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 50, naziv: "Luksuzni radni prostor", slika: "https://images.unsplash.com/photo-1472157510410-64a053cbc39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  trpezarija: [
    { id: 51, naziv: "Prostrana trpezarija", slika: "https://images.unsplash.com/photo-1772563199191-6c25d80982b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 52, naziv: "Elegantna trpezarija", slika: "https://images.unsplash.com/photo-1631048500063-aac1c3565d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 53, naziv: "Moderna trpezarija", slika: "https://images.unsplash.com/photo-1631048499453-b1342a519efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 54, naziv: "Klasična trpezarija", slika: "https://images.unsplash.com/photo-1634389312178-50613e56acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 55, naziv: "Svetla trpezarija", slika: "https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 56, naziv: "Topla trpezarija", slika: "https://images.unsplash.com/photo-1704040686533-694c5b9c52c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 57, naziv: "Minimalistička trpezarija", slika: "https://images.unsplash.com/photo-1704040686487-a39bb894fc93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 58, naziv: "Luksuzna trpezarija", slika: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 59, naziv: "Udobna trpezarija", slika: "https://images.unsplash.com/photo-1646592492211-48c93d85bde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 60, naziv: "Savremena trpezarija", slika: "https://images.unsplash.com/photo-1646592491682-995c67393ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
};

const kategorije = [
  { id: "dnevna", oznaka: "Dnevna soba", slika: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "spavaca", oznaka: "Spavaća soba", slika: "https://images.unsplash.com/photo-1638840992956-142399e7e2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "kuhinja", oznaka: "Kuhinja", slika: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "kupatilo", oznaka: "Kupatilo", slika: "https://images.unsplash.com/photo-1722186382699-8a6aecee6c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "radniProstor", oznaka: "Radni prostor", slika: "https://images.unsplash.com/photo-1614250836482-b596f7494f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "trpezarija", oznaka: "Trpezarija", slika: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
];

const STAVKI_PO_STRANI = 5;

export default function Galerija() {
  const [aktivnaKategorija, setAktivnaKategorija] = useState<string | null>(null);
  const [trenutnaStrana, setTrenutnaStrana] = useState(1);
  const [omiljene, setOmiljene] = useState<Set<number>>(() => {
    try {
  const sacuvane = JSON.parse(localStorage.getItem("omiljeneIds") || "[]");
  return new Set(sacuvane);
    } catch {
      return new Set();
    }
});
  const [odabranaSlika, setOdabranaSlika] = useState<{ slika: string; naziv: string } | null>(null);

  const trenutneStavke = aktivnaKategorija
    ? stavkeGalerije[aktivnaKategorija as keyof typeof stavkeGalerije]
    : null;

  const ukupnoStrana = trenutneStavke ? Math.ceil(trenutneStavke.length / STAVKI_PO_STRANI) : 0;
  const stavkeNaStrani = trenutneStavke ? trenutneStavke.slice((trenutnaStrana -1) * STAVKI_PO_STRANI, trenutnaStrana * STAVKI_PO_STRANI) : [];
  const handleKategorija = (id: string) => {
    setAktivnaKategorija(id);
    setTrenutnaStrana(1);
  }
  const handleNazad = () => {
    setAktivnaKategorija(null);
    setTrenutnaStrana(1);
  }


  const toggleOmiljene = (id: number) => {
  const noveOmiljene = new Set(omiljene);
  if (noveOmiljene.has(id)) {
    noveOmiljene.delete(id);
  } else {
    noveOmiljene.add(id);
  }
  setOmiljene(noveOmiljene);
  localStorage.setItem("omiljeneIds", JSON.stringify([...noveOmiljene]));
  const sveSlike = Object.values(stavkeGalerije).flat();
  const omiljeneSlike = sveSlike.filter((s) => noveOmiljene.has(s.id));
  localStorage.setItem("omiljeneSlike", JSON.stringify(omiljeneSlike));
};

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#eef0f5", padding: "40px 20px", paddingTop: "100px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "clamp(26px, 5vw, 42px", color: "#1a1a2e", marginBottom: "10px", fontWeight: 400 }}>
          Galerija inspiracija
        </h1>
        <p style={{ fontSize: "18px", color: "#666" }}>
          {aktivnaKategorija ? "Kliknite na sliku za uvećanje" : "Izaberite kategoriju za pregled"}
        </p>
      </div>

      {!aktivnaKategorija ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {kategorije.map((kat) => (
            <div
              key={kat.id}
              onClick={() => handleKategorija(kat.id)}
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                height: "260px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={kat.slika}
                alt={kat.oznaka}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6)" }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h2 style={{ color: "white", fontSize: "28px", fontWeight: 600 }}>
                  {kat.oznaka}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <button onClick={handleNazad} style={{ padding: "10px 28px", backgroundColor: "#4a5568", color: "white", border: "none", borderRadius: "10px" }}>
              ← Nazad na kategorije
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", backgroundColor: "#f3f4f6", padding: "16px", borderRadius: "12px" }}>
            {stavkeNaStrani?.map((stavka) => (
              <div
  key={stavka.id}
  onClick={() => setOdabranaSlika({ slika: stavka.slika, naziv: stavka.naziv })}
  className="slika-kartica"
  style={{ cursor: "pointer", position: "relative", overflow: "hidden"}}
>
  <img src={stavka.slika} className="slika-kartica-img" style={{ height: "220px", borderRadius: "16px 16px 0 0" }} />
  <div style={{ padding: "10px 12px" }}>
  <p style={{ fontSize: "14px", color: "#374151", margin: 0 }}>{stavka.naziv}</p>
</div>
                <button
  onClick={(e) => {
    e.stopPropagation();
    toggleOmiljene(stavka.id);
  }}
  style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "40px",
    height: "40px",
    backgroundColor: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    padding: 0,
    lineHeight: 0,
  }}
>
  <Heart
    size={18}
    style={{
      display: "block",
    }}
    color={omiljene.has(stavka.id) ? "#ef4444" : "#aaa"}
    fill={omiljene.has(stavka.id) ? "#ef4444" : "none"}
  />
</button>
              </div>
            ))}
          </div>

        <div style = {{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "30px"}}> 
          <button
            onClick={() => setTrenutnaStrana((s) => s-1)}
            disabled={ trenutnaStrana === 1}
            style = {{ padding: "8px 16px", borderRadius:"8px", border: "1px solid #d1d5db", backgroundColor: trenutnaStrana === 1 ? "#e5e7eb" : "white", cursor: trenutnaStrana === 1 ? "not-allowed" : "pointer", color: "#374151" }}
          >
            ←
          </button>
          {Array.from({ length: ukupnoStrana}, (_, i) => i+1).map((br) => (
            <button 
            key={br}
            onClick={() => setTrenutnaStrana(br)}
            style = {{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #d1d5db", backgroundColor: trenutnaStrana === br ? "#2563eb" : "white", color: trenutnaStrana === br ? "white" : " #374151", cursor: "pointer", fontWeight: trenutnaStrana === br ? "bold" : "normal" }}
            >
              {br}
            </button>
          ))}
          <button 
          onClick ={() => setTrenutnaStrana((s) => s+1)}
          disabled = { trenutnaStrana === ukupnoStrana}
          style ={{ padding: "8px 16px", borderRadius: "8px", border: "1px solid #d1d5db", backgroundColor: trenutnaStrana === ukupnoStrana ? "#e5e7eb" : "white", cursor: trenutnaStrana === ukupnoStrana ? "not-allowed" : "pointer", color: " #374151" }}
          >
             →
          </button>
          </div>
          <p style ={{ textAlign: "center", marginTop: "12px", color: " #6b7280", fontSize: " 14px"}}>
            Strana { trenutnaStrana} od {ukupnoStrana}
          </p>
        </>
      )}

      {odabranaSlika && (
        <div
          onClick={() => setOdabranaSlika(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOdabranaSlika(null); }}
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              width: "50px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000
            }}
          >
            <X size={22} />
          </button>

          <div onClick={(e) => e.stopPropagation()}>
            <img src={odabranaSlika.slika} style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "12px" }} />
            <h2 style={{ color: "white", textAlign: "center", marginTop: "16px" }}>
              {odabranaSlika.naziv}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

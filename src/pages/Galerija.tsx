import { useState } from "react";

const slike = [
  {
    kategorija: "Dnevna soba",
    naziv: "Moderna dnevna soba",
    slika: "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Dnevna soba",
    naziv: "Minimalistička dnevna soba",
    slika: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Dnevna soba",
    naziv: "Elegantna dnevna soba",
    slika: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Dnevna soba",
    naziv: "Luksuzna dnevna soba",
    slika: "https://images.unsplash.com/photo-1704040686370-52238a5dab05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },

  {
    kategorija: "Kuhinja",
    naziv: "Moderna kuhinja",
    slika: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Kuhinja",
    naziv: "Bela kuhinja",
    slika: "https://images.unsplash.com/photo-1649083048597-d7b4f1e8a386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Kuhinja",
    naziv: "Crna kuhinja",
    slika: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Kuhinja",
    naziv: "Mala kuhinja",
    slika: "https://images.unsplash.com/photo-1669103148197-539672dbdeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    kategorija: "Kuhinja",
    naziv: "Porodična kuhinja",
    slika: "https://images.unsplash.com/photo-1766603636517-3f97705186fe?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    kategorija: "Spavaća soba",
    naziv: "Moderna spavaća soba",
    slika: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Spavaća soba",
    naziv: "Minimalistička spavaća",
    slika: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Spavaća soba",
    naziv: "Luksuzna spavaća",
    slika: "https://images.unsplash.com/photo-1633809365429-2fa048a02119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Spavaća soba",
    naziv: "Topli tonovi",
    slika: "https://images.unsplash.com/photo-1710224002849-a76ea1068b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Spavaća soba",
    naziv: "Tamni enterijer",
    slika: "https://images.unsplash.com/photo-1638840992956-142399e7e2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },

  {
    kategorija: "Kupatilo",
    naziv: "Moderno kupatilo",
    slika: "https://images.unsplash.com/photo-1722186382699-8a6aecee6c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Kupatilo",
    naziv: "Tamni enterijer",
    slika: "https://images.unsplash.com/photo-1720430499886-8943f89990e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  {
    kategorija: "Kupatilo",
    naziv: "Minimalističko kupatilo",
    slika: "https://images.unsplash.com/photo-1685642170102-d5618c8a4d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },

  {
    kategorija: "Trpezarija",
    naziv: "Elegantna trpezarija",
    slika: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    kategorija: "Trpezarija",
    naziv: "Porodična trpezarija",
    slika: "https://images.unsplash.com/photo-1704040686487-a39bb894fc93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export default function Galerija() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Sve");
  const [selectedImage, setSelectedImage] = useState("");

  const kategorije = [
    "Sve",
    ...new Set(slike.map((item) => item.kategorija)),
  ];

  const filtered = slike.filter((item) => {
    const matchSearch =
      item.naziv.toLowerCase().includes(search.toLowerCase()) ||
      item.kategorija.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "Sve" || item.kategorija === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div
      style={{
        padding: "40px",
        background: "#f7f3ee",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Galerija ideja
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Pretraga..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {kategorije.map((kat) => (
            <option key={kat}>{kat}</option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.slika)}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.slika}
              alt={item.naziv}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "12px" }}>
              <h3>{item.naziv}</h3>
              <p>{item.kategorija}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage("")}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={selectedImage}
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              borderRadius: "12px",
            }}
          />
        </div>
      )}
    </div>
  );
}

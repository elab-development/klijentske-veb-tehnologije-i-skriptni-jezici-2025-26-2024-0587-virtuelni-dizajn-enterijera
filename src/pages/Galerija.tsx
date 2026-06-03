import { useState } from "react";
import { Heart, X } from "lucide-react";

const galleryItems = {
  living: [
    { id: 1, title: "Moderna dnevna soba", image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 2, title: "Udoban dnevni boravak", image: "https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 3, title: "Elegantna dnevna soba", image: "https://images.unsplash.com/photo-1680209667207-cae0f6cd8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 4, title: "Svetla dnevna soba", image: "https://images.unsplash.com/photo-1704040686433-b1c45e9f4104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 5, title: "Minimalistička dnevna soba", image: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 6, title: "Prostrana dnevna soba", image: "https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 7, title: "Topla dnevna soba", image: "https://images.unsplash.com/photo-1704040686510-b747ff423ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 8, title: "Savremena dnevna soba", image: "https://images.unsplash.com/photo-1704040686370-52238a5dab05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 9, title: "Klasična dnevna soba", image: "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 10, title: "Luksuzna dnevna soba", image: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  bedroom: [
    { id: 11, title: "Minimalistička spavaća soba", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 12, title: "Savremena spavaća soba", image: "https://images.unsplash.com/photo-1638840992956-142399e7e2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 13, title: "Mirna spavaća soba", image: "https://images.unsplash.com/photo-1633809365429-2fa048a02119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 14, title: "Elegantna spavaća soba", image: "https://images.unsplash.com/photo-1600210491741-a69593e43133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 15, title: "Udobna spavaća soba", image: "https://images.unsplash.com/photo-1710224002849-a76ea1068b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 16, title: "Luksuzna spavaća soba", image: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 17, title: "Svetla spavaća soba", image: "https://images.unsplash.com/photo-1618221823713-ca8c0e6c9992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 18, title: "Topla spavaća soba", image: "https://images.unsplash.com/photo-1632119580908-ae947d4c7691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 19, title: "Prostrana spavaća soba", image: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 20, title: "Moderna spavaća soba", image: "https://images.unsplash.com/photo-1650484238427-e3743996836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  kitchen: [
    { id: 21, title: "Svetla kuhinja", image: "https://images.unsplash.com/photo-1722605090433-41d1183a792d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 22, title: "Funkcionalna kuhinja", image: "https://images.unsplash.com/photo-1649083048428-3d8ed23a3ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 23, title: "Moderna kuhinja", image: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 24, title: "Elegantna kuhinja", image: "https://images.unsplash.com/photo-1649083048391-1c9e82472f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 25, title: "Prostrana kuhinja", image: "https://images.unsplash.com/photo-1669103148197-539672dbdeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 26, title: "Minimalistička kuhinja", image: "https://images.unsplash.com/photo-1609347744425-175ecbd3cc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 27, title: "Klasična kuhinja", image: "https://images.unsplash.com/photo-1649083048597-d7b4f1e8a386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 28, title: "Luksuzna kuhinja", image: "https://images.unsplash.com/photo-1659720879171-5fb849451fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 29, title: "Praktična kuhinja", image: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 30, title: "Savremena kuhinja", image: "https://images.unsplash.com/photo-1623114112861-f64b300f4156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  bathroom: [
    { id: 31, title: "Luksuzno kupatilo", image: "https://images.unsplash.com/photo-1576698483491-8c43f0862543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 32, title: "Moderno kupatilo", image: "https://images.unsplash.com/photo-1722186382699-8a6aecee6c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 33, title: "Minimalistično kupatilo", image: "https://images.unsplash.com/photo-1600488999585-e4364713b90a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 34, title: "Elegantno kupatilo", image: "https://images.unsplash.com/photo-1720430499886-8943f89990e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 35, title: "Svetlo kupatilo", image: "https://images.unsplash.com/photo-1685642170102-d5618c8a4d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 36, title: "Prostrano kupatilo", image: "https://images.unsplash.com/photo-1651415223860-1a4bf68510c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 37, title: "Klasično kupatilo", image: "https://images.unsplash.com/photo-1720430499911-e9561ba73fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 38, title: "Savremeno kupatilo", image: "https://images.unsplash.com/photo-1595515926042-c36353b7ea13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 39, title: "Toplo kupatilo", image: "https://images.unsplash.com/photo-1680209081088-645c22402d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 40, title: "Relaksirajuće kupatilo", image: "https://images.unsplash.com/photo-1656646523682-f567bf2f28da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  office: [
    { id: 41, title: "Elegantan radni prostor", image: "https://images.unsplash.com/photo-1614250836482-b596f7494f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 42, title: "Minimalistički radni prostor", image: "https://images.unsplash.com/photo-1623180253479-3eaed9dda118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 43, title: "Moderan radni prostor", image: "https://images.unsplash.com/photo-1669723008642-b00fa9d10b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 44, title: "Funkcionalan radni prostor", image: "https://images.unsplash.com/photo-1669723008519-3b5043b5b826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 45, title: "Svetao radni prostor", image: "https://images.unsplash.com/photo-1669723009423-6c1b3d11dd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 46, title: "Prostran radni prostor", image: "https://images.unsplash.com/photo-1651739083958-02dcd72b0179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 47, title: "Kreativan radni prostor", image: "https://images.unsplash.com/photo-1616748466877-9c7ff43cce46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 48, title: "Udoban radni prostor", image: "https://images.unsplash.com/photo-1651739084015-85af0539f960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 49, title: "Klasičan radni prostor", image: "https://images.unsplash.com/photo-1577106777018-886191d770b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 50, title: "Luksuzni radni prostor", image: "https://images.unsplash.com/photo-1472157510410-64a053cbc39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
  dining: [
    { id: 51, title: "Prostrana trpezarija", image: "https://images.unsplash.com/photo-1772563199191-6c25d80982b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 52, title: "Elegantna trpezarija", image: "https://images.unsplash.com/photo-1631048500063-aac1c3565d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 53, title: "Moderna trpezarija", image: "https://images.unsplash.com/photo-1631048499453-b1342a519efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 54, title: "Klasična trpezarija", image: "https://images.unsplash.com/photo-1634389312178-50613e56acda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 55, title: "Svetla trpezarija", image: "https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 56, title: "Topla trpezarija", image: "https://images.unsplash.com/photo-1704040686533-694c5b9c52c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 57, title: "Minimalistička trpezarija", image: "https://images.unsplash.com/photo-1704040686487-a39bb894fc93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 58, title: "Luksuzna trpezarija", image: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 59, title: "Udobna trpezarija", image: "https://images.unsplash.com/photo-1646592492211-48c93d85bde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 60, title: "Savremena trpezarija", image: "https://images.unsplash.com/photo-1646592491682-995c67393ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ],
};

const categories = [
  { id: "living", label: "Dnevna soba", image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "bedroom", label: "Spavaća soba", image: "https://images.unsplash.com/photo-1638840992956-142399e7e2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "kitchen", label: "Kuhinja", image: "https://images.unsplash.com/photo-1668026694348-b73c5eb5e299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "bathroom", label: "Kupatilo", image: "https://images.unsplash.com/photo-1722186382699-8a6aecee6c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "office", label: "Radni prostor", image: "https://images.unsplash.com/photo-1614250836482-b596f7494f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { id: "dining", label: "Trpezarija", image: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
];

export default function Galerija() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const currentItems = activeCategory
    ? galleryItems[activeCategory as keyof typeof galleryItems]
    : null;

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#eef0f5", padding: "40px 20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", color: "#1a1a2e", marginBottom: "10px", fontWeight: 400 }}>
          Galerija inspiracija
        </h1>
        <p style={{ fontSize: "18px", color: "#666" }}>
          {activeCategory ? "Kliknite na sliku za uvećanje" : "Izaberite kategoriju za pregled"}
        </p>
      </div>

      {!activeCategory ? (
        /* Grid kategorija */
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                height: "260px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.querySelector("img") as HTMLImageElement).style.transform = "scale(1)";
              }}
            >
              <img
                src={cat.image}
                alt={cat.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  filter: "brightness(0.6)",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <h2 style={{
                  color: "white",
                  fontSize: "28px",
                  fontWeight: 600,
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}>
                  {cat.label}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Nazad dugme */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: "10px 28px",
                backgroundColor: "#4a5568",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              ← Nazad na kategorije
            </button>
          </div>

          {/* Grid slika */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>
            {currentItems?.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  position: "relative",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Heart
                      size={18}
                      color={favorites.has(item.id) ? "#ef4444" : "#aaa"}
                      fill={favorites.has(item.id) ? "#ef4444" : "none"}
                    />
                  </button>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <h3 style={{ margin: 0, fontSize: "16px", color: "#1a1a2e", fontWeight: 400 }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "20px",
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              backgroundColor: "white",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            <X size={22} color="#333" />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "12px",
                display: "block",
              }}
            />
            <h2 style={{
              color: "white",
              textAlign: "center",
              marginTop: "16px",
              fontSize: "22px",
              fontWeight: 400,
            }}>
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

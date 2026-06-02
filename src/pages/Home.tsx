import { Link } from "react-router-dom";
import { Palette, LayoutGrid, BookOpen } from "lucide-react";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1749464251742-107093fc5650?q=80&w=1632&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hero */}
        <section className="text-center px-4 w-full" style={{ paddingTop: "180px", paddingBottom: "80px" }}>
          <h1 className="text-7xl md:text-8xl font-serif text-slate-900 mb-10">
            Interiorly
          </h1>

          <p
            className="text-xl md:text-2xl mx-auto mb-14 font-medium text-center w-full"
            style={{ color: "#2d2d2d", textShadow: "0 1px 3px rgba(255,255,255,0.8)" }}
          >
            Iskoristite našu ponudu da na najlakši način uredite svoj prostor iz snova!
          </p>

          <Link
            to="/ponuda"
            className="inline-flex items-center gap-3 bg-pink-300 hover:bg-pink-400 rounded-2xl text-black shadow-lg transition duration-300 font-medium"
            style={{ fontSize: "20px", padding: "16px 40px" }}
          >
            Pogledaj našu ponudu! →
          </Link>
        </section>

        {/* Kartice */}
        <section className="w-full max-w-5xl mx-auto px-12 pb-20">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Boje */}
            <div className="bg-white/80 rounded-3xl shadow-xl p-8 min-h-[220px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Palette size={26} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900">
                  Boje
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed text-center px-2">
                Isprobajte različite boje i odaberite onu koja bi se najbolje uklapala!
              </p>
            </div>

            {/* Raspored */}
            <div className="bg-white/80 rounded-3xl shadow-xl p-8 min-h-[220px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                  <LayoutGrid size={26} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900">
                  Raspored nameštaja
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed text-center px-2">
                Pronađite najbolji mogući raspored za svaki deo nameštaja koji će ulepšavati vaš prostor!
              </p>
            </div>

            {/* Katalog */}
            <div className="bg-white/80 rounded-3xl shadow-xl p-8 min-h-[220px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
                  <BookOpen size={26} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900">
                  Katalog
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed text-center px-2">
                Pogledajte našu ponudu boja i nameštaja!
              </p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
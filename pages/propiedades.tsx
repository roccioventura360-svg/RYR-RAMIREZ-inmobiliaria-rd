<a href="/mapa" style={{ display: "inline-block", marginBottom: "20px" }}>
  🗺️ Ver mapa interactivo
</a>
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAskAI = () => {
    if (!question) return;

    // Simulación de IA (luego se conecta a OpenAI)
    setAnswer(
      "🤖 Recomendación IA: Tenemos excelentes opciones en Santo Domingo y Punta Cana. Un asesor te contactará con propiedades que se ajusten a tu búsqueda."
    );
  };

  return (
    <>
      <Head>
        <title>RYR Ramírez Inmobiliaria RD</title>
        <meta
          name="description"
          content="Inmobiliaria moderna con asesoría inteligente en República Dominicana"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* HERO */}
        <section className="py-24 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            RYR Ramírez Inmobiliaria RD
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Compra, vende o alquila propiedades en República Dominicana con
            asesoría inteligente y personalizada.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#propiedades"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Explorar Propiedades
            </a>

            <a
              href="https://wa.me/18090000000"
              target="_blank"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              WhatsApp Directo
            </a>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-20 px-6 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Servicios Profesionales
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">🏠 Venta de Propiedades</h3>
              <p className="mt-4 text-gray-600">
                Casas, apartamentos, villas y proyectos nuevos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">🏢 Alquiler</h3>
              <p className="mt-4 text-gray-600">
                Alquiler residencial y comercial a corto y largo plazo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">📊 Inversión Inmobiliaria</h3>
              <p className="mt-4 text-gray-600">
                Asesoría para inversiones seguras y rentables.
              </p>
            </div>
          </div>
        </section>

        {/* IA ASISTENTE */}
        <section className="py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            🤖 Asistente Inmobiliario Inteligente
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-xl mx-auto">
            Dile a nuestra IA qué tipo de propiedad buscas y te orientamos.
          </p>

          <div className="mt-8 max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
            <input
              type="text"
              placeholder="Ej: Apartamento en Punta Cana con 2 habitaciones"
              className="w-full border rounded-lg p-3 mb-4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              onClick={handleAskAI}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Consultar IA
            </button>

            {answer && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg text-gray-700">
                {answer}
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-10 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} RYR Ramírez Inmobiliaria RD · República Dominicana
          </p>
        </footer>
      </main>
    </>
  );
}

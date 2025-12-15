export default function Mapa() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Mapa de Propiedades en República Dominicana</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60524.69980960649!2d-69.951!3d18.4834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf882ddf0b4c7b%3A0x45edb4c2b0a4d8b!2sSanto%20Domingo!5e0!3m2!1ses!2sdo!4v1699999999999"
        width="100%"
        height="500"
        style={{ border: 0, borderRadius: "12px" }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default function Impressum() {
  return (
    <div className="container mx-auto pt-[7vw] md:pt-[11vw] px-4">
      <h2 className="text-2xl font-bold mb-4">
        Name und Kontaktdaten des Verantwortlichen
      </h2>
      <p className="mb-4">
        Frederik König
        <br />
        Klingenstraße 16
        <br />
        04229 Leipzig
        <br />
        Tel.: 0178 2219589
        <br />
        E-Mail:{" "}
        <a
          href="mailto:frederik.koenig@posteo.de"
          className="text-blue-600 hover:underline"
        >
          frederik.koenig@posteo.de
        </a>
      </p>
      <p>
        Quelle:{" "}
        <a
          href="http://www.muster-impressum.de"
          className="text-blue-600 hover:underline"
        >
          http://www.muster-impressum.de
        </a>
      </p>
    </div>
  );
}

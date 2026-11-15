// Функціональний компонент Image (вимога методички).
export default function Image({ src, width }) {
  return (
    <a
      className="photo-link"
      href="https://lvivrada.gov.ua/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Відкрити офіційний сайт Львівської міської ради"
    >
      <img
        className="city-photo"
        src={src}
        width={width}
        alt="Фотографія міста Львів"
      />
    </a>
  );
}

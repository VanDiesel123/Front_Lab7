export default function GoodsCard({ name, price, image }) {
  return (
    <article className="goods-card">
      <img src={image} alt={`Фотографія товару: ${name}`} loading="lazy" />
      <div className="goods-info">
        <h3>{name}</h3>
        <p>{price.toLocaleString("uk-UA")} грн</p>
      </div>
    </article>
  );
}

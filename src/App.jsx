import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import GoodsCard from "./components/GoodsCard.jsx";

// Демонстраційні товари, фотографії завантажуються з Unsplash.
const goods = [
  {
    id: 1,
    name: "Ноутбук",
    price: 32500,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=640&q=80"
  },
  {
    id: 2,
    name: "Комп'ютерна миша",
    price: 1200,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=640&q=80"
  },
  {
    id: 3,
    name: "Клавіатура",
    price: 2500,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=640&q=80"
  },
  {
    id: 4,
    name: "Навушники",
    price: 3400,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=640&q=80"
  },
  {
    id: 5,
    name: "Смартфон",
    price: 18900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=640&q=80"
  },
  {
    id: 6,
    name: "Фотокамера",
    price: 24700,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=640&q=80"
  }
];

export default function App() {
  return (
    <main className="page">
      <Header />

      <section className="section">
        <h2>Завдання 1. на React</h2>
        <Content />
      </section>

      <section className="section">
        <h2>Завдання 2. Галерея товарів</h2>
        <p>Шість товарів, створених за допомогою компонента GoodsCard та props.</p>
        <div className="goods-grid">
          {goods.map((good) => (
            <GoodsCard
              key={good.id}
              name={good.name}
              price={good.price}
              image={good.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

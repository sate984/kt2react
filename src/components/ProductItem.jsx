import React, { useState } from "react";

const initialData = [
  { id: 1, name: 'Велосипед', price: 1000, count: 0 },
  { id: 2, name: 'Самокат', price: 700, count: 0 },
  { id: 3, name: 'Ролики', price: 1300, count: 0 },
  { id: 4, name: 'Сноуборд', price: 19000, count: 0 }
];

export default function Superpidor() {
  const [items, setItems] = useState(initialData);

  const changeCount = (id, delta) => {
    setItems(items.map(item => {
      if (item.id !== id) return item;

      const newCount = item.count + delta;

      if (newCount < 0) return { ...item, count: 0 };
      if (newCount > 25) return { ...item, count: 25 };

      return { ...item, count: newCount };
    }));
  };


  const removeItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, count: 0 } : item
    ));
  };

  const cart = items.filter(item => item.count > 0);

  return (
    <section className="container hero">
      <h2 className="hhru">Товары</h2>
      <div className="hero-content">
        {items.map(item => (
          <div className="boxis" key={item.id}>
            <p className='nav a'>{item.name}</p>
            <p className='nav a'>Цена: {item.price}</p>

            <div className="boxisMini">
              <button className='navb' onClick={() => changeCount(item.id, -1)}>—</button>
              <p>{item.count}</p>
              <button className="navb" onClick={() => changeCount(item.id, +1)}>+</button>
            </div>

            {item.count === 25 && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Максимум 25 шт
              </p>
            )}
          </div>
        ))}
      </div>

      <h2 className="hhru">Корзина</h2>

      <div className="boxis">
        {cart.length === 0 && (
          <p>Корзина пуста</p>
        )}

        {cart.map(item => (
          <p
            key={item.id}
            className="nav a"
            onDoubleClick={() => removeItem(item.id)}
            style={{ cursor: "pointer" }}
            title="Двойной клик — удалить"
          >
            {item.name}: {item.count} шт — {item.price * item.count} ₽
          </p>
        ))}
      </div>

    </section>
  );
}

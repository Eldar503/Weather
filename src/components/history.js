import React from "react";

const History = ({ history, removeCart }) => {
  return (
    <div className="history">
      <div
        className="history__wrapper"
        style={{
          border: "solid 2px black",
          width: "100%",
          height: "400px",
          overflowY: "scroll",
          padding: "15px",
        }}
      >
        {history.length ? (
          history.map((item) => {
            return (
              <div key={item.id} style={{ marginBottom: "20px" }}>
                <h2>Температура: {item.temperature}</h2>
                <p>Город: {item.city}</p>
                <p>Страна: {item.country}</p>
                <p>Влажность: {item.humidity}</p>
                <p>Небо: {item.description}</p>
                <button onClick={() => removeCart(item.id)}>Удалить</button>
              </div>
            );
          })
        ) : (
          <h2>История пуста</h2>
        )}
      </div>
    </div>
  );
};

export default History;


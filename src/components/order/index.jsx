import OrderCard from "./orderCard";
import { useState } from "react";

const OrderColumn = ({ order, setOrder }) => {
  const [page, setPage] = useState(0);

  function Complete(id) {
    if (window.confirm("조리 완료 처리할까요?")) {
      setOrder((prev) => prev.filter((o) => o.id !== id));
    }
  }

  const cardsPerPage = 3;
  const paginated = order.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

  return (
    <div>
      <div className="card-container">
        {paginated.map((order, idx) => (
          <OrderCard key={idx} idx={idx} order={order} onComplete={Complete} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))}>◀</button>
        <span>{page + 1}</span>
        <button onClick={() => setPage((p) => p + 1)}>▶</button>
      </div>
    </div>
  );
};

export default OrderColumn;

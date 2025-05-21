const OrderCard = ({ idx, order, onComplete }) => {
  return (
    <div className="order-card" style={{ height: `${order.height}px` }}>
      <div className="header">
        <h3>#{idx + 1}</h3>
        <span>{order.OrderDate.date}</span>
      </div>

      <div className="menus">
        {order.MenuInfo.map((item, i) => (
          <div key={i}>
            {item.Name} x{item.Count}
          </div>
        ))}
      </div>

      {order.Options &&
        order.Options.map((item, i) => (
          <>
            <div className="request">{item.GroupName}</div>
            <div className="request">{item.Name}</div>
          </>
        ))}

      <div className="footer">
        <button onClick={() => onComplete(order.id)}>조리 완료</button>
      </div>
    </div>
  );
};

export default OrderCard;

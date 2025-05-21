// 수락된 주문민, 오래된 순으로 정렬

export const splitOrderCards = (orders) => {
  return orders
    .filter((order) => order.status === "accepted")
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .map((order) => ({
      ...order,
      height: order.menus.length > 4 ? 1008 : 494,
    }));
};

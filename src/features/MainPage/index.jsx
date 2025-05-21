import "./styled.css";
import OrderColumn from "../../components/order";
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage() {
  const [order, setOrder] = useState(null);

  const type = "pending";

  useEffect(() => {
    axios
      .get(`https://ct.pointda.com//api/kds/${type}`)
      .then((res) => {
        console.log("요청 데이터 : ", res.data);
        setOrder(res.data);
      })
      .catch((e) => {
        console.error("요청 실패:", e);
      });
  }, []);

  if (!order) return <div>로딩 중...</div>;

  return <OrderColumn order={order} setOrder={setOrder} />;
}

export default MainPage;

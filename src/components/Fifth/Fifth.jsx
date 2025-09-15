import React from "react";
import "./fifth.css";
import bih from "../assets/avat6.jpeg";

export const Fifth = () => {
  return (
    <div className="five">
      <div className="down-text">
        <br />
        <br />
        <br />
        <br />
        <br />
        Như một người thực hành học thuật, <br />
        chúng tôi bắt đầu từ dữ liệu và thực tiễn, <br />
        khái quát hoá thành khái niệm,
        <br /> rồi quay lại kiểm chứng trong đời sống. <br />
        Từ đó, sản phẩm học tập trở nên rõ ràng,
        <br /> mạch lạc và có giá trị ứng dụng.
      </div>

      <div className="big-block">
        <img src={bih} alt="concept" className="con-bi" />
      </div>
    </div>
  );
};
export default Fifth;

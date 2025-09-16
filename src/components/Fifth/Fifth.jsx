import React from "react";
import "./fifth.css";
import bih from "../assets/avat6.jpeg";

export const Fifth = () => {
  return (
    <div className="five">
      <div className="down-text">
        Như một người thực hành học<br /> thuật,
        chúng tôi bắt đầu từ dữ liệu <br /> và thực tiễn,
        khái quát hoá thành<br /> khái niệm,
        rồi quay lại kiểm chứng<br /> trong đời sống.
        Từ đó, sản phẩm <br />học tập trở nên rõ ràng,
         mạch lạc<br /> và có giá trị ứng dụng.
      </div>

      <div className="big-block">
        <img src={bih} alt="concept" className="con-bi" />
      </div>
    </div>
  );
};
export default Fifth;

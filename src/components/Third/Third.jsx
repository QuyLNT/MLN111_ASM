import React from "react";
import "./third.css";
import side from "../assets/avat1.jpeg";
export const Third = () => {
  return (<div className="third">
    <div className="pic-side-boc">
        <img src={side} alt="side" className="boc-fill" />
    </div>
    <div className="third-line"></div>
    <div className="third-line-two"></div>
    <div className="third-line-three"></div>
    <div className="third-line-four"></div>
    <p className="text-one">NGUỒN GỐC CỦA Ý THỨC</p>
    <p className="text-two">BẢN CHẤT & KẾT CẤU</p>
    <p className="text-three">VẬT CHẤT – Ý THỨC</p>
    <p className="text-four">Ý NGHĨA <u>PHƯƠNG PHÁP LUẬN</u></p>
    <div className="block-a"><p className="block-a-let">a</p></div>
    <p className="text-ablaz">
        một học phần trong Triết học Mác–Lênin, <br />
        nội dung nghiên cứu tập trung vào <br />nguồn gốc, bản chất và kết cấu của ý thức, <br />
        đồng thời phân tích mối quan hệ <br />biện chứng giữa vật chất và ý thức. <br /> 
    </p>
    <p className="ablaz-two"><br /><br />hiểu được vai trò quyết định của vật chất,<br />
        cũng như tính năng động sáng tạo của ý thức <br />
        trong thực tiễn cải tạo xã hội.</p>
  </div>
  );
};
export default Third;

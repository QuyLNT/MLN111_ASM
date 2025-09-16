// Home.jsx
import React from "react";
import vector2 from "../assets/vector1.jpeg";
import vector1 from "../assets/vector6.jpeg";
import vector3 from "../assets/vector3.jpeg";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="nav"></div>
      <div className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
      </div>

      <div className="location"></div>
      <div className="line"></div>

      {/* Nguồn gốc */}
      <div className="pic-block">
        <img src={vector3} alt="ecom" className="image-og" />
      </div>
      <p className="tagger-one">NGUỒN GỐC CỦA Ý THỨC</p>
      <p className="tagger-des">
        Gồm <b>tự nhiên</b> (bộ óc, phản ánh hiện thực) <br />
        và <b>xã hội</b> (lao động, ngôn ngữ, quan hệ).
      </p>

      {/* Bản chất */}
      <div className="pic-block-two">
        <img src={vector2} alt="ecom" className="image-og" />
      </div>
      <p className="tagger-two">BẢN CHẤT CỦA Ý THỨC</p>
      <p className="tagger-des-two">
        Là <b>hình ảnh chủ quan</b> của thế giới khách quan, <br />
        vừa <b>phản ánh</b> vừa <b>sáng tạo</b>, mang tính xã hội – lịch sử.
      </p>

      {/* Kết cấu */}
      <div className="pic-block-three">
        <img src={vector1} alt="ecom" className="image-og" />
      </div>
      <p className="tagger-three">KẾT CẤU CỦA Ý THỨC</p>
      <p className="tagger-des-three">
        Gồm 4 yếu tố: <b>tri thức</b>, <b>tình cảm</b>, <b>ý chí</b>, <br />
        và <b>niềm tin – lý tưởng</b>.
      </p>

      <div className="name-block"></div>
      <div className="name">nguồn gốc - BẢN CHẤT - Kết cấu</div>
    </div>
  );
};

export default Home;

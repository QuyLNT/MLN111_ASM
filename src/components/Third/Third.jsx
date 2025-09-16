// Third.jsx
import React from "react";
import "./third.css";
import side from "../assets/avat1.jpeg";

export const Third = () => {
  return (
    <div className="third">
      <div className="pic-side-boc">
        <img src={side} alt="side" className="boc-fill" />
      </div>
      <div className="third-line"></div>
      <div className="third-line-two"></div>
      <div className="third-line-three"></div>
      <div className="third-line-four"></div>

      <p className="text-one">VẬT CHẤT ⇔ Ý THỨC</p>
      <p className="text-two">
        <br />
        QUAN HỆ & Ý NGHĨA{" "}
      </p>

      <div className="block-a">
        <p className="block-a-let">V</p>
      </div>

      <p className="text-ablaz">
        <b>ật chất</b> có trước, quyết định sự ra đời <br />
        và nội dung của ý thức. Bộ óc người <br />
        là cơ sở vật chất đặc biệt của ý thức.
      </p>
      <div className="block-b">
        <p className="block-b-let">Y</p>
      </div>
      <p className="ablaz-two">
        <b>thức</b> có tính độc lập tương đối,
        phản <br /> ánh hiện thực và tác động ngược <br />
        lại vật chất thông qua hoạt động  <br />thực tiễn.
      </p>
    </div>
  );
};

export default Third;

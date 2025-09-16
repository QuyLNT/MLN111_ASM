// Fourth.jsx
import React from "react";
import "./fourth.css";
import stamp from "../assets/stamp.png";
import yellow from "../assets/vector2.jpeg";

export const Fourth = () => {
  return (
    <div className="fourth">
      <div className="four-bloc"></div>
      <p className="web">vấn đề cơ bản</p>
      <div className="four-line"></div>

      <div className="latest">Bản thể luận</div>
      <div className="des-lat">
        Giữa vật chất - ý thức
      </div>
      <div className="  des2-lat">

        cái nào có trước? <br />
        cái nào có sau?
        <br />
        cái nào quyết định cái nào?
      </div>

      <div className="tip"></div>
      <div className="tp-des">

      </div>

      <div className="four-line-two"></div>
      <div className="yell-blocl">
        <img src={yellow} alt="poster" className="yell-fill" />
      </div>

      <div className="new-des-think">
        Con người có khả năng <br />
        nhận thức
        được thế giới không?
      </div>

      <div className="think">Nhận thức luận</div>

      <div className="four-lin"></div>
      <div className="four-lin-del"></div>

      <div className="text-head-one">nhận thức</div>
      <div className="delivery">thực <br />tiễn</div>

      <p className="go-des">
        <br />
        Ý thức là sự phản ánh thế giới
        <br /> vật chất vào trong bộ óc người.
        <br /> <br />
        Ý thức có tính độc lập tương đối
        <br />→ có thể tác động trở lại vật chất.
      </p>
      <p className="go-des-two">
     
        Ý thức chỉ đạo hoạt động
        định <br />hướng cải tạo tự nhiên – xã hội.
      </p>
    </div>
  );
};

export default Fourth;

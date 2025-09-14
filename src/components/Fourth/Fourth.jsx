import React from "react";
import "./fourth.css";
import stamp from "../assets/stamp.png";
import yellow from "../assets/vector2.jpeg";

export const Fourth = () => {
  return (
    <div className="fourth">
      <div className="four-bloc"></div>
      <p className="web">matter</p>
      <img src={stamp} alt="stamp" className="stamp"/>
      <div className="four-line"></div>

      <div className="latest">Chuyên đề nổi bật</div>
      <div className="des-lat">
        Trích đoạn trực quan từ dự án<br /> học tập 
        về Ý thức & Vật chất trong triết học Mác – Lênin. <br />
        Bấm vào hình để khám phá chi tiết.
      </div>

      <div className="tip"></div>
      <div className="tp-des"></div>

      <div className="four-line-two"></div>
      <div className="yell-blocl">
        <img src={yellow} alt="poster" className="yell-fill" />
      </div>

      <div className="think">ý thức</div>

      <div className="new-org"></div>
      <div className="new">new</div>
      <div className="new-des-think">
        Chuyên đề trình bày nguồn gốc tự nhiên (bộ não, phản ánh hiện thực) <br />
        và nguồn gốc xã hội (lao động, ngôn ngữ) của ý thức, minh họa bằng <br />
        các sơ đồ/infographic do nhóm thiết kế.
      </div>

      <div className="four-lin"></div>
      <div className="four-lin-del"></div>

      <div className="text-head-one">nhận thức</div>
      <div className="delivery">thực tiễn</div>


      <p className="go-des">
        Một dự án học thuật được xây dựng từ <br />
        sự hợp tác sâu giữa các thành viên: <br />
        nghiên cứu – thiết kế – trình bày.
      </p>
      <p className="go-des-two">
        Mục tiêu: giúp người học hiểu đúng và vận dụng được.
      </p>
    </div>
  );
};
export default Fourth;

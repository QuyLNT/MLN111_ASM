import React from "react";
import "./eight.css";

export const Eight = () => {
  return (
    <div className="eight">

      <div className="art-des">
        Chúng tôi sử dụng công cụ AI để hỗ trợ code và biên soạn nội dung,{" "}
        <br />nhưng mọi thông tin đều được kiểm chứng<br /> bằng giáo trình LLCT và
        nhiệm.
      </div>

      <div className="com">
        <br></br>
        <br></br>
        Công cụ: ChatGPT, Canva
        <br />
        Mục đích: phác thảo ý tưởng, dàn ý, visual, code, gen image. <br />
        Kiểm chứng: Giáo trình Triết học Mác – Lênin (2021), <br /> tài liệu LLCT liên
        quan.
      </div>

      <div className="testimonials-section">
        <input
          type="radio"
          name="slider"
          title="slide1"
          defaultChecked
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide2"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide3"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide4"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide5"
          className="slider__nav"
        />

        <div className="slider__inner">
          <div className="slider__contents">
            <br />
            <br />
            <br />
            <quote>&rdquo;</quote>
            <p className="slider__txt">“Tôi tư duy, nên tôi tồn tại.”</p>
            <h2 className="slider__caption">René Descartes</h2>
          </div>
          <div className="slider__contents">
            <br />
            <br />
            <br />
            <quote>&rdquo;</quote>
            <p className="slider__txt">
              “Người không cùng ta đi trên con đường tri thức thì không thể hiểu
              ta.”
            </p>
            <h2 className="slider__caption">Karl Marx</h2>
          </div>
          <div className="slider__contents">
            <br />
            <br />
            <br />
            <quote>&rdquo;</quote>
            <p className="slider__txt">“Sự tồn tại quyết định ý thức.”</p>
            <h2 className="slider__caption">Friedrich Engels</h2>
          </div>
          <div className="slider__contents">
            <br />
            <br />
            <br />
            <quote>&rdquo;</quote>
            <p className="slider__txt">
              “Con người là tổng hòa các quan hệ xã hội.”
            </p>
            <h2 className="slider__caption">Karl Marx</h2>
          </div>
          <div className="slider__contents">
            <br />
            <br />
            <br />
            <quote>&rdquo;</quote>
            <p className="slider__txt">
              “Mọi triết học đều chỉ là sự diễn giải thế giới; vấn đề là phải cải tạo nó.”
            </p>
            <h2 className="slider__caption">Karl Marx</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eight;

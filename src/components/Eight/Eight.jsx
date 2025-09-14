import React from "react";
import "./eight.css";

export const Eight = () => {
  return (
    <div className="eight">
      <div className="eight-bloc"></div>
      <p className="art">Graphic</p>

      <div className="art-des">
        Chúng tôi sử dụng công cụ AI để hỗ trợ tạo sơ đồ/infographic/quiz, <br />
        nhưng mọi thông tin đều được kiểm chứng bằng giáo trình LLCT và <br />
        văn bản chính thống. Phần biên soạn cuối cùng do sinh viên chịu trách nhiệm.
      </div>

      <div className="awwwards">AI usage</div>

      <div className="com">
        Công cụ: ChatGPT, Figma, Canva, Miro. <br />
        Mục đích: phác thảo ý tưởng, dàn ý, visual. <br />
        Kiểm chứng: Giáo trình Triết học Mác – Lênin (2021), tài liệu LLCT liên quan.
      </div>

      <div className="testimonials-section">
        <input type="radio" name="slider" title="slide1" defaultChecked className="slider__nav"/>
        <input type="radio" name="slider" title="slide2" className="slider__nav"/>
        <input type="radio" name="slider" title="slide3" className="slider__nav"/>
        <input type="radio" name="slider" title="slide4" className="slider__nav"/>
        <input type="radio" name="slider" title="slide5" className="slider__nav"/>

        <div className="slider__inner">
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">AI hỗ trợ sáng tạo hình ảnh và sắp xếp nội dung; kết quả cuối cùng do nhóm biên tập.</p>
            <h2 className="slider__caption">Phụ lục: AI Usage</h2>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Mọi định nghĩa, khái niệm đều đối chiếu với giáo trình và trích dẫn nguồn.</p>
            <h2 className="slider__caption">Kiểm chứng nguồn</h2>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Không để AI làm thay hoàn toàn; có phân định rõ phần AI và phần biên soạn.</p>
            <h2 className="slider__caption">Cam kết liêm chính</h2>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Ứng dụng thực tiễn: poster chuỗi, video ngắn, minigame hỏi–đáp.</p>
            <h2 className="slider__caption">Tính tương tác</h2>
          </div>
          <div className="slider__contents">
            <quote>&rdquo;</quote>
            <p className="slider__txt">Liên hệ hiện nay: vai trò ý thức khoa học trong hoạch định chính sách.</p>
            <h2 className="slider__caption">Gắn với thực tiễn</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eight;

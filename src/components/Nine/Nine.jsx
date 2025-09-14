import React from "react";
import "./nine.css";
import fill1 from  "../assets/vector6.jpeg";
import fill2 from  "../assets/vector5.jpeg";
export const Nine = () => {
  return (<div className="nine">
        <div className="nine-line"></div>
        <div className="nine-line-two"></div>
        <div className="nine-line-three"></div>
        <div className="nine-block">
            <img src={fill1} alt="img" className="nine-fill" />
        </div>
        <p className='tagr-one'>Nguồn gốc của ý thức</p>
        <div className="nine-block-two">
            <img src={fill2} alt="img" className="nine-fill" />
        </div>
        <p className='tagr-two'>Vật chất – ý thức</p>

        
        <div className="nine-des-think">
                Bản chất & kết cấu của ý thức: tri thức – tình cảm – ý chí – niềm tin/lý tưởng. <br />
        Nội dung tóm tắt dưới dạng infographic, dễ ghi nhớ – dễ vận dụng.
        </div>

        <div className="nine-des-think-two">
                Ý nghĩa phương pháp luận: xuất phát từ thực tế khách quan, <br />
        phát huy tính năng động sáng tạo của ý thức, chống duy ý chí.
        </div>
        <div className="cap-work">all work!</div>
        <div className="credit">
            Group 1<br /> MLN111 <br /> Class: 	Half1_SE1715 <br />
            GV: NganDT31
        </div>
        
  </div>
  );
};
export default Nine;
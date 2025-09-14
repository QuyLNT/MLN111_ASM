import React from "react";
import vector2 from "../assets/vector1.jpeg";
import vector1 from "../assets/vector6.jpeg";
import vector3 from "../assets/vector3.jpeg";
import "./home.css";
const Home = () => {
  return (<div className="home">
    <div className="nav">
    
    </div>
    <div className="hamburger">
     <div className="top-bun"></div>
     <div className="meat"></div>
    </div>
          <div className='location'></div>
          <div className="line"></div>
            <div className='pic-block'>
              <img src={vector3} alt='ecom' className='image-og'></img>
            </div>
            <p className='tagger-one'>NGUỒN GỐC CỦA Ý THỨC</p>
            <p className='tagger-des'>
              Ý thức có nguồn gốc tự nhiên từ bộ não người <br></br>và sự phản ánh thế giới khách quan, <br></br>
              đồng thời có nguồn gốc xã hội từ lao động và ngôn ngữ.
            </p>
            <div className='pic-block-two'>
            <img src={vector2} alt='ecom'  className='image-og'></img>
            </div>
            <p className='tagger-two'>BẢN CHẤT VÀ KẾT CẤU CỦA Ý THỨC</p>
            <p className='tagger-des-two'>
              Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan. <br></br>
              Kết cấu của ý thức bao gồm tri thức, tình cảm, ý chí và niềm tin – lý tưởng.
            </p>
            <div className='pic-block-three'>
            <img src={vector1} alt='ecom'  className='image-og'></img>
            </div>
            <p className='tagger-three'>MỐI QUAN HỆ GIỮA VẬT CHẤT VÀ Ý THỨC</p>
            <p className='tagger-des-three'>
              <br></br>Vật chất có trước và quyết định ý thức. <br></br>
              Tuy nhiên, thông qua thực tiễn, ý thức có thể tác động trở lại, định hướng hoạt động cải tạo tự nhiên và xã hội.
            </p>
          <div className='name-block'></div>
          <div className='name'>consciousness</div>
  </div>
  );
};

export default Home;

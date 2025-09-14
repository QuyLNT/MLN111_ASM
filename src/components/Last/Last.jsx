import React from "react";
import "./last.css";
import lega from "../assets/stamp.png";
export const Last = () => {
  return (<div className="last">
        <div className="last-line"></div>
        <div class="chaniru">
            <div class="marquee">
                <div class="img1">Let's</div>  
                <div class="img1">create</div> 
                <div class="img1">something</div> 
                <div class="img1">togehter</div>
                <div class="img1">
                    
                </div>
            </div>
        </div>
        <div className="last-line-two"></div>
        <div className="names"></div>
        <img src={lega} alt="legal" className="legal" />
        <div className="legal-text">Legal</div>
        
  </div>
  );
};
export default Last;
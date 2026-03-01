import React, { useEffect, useState } from "react";
import popupAds from "../../assets/media/Advertisement/HomeMobBn.jpg";

const HomeMobilePopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="desktpHide overlay">
      <div className="popup">
        <div>
          <img
            src={popupAds}
            alt="Advertisement"
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="closeButton"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default HomeMobilePopUp;
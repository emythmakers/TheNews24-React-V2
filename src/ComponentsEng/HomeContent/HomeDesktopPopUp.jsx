import React, { useEffect, useState } from "react";
import popupAds from "../../assets/media/Advertisement/AUTO-CAR-A4.png";

const HomeDesktopPopUp = () => {
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
    <div className="mobleHide overlay2">
      <div className="popup">
        <div>
          <img
            src={popupAds}
            alt="Advertisement"
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

export default HomeDesktopPopUp;
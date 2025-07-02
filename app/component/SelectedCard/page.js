'use client';
import { useState, useEffect, useRef } from "react";

const SelectedCard = () => {
  const [Isopen, setIsopen] = useState(false);
  const adref = useRef(null);

  // ✅ Sync with prop (runs only when showcmp changes)

  // ✅ Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adref.current && !adref.current.contains(event.target)) {
        setIsopen(false);
      }
    };

    if (Isopen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Isopen]);

  // ✅ Body scroll lock
  useEffect(() => {
    document.body.style.overflow = Isopen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [Isopen]);

  return (
    <>
      {Isopen && <div className="overlay-larg" />}
      <div className="container-larg-ads">
        {Isopen && (
          <div className="large-ads" ref={adref}>
            <div className="flower-img">
              <img
                alt="flower"
                className="img-boug"
                src="https://assets.bounceexchange.com/assets/uploads/clients/7236/creatives/cec9c0c713ef01958b2fa3241d46a64d.jpg"
              />
            </div>
            <div className="otherSide">
              <div className="Xclos" onClick={() => setIsopen(false)}>
                <img
                  src="https://i.imgur.com/XkIQFJd.png"
                  alt="Close"
                  className="Xclose"
                />
              </div>
              <div className="logo-other-side-div">
                <img
                  src="//assets.bounceexchange.com/assets/uploads/clients/7236/creatives/db6466bfb1dd6d2dc21df1eddd43807c.png"
                  alt="Logo"
                  className="logo-other-side"
                />
              </div>
              <div className="otherSide-child">
                <p className="Instant">INSTANT MOOD BOOSTERS</p>
                <h2 className="Here">HERE'S 20% OFF</h2>
                <p className="your">your first order of farm-fresh flowers.</p>
                <button>Get 20% Off</button>
                <p className="Decline" onClick={() => setIsopen(false)}>
                  Decline
                </p>
                <p className="Not">
                  *Not combinable with other offers. One per customer only on first order...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedCard;

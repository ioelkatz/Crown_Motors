import React, { useState, useRef } from "react";
import "../index.css";

const ItemsSlider = ({ title, children }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollBy({ left: shift, behavior: "smooth" });
    setscrollX(scrollX + shift);
    checkScrollEnd();
  };

  const checkScrollEnd = () => {
    const atEnd = scrl.current.scrollWidth - scrl.current.scrollLeft <= scrl.current.offsetWidth;
    setScrollEnd(atEnd);
  };

  return (
    <div className="m-0 p-0">
      <h4 className=" item-title">{title}</h4>
      <div className="item-slider">
        <div
          onClick={() => slide(-600)}
          className={`left-arrow-left ${scrollX < 1 ? "is-disabled-hide" : ""}`}
        >
          <i className="bi bi-chevron-left fs-1"></i>
        </div>
        <div ref={scrl} onScroll={checkScrollEnd} className="item-container">
          {children}
        </div>
        <div
          onClick={() => slide(600)}
          className={`right-arrow-right ${scrollEnd ? "is-disabled-hide" : ""}`}
        >
          <i className="bi bi-chevron-right fs-1"></i>
        </div>
      </div>
    </div>
  );
};

export default ItemsSlider;

/*  <ItemsSlider>
            <div className="col-3 m-0 p-0">
              <div className="card color-text-our-white">
                <img src="super-lambo.png" className="img-fluid" alt="" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center m-0 p-0">
                  <h5 className="card-title ">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card color-text-our-white">
                <img src="lambo-2.png" className="img-fluid " alt="" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                  <h5 className="card-title ">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src="car-red.png" className="img-fluid" alt="" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                  <h5 className="card-title ">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className=" border card m-3">
                <img src="dark-car.png" className="img-fluid" alt="" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                  <h5 className="card-title ">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="border card m-3">
                <img src="ferrari-f80.png" className="img-fluid" alt="" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                  <h5 className="card-title ">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className=" border card m-3">
                <img src="volante.png" className="img-fluid" alt="" />
                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                  <h5 className="card-title ">Card title</h5>
                </div>
              </div>
            </div>
          </ItemsSlider> */

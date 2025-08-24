import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./PageTwobottom.css";

function PageTwobottom() {
  const scrollRef = useRef(null);

  return (
    <>
      {/* Mobile Button */}
      {/* <div className="md:hidden flex justify-center my-6">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Get Started!
        </button>
      </div> */}

      {/* Desktop / Tablet Grid */}
      <div ref={scrollRef} className="containers hidden md:block">
        <span className="Title">
          <h1>Also Explore..</h1>
        </span>

        <div className="card-container grid grid-cols-3 gap-6">
          <div className="card" id="card1">
            <div className="card-text">
              <a
                href="https://www.healthshots.com/hindi/healthy-eating/did-you-know-that-the-satvik-diet-increases-your-immunity-and-is-helpful-in-weight-loss-too/"
                target="_blank"
              >
                <h1>How to Eat Healthy</h1>
                <p>
                  Knowing what, when, and how to eat can improve energy levels, mental clarity, and overall well-being.
                </p>
              </a>
            </div>
          </div>

          <div className="card" id="card2">
            <div className="card-text">
              <a href="https://youtu.be/LSDTglSLx9c?si=ymRDAbBc0CkfbBnW" target="_blank">
                <h1>Conquer Mind</h1>
                <p>
                  The mind is a battlefield of thoughts, emotions, and distractions. Learning to control it leads to inner peace, sharper focus, and a more fulfilling life.
                </p>
              </a>
            </div>
          </div>

          <div className="card" id="card3">
            <div className="card-text">
              <a href="https://youtu.be/mOrE_cqb8WU?si=hhmoZICTglb41E39" target="_blank">
                <h1>Why Bad Happens to Me?</h1>
                <p>Understanding the deeper meaning behind struggles can shift our perspective and help us grow.</p>
              </a>
            </div>
          </div>
        </div>

        <div className="card-container2 grid grid-cols-3 gap-6 mt-6">
          <div className="card" id="card4">
            <div className="card-text">
              <a href="https://www.youtube.com/watch?v=tV2Ecd7m6Tc" target="_blank">
                <h1>How to Control Anger and Impulse</h1>
                <p>
                  Uncontrolled anger clouds judgment and damages relationships. Recognizing emotional triggers is the first step toward self-mastery and inner stability.
                </p>
              </a>
            </div>
          </div>

          <div className="card" id="card5">
            <div className="card-text">
              <a href="https://youtu.be/1oanOmN83fw?si=-Gy1FhrNXUiMkOW5" target="_blank">
                <h1>Why Do I Feel Lost in Life?</h1>
                <p>A sense of purposelessness can make life feel directionless and overwhelming.</p>
              </a>
            </div>
          </div>

          <div className="card" id="card6">
            <div className="card-text">
              <a href="https://www.youtube.com/watch?v=6Os9SKqiV9o" target="_blank">
                <h1>Why Am I Not Satisfied Even After Success?</h1>
                <p>
                  Despite achieving goals, an inner void remains, making fulfillment seem unreachable. This feeling stems from an endless cycle of desires and external validation.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTwobottom;

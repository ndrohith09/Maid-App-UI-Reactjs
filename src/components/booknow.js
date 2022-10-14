import React from "react";
import Handscash from "./assets/images/wallet.png";
import safe from "./assets/images/safe.png";
import perks from "./assets/images/perks.png";

const booking = () => {
  return (
    <>
      <div class="steps">
        <div
          class="base_header text-center"
          style={{ paddingTop: "3%" }}
        >
          <span>
            <small class="bor_header_left"></small>Book Now
            <small class="bor_header_right"></small>
          </span>
          <h3>Learn how to Book</h3>
        </div>
        <div class="container" style={{ marginTop: "3%", paddingBottom: "3%" }}>
          <div class="row">
            <div class="col-md-4 text-center steps">
              <div>
                <img src={Handscash} alt="step1" />
                <h4>Regular work and pay</h4>
              </div>
            </div>
            <div class="col-md-4 text-center steps">
              <div>
                <img src={perks} alt="step2" />
                <h4>Get paid for your skills</h4>
              </div>
            </div>
            <div class="col-md-4 text-center steps">
              <div>
                <img src={safe} alt="step3" />
                <h4>Safe platform</h4>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-4 text-center steps">
              <div>
                <img src={Handscash} alt="step1" />
                <h4>Regular work and pay</h4>
              </div>
            </div>
            <div class="col-md-4 text-center steps">
              <div>
                <img src={perks} alt="step2" />
                <h4>Get paid for your skills</h4>
              </div>
            </div>
            <div class="col-md-4 text-center steps">
              <div>
                <img src={safe} alt="step3" />
                <h4>Safe platform</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default booking;

import React, { Component } from "react";
import instance from "./api/api_service"; 
import Service1 from "./assets/images/service1.png"
class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  componentDidMount() {
    instance
      .get('web-service-all/') //get all services
      .then((res) => {
        this.setState({ services: res.data });
        console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { services } = this.state;

    return (
      <>
        <div class="container" style={{ marginTop: "3%" }}>
          <div class="base_header">
            <span>
              <small class="bor_header_left"></small>SERVICES
              <small class="bor_header_right"></small>
            </span>
            <h3>Our Services</h3>
          </div>
          <br />
          <div class="container">
            <div class="row"> 
                  <div
                    class="col-md-6 col-lg-4 col-xl-4"
                    style={{ marginTop: "2%" }}
                  >
                      <div class="card category-card" key="1">
                        <img
                          class="card-img-top w-100 d-block"
                          src={Service1}
                          alt="Service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service1</h4>
                        </div>
                      </div>
                  </div> 

                  <div
                    class="col-md-6 col-lg-4 col-xl-4"
                    style={{ marginTop: "2%" }}
                  >
                      <div class="card category-card" key="1">
                        <img
                          class="card-img-top w-100 d-block"
                          src={Service1}
                          alt="Service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service1</h4>
                        </div>
                      </div>
                  </div> 

                  <div
                    class="col-md-6 col-lg-4 col-xl-4"
                    style={{ marginTop: "2%" }}
                  >
                      <div class="card category-card" key="1">
                        <img
                          class="card-img-top w-100 d-block"
                          src={Service1}
                          alt="Service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service1</h4>
                        </div>
                      </div>
                  </div> 
            </div> 

          </div>
        </div> 
        <br /> <br />
      </>
    );
  }
}

export default Service;

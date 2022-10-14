import React , {Component} from 'react';
import instance from '../api/api_service';
import Carousel from './carousel';
import Contact from './contact';
import Team from './team';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import step1 from '../assets/images/step1.png';
import step2 from '../assets/images/step2.png';
import step3 from '../assets/images/step3.png';
import playstore from '../assets/images/playstore.png';
import appstore from '../assets/images/appstore.png';
import mobile from '../assets/images/web2.png'; 
import Service1 from "../assets/images/service1.png" 

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        services: [],
        special: [],
      };
    }
  

    componentDidMount() {   
        instance
        .get('web-service-home/')
        .then((res) => {
          this.setState({ services: res.data.RESPONSE });
        })
        .catch((err) => {
          console.log(err);
        });

    instance
        .get('special-service/')
        .then((res) => {
            this.setState({ special: res.data.RESPONSE });
          })
          .catch((err) => {
            console.log(err);
          });
    }
  
    render() {
      const { services , special } = this.state;
    return  (
        <>
        <Carousel />
        <br />

        {/* Content1  */}

        <div class="container" style={{marginTop: '3%'}}>
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div class="container"><img src={image1} style={{ width: '100%'}} /></div>
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="container" style={{marginTop: '7%'}}>
                    <div class="base_header"><span><small class="bor_header_left"></small>WE ARE HOMIETOUCH<small class="bor_header_right"></small></span>
                        <h3>Running short of time to make your home shine?</h3>
                    </div>
                    <div class="base_footer">
                        <p>We get it. Ease yourself while we give your home a sparkle effect! <br />At Homietouch, we send professional helpers your way to do the cleaning for you. 
Forget about dusting, washing, cooking and every other household work. Our helpers do it fast and flawless so that you can spend time on what you love.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <br />

        {/* Content2  */}

        <div  class="steps">
        <div class="base_header text-center" style={{paddingTop: '2%'}}><span><small class="bor_header_left"></small>WE ARE HOMIETOUCH<small class="bor_header_right"></small></span>
            <h3>How does it work?</h3>
        </div>
        <div class="container" style={{ marginTop: "3%",paddingBottom: '3%' }} >
            <div class="row">
                <div class="col-md-4 text-center steps">
                    <div><img src={step1} alt="step1" />
                        <h4><strong>You ask</strong></h4>
                        <h4>You tell us what services you are looking for using the Homietouch app</h4>
                    </div>
                </div>
                <div class="col-md-4 text-center steps">
                    <div><img src={step2} alt="step2" />
                        <h4><strong>We find</strong></h4>
                        <h4>We find the right maid specialized in the services you prefer. All our maids are verified and strive to give you the best experience</h4>
                    </div>
                </div>
                <div class="col-md-4 text-center steps">
                    <div><img src={step3} alt="step3" />
                        <h4><strong>Get the job done</strong></h4>
                        <h4>Your Homietouch helper reaches your place and does the work exactly the way you want</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* PlayStore */}
        <div style={{ background: '#006FB9' ,padding: '2%' }}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-7">
                    <div class="container" style={{marginTop: '7%' }}>
                        <div class="base_header">
                            {/* <h3>Simple way to Book Your Maid Faster</h3> */}
                            <h3 style={{color: 'white'}}>Book Your Maid</h3>
                        </div>
                        <div class="base_footer">
                            <p style={{color: 'white'}}>It’s simple and fast
Make your place sparkle at the click of a button. <br/> Download the Homietouch app by clicking below to book your maid now.</p>
<br />
<br />
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col-12 col-sm-5 col-md-4 col-lg-6 col-xl-5 col-xxl-4">
                                <div class="app_store"><a href="#"><img src={playstore} /></a></div>
                            </div>
                            <div class="col-sm-5 col-md-4 col-lg-6 col-xl-5 col-xxl-4">
                                <div class="app_store"><a href="#"><img src={appstore} /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-9 col-lg-5 app_store_image">
                    <div class="container" style={{ padding: '6%'}}><img src={mobile} /></div>
                </div>
            </div>
        </div>
    </div>
        

    {/* Content4  */}

    <div class="container" style={{marginTop: '3%'}}>
        <div class="row">            
            <div class="col-md-12 col-lg-6">
                
                    <div class="container">
                    <div class="base_header"><span><small class="bor_header_left"></small>WE ARE HOMIETOUCH<small class="bor_header_right"></small></span>
                        <h3>Special Services</h3>
                    </div>
                    
                    <div class="base_footer" key="1">
                        <p><strong>Service Title</strong> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                       
                    </div>  
                </div>
                
                
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="container" ><img src={image2} style={{ width: '100%'}} /></div>
            </div>
        </div>
    </div>

    <br />

     {/* Service List  */}

     <div class="container" style= {{ marginTop: '5%'}}>
     <div class="base_header"><h3>Our Services</h3> 
     <span style={{padding: '2%'}}><a href="/service" >MORE SERVICES →</a></span>   
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
                          alt="service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service Name</h4>
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
                          alt="service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service Name</h4>
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
                          alt="service1"
                        />
                        <div class="card-body">
                          <h4 class="card-title">Service Name</h4>
                        </div>
                      </div>
                  </div> 
                </div>
            </div>
        </div>

        <br />  

        {/* Team  */}
        < Team />

        {/* Contact Form  */}
        <Contact />
        </>
    );
}
}
export default Home;
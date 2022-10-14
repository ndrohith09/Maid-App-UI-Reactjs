import React from 'react'
import Contact from './home/contact';
import image1 from './assets/images/maidpage.jpg';
import Handscash from './assets/images/wallet.png';
import safe from './assets/images/safe.png'; 
import perks from './assets/images/perks.png';
import playstore from './assets/images/playstore.png';
import appstore from './assets/images/appstore.png';
import mobile from './assets/images/web1.png';
import Contact_component from './contact_component';
const Maidapp = () => {
    return (
        <>
     {/* Content1  */}

        <div class="container" style={{marginTop: '3%'}}>
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div class="container"><img src={image1}  alt={image1} style={{ width: '100%'}} /></div>
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="container">
                    <div class="base_header"><span><small class="bor_header_left"></small>WE ARE HOMIETOUCH<small class="bor_header_right"></small></span>
                        <h3>Are you looking to work as domestic help and get paid fairly?</h3>
                    </div>
                    <div class="base_footer">
                        <p>Join Homietouch today, Get paid for your skills! Homietouch is your way to get work seamlessly. We connect committed workers like you with people who need your help. 
Register as a helper on the Homietouch app. Tell us what your specialized talents are and we will find the right person you can work for.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <br />

        {/* Content2  */}

        <div  class="steps">
        <div class="base_header text-center" style={{paddingTop: '2%'}}><span><small class="bor_header_left"></small>WE ARE HOMIETOUCH<small class="bor_header_right"></small></span>
            <h3>Why HomieTouch?</h3>
        </div>
        <div class="container" style={{ marginTop: "3%",paddingBottom: '3%' }} >
            <div class="row">
                <div class="col-md-4 text-center steps">
                    <div><img src={Handscash} alt="step1" />
                        <h4>Regular work and pay</h4>
                    </div>
                </div>
                <div class="col-md-4 text-center steps">
                    <div><img src={perks} alt="step2" />
                        <h4>Get paid for your skills</h4>
                    </div>
                </div>
                <div class="col-md-4 text-center steps">
                    <div><img src={safe} alt="step3" />
                        <h4>Safe platform</h4>
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
                            <h3  style={{color: 'white'}}>Simple way to Earn Faster</h3>
                        </div>
                        <div class="base_footer">
                            <p style={{color: 'white'}}>Register as a helper on the Homietouch app. We will reach out to you with the right job for you!</p>
                        <br />
                        <br />
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col-12 col-sm-5 col-md-4 col-lg-6 col-xl-5 col-xxl-4">
                                <div class="app_store"><a href="#"><img src={playstore} alt="playstore" /></a></div>
                            </div>
                            <div class="col-sm-5 col-md-4 col-lg-6 col-xl-5 col-xxl-4">
                                <div class="app_store"><a href="#"><img src={appstore} alt="appstore" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-9 col-lg-5 app_store_image">
                    <div class="container" style={{ padding: '6%'}}><img src={mobile} alt="mobile" /></div>
                </div>
            </div>
        </div>
    </div>

<Contact_component />
        < Contact />
        </>
    )
}

export default Maidapp;

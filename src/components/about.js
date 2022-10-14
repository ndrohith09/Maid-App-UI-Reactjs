import React from 'react';
import Team from './home/team';
const about = () => {
    return (
        <>
        <div class="container" style={{marginTop: '3%'}}>
        <div class="row">            
            <div class="col-md-12 col-lg-10">
                <div class="container">
                    <div class="base_header"><span><small class="bor_header_left"></small>ABOUT HOMIETOUCH<small class="bor_header_right"></small></span>
                        <h3>What is HomieTouch</h3>
                    </div>
                    <div class="base_footer">
                        <p>Homietouch is your perfect partner to keep your home neat and clean. We take the burden of household work off your shoulders by sending the right helpers your way.</p>
                    </div>

                    < br />

                    <div class="base_header">
                        <h3>Why HomieTouch</h3>
                    </div>
                    <div class="base_footer">
                        <p>We are on a mission to help stay-at-home and working women spend their time on what they love while we make sure your sweet home sparkles!</p>
                    </div>

                    <br />  
                    <div class="base_header">
                        <h3>Our Vision</h3>
                    </div>
                    <div class="base_footer">
                        <p>To create a lifestyle where keeping your home tidy is not something you need to stress about!</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* Team  */}
    < Team />
        </>
    )
}

export default about;

import React from 'react'
import {FiFacebook, FiLinkedin, FiTwitter} from 'react-icons/fi';
import man from '../assets/images/man.png';

const team = () => {
    return (
        <>
          <div className ="steps" id="team">
        <div class="base_header text-center" style={{paddingTop: '2%'}}><span><small class="bor_header_left"></small>Our crew<small class="bor_header_right"></small></span>
            <h3>Meet the Team</h3>
        </div>
        <div class="container" style={{ padding: '3%' }}>
            <div class="row">
                <div class="col-md-4">
                    <div class="container text-center team-mates"><img src={man} />
                        <h3>Person 1</h3>
                        <ul style={{listStyle: 'none' , padding: '0'}}>
                            <li class="team-icons"><a href="#"><FiLinkedin /></a><a href="#"><FiTwitter /></a><a href="#"><FiFacebook /></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container text-center team-mates"><img src={man} />
                        <h3>Person 1</h3>
                        <ul style={{listStyle: 'none' , padding: '0'}}>
                            <li class="team-icons"><a href="#"><FiLinkedin /></a><a href="#"><FiTwitter /></a><a href="#"><FiFacebook /></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container text-center team-mates"><img src={man} />
                        <h3>Person 1</h3>
                        <ul style={{listStyle: 'none' , padding: '0'}}>
                            <li class="team-icons"><a href="#"><FiLinkedin /></a><a href="#"><FiTwitter /></a><a href="#"><FiFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>   
        </>
    )
}

export default team

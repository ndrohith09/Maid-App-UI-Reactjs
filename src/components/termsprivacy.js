import React , {Component} from 'react'; 
import instance from './api/api_service';
class TermsPrivacy extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            terms: {},
            privacy: {},
        };
    }

    async componentDidMount() {
        instance
        .get('terms-policy/')
        .then((res) => {
          this.setState({ terms: res.data.RESPONSE[0] , privacy: res.data.RESPONSE[1] });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    render() { 
        const { terms , privacy } = this.state;
        return (
            <>
            <div class="container" style={{marginTop: '3%'}}>
            <div class="row">            
                <div class="col-md-12 col-lg-10">
                    <div class="container">
                        <div class="base_header"><span><small class="bor_header_left"></small>Terms & Conditions<small class="bor_header_right"></small></span>
                            <h3>Terms & Conditions</h3>
                        </div>
                        <div class="base_footer">
                        <p>{terms.desc}</p>    
                        </div>
    
                        < br />
                        < br />
    
                        <div class="base_header"><span><small class="bor_header_left"></small>Privacy Policy<small class="bor_header_right"></small></span>                    
                            <h3>Privacy Policy</h3>
                        </div>
                        <div class="base_footer">
                        <p>{privacy.desc}</p>                            
                        </div>
    
                        <br />  
                    
    
                    </div>
                </div>
            </div>
        </div> 
            </>
        );
    }
}
 
export default TermsPrivacy;
 
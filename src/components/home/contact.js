import React , {createRef} from 'react'
import instance from '../api/api_service';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.wrapper = createRef();
        this.state = {
          name: "",
          phone: "",
          message: "",
        };
      }
     
      // componentDidMount(){
      //   console.log("this.wrapper",this.wrapper)
      // }

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = (e) => {
        e.preventDefault();
    
        instance
          .post('send-queries/', {
            name: this.state.name,
            mobile: this.state.phone,
            msg: this.state.message,
          })
          .then((response) => {
            window.location.reload();

          })
          .catch((error) => {
            console.log(error);
          });
      };


    render() { 
      const { name, phone, message } = this.state;

      return (
            <>
   <section class="register-photo">
       <div class="form-container">
           <div class="image-holder"></div>
           <form method="post" onSubmit={this.submitHandler}>
               <h2 class="text-center"><strong>Any queries?</strong></h2>
               <div class="mb-3"><input  class="form-control" type="text" name="name" onChange={this.changeHandler} value={name} id="name" placeholder="Name" required/></div>
               <div class="mb-3"><input  class="form-control" type="number" name="phone" onChange={this.changeHandler} value={phone} id="phone" placeholder="Mobile number"  maxLength = {10} required /></div>
               <div class="mb-3"><textarea class="form-control" name="message" id="message" onChange={this.changeHandler} value={message}  placeholder="Your Message" style= {{ minHeight: '160px' , maxHeight: '160px' }} required></textarea></div>
               <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Send</button></div>
           </form>
       </div>
   </section>   
       </>
        );
    }
}
 
export default Contact;


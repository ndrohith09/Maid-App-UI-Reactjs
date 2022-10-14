import React from "react";
import Contact_component from "./contact_component";
import instance from "./api/api_service";
class Contact_us extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      message: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    instance
      .post("send-queries/", {
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
        <Contact_component />

        <div class="container">
          <div
            class="container"
            style={{
              border: "0.3px solid #C4C4C4",
              padding: "3%",
              borderRadius: "5px",
            }}
          >
            <form class="contact-form container" onSubmit={this.submitHandler}>
              <h1>DROP US A MESSAGE</h1>
              <div class="container" style={{ marginTop: "3%" }}>
                <h4>Name</h4>
                <input
                  class="form-control"
                  onChange={this.changeHandler}
                  value={name}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="container" style={{ marginTop: "3%" }}>
                <h4>Mobile Number</h4>
                <input
                  class="form-control"
                  onChange={this.changeHandler}
                  value={phone}
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div class="container" style={{ marginTop: "3%" }}>
                <h4>Your requirement</h4>
                <textarea
                  class="form-control"
                  placeholder="Your Message goes here"
                  onChange={this.changeHandler}
                  value={message}
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="container mb-3" style={{ marginTop: "3%" }}>
                <button
                  class="btn btn-primary d-block w-25"
                  style={{ background: "#006fb9", border: "none" }}
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <br />
        <br />
      </>
    );
  }
}

export default Contact_us;

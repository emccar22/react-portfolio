import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <div className="widget">
            <form id="contact-form">
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input type="text" name="email" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="5" />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

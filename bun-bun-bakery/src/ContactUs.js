import React, { Component } from 'react';
import Header from './Header';

class ContactUs extends Component {
  render() {
    return (
        <div className="ContactUsContainer">
            <Header displayPage="ContactUs" />
	 		<h1>Contact Us</h1>

		    <div className="contactUs">
		      <h2>Address:</h2>
		      <span className="contactInfo">300 S. Craig Street, Pittsburgh PA-15213</span>
		      <h2>Email: <span className="contactInfo">bunbunbakeshop@gmail.com</span></h2>
		      <h2>Phone: <span className="contactInfo">469-808-8080</span></h2>
		    </div>

		    <div className="openingHours">
		      <h2>Opening Hours:</h2>
		      <span>Mon-Fri: 8AM - 6PM</span>
		      <span>Sat-Sun: 12PM - 4PM</span>
		    </div>

	     	<img className="map" src="/images//map.png" alt=""></img>
        </div>
    );
  }
}

export default ContactUs;
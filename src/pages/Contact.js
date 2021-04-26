import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Map from "../components/Map";
import "./Contact.css";
import ContactAsk from "../components/ContactAsk";
import contactAskData from "../components/contactAskData";

const contactAskAbout = contactAskData.map((item) => (
  <ContactAsk key={item.name} feature={item} />
));

export default function Contact() {
  return (
    <React.Fragment>
      <div className="contact-container">
        <div>
          <h1 className="contact-title">Contact</h1>
          <h2 className="contact-subtitle">Ask us about</h2>
          {contactAskAbout}
        </div>
        <Form />
      </div>
      <h2 className="contact-map-title">Headquarters</h2>
      <Map />
      <Footer />
    </React.Fragment>
  );
}

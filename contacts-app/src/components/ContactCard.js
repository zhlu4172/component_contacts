import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./ContactCard.css";

const ContactCard = ({ contact, isGridView }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("details-overlay")) {
      setShowDetails(false);
    }
  };

  return isGridView ? (
    // Grid View Card
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <div className="contact-detail">
        <div className="left-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>Email</span>
        </div>
        <div className="right-container">
          <span>{contact.email}</span>
        </div>
      </div>
      <div className="contact-detail">
        <div className="left-container">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>Phone</span>
        </div>
        <div className="right-container">
          <span>{contact.phone}</span>
        </div>
      </div>
      <div className="contact-detail">
        <div className="left-container">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Address</span>
        </div>
        <div className="right-container">
          <span>{contact.address.city}</span>
        </div>
      </div>
      <div className="view-details" onClick={() => setShowDetails(true)}>
        View Details
      </div>

      {showDetails && (
        <div className="details-overlay" onClick={handleOverlayClick}>
          <div className="details-content">
            <h3>{contact.name}</h3>
            <p>
              <strong>Username:</strong> <span>{contact.username}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{contact.email}</span>
            </p>
            <p>
              <strong>Phone:</strong> <span>{contact.phone}</span>
            </p>
            <p>
              <strong>Address:</strong>
              <span>
                {contact.address.street}, {contact.address.suite}, {contact.address.city},{" "}
                {contact.address.zipcode}
              </span>
            </p>
            <p>
              <strong>Geo Coordinates:</strong>
              <span>
                Lat: {contact.address.geo.lat}, Lng: {contact.address.geo.lng}
              </span>
            </p>
            <p>
              <strong>Company:</strong> <span>{contact.company.name}</span>
            </p>
            <p>
              <strong>Catch Phrase:</strong> <span>{contact.company.catchPhrase}</span>
            </p>
            <p>
              <strong>Business:</strong> <span>{contact.company.bs}</span>
            </p>
            <div className="map-container">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${contact.address.geo.lat},${contact.address.geo.lng}`
                )}&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
            <button onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  ) : (
    // List View Row
    <div className="contact-row">
      <div className="contact-column">{contact.name}</div>
      <div className="contact-column">{contact.email}</div>
      <div className="contact-column">{contact.phone}</div>
      <div className="contact-column"> {contact.address.city}</div>
      <div className="view-details-inline" onClick={() => setShowDetails(true)}>View Details</div>

      {showDetails && (
        <div className="details-overlay" onClick={handleOverlayClick}>
          <div className="details-content">
            <h3>{contact.name}</h3>
            <p>
              <strong>Username:</strong> <span>{contact.username}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{contact.email}</span>
            </p>
            <p>
              <strong>Phone:</strong> <span>{contact.phone}</span>
            </p>
            <p>
              <strong>Address:</strong>
              <span>
                {contact.address.street}, {contact.address.suite}, {contact.address.city},{" "}
                {contact.address.zipcode}
              </span>
            </p>
            <p>
              <strong>Geo Coordinates:</strong>
              <span>
                Lat: {contact.address.geo.lat}, Lng: {contact.address.geo.lng}
              </span>
            </p>
            <p>
              <strong>Company:</strong> <span>{contact.company.name}</span>
            </p>
            <p>
              <strong>Catch Phrase:</strong> <span>{contact.company.catchPhrase}</span>
            </p>
            <p>
              <strong>Business:</strong> <span>{contact.company.bs}</span>
            </p>
            {/* Google Map */}
            {/* <div className="map-container">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=MY_API_KEY&q=${contact.address.geo.lat},${contact.address.geo.lng}`}
                allowFullScreen
              ></iframe>
            </div> */}
            <div className="map-container">
              <iframe
                title="Google Map"
                width="100%"
                height="300"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${contact.address.geo.lat},${contact.address.geo.lng}`
                )}&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
            <button onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

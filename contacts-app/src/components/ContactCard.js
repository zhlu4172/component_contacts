import React, { useState } from "react";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleOverlayClick = (e) => {
    // 点击背景时关闭弹窗
    if (e.target.classList.contains("details-overlay")) {
      setShowDetails(false);
    }
  };

  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address.city}</p>

      {/* 点击 View Details 展示弹窗 */}
      <div className="view-details" onClick={() => setShowDetails(true)}>
        View Details
      </div>

      {/* 详情弹窗 */}
      {showDetails && (
        <div
          className="details-overlay"
          onClick={handleOverlayClick} // 点击背景关闭弹窗
        >
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
                <strong>Website:</strong> <span>{contact.website}</span>
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

            <button onClick={() => setShowDetails(false)}>Close</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

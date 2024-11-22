import React from 'react';
import './ContactCard.css';

const ContactCard = ({ contact }) => {
  return (
    <div className="card contact-card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {contact.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {contact.address.city}, {contact.address.street}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;

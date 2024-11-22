import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setContacts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

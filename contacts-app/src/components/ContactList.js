import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true); // Control view mode
  const contactsPerPage = 6; // Items per page

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

  // Pagination logic
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const nextPage = () => {
    if (currentPage < Math.ceil(contacts.length / contactsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="contact-list-container">
      {/* View Toggle Buttons */}
      <div className="view-toggle">
        <FontAwesomeIcon
          icon={faTh}
          className={`toggle-icon ${isGridView ? 'active' : ''}`}
          onClick={() => setIsGridView(true)}
          title="Grid View"
        />
        <FontAwesomeIcon
          icon={faList}
          className={`toggle-icon ${!isGridView ? 'active' : ''}`}
          onClick={() => setIsGridView(false)}
          title="List View"
        />
      </div>

      {/* Contact List */}
      {/* <div className={`contact-list ${isGridView ? 'grid-view' : 'list-view'}`}>
        {currentContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} isGridView={isGridView} />
        ))}
      </div> */}
      <div className={`contact-list ${isGridView ? 'grid-view' : 'list-view'}`}>
        {!isGridView && (
            // Header Row for List View
            <div className="contact-header">
            <div className="header-column">Name</div>
            <div className="header-column">Email</div>
            <div className="header-column">Phone</div>
            <div className="header-column">Address</div>
            <div className="header-column">Actions</div>
            </div>
        )}
        {currentContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} isGridView={isGridView} />
        ))}
        </div>


      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(contacts.length / contactsPerPage)}
        </span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(contacts.length / contactsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactList;

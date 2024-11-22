import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 6; // 每页最多显示6个联系人

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

  // 计算分页后的联系人
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  // 切换页面逻辑
  const nextPage = () => {
    if (currentPage < Math.ceil(contacts.length / contactsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="contact-list-container">
      <div className="contact-list">
        {currentContacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {Math.ceil(contacts.length / contactsPerPage)}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(contacts.length / contactsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactList;

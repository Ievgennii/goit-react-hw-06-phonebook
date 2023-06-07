
import  ContactList  from './ContactList';
import  Filter  from './Filter';
import ContactForm  from './ContactForm';
import { useSelector } from 'react-redux';
import css from './Contacts.module.css';
// import Filter from './Filter';

const App = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  // const filterContact = e => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filtered.toLowerCase())
  //   );
  //   return filteredContacts;
  // };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>

      <ContactForm  />
      <h1>Contacts</h1>
      <Filter  />

      <ContactList  contacts={visibleContacts}/>
    </div>
  );
};

export default App;



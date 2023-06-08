import React from 'react';
import css from './Contacts.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      Notiflix.Notify.info(`${name} is already in contacts`);
    } else {
      dispatch(add({ name, number }));
    }
    reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(getContacts);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      
        <p>Name</p>
        <input
          className={css.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <p>Number</p>
        <input
          className={css.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit"
        className={css.button}
        disabled={!name || !number}>
          Add contact
        </button>
      
    </form>
  );
};

export default ContactForm;

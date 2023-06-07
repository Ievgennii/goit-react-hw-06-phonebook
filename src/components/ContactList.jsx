import React from 'react';
import css from './Contacts.module.css';
import { useDispatch } from "react-redux";
import { remove } from 'redux/sliceContact';

function ContactList({ contacts }) {
  // Получаем массив задач из состояния Redux
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={css.button}
            onClick={() => {
              dispatch(remove(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}



export default ContactList;

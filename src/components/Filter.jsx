import React from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { qwery } from 'redux/sliceFilter';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={evt => dispatch(qwery(evt.currentTarget.value))}
        />
      </label>
    </div>
  );
}

export default Filter;

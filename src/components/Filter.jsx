import React from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';
import { getFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(getFilter);
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
          onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
        />
      </label>
    </div>
  );
}

export default Filter;

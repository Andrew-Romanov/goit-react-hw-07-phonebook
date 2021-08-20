import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.scss';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      {`Find by Name: `}
      <input
        className={styles.Filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filterValue}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default Filter;

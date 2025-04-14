import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>Find contacts by name: </p>

      <input
        type="text"
        name="filter"
        className={styles.input}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

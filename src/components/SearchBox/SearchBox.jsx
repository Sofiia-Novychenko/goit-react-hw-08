import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();

  const name = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>Find contacts by name: </p>

      <input
        type="text"
        name="filter_name"
        className={styles.input}
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}

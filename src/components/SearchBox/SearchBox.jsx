import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  
  return (
    <div className={css.container}>
      <p>Find contacts by name or number</p>
      <input className={css.input}
        type="text"
        value={filter.name}
        onChange={handleChange}
      />
    </div>
  );
}


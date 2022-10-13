import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      onChange={event => dispatch(setFilter(event.target.value))}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;

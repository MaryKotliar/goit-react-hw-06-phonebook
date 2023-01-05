
import { nanoid } from 'nanoid';
import { Wrapper } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterReducer } from 'redux/filterSlice';
export const Filter = () => {
  const value = useSelector(getFilter);
  console.log(value);
  const dispatch = useDispatch();
  const filterInputId = nanoid();
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();
    dispatch(filterReducer(normalizedValue));
  };
  return (
    <Wrapper>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        id={filterInputId}
      />
    </Wrapper>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

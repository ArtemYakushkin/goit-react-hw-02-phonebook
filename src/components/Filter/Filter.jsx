import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
import PropTypes from 'prop-types';
const AddToDo = ({addItem, handleItem}) => {
  return (
    <>
        <label>
            Item To Add
        </label>
        <input type="text" name="item" onChange={(e) => handleItem(e)}/>
        <button onClick={addItem}>Add</button>
    </>
  )
}

AddToDo.propTypes = {
  addItem: PropTypes.func,
  ele: PropTypes.string,
  handleItem: PropTypes.func
};
export default AddToDo
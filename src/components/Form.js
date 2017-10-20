import React from 'react'
import {compose, withState, withHandlers} from 'recompose'

const Form = ({handleSubmit, updateValue, name, address, onSubmit}) => (
  <div>
    <h2>Address book</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={name}
          onChange={updateValue('setName')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          className="form-control"
          value={address}
          onChange={updateValue('setAddress')}
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit(onSubmit)}
        >Create
        </button>
      </div>
    </form>
  </div>
);

export default compose(
  withState('name', 'setName', ''),
  withState('address', 'setAddress', ''),
  withHandlers({
    handleSubmit: ({name, address, setName, setAddress}) => onSubmit => event => {
      event.preventDefault();
      onSubmit({
        name,
        address,
      });
      setName('');
      setAddress('');
    },
    updateValue: props => name => ({target: {value}}) => {
      props[name](value)
    }
  })
)(Form)
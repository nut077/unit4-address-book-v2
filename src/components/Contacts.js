import React from 'react'
import PropTypes from 'prop-types'
import {compose, setPropTypes, defaultProps} from 'recompose'

const Contacts = ({contacts}) => (
  <ul>
    {
      contacts.map(
        (contact, index) => <li key={index}>{contact.name} - {contact.address}</li>
      )
    }
  </ul>
);

export default compose(
  defaultProps({
    contacts: []
  }),
  setPropTypes({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
      })
    )
  })
)(Contacts)
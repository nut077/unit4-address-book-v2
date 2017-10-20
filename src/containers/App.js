import React from 'react';
import {compose, withState, withHandlers} from 'recompose';
import {Contacts, Form} from '../components';

const App = ({contacts, createContacts}) => (
  <div className="container">
    <Form onSubmit={createContacts}/>
    <hr/>
    <Contacts contacts={contacts}/>
  </div>
);
export default compose(
  withState('contacts', 'setContacts', []),
  withHandlers({
    createContacts: ({setContacts, contacts}) => contact => {
      setContacts([...contacts, contact]);
    }
  })
)(App);

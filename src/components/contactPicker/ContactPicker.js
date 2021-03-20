import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;
  
  return (
    <select onChange={onChange}>
      <option selected="selected" key={-1} value={""}>Select a contact</option>
      {contacts.map( contact => <option value={contact.name}>{contact.name}</option>)}
    </select>
  
  );
};

import React from "react";


export const ContactPicker = (props) => {
  const contacts = Object.values(props);
  const handleSubmit = props.handleSubmit;

  return (
    <div>
    
    <select name="contacts" onSubmit={handleSubmit}>
      <option value="default" selected>Please select Contact</option>
      {contacts.map((contact, i) => {
        return <option>{contacts.name}</option>
        })}
    </select>

    </div>
  );
};

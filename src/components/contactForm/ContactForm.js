import { render } from "@testing-library/react";
import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
    <form onSubmit={handleSubmit}>

      <input placeholder='Name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required />

      <input placeholder='Telephone'
        type='tel'
        value={phone}
        pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
        onChange={(e) => setPhone(e.target.value)}
        required />

      <input placeholder='Email'
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required />
    <button type='submit'>Submit</button>
    </form>

    </div>
  );
};



  
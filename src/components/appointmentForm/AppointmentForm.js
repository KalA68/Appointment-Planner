import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (

    <form onSubmit={handleSubmit}>
      <input placeholder='Title'
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
     />

      <input placeholder='Date'
      type='date'
      value={date}
      min={getTodayString()}
      onChange={(e) => setDate(e.target.value)}
      required />

      <input placeholder='Time'
      type='time'
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required />

      <ContactPicker contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}/>

    <button type='submit'>Submit</button>
    </form>
    
  );
};

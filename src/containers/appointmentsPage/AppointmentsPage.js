import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  //Define state variables for appointment info
  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  const contacts = props.contacts;

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  


  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data  
    addAppointment().then (
      setTitle(), 
      setName(), 
      setDate(), 
      setTime()
    );
      
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} name={name} date={date} 
          time={time} addAppointment={addAppointment} onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList value={appointments} />
      </section>
    </div>
  );
};

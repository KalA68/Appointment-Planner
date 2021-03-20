import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  
  //Define state variables for contact info and duplicate check
  // props passed down
  const contacts = props.contacts;
  const addContact = props.addContact;

  //local state from ContactForm
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data if the contact name is not a duplicate
    if(!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };
  //Checking if name on form is a duplicate name in contacts
  useEffect(() => {
    /*for(const contact of contacts) {
    if (name === contact.name) {*/
      const found = contacts.some(el => el.name === name);
      if (found){
        alert("This name already exists");
        setDuplicate(false);
        }
        return;
    },[contacts,name]);
    


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email}
                      setName={setName} setPhone={setPhone} setEmail={setEmail}
                      handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList dataTiles={contacts} />
      </section>
    </div>
  );
};

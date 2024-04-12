

import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const LandingPage = () => {
  const [contacts, setContacts] = useState ([]);
  useEffect(() => {
    fetch("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp")
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    
    .then((data) =>{
       setContacts(data);
    })
    
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}, []);
const handleAddcontact = (newContact) => {
  setContacts([...contacts, newContact]);
};

    // const card=[
    //     {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
    //     {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
    //     {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
    //     {name:"Uwera Anick", email:"uwerar2@gmail.com",tel:"0788888888",location:"Nyamirambo"},
    // ]
  return (
    <>
      <div className="w-full">
            <div className="flex justify-between px-32 mt-10">
                <h2 className="text-[30px] font-bold">Welcome to your contacts</h2>
                <Link to="/contacts/add" className="bg-cyan-700 px-6 py-2 text-white rounded-lg">Add New</Link>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
                {contacts.map((contact, index) => (
                    <div key={index} className="bg-cyan-200 mx-32 my-12 p-4 rounded-lg">
                        <h1><span className="font-bold">Name:</span> <span className="text-[18px]">{contact.name}</span></h1>
                        <p><span className="font-bold">Email:</span> {contact.email}</p>
                        <h2><span className="font-bold">Telephone:</span> {contact.tel}</h2>
                        <h2><span className="font-bold">Location:</span> {contact.location}</h2>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
};
export default LandingPage;
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between px-32 mt-10">
          <h2 className="text-[30px] font-bold">Welcome to your contacts</h2>
          <Link to="/contacts/add" className="bg-cyan-700 px-6 py-2 text-white rounded-lg">Add New</Link>
        </div>
        <div className="">
        {contacts && (
            <div className="grid grid-cols-2 grid-rows-3 mx-32 my-12 ">
              {contacts.map(contact => (
             <Link to="/contacts/view/:contactId"> <div  className="bg-cyan-200  mx-4 my-4 rounded-lg">
                  <h1 ><span className="font-bold">Name:</span> <span className="text-[18px]">{contact.title}</span></h1>
                  <p><span className="font-bold">Email:</span> {contact.email}</p>
                  <h2><span className="font-bold">Telephone:</span> {contact.price}</h2>
                  <h2><span className="font-bold">Location:</span> {contact.location}</h2>
                  </div></Link>  
              ))}
               </div>
          )}
        
        </div>
      </div>
    </>
  );
};

export default LandingPage;

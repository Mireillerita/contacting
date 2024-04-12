import React, { useState } from 'react';

const AddContact = ({ onAddContact }) => {

   const [formData, setFormData] = useState ({
    name: '',
    email: '',
    phone: '',
    location: ''
   });
 
   const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
   };
   const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),

    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
      onAddContact(data);

      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
      });
})
    .catch((err) => {
      console.error(err);
    });
      
   };
   return(
 <>
        <div className='px-32 py-4'>
            <h1 className='font-bold text-[30px]'>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid'>
                    <label>Full name</label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'
                    />

                     <label>Email</label>
                    <input
                        type='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'
                    />
                     <label>Telephone</label>
                    <input
                        type='number'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'
                    />
                     <label>Location</label>
                        <input
                            type='text'
                            name='location'
                            value={formData.location}
                            onChange={handleChange}
                            className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'
                        />
                    <input type="submit" value='Create' className='bg-cyan-900 text-white py-2 font-bold rounded-lg mt-4'/>
                </div>
                
            </form>
            </div>
        </>
    
    );
   
         };


export default AddContact;

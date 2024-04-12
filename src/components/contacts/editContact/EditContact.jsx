import React, { useState } from 'react';

let EditContact = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: ''
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to a new page and pass form data as query parameters
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `/newPage?${queryString}`;
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return(
        <>
          <div className='px-32 py-4'>
            <h1 className='font-bold text-[30px]'>Uwera Anick</h1>
            <form > 
                <div className='grid'>
                    <label> Full name</label>
                    <input name='fullName' type='text' value={formData.fullName} onChange={handleInputChange} className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>
                    <label > Email</label>
                    <input name='email' type='email' value={formData.email} onChange={handleInputChange} className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>
                    <label > Phone</label>
                    <input name='phone' type='text' value={formData.phone} onChange={handleInputChange} className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>
                    <label>Location </label>
                    <input name='location' type='text' value={formData.location} onChange={handleInputChange} className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>
                    <input type="submit" value='Update' className='bg-cyan-900 text-white py-2 font-bold rounded-lg mt-4' onSubmit={handleSubmit}/>
                </div>
            </form>
          </div>
        </>
    )
};

export default EditContact;

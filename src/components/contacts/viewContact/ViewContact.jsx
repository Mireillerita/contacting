import React from 'react';

let ViewContact = () => {
    return(
        <>
        <div className='flex justify-between px-32 pt-10'>
         <div>
             <h1 className='font-bold text-[25px] pb-3'>Uwera Anick</h1>
             <p>Email: anickuwera@gmail.com</p>
             <p>Phone: 078888888</p>
             <p>Created on: Sat, 17 Feb 2024 07:000 GMT</p>
             <p>Updated on:  Tue, 17 Feb 2024 07:000 GMT</p>
         </div>
         <div >
            <a href='/contacts/edit/:contactId' className="bg-cyan-700 px-6 py-2 text-white rounded-lg">Update</a>
            <button className="bg-red-700 px-6 py-2 text-white rounded-lg ml-8">Delete</button>
         </div>
        </div>

     </>
    )
};
export default ViewContact;
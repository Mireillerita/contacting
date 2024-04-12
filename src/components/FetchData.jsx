import { data } from "autoprefixer";
import React, { useEffect, useState } from "react"
function FetchData() {
    const [records, setRecords] = useState([])

    useEffect (() => {
        fetch('https://contact-app-server-nxgi.onrender.com/api/v1/contactapp')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            setContacts(data);
        })
        .catch((error) => {
            console.error('Error ferching data', error);

        });
    },
        // .then(response=>response.json())
        // .then(data => setRecords( data))
        // .catch(err => console.log(err))
 []);
  return (
    <div>
        <ul>
            {records.map ((list, index) => (
                <li key={index}>{list.id} | {list.name}</li>
            ))}
        </ul>
    </div>
  )
}
export default FetchData

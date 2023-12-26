import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Flights/Flight.css'

function Flight() {
    const [counter, setCounter] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.data);
                setCounter(res.data)
            })
    }, [])
    return (
        <div>
            <h1 className='aps'></h1>
            {counter.map(data => {
                return data.name
            })}
        </div>
    )
}

export default Flight

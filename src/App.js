import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const url = 'http://localhost:8080/api/v1/ticket'
  const [ticket, setTicket]= useState()
  const fetchTicket = async () => {
    const response = await fetch (url)
    const responseJSON = await response.json()
    setTicket (responseJSON)
    console.log(response)
      }
      useEffect (() => {
        fetchTicket()
      })
  return (
    <div className="App">
      <ul>
        {!ticket ? 'Cargando....': 
          ticket.map((ticket , index)=>{
            return <li>{ticket.description}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

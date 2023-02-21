import { useEffect } from 'react';
import './App.css';

function App() {
  const url = 'http://localhost:8080/api/v1/ticket'
  const ticketList = async () => {
    const response = await fetch (url)
    console.log(response)
      }
      useEffect (() => {
        ticketList()
      })
  return (
    <div className="App">
    </div>
  );
}

export default App;

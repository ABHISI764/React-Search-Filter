import Table from './Table';
import { Users } from './users';
import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState("")
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes(query)));

  const keys = ["first_name", "last_name", "email"];


  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query)));
  }
  return (
    <div className="app">
      <input type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />

    </div>


  );
}

export default App;

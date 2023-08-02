import React, { useState } from 'react';
import './App.css';
import { Logo } from '../Logo';
import { Pagination } from '../Pagination';
import { Form } from '../Form';

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="App">
      <div className="App-header">
        <Logo />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Form currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}

export default App;

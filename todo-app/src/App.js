import React from 'react';
import TodoList from './components/TodoList.js'
import Navbar from './components/Navbar.js';
function App()
{
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
